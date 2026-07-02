// ============================================================
// Scoring Logic
// ============================================================
import { checkResponse } from './generators';

export function calculateScore(memoryItems, userResponses, mode, setSize) {
  let correctItems = 0;
  let allCorrect = true;
  const resultDetails = [];

  for (let i = 0; i < memoryItems.length; i++) {
    const isCorrect = checkResponse(memoryItems[i], userResponses[i], mode);
    if (isCorrect) correctItems++;
    else allCorrect = false;
    resultDetails.push({ item: memoryItems[i], response: userResponses[i], isCorrect });
  }

  const processingCorrect = memoryItems.filter((it) => it.processingCorrect).length;
  const processingTotal = memoryItems.length;
  const processingAllCorrect = processingCorrect === processingTotal;

  const baseScore = correctItems * 10;
  const perfectBonus = allCorrect ? 20 : 0;
  const processingBonus = processingAllCorrect ? 10 : 0;
  const setSizeBonus = setSize * 5;
  const total = baseScore + perfectBonus + processingBonus + setSizeBonus;

  return {
    correctItems,
    total,
    allCorrect,
    processingCorrect,
    processingTotal,
    processingAllCorrect,
    resultDetails,
  };
}
