// ============================================================
// Feedback — Shows trial results (correct/incorrect per item)
// ============================================================
import { useEffect } from 'react';
import { useGame } from '../../context/GameContext';
import { formatItemDisplay, formatResponseDisplay } from '../../utils/generators';

export function Feedback({ onComplete, duration = 2800 }) {
  const { state } = useGame();
  const { trialScores, mode } = state;
  const lastScore = trialScores[trialScores.length - 1];

  useEffect(() => {
    const id = setTimeout(() => onComplete?.(), duration);
    return () => clearTimeout(id);
  }, [duration, onComplete]);

  if (!lastScore) return null;

  // Aborted trial — show elimination message
  if (lastScore.aborted) {
    const reason =
      lastScore.failReason === 'processing'
        ? '처리 과제(수학 검증) 오답'
        : '간섭 과제(홀짝 판단) 오답';
    return (
      <section className="feedback" aria-label="탈락" role="alert">
        <div className="feedback__eliminated">
          <span className="feedback__eliminated-icon">X</span>
          <span className="feedback__eliminated-reason">{reason}</span>
          <span className="feedback__eliminated-score">탈락 — 0점</span>
        </div>
      </section>
    );
  }

  const { correctItems, resultDetails, processingCorrect, processingTotal, score } =
    lastScore;
  const totalItems = resultDetails?.length || 0;

  const phaseMessage =
    correctItems === totalItems
      ? '완벽합니다!'
      : correctItems >= totalItems / 2
        ? '좋습니다!'
        : '계속 노력하세요!';

  return (
    <section className="feedback" aria-label="피드백">
      {/* Results per item */}
      <div className="feedback__items">
        {(resultDetails || []).map((d, i) => {
          const icon = d.isCorrect ? 'O' : 'X';
          const itemType = d.item?.type || 'letter';
          return (
            <div key={i} className="feedback__item">
              <span className="feedback__icon">{icon}</span>
              <span className="feedback__expected">
                정답: <strong className="strong u-text--success">{formatItemDisplay(d.item, mode)}</strong>
              </span>
              <span className="feedback__actual">
                입력:{' '}
                <strong className={`strong ${d.isCorrect ? 'u-text--success' : 'u-text--error'}`}>
                  {formatResponseDisplay(d.response, mode, itemType)}
                </strong>
              </span>
            </div>
          );
        })}
      </div>

      {/* Summary */}
      <p className="feedback__summary">
        기억 정확도: <strong className="strong">{correctItems}/{totalItems}</strong>
        {' | '}
        처리 정확도: <strong className="strong">{processingCorrect}/{processingTotal}</strong>
        {' | '}
        +{score}점
      </p>
    </section>
  );
}
