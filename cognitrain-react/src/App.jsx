// ============================================================
// App — Root component with screen routing
// ============================================================
import { useGame } from './context/GameContext';
import { WelcomeScreen } from './components/WelcomeScreen/WelcomeScreen';
import { ModeSelect } from './components/ModeSelect/ModeSelect';
import { GameScreen } from './components/GameScreen/GameScreen';
import { SessionEnd } from './components/SessionEnd/SessionEnd';
import './App.css';

export default function App() {
  const { state } = useGame();

  return (
    <main className="app" id="main-content" tabIndex={-1}>
      <WelcomeScreen active={state.screen === 'welcome'} />
      <ModeSelect active={state.screen === 'modeSelect'} />
      <GameScreen active={state.screen === 'game'} />
      <SessionEnd active={state.screen === 'end'} />
    </main>
  );
}
