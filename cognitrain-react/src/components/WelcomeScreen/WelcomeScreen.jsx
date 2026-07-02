// ============================================================
// WelcomeScreen — Intro / landing screen
// ============================================================
import { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { SettingsModal } from '../SettingsModal/SettingsModal';

export function WelcomeScreen({ active }) {
  const { goToScreen, state } = useGame();
  const { stats, settings } = state;
  const [showSettings, setShowSettings] = useState(false);

  const bestEntries = [];
  if (stats.bestOspan > 0) bestEntries.push(`OSPAN: ${stats.bestOspan}`);
  if (stats.bestVispan > 0) bestEntries.push(`VISPAN: ${stats.bestVispan}`);
  if (stats.bestMixspan > 0) bestEntries.push(`MIXSPAN: ${stats.bestMixspan}`);
  if (stats.totalSessions > 0) bestEntries.push(`세션: ${stats.totalSessions}회`);

  const presetLabel =
    settings.preset === 'easy' ? '느리게' : settings.preset === 'hard' ? '빠르게' : '보통';

  return (
    <section className={`screen${active ? ' screen--active' : ''}`}>
      <article className="card text--center">
        <h1 className="heading heading--xl heading--gradient">CogniTrain</h1>
        <p className="text--body text--dim">
          N-Back을 넘어서는 <strong className="strong">차세대 작업기억 훈련</strong><br />
          처리 간섭 + 다중 결합 + 적응형 난이도
        </p>

        <div className="tag-pills">
          <span className="tag-pill">암송 방지</span>
          <span className="tag-pill">과제 전환</span>
          <span className="tag-pill">적응형 난이도</span>
          <span className="tag-pill">다중 결합</span>
        </div>

        <button
          className="btn btn--primary btn--lg u-mt--12"
          onClick={() => goToScreen('modeSelect')}
          type="button"
        >
          훈련 시작하기 →
        </button>

        <div className="btn__row" style={{ marginTop: 4 }}>
          <button
            className="btn btn--secondary btn--sm"
            onClick={() => setShowSettings(true)}
            type="button"
            aria-label="환경 설정 열기"
          >
            설정: {presetLabel}
          </button>
        </div>

        {bestEntries.length > 0 && (
          <p className="text--xs text--muted u-mt--8">
            최고 기록 — {bestEntries.join(' | ')}
          </p>
        )}
      </article>

      <SettingsModal open={showSettings} onClose={() => setShowSettings(false)} />
    </section>
  );
}
