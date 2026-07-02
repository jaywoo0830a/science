// ============================================================
// InterferenceDelay — Active parity judgment distractor
// If any task is wrong → instant trial elimination (onFail)
// ============================================================
import { useState, useEffect, useRef, useCallback } from 'react';

function generateTask() {
  const num = Math.floor(Math.random() * 90) + 10;
  return { number: num, isOdd: num % 2 !== 0 };
}

export function InterferenceDelay({ onComplete, onFail, taskDuration = 750, taskCount = 3 }) {
  const [phase, setPhase] = useState('countdown');
  const [taskIdx, setTaskIdx] = useState(0);
  const [tasks] = useState(() => Array.from({ length: taskCount }, generateTask));
  const [timePct, setTimePct] = useState(100);
  const [flash, setFlash] = useState(null);
  const doneRef = useRef(false);
  const timerRef = useRef(null);
  const startRef = useRef(0);

  const current = tasks[taskIdx];

  const fail = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    setPhase('failed');
    setTimeout(() => onFail?.(), 400);
  }, [onFail]);

  const next = useCallback(() => {
    const nxt = taskIdx + 1;
    if (nxt >= taskCount) {
      setPhase('done');
      setTimeout(() => onComplete?.(), 350);
      return;
    }
    setTaskIdx(nxt);
    setTimePct(100);
    setFlash(null);
    doneRef.current = false;
    startRef.current = Date.now();
    timerRef.current = setInterval(tick, 50);
  }, [taskIdx, taskCount, onComplete]);

  const tick = useCallback(() => {
    const elapsed = Date.now() - startRef.current;
    const remaining = Math.max(0, taskDuration - elapsed);
    setTimePct((remaining / taskDuration) * 100);
    if (remaining <= 0 && !doneRef.current) {
      doneRef.current = true;
      clearInterval(timerRef.current);
      // Timeout = fail (elimination)
      fail();
    }
  }, [fail]);

  const answer = useCallback(
    (userSaysOdd) => {
      if (doneRef.current || phase !== 'active') return;
      doneRef.current = true;
      clearInterval(timerRef.current);

      const correct = userSaysOdd === current.isOdd;
      if (!correct) {
        setFlash('wrong');
        // Wrong answer → elimination
        setTimeout(() => fail(), 300);
      } else {
        setFlash('correct');
        setTimeout(() => next(), 300);
      }
    },
    [phase, current, next, fail]
  );

  // Start after brief countdown
  useEffect(() => {
    const t = setTimeout(() => {
      setPhase('active');
      startRef.current = Date.now();
      timerRef.current = setInterval(tick, 50);
    }, 400);
    return () => {
      clearTimeout(t);
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [tick]);

  // Keyboard
  useEffect(() => {
    const h = (e) => {
      if (e.key === 'ArrowLeft' || e.key === 'o' || e.key === 'O') answer(true);
      if (e.key === 'ArrowRight' || e.key === 'e' || e.key === 'E') answer(false);
    };
    document.addEventListener('keydown', h);
    return () => document.removeEventListener('keydown', h);
  }, [answer]);

  if (phase === 'failed') {
    return (
      <section className="interference interference--failed" aria-label="간섭 과제 탈락">
        <span className="interference__result">X</span>
        <span className="interference__result-label">간섭 과제 실패</span>
      </section>
    );
  }

  if (phase === 'done') {
    return (
      <section className="interference interference--complete" aria-label="간섭 과제 완료">
        <span className="interference__done">OK</span>
      </section>
    );
  }

  const isUrgent = timePct < 30;
  const flashMod =
    flash === 'correct' ? ' interference--correct'
    : flash === 'wrong' ? ' interference--wrong'
    : '';

  return (
    <section className={`interference${flashMod}`} aria-label="간섭 과제" role="region">
      <span className="interference__counter">{taskIdx + 1}/{taskCount}</span>

      <div className="interference__number">
        {phase === 'countdown' ? '--' : current?.number}
      </div>

      <p className="interference__prompt">홀수 / 짝수</p>

      <div className="btn__row">
        <button
          className="btn btn--sm interference__btn interference__btn--odd"
          onClick={() => answer(true)}
          disabled={phase !== 'active' || doneRef.current}
          type="button"
          aria-label="홀수"
        >홀</button>
        <button
          className="btn btn--sm interference__btn interference__btn--even"
          onClick={() => answer(false)}
          disabled={phase !== 'active' || doneRef.current}
          type="button"
          aria-label="짝수"
        >짝</button>
      </div>

      <div className="task__timer">
        <div
          className={`task__timer-fill${isUrgent ? ' task__timer-fill--urgent' : ''}`}
          style={{ width: `${timePct}%` }}
        />
      </div>
    </section>
  );
}
