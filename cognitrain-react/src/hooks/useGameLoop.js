// ============================================================
// useGameLoop — orchestrates the full trial sequence
// ============================================================
import { useEffect, useRef, useCallback } from 'react';
import { useGame } from '../context/GameContext';

export function useGameLoop() {
  const {
    state,
    initTrial,
    startProcessing,
    recordProcessing,
    startInterference,
    startRecall,
    submitRecall,
    showFeedback,
    nextTrial,
    updateDifficulty,
  } = useGame();

  const timersRef = useRef([]);
  const phaseDataRef = useRef({ processingResolve: null, recallResolve: null });

  const clearAllTimers = useCallback(() => {
    timersRef.current.forEach((t) => clearTimeout(t));
    timersRef.current = [];
  }, []);

  const wait = useCallback((ms) => {
    return new Promise((resolve) => {
      const id = setTimeout(resolve, ms);
      timersRef.current.push(id);
    });
  }, []);

  // ---- Encoding → Processing loop ----
  const runEncodingLoop = useCallback(async (items, tasks) => {
    for (let i = 0; i < items.length; i++) {
      startProcessing(i);
      // Wait for processing task to resolve
      const isCorrect = await new Promise((resolve) => {
        phaseDataRef.current.processingResolve = resolve;
      });
      recordProcessing(isCorrect);
      await wait(200); // Brief pause between items
    }
    // All items done → interference → recall
    startInterference();
    await wait(2000); // Interference delay

    startRecall();
    const responses = await new Promise((resolve) => {
      phaseDataRef.current.recallResolve = resolve;
    });
    submitRecall(responses);
    await wait(300);

    showFeedback();
    await wait(2800); // Show feedback

    // Adapt difficulty
    const lastTrialScore = state.trialScores[state.trialScores.length - 1];
    // Note: feedback hasn't been applied to state yet at this point,
    // so we need to calculate manually
    updateDifficulty(false); // Will be overridden; see GameScreen

    nextTrial();
  }, [startProcessing, recordProcessing, wait, startInterference, startRecall, submitRecall, showFeedback, nextTrial, updateDifficulty, state.trialScores]);

  // Expose resolve functions for components
  const resolveProcessing = useCallback((isCorrect) => {
    if (phaseDataRef.current.processingResolve) {
      phaseDataRef.current.processingResolve(isCorrect);
      phaseDataRef.current.processingResolve = null;
    }
  }, []);

  const resolveRecall = useCallback((responses) => {
    if (phaseDataRef.current.recallResolve) {
      phaseDataRef.current.recallResolve(responses);
      phaseDataRef.current.recallResolve = null;
    }
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => clearAllTimers();
  }, [clearAllTimers]);

  return {
    runEncodingLoop,
    resolveProcessing,
    resolveRecall,
    wait,
    clearAllTimers,
  };
}
