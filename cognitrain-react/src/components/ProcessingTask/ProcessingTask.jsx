// ============================================================
// ProcessingTask — Math verification distractor task
// ============================================================
import { useState, useEffect, useRef, useCallback } from 'react';
import { useGame } from '../../context/GameContext';

export function ProcessingTask({ taskIndex, onResolve, timeLimit = 4500 }) {
  const { state } = useGame();
  const { processingTasks } = state;
  const task = processingTasks[taskIndex];

  const [timeLeft, setTimeLeft] = useState(timeLimit);
  const respondedRef = useRef(false);
  const startTimeRef = useRef(Date.now());

  const answer = useCallback(
    (userSaysCorrect) => {
      if (respondedRef.current) return;
      respondedRef.current = true;
      const isCorrect = userSaysCorrect === task.isCorrect;
      onResolve?.(isCorrect);
    },
    [task, onResolve]
  );

  // Timer
  useEffect(() => {
    if (!task) return;
    startTimeRef.current = Date.now();
    setTimeLeft(timeLimit);
    respondedRef.current = false;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const remaining = Math.max(0, timeLimit - elapsed);
      setTimeLeft(remaining);
      if (remaining <= 0 && !respondedRef.current) {
        respondedRef.current = true;
        onResolve?.(false);
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [task, timeLimit, onResolve]);

  // Keyboard shortcuts
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') answer(true);
      if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') answer(false);
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [answer]);

  if (!task) return null;

  const pct = (timeLeft / timeLimit) * 100;
  const isUrgent = pct < 25;

  return (
    <section className="task" aria-label="처리 과제" role="region" aria-live="polite">
      <div className="task__equation">{task.display}</div>
      <p className="task__hint">
        정답이면 <strong className="strong">O</strong>, 오답이면{' '}
        <strong className="strong">X</strong> 를 누르세요
      </p>
      <div className="btn__row">
        <button
          className="btn btn--success btn--lg"
          onClick={() => answer(true)}
          type="button"
          disabled={respondedRef.current}
          aria-label="정답"
        >
          O 정답
        </button>
        <button
          className="btn btn--error btn--lg"
          onClick={() => answer(false)}
          type="button"
          disabled={respondedRef.current}
          aria-label="오답"
        >
          X 오답
        </button>
      </div>
      <div className="task__timer">
        <div
          className={`task__timer-fill${isUrgent ? ' task__timer-fill--urgent' : ''}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </section>
  );
}
