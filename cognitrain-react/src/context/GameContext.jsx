// ============================================================
// CogniTrain — Game State: React Context + useReducer
// ============================================================
import { createContext, useContext, useReducer, useCallback } from 'react';
import { generateMemoryItem, generateProcessingTask } from '../utils/generators';
import { calculateScore } from '../utils/scoring';
import { adaptDifficulty } from '../utils/adaptiveDifficulty';
import { loadStats, saveStats } from '../utils/storage';

const GameContext = createContext(null);

// ---- Presets ----
export const SPEED_PRESETS = {
  easy:   { encodingDuration: 2000, processingTimeLimit: 6000, interferenceSpeed: 1000, interferenceCount: 2 },
  normal: { encodingDuration: 1200, processingTimeLimit: 4500, interferenceSpeed: 750,  interferenceCount: 3 },
  hard:   { encodingDuration: 800,  processingTimeLimit: 3000, interferenceSpeed: 500,  interferenceCount: 4 },
};

// ---- Initial State ----
const initialState = {
  screen: 'welcome',
  mode: null,
  phase: null,
  difficulty: { setSize: 2, processingDifficulty: 0, processingTime: 4500 },
  currentTrial: 0,
  totalTrials: 12,
  memoryItems: [],
  processingTasks: [],
  userResponses: [],
  currentItemIndex: 0,
  trialScores: [],
  stats: loadStats(),
  countdownValue: 0,
  settings: {
    encodingDuration: 1200,
    processingTimeLimit: 4500,
    interferenceSpeed: 750,
    interferenceCount: 3,
    practiceMode: false,
    preset: 'normal',
  },
};

// ---- Action Types ----
const SET_SCREEN = 'SET_SCREEN';
const START_GAME = 'START_GAME';
const SET_COUNTDOWN = 'SET_COUNTDOWN';
const ENCODING_PHASE = 'ENCODING_PHASE';
const NEXT_ENCODING = 'NEXT_ENCODING';
const PROCESSING_PHASE = 'PROCESSING_PHASE';
const RECORD_PROCESSING = 'RECORD_PROCESSING';
const INTERFERENCE_PHASE = 'INTERFERENCE_PHASE';
const RECALL_PHASE = 'RECALL_PHASE';
const SUBMIT_RECALL = 'SUBMIT_RECALL';
const FEEDBACK_PHASE = 'FEEDBACK_PHASE';
const ABORT_TRIAL = 'ABORT_TRIAL';
const NEXT_TRIAL = 'NEXT_TRIAL';
const END_SESSION = 'END_SESSION';
const UPDATE_DIFFICULTY = 'UPDATE_DIFFICULTY';
const UPDATE_SETTINGS = 'UPDATE_SETTINGS';

// ---- Reducer ----
function gameReducer(state, action) {
  switch (action.type) {
    case SET_SCREEN:
      return { ...state, screen: action.payload };

    case START_GAME: {
      const { mode } = action.payload;
      return {
        ...state,
        screen: 'game',
        mode,
        phase: 'countdown',
        difficulty: {
          setSize: 2,
          processingDifficulty: 0,
          processingTime: state.settings.processingTimeLimit,
        },
        currentTrial: 0,
        trialScores: [],
        memoryItems: [],
        processingTasks: [],
        userResponses: [],
        currentItemIndex: 0,
        countdownValue: 3,
      };
    }

    case SET_COUNTDOWN:
      return { ...state, countdownValue: action.payload };

    case ENCODING_PHASE: {
      const { setSize } = state.difficulty;
      const memoryItems = [];
      const processingTasks = [];
      for (let i = 0; i < setSize; i++) {
        memoryItems.push(generateMemoryItem(state.mode, memoryItems));
        processingTasks.push(generateProcessingTask(state.difficulty.processingDifficulty));
      }
      return {
        ...state,
        phase: 'encoding',
        memoryItems,
        processingTasks,
        userResponses: new Array(setSize).fill(null),
        currentItemIndex: 0,
      };
    }

    case NEXT_ENCODING:
      return {
        ...state,
        phase: 'encoding',
        currentItemIndex: action.payload,
      };

    case PROCESSING_PHASE:
      return {
        ...state,
        phase: 'processing',
        currentItemIndex: action.payload ?? state.currentItemIndex,
      };

    case RECORD_PROCESSING: {
      const items = [...state.memoryItems];
      items[state.currentItemIndex] = {
        ...items[state.currentItemIndex],
        processingCorrect: action.payload,
      };
      return { ...state, memoryItems: items };
    }

    case INTERFERENCE_PHASE:
      return { ...state, phase: 'interference' };

    case RECALL_PHASE:
      return { ...state, phase: 'recall' };

    case SUBMIT_RECALL:
      return { ...state, userResponses: action.payload };

    case FEEDBACK_PHASE: {
      const score = calculateScore(
        state.memoryItems,
        state.userResponses,
        state.mode,
        state.difficulty.setSize
      );
      const trialScore = {
        perfect: score.allCorrect && score.processingAllCorrect,
        score: score.total,
        correctItems: score.correctItems,
        setSize: state.difficulty.setSize,
        resultDetails: score.resultDetails,
        processingCorrect: score.processingCorrect,
        processingTotal: score.processingTotal,
        aborted: false,
      };
      return {
        ...state,
        phase: 'feedback',
        trialScores: [...state.trialScores, trialScore],
      };
    }

    case ABORT_TRIAL: {
      const trialScore = {
        perfect: false,
        score: 0,
        correctItems: 0,
        setSize: state.difficulty.setSize,
        resultDetails: [],
        processingCorrect: 0,
        processingTotal: state.memoryItems.length,
        aborted: true,
        failReason: action.payload,
      };
      return {
        ...state,
        phase: 'feedback',
        trialScores: [...state.trialScores, trialScore],
      };
    }

    case NEXT_TRIAL: {
      const nextTrial = state.currentTrial + 1;
      if (nextTrial >= state.totalTrials) {
        // Compute final stats and save
        const totalScore = [...state.trialScores].reduce((s, r) => s + r.score, 0);
        const updatedStats = { ...state.stats };
        updatedStats.totalSessions++;
        updatedStats.totalScore += totalScore;
        const bestKey = state.mode === 'ospan' ? 'bestOspan'
          : state.mode === 'vispan' ? 'bestVispan' : 'bestMixspan';
        if (totalScore > (updatedStats[bestKey] || 0)) {
          updatedStats[bestKey] = totalScore;
        }
        saveStats(updatedStats);
        return {
          ...state,
          screen: 'end',
          phase: null,
          currentTrial: nextTrial,
          stats: updatedStats,
        };
      }
      return {
        ...state,
        phase: 'countdown',
        currentTrial: nextTrial,
        countdownValue: 3,
      };
    }

    case END_SESSION:
      return { ...state, screen: 'end', phase: null };

    case UPDATE_DIFFICULTY: {
      const { perfectTrial } = action.payload;
      return { ...state, difficulty: adaptDifficulty(state.difficulty, perfectTrial) };
    }

    case UPDATE_SETTINGS:
      return { ...state, settings: { ...state.settings, ...action.payload } };

    default:
      return state;
  }
}

// ---- Provider ----
export function GameProvider({ children }) {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  const goToScreen = useCallback((screen) => {
    dispatch({ type: SET_SCREEN, payload: screen });
  }, []);

  const startGame = useCallback((mode) => {
    dispatch({ type: START_GAME, payload: { mode } });
  }, []);

  const setCountdown = useCallback((value) => {
    dispatch({ type: SET_COUNTDOWN, payload: value });
  }, []);

  const initTrial = useCallback(() => {
    dispatch({ type: ENCODING_PHASE });
  }, []);

  const goToEncoding = useCallback((index) => {
    dispatch({ type: NEXT_ENCODING, payload: index });
  }, []);

  const startProcessing = useCallback((index) => {
    dispatch({ type: PROCESSING_PHASE, payload: index });
  }, []);

  const recordProcessing = useCallback((isCorrect) => {
    dispatch({ type: RECORD_PROCESSING, payload: isCorrect });
  }, []);

  const startInterference = useCallback(() => {
    dispatch({ type: INTERFERENCE_PHASE });
  }, []);

  const startRecall = useCallback(() => {
    dispatch({ type: RECALL_PHASE });
  }, []);

  const submitRecall = useCallback((responses) => {
    dispatch({ type: SUBMIT_RECALL, payload: responses });
  }, []);

  const showFeedback = useCallback(() => {
    dispatch({ type: FEEDBACK_PHASE });
  }, []);

  const abortTrial = useCallback((reason) => {
    dispatch({ type: ABORT_TRIAL, payload: reason });
  }, []);

  const nextTrial = useCallback(() => {
    dispatch({ type: NEXT_TRIAL });
  }, []);

  const updateDifficulty = useCallback((perfectTrial) => {
    dispatch({ type: UPDATE_DIFFICULTY, payload: { perfectTrial } });
  }, []);

  const updateSettings = useCallback((partial) => {
    dispatch({ type: UPDATE_SETTINGS, payload: partial });
  }, []);

  const value = {
    state,
    dispatch,
    goToScreen,
    startGame,
    setCountdown,
    initTrial,
    goToEncoding,
    startProcessing,
    recordProcessing,
    startInterference,
    startRecall,
    submitRecall,
    showFeedback,
    abortTrial,
    nextTrial,
    updateDifficulty,
    updateSettings,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame() {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error('useGame must be used within GameProvider');
  return ctx;
}
