// ============================================================
// HUD — Heads-up display (set size, accuracy, score)
// ============================================================
import { useGame } from '../../context/GameContext';

export function HUD() {
  const { state } = useGame();
  const { difficulty, currentTrial, totalTrials, trialScores } = state;

  const totalCorrect = trialScores.filter((s) => s.perfect).length;
  const accuracy = currentTrial > 0
    ? `${Math.round((totalCorrect / currentTrial) * 100)}%`
    : '-';
  const totalScore = trialScores.reduce((sum, s) => sum + s.score, 0);

  const pct = (currentTrial / totalTrials) * 100;

  return (
    <header>
      <div className="progress">
        <div className="progress__bar">
          <div
            className="progress__fill"
            style={{ width: `${pct}%` }}
            role="progressbar"
            aria-valuenow={currentTrial}
            aria-valuemin={0}
            aria-valuemax={totalTrials}
          />
        </div>
        <span className="progress__label">{currentTrial}/{totalTrials}</span>
      </div>

      <div className="hud u-mt--8">
        <div className="hud__item">
          세트 크기{' '}
          <span className="hud__value">{difficulty.setSize}</span>
        </div>
        <div className="hud__item">
          정확도{' '}
          <span className="hud__value">{accuracy}</span>
        </div>
        <div className="hud__item">
          점수{' '}
          <span className="hud__value">{totalScore}</span>
        </div>
      </div>
    </header>
  );
}
