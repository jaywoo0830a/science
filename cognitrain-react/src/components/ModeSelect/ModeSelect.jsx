// ============================================================
// ModeSelect — Game mode selection screen
// ============================================================
import { useGame } from '../../context/GameContext';

const MODES = [
  {
    id: 'ospan',
    name: 'OSPAN',
    subtitle: 'Operation Span',
    desc: '글자를 기억하는 동시에 수학 검증 과제 수행\n언어적 작업기억 + 처리 간섭',
  },
  {
    id: 'vispan',
    name: 'VISPAN',
    subtitle: 'Visual Span',
    desc: '격자 위치를 기억하며 시각 판단 과제 수행\n공간적 작업기억 + 패턴 간섭',
  },
  {
    id: 'mixspan',
    name: 'MIXSPAN',
    subtitle: 'Mixed Span',
    desc: '글자+위치를 동시에 기억, 과제 유형이 매번 변경\n최대 난이도 · 자동화 전략 완전 차단',
  },
];

export function ModeSelect({ active }) {
  const { goToScreen, startGame, state, updateSettings } = useGame();
  const { settings } = state;

  const handleSelect = (modeId) => {
    startGame(modeId);
  };

  const togglePractice = () => {
    updateSettings({ practiceMode: !settings.practiceMode });
  };

  return (
    <section className={`screen${active ? ' screen--active' : ''}`}>
      <article className="card">
        <h2 className="heading heading--lg">훈련 모드 선택</h2>
        <p className="text--body text--dim text--center">
          각 모드는 작업기억의 서로 다른 측면을 훈련합니다
        </p>

        {/* Practice mode toggle */}
        <button
          className={`practice-toggle${settings.practiceMode ? ' practice-toggle--active' : ''}`}
          onClick={togglePractice}
          type="button"
          aria-pressed={settings.practiceMode}
          aria-label={`연습 모드 ${settings.practiceMode ? '켜짐' : '꺼짐'}`}
        >
          <span className="practice-toggle__label">
            {settings.practiceMode ? '연습 모드 (탈락 없음, 기록 저장 안 함)' : '일반 모드'}
          </span>
        </button>

        <nav className="mode-cards" aria-label="훈련 모드 목록">
          {MODES.map((m) => (
            <button
              key={m.id}
              className="mode-card"
              onClick={() => handleSelect(m.id)}
              type="button"
              aria-label={`${m.name} 모드 선택`}
            >
              <span className="mode-card__info">
                <span className="mode-card__name">
                  {m.name}{' '}
                  <span className="mode-card__subtitle">{m.subtitle}</span>
                </span>
                <span className="mode-card__desc" style={{ whiteSpace: 'pre-line' }}>
                  {m.desc}
                </span>
              </span>
            </button>
          ))}
        </nav>

        <button
          className="btn btn--secondary btn--sm"
          onClick={() => goToScreen('welcome')}
          type="button"
        >
          ← 돌아가기
        </button>
      </article>
    </section>
  );
}
