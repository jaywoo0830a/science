// ============================================================
// localStorage Stats Persistence
// ============================================================

const STORAGE_KEY = 'cognitrain_stats';

const DEFAULT_STATS = {
  bestOspan: 0,
  bestVispan: 0,
  bestMixspan: 0,
  totalSessions: 0,
  totalScore: 0,
};

export function loadStats() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT_STATS };
    return { ...DEFAULT_STATS, ...JSON.parse(raw) };
  } catch {
    return { ...DEFAULT_STATS };
  }
}

export function saveStats(stats) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
  } catch {
    // Silently fail if localStorage is unavailable
  }
}
