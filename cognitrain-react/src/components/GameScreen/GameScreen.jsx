// ============================================================
// GameScreen — Main game orchestrator
// ============================================================
import { useCallback, useEffect } from 'react';
import { useGame } from '../../context/GameContext';
import { resetAdaptiveCounters } from '../../utils/adaptiveDifficulty';
import { HUD } from '../HUD/HUD';
import { Countdown } from '../Countdown/Countdown';
import { EncodingPhase } from '../EncodingPhase/EncodingPhase';
import { ProcessingTask } from '../ProcessingTask/ProcessingTask';
import { InterferenceDelay } from '../InterferenceDelay/InterferenceDelay';
import { RecallPhase } from '../RecallPhase/RecallPhase';
import { Feedback } from '../Feedback/Feedback';

export function GameScreen({ active }) {
  const {
    state,
    initTrial,
    goToEncoding,
    startProcessing,
    recordProcessing,
    startInterference,
    startRecall,
    submitRecall,
    showFeedback,
    abortTrial,
    nextTrial,
    updateDifficulty,
  } = useGame();

  const {
    phase,
    currentItemIndex,
    memoryItems,
    trialScores,
    userResponses,
    settings,
  } = state;

  const isPractice = settings.practiceMode;

  // Reset adaptive counters when game starts
  useEffect(() => {
    if (active) {
      resetAdaptiveCounters();
    }
  }, [active]);

  // ---- Countdown → Init Trial ----
  const handleCountdownComplete = useCallback(() => {
    initTrial();
  }, [initTrial]);

  // ---- Encoding complete → move to processing ----
  const handleEncodingComplete = useCallback(() => {
    startProcessing(currentItemIndex);
  }, [startProcessing, currentItemIndex]);

  // ---- Processing resolved → record & advance (or abort) ----
  const handleProcessingResolve = useCallback(
    (isCorrect) => {
      if (!isCorrect) {
        if (isPractice) {
          // Practice mode: record but continue
          recordProcessing(false);
          const nextIdx = currentItemIndex + 1;
          if (nextIdx < memoryItems.length) {
            goToEncoding(nextIdx);
          } else {
            startInterference();
          }
          return;
        }
        // Normal mode: instant elimination
        abortTrial('processing');
        return;
      }
      recordProcessing(isCorrect);
      const nextIdx = currentItemIndex + 1;
      if (nextIdx < memoryItems.length) {
        goToEncoding(nextIdx);
      } else {
        startInterference();
      }
    },
    [recordProcessing, currentItemIndex, memoryItems.length, goToEncoding, startInterference, abortTrial, isPractice]
  );

  // ---- Interference complete → recall ----
  const handleInterferenceComplete = useCallback(() => {
    startRecall();
  }, [startRecall]);

  // ---- Interference failed → abort (normal mode only) ----
  const handleInterferenceFail = useCallback(() => {
    if (isPractice) {
      // Practice: just proceed to recall
      startRecall();
      return;
    }
    abortTrial('interference');
  }, [abortTrial, isPractice, startRecall]);

  // ---- Recall submitted → feedback ----
  const handleRecallSubmit = useCallback(
    (responses) => {
      submitRecall(responses);
      showFeedback();
    },
    [submitRecall, showFeedback]
  );

  // ---- Feedback complete → next trial ----
  const handleFeedbackComplete = useCallback(() => {
    const lastScore = trialScores[trialScores.length - 1];
    // Aborted trials are always counted as imperfect
    const perfectTrial = lastScore?.aborted ? false : (lastScore?.perfect ?? false);
    updateDifficulty(perfectTrial);
    nextTrial();
  }, [trialScores, updateDifficulty, nextTrial]);

  if (!active) return null;

  // Determine what to show based on phase
  const showEncodingItem = phase === 'encoding';
  const showProcessing = phase === 'processing' && currentItemIndex < memoryItems.length;
  const showInterference = phase === 'interference';
  const showRecall = phase === 'recall';
  const showFeedbackView = phase === 'feedback';

  const processingItemIndex = phase === 'processing' ? currentItemIndex : -1;

  return (
    <section className={`screen${active ? ' screen--active' : ''}`}>
      <HUD />

      <article className="card" role="region" aria-label="게임 영역">
        {/* Phase indicator (live region for screen readers) */}
        <p className="phase-indicator" aria-live="polite" aria-atomic="true">
          {phase === 'countdown' && '준비하세요...'}
          {showEncodingItem && `기억하세요 (${currentItemIndex + 1}/${memoryItems.length})`}
          {phase === 'processing' && processingItemIndex >= 0 && `처리 과제 (${processingItemIndex + 1}/${memoryItems.length})`}
          {showInterference && '간섭 과제 (빠르게 판단하세요)'}
          {showRecall && '기억한 내용을 순서대로 입력하세요'}
          {showFeedbackView && (() => {
            const last = trialScores[trialScores.length - 1];
            if (!last) return '';
            if (last.aborted) {
              return last.failReason === 'processing'
                ? '처리 과제 오답 — 탈락'
                : '간섭 과제 오답 — 탈락';
            }
            const { correctItems } = last;
            const total = memoryItems.length;
            return correctItems === total
              ? '완벽합니다!'
              : correctItems >= total / 2
                ? '좋습니다!'
                : '계속 노력하세요!';
          })()}
        </p>

        {/* Countdown */}
        {phase === 'countdown' && (
          <Countdown onComplete={handleCountdownComplete} />
        )}

        {/* Encoding Phase */}
        {showEncodingItem && (
          <EncodingPhase
            itemIndex={currentItemIndex}
            onComplete={handleEncodingComplete}
            duration={settings.encodingDuration}
          />
        )}

        {/* Processing Task */}
        {showProcessing && processingItemIndex >= 0 && (
          <ProcessingTask
            taskIndex={processingItemIndex}
            onResolve={handleProcessingResolve}
            timeLimit={settings.processingTimeLimit}
          />
        )}

        {/* Interference Delay */}
        {showInterference && (
          <InterferenceDelay
            onComplete={handleInterferenceComplete}
            onFail={handleInterferenceFail}
            taskDuration={settings.interferenceSpeed}
            taskCount={settings.interferenceCount}
          />
        )}

        {/* Recall Phase */}
        {showRecall && (
          <RecallPhase onSubmit={handleRecallSubmit} />
        )}

        {/* Feedback */}
        {showFeedbackView && (
          <Feedback onComplete={handleFeedbackComplete} />
        )}

        {/* Empty state message */}
        <p className="game-message" aria-live="polite" />
      </article>
    </section>
  );
}
