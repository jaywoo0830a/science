// ============================================================
// SessionEnd — End-of-session statistics screen
// ============================================================
import { useGame } from '../../context/GameContext';

export function SessionEnd({ active }) {
  const { state, startGame, goToScreen } = useGame();
  const { trialScores, totalTrials, mode, stats } = state;

  if (!active) return null;

  const totalScore = trialScores.reduce((s, r) => s + r.score, 0);
  const perfectTrials = trialScores.filter((r) => r.perfect).length;
  const totalCorrectItems = trialScores.reduce((s, r) => s + r.correctItems, 0);
  const totalItems = trialScores.reduce((s, r) => s + r.setSize, 0);
  const maxSetSize = Math.max(...trialScores.map((r) => r.setSize), 0);
  const avgSetSize =
    trialScores.length > 0
      ? (trialScores.reduce((s, r) => s + r.setSize, 0) / trialScores.length).toFixed(1)
      : 0;

  const bestKey = mode === 'ospan' ? 'bestOspan' : mode === 'vispan' ? 'bestVispan' : 'bestMixspan';
  const bestScore = stats[bestKey] || 0;
  const isNewBest = totalScore >= bestScore && stats.totalSessions > 1;

  return (
    <section className="screen screen--active">
      <article className="card text--center">
        <h2 className="heading heading--lg">훈련 완료!</h2>

        <div className="stats">
          <div className="stats__card">
            <span className="stats__value">{totalScore}</span>
            <span className="stats__label">총 점수</span>
          </div>
          <div className="stats__card">
            <span className="stats__value">{perfectTrials}/{totalTrials}</span>
            <span className="stats__label">완벽 시행</span>
          </div>
          <div className="stats__card">
            <span className="stats__value">{totalCorrectItems}/{totalItems}</span>
            <span className="stats__label">기억 정확도</span>
          </div>
          <div className="stats__card">
            <span className="stats__value">{maxSetSize}</span>
            <span className="stats__label">최대 세트 크기</span>
          </div>
          <div className="stats__card">
            <span className="stats__value">{avgSetSize}</span>
            <span className="stats__label">평균 세트 크기</span>
          </div>
          <div className="stats__card">
            <span className="stats__value stats__value--accent">{bestScore}</span>
            <span className="stats__label">역대 최고 점수</span>
          </div>
        </div>

        <p className="text--body text--dim">
          {isNewBest
            ? '새로운 최고 기록입니다! 작업기억이 향상되고 있습니다.'
            : `${stats.totalSessions}번째 세션 완료. 꾸준한 훈련이 효과를 만듭니다.`}
        </p>

        <div className="btn__row">
          <button
            className="btn btn--primary"
            onClick={() => startGame(mode)}
            type="button"
          >
            같은 모드 다시하기
          </button>
          <button
            className="btn btn--secondary"
            onClick={() => goToScreen('modeSelect')}
            type="button"
          >
            모드 선택
          </button>
        </div>
      </article>
    </section>
  );
}
