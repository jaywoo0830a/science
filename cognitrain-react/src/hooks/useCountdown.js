// ============================================================
// useCountdown — countdown timer hook (3, 2, 1, GO)
// ============================================================
import { useState, useEffect, useRef, useCallback } from 'react';

export function useCountdown(from = 3, onComplete) {
  const [value, setValue] = useState(from);
  const [active, setActive] = useState(false);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  const start = useCallback(() => {
    setValue(from);
    setActive(true);
  }, [from]);

  useEffect(() => {
    if (!active) return;
    if (value <= 0) {
      setActive(false);
      onCompleteRef.current?.();
      return;
    }
    const id = setTimeout(() => setValue((v) => v - 1), 700);
    return () => clearTimeout(id);
  }, [active, value]);

  return { value, active, start };
}
