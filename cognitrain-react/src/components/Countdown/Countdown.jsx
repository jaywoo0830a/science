// ============================================================
// Countdown — 3-2-1 countdown overlay
// ============================================================
import { useEffect } from 'react';
import { useGame } from '../../context/GameContext';
import { useCountdown } from '../../hooks/useCountdown';

export function Countdown({ onComplete }) {
  const { state } = useGame();
  const { value, active, start } = useCountdown(3, onComplete);

  useEffect(() => {
    if (state.phase === 'countdown') {
      start();
    }
  }, [state.phase, start]);

  if (!active && value <= 0) return null;

  return (
    <div className="countdown-overlay" role="alert" aria-live="assertive">
      <span className="countdown-overlay__number" key={value}>
        {value > 0 ? value : '시작!'}
      </span>
    </div>
  );
}
