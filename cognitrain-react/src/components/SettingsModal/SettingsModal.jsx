// ============================================================
// SettingsModal — Speed presets + custom timing controls
// ============================================================
import { useState, useEffect } from 'react';
import { useGame, SPEED_PRESETS } from '../../context/GameContext';

const LABELS = {
  encodingDuration: '기억 표시 시간',
  processingTimeLimit: '처리 과제 제한시간',
  interferenceSpeed: '간섭 과제 속도',
  interferenceCount: '간섭 과제 횟수',
};

const FORMATS = {
  encodingDuration: (v) => `${(v / 1000).toFixed(1)}초`,
  processingTimeLimit: (v) => `${(v / 1000).toFixed(1)}초`,
  interferenceSpeed: (v) => `${v}ms`,
  interferenceCount: (v) => `${v}회`,
};

export function SettingsModal({ open, onClose }) {
  const { state, updateSettings } = useGame();
  const { settings } = state;

  const [preset, setPreset] = useState(settings.preset);
  const [custom, setCustom] = useState({ ...settings });

  useEffect(() => {
    setPreset(settings.preset);
    setCustom({ ...settings });
  }, [settings, open]);

  if (!open) return null;

  const applyPreset = (key) => {
    const p = SPEED_PRESETS[key];
    const next = { ...custom, ...p, preset: key, practiceMode: custom.practiceMode };
    setPreset(key);
    setCustom(next);
    updateSettings(next);
  };

  const handleCustomChange = (key, value) => {
    const next = { ...custom, [key]: Number(value), preset: 'custom' };
    setPreset('custom');
    setCustom(next);
    updateSettings(next);
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="환경 설정">
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <header className="modal__header">
          <h2 className="heading heading--lg">환경 설정</h2>
          <button className="btn btn--secondary btn--sm" onClick={onClose} type="button" aria-label="닫기">
            닫기
          </button>
        </header>

        {/* Presets */}
        <section className="modal__section" aria-label="속도 프리셋">
          <h3 className="modal__section-title">속도 프리셋</h3>
          <div className="btn__row">
            {Object.entries(SPEED_PRESETS).map(([key]) => (
              <button
                key={key}
                className={`btn btn--sm ${preset === key ? 'btn--primary' : 'btn--secondary'}`}
                onClick={() => applyPreset(key)}
                type="button"
                aria-pressed={preset === key}
              >
                {key === 'easy' ? '느리게' : key === 'normal' ? '보통' : '빠르게'}
              </button>
            ))}
          </div>
        </section>

        {/* Custom sliders */}
        <section className="modal__section" aria-label="세부 설정">
          <h3 className="modal__section-title">세부 조절</h3>
          {(['encodingDuration', 'processingTimeLimit', 'interferenceSpeed', 'interferenceCount']).map((key) => {
            const min = key === 'interferenceCount' ? 1 : (key === 'interferenceSpeed' ? 300 : 500);
            const max = key === 'interferenceCount' ? 6 : (key === 'interferenceSpeed' ? 1500 : 8000);
            const step = key === 'interferenceCount' ? 1 : 100;
            return (
              <div key={key} className="modal__field">
                <label className="modal__field-label">
                  <span>{LABELS[key]}</span>
                  <span className="modal__field-value">{FORMATS[key](custom[key])}</span>
                </label>
                <input
                  type="range"
                  className="modal__slider"
                  min={min}
                  max={max}
                  step={step}
                  value={custom[key]}
                  onChange={(e) => handleCustomChange(key, e.target.value)}
                  aria-label={`${LABELS[key]}: ${FORMATS[key](custom[key])}`}
                />
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}
