// ============================================================
// Item & Task Generators
// ============================================================

export const CONSONANTS = 'BCDFGHJKLMNPQRSTVWXYZ'.split(''); // 20 consonants, no vowels
const GRID_SIZE = 4;

/**
 * Generate a memory item based on mode and previous items
 */
export function generateMemoryItem(mode, previousItems = []) {
  if (mode === 'ospan') {
    return {
      type: 'letter',
      letter: CONSONANTS[Math.floor(Math.random() * CONSONANTS.length)],
    };
  }

  if (mode === 'vispan') {
    return {
      type: 'position',
      row: Math.floor(Math.random() * GRID_SIZE),
      col: Math.floor(Math.random() * GRID_SIZE),
    };
  }

  if (mode === 'mixspan') {
    const lastType = previousItems.length > 0
      ? previousItems[previousItems.length - 1].type
      : null;
    if (lastType === 'letter') {
      return {
        type: 'position',
        row: Math.floor(Math.random() * GRID_SIZE),
        col: Math.floor(Math.random() * GRID_SIZE),
      };
    }
    return {
      type: 'letter',
      letter: CONSONANTS[Math.floor(Math.random() * CONSONANTS.length)],
    };
  }

  return { type: 'letter', letter: 'X' };
}

const randBool = () => Math.random() < 0.5;

/**
 * Generate a math verification task at the given difficulty level (0-2)
 */
export function generateProcessingTask(difficulty = 0) {
  let a, b, c, result, display, isCorrect;

  if (difficulty === 0) {
    // Easy: single-digit addition/subtraction
    a = Math.floor(Math.random() * 9) + 1;
    b = Math.floor(Math.random() * 9) + 1;
    const op = randBool() ? '+' : '-';
    if (op === '+') {
      result = a + b;
      display = `${a} + ${b} = ?`;
    } else {
      if (a < b) [a, b] = [b, a];
      result = a - b;
      display = `${a} - ${b} = ?`;
    }
    isCorrect = randBool();
    const offset = randBool() ? 1 : -1;
    let shown = isCorrect ? result : result + offset;
    if (shown < 0) shown = result + 2;
    display = display.replace('?', shown);
  } else if (difficulty === 1) {
    // Medium: multiplication
    a = Math.floor(Math.random() * 9) + 2;
    b = Math.floor(Math.random() * 9) + 2;
    result = a * b;
    display = `${a} × ${b} = ?`;
    isCorrect = randBool();
    const offset = (Math.floor(Math.random() * 3) + 1) * (randBool() ? 1 : -1);
    display = display.replace('?', isCorrect ? result : result + offset);
  } else {
    // Hard: two operations
    a = Math.floor(Math.random() * 8) + 2;
    b = Math.floor(Math.random() * 8) + 2;
    c = Math.floor(Math.random() * 8) + 1;
    const op1 = randBool() ? '×' : '+';
    const op2 = randBool() ? '+' : '-';
    const intermediate = op1 === '×' ? a * b : a + b;
    result = op2 === '+' ? intermediate + c : intermediate - c;
    display = `${a} ${op1} ${b} ${op2} ${c} = ?`;
    isCorrect = randBool();
    const offset = (Math.floor(Math.random() * 5) + 1) * (randBool() ? 1 : -1);
    let shown = isCorrect ? result : result + offset;
    if (shown < 0) return generateProcessingTask(difficulty);
    display = display.replace('?', shown);
  }

  return { display, isCorrect, result };
}

/**
 * Check if a user response matches a memory item
 */
export function checkResponse(item, response, mode) {
  if (!response) return false;
  if (mode === 'ospan') return response === item.letter;
  if (mode === 'vispan') return response?.row === item.row && response?.col === item.col;
  if (mode === 'mixspan') {
    if (item.type === 'letter') return response === item.letter;
    return response?.row === item.row && response?.col === item.col;
  }
  return false;
}

/**
 * Format a memory item for display
 */
export function formatItemDisplay(item, mode) {
  if (mode === 'ospan' || (mode === 'mixspan' && item.type === 'letter')) {
    return item.letter;
  }
  return `(${item.row + 1},${item.col + 1})`;
}

/**
 * Format a user response for display
 */
export function formatResponseDisplay(response, mode, itemType) {
  if (!response) return '?';
  if (mode === 'ospan' || (mode === 'mixspan' && itemType === 'letter')) {
    return response;
  }
  if (typeof response === 'object' && response.row !== undefined) {
    return `(${response.row + 1},${response.col + 1})`;
  }
  return '?';
}
