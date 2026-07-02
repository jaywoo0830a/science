// ============================================================
// RecallPhase — User reproduces memory items in order
// ============================================================
import { useState, useCallback, useEffect } from 'react';
import { useGame } from '../../context/GameContext';
import { CONSONANTS } from '../../utils/generators';

const GRID_SIZE = 4;

export function RecallPhase({ onSubmit }) {
  const { state } = useGame();
  const { memoryItems, mode } = state;
  const setSize = memoryItems.length;

  const [responses, setResponses] = useState(() => new Array(setSize).fill(null));
  const [currentSlot, setCurrentSlot] = useState(0);

  // Reset when memory items change
  useEffect(() => {
    setResponses(new Array(setSize).fill(null));
    setCurrentSlot(0);
  }, [setSize]);

  const allFilled = responses.every((r) => r !== null);
  const currentItem = memoryItems[currentSlot];
  const isPositionMode =
    mode === 'vispan' || (mode === 'mixspan' && currentItem?.type === 'position');

  const handleLetterClick = useCallback(
    (letter) => {
      if (responses.includes(letter)) return;
      setResponses((prev) => {
        const next = [...prev];
        next[currentSlot] = letter;
        return next;
      });
      if (currentSlot < setSize - 1) {
        setCurrentSlot((s) => s + 1);
      }
    },
    [currentSlot, setSize, responses]
  );

  const handlePositionClick = useCallback(
    (row, col) => {
      const alreadyUsed = responses.some((r) => r?.row === row && r?.col === col);
      if (alreadyUsed) return;
      setResponses((prev) => {
        const next = [...prev];
        next[currentSlot] = { row, col };
        return next;
      });
      if (currentSlot < setSize - 1) {
        setCurrentSlot((s) => s + 1);
      }
    },
    [currentSlot, setSize, responses]
  );

  const handleUndo = useCallback(() => {
    setResponses((prev) => {
      const next = [...prev];
      // Clear current slot, or go back if empty
      if (next[currentSlot] !== null) {
        next[currentSlot] = null;
      } else if (currentSlot > 0) {
        const prevSlot = currentSlot - 1;
        next[prevSlot] = null;
        setCurrentSlot(prevSlot);
      }
      return next;
    });
  }, [currentSlot]);

  const handleClear = useCallback(() => {
    setResponses(new Array(setSize).fill(null));
    setCurrentSlot(0);
  }, [setSize]);

  const handleSubmit = useCallback(() => {
    if (allFilled) {
      onSubmit?.(responses);
    }
  }, [allFilled, responses, onSubmit]);

  // Keyboard: Enter to submit, Backspace to undo
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleSubmit();
      }
      if (e.key === 'Backspace' || e.key === 'Delete') {
        e.preventDefault();
        handleUndo();
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [handleSubmit, handleUndo]);

  const formatSlotDisplay = (resp) => {
    if (!resp) return '';
    if (typeof resp === 'object' && resp.row !== undefined) {
      return `(${resp.row + 1},${resp.col + 1})`;
    }
    return resp;
  };

  return (
    <section className="recall" aria-label="회상 단계">
      {/* Slots */}
      <div className="slots" role="list" aria-label="기억 슬롯">
        {responses.map((resp, i) => (
          <div
            key={i}
            className={`slot${resp !== null ? ' slot--filled' : ''}${i === currentSlot ? ' slot--active' : ''}`}
            onClick={() => setCurrentSlot(i)}
            role="listitem"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter') setCurrentSlot(i); }}
            aria-label={`슬롯 ${i + 1}${resp !== null ? `, ${formatSlotDisplay(resp)} 선택됨` : ', 비어있음'}`}
          >
            {formatSlotDisplay(resp)}
          </div>
        ))}
      </div>

      {/* Input: Letter Grid or Position Grid */}
      {isPositionMode ? (
        <div
          className="position-grid u-mt--12"
          style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)` }}
          role="grid"
          aria-label="위치 선택"
        >
          {Array.from({ length: GRID_SIZE }, (_, r) =>
            Array.from({ length: GRID_SIZE }, (_, c) => {
              const used = responses.some((resp) => resp?.row === r && resp?.col === c);
              return (
                <div
                  key={`${r}-${c}`}
                  className={`position-grid__cell${used ? ' position-grid__cell--used' : ''}`}
                  onClick={() => !used && handlePositionClick(r, c)}
                  role="gridcell"
                  tabIndex={used ? -1 : 0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !used) handlePositionClick(r, c);
                  }}
                  aria-label={`위치 (${r + 1}, ${c + 1})${used ? ' — 이미 선택됨' : ''}`}
                >
                  {r + 1},{c + 1}
                </div>
              );
            })
          )}
        </div>
      ) : (
        <div className="letter-grid u-mt--12" role="group" aria-label="글자 선택">
          {CONSONANTS.map((letter) => {
            const used = responses.includes(letter);
            return (
              <button
                key={letter}
                className={`letter-grid__btn${used ? ' letter-grid__btn--used' : ''}`}
                onClick={() => !used && handleLetterClick(letter)}
                disabled={used}
                type="button"
                aria-label={`글자 ${letter}${used ? ' — 이미 선택됨' : ''}`}
              >
                {letter}
              </button>
            );
          })}
        </div>
      )}

      {/* Action buttons */}
      <div className="btn__row u-mt--12">
        <button className="btn btn--secondary btn--sm" onClick={handleUndo} type="button">
          되돌리기
        </button>
        <button className="btn btn--secondary btn--sm" onClick={handleClear} type="button">
          모두 지우기
        </button>
      </div>

      <button
        className="btn btn--primary u-mt--8"
        onClick={handleSubmit}
        disabled={!allFilled}
        type="button"
      >
        제출하기
      </button>
    </section>
  );
}
