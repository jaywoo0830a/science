// ============================================================
// EncodingPhase — Shows a single memory item for 1.2 seconds
// ============================================================
import { useEffect } from 'react';
import { useGame } from '../../context/GameContext';

export function EncodingPhase({ itemIndex, onComplete, duration = 1200 }) {
  const { state } = useGame();
  const { memoryItems, mode } = state;
  const item = memoryItems[itemIndex];

  useEffect(() => {
    if (!item) return;
    const id = setTimeout(() => onComplete?.(), duration);
    return () => clearTimeout(id);
  }, [item, onComplete, duration]);

  if (!item) return null;

  const isPositionMode = mode === 'vispan' || (mode === 'mixspan' && item.type === 'position');

  return (
    <section className="stimulus" aria-label="기억할 항목">
      <div className={`stimulus__content${isPositionMode ? ' stimulus__content--position' : ''}`}>
        {isPositionMode ? (
          <>
            <span className="stimulus__label">위치 기억</span>
            <span className="stimulus__value">({item.row + 1}, {item.col + 1})</span>
          </>
        ) : (
          <span className="stimulus__value stimulus__value--letter">{item.letter}</span>
        )}
      </div>
    </section>
  );
}
