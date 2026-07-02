// ============================================================
// Adaptive Difficulty — adjusts setSize, processingTime, processingDifficulty
// ============================================================

// Internal counters (module-level to persist across renders)
let consecutiveCorrect = 0;
let consecutiveWrong = 0;

export function resetAdaptiveCounters() {
  consecutiveCorrect = 0;
  consecutiveWrong = 0;
}

export function adaptDifficulty(difficulty, perfectTrial) {
  const next = { ...difficulty };

  if (perfectTrial) {
    consecutiveCorrect++;
    consecutiveWrong = 0;
    // Increase set size after 2 consecutive perfect trials
    if (consecutiveCorrect >= 2 && next.setSize < 9) {
      next.setSize++;
      consecutiveCorrect = 0;
    }
    // Decrease processing time (faster = harder)
    if (next.processingTime > 2500) {
      next.processingTime = Math.max(2500, next.processingTime - 300);
    }
    // Increase processing difficulty
    if (next.processingDifficulty < 2) {
      next.processingDifficulty++;
    }
  } else {
    consecutiveWrong++;
    consecutiveCorrect = 0;
    // Decrease set size after 2 consecutive failures
    if (consecutiveWrong >= 2 && next.setSize > 2) {
      next.setSize--;
      consecutiveWrong = 0;
    }
    // Increase processing time (slower = easier)
    if (next.processingTime < 5000) {
      next.processingTime = Math.min(5000, next.processingTime + 200);
    }
    // Decrease processing difficulty
    if (next.processingDifficulty > 0) {
      next.processingDifficulty--;
    }
  }

  return next;
}
