import { useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import HeroScreen from './components/HeroScreen';
import ExamConfigModal from './components/ExamConfigModal';
import ExamSimulator from './components/ExamSimulator';
import ResultsScreen from './components/ResultsScreen';
import { EXAMS, calculateResults } from './data/examsData';

/*
 * App States:
 * 'home'   → Hero / landing screen
 * 'config' → Exam selection + subject picker modal
 * 'exam'   → Live exam simulator
 * 'results'→ Score / analysis screen
 */

export default function App() {
  const [screen, setScreen] = useState('home');
  const [examConfig, setExamConfig] = useState(null);   // { exam, subjects, questions, durationMinutes }
  const [userAnswers, setUserAnswers] = useState({});
  const [results, setResults] = useState(null);

  /* Theme toggle */
  const [theme, setTheme] = useState(
    () => document.documentElement.getAttribute('data-theme') || 'dark'
  );
  const toggleTheme = useCallback(() => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('kpss-theme', next);
  }, [theme]);

  /* Navigation handlers */
  const handleStartExam = () => setScreen('config');

  const handleConfigDone = (config) => {
    setExamConfig(config);
    setUserAnswers({});
    setResults(null);
    setScreen('exam');
  };

  const handleFinishExam = (answers) => {
    if (!examConfig) return;
    setUserAnswers(answers);
    const res = calculateResults(examConfig.questions, answers);
    setResults(res);
    setScreen('results');
  };

  const handleGoHome = () => {
    setScreen('home');
    setExamConfig(null);
    setUserAnswers({});
    setResults(null);
  };

  const handleRetry = () => {
    if (!examConfig) return;
    setUserAnswers({});
    setResults(null);
    setScreen('exam');
  };

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} onLogoClick={handleGoHome} />

      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {screen === 'home' && (
          <HeroScreen onStart={handleStartExam} />
        )}

        {screen === 'config' && (
          <ExamConfigModal
            exams={EXAMS}
            onStart={handleConfigDone}
            onClose={handleGoHome}
          />
        )}

        {screen === 'exam' && examConfig && (
          <ExamSimulator
            config={examConfig}
            onFinish={handleFinishExam}
            onQuit={handleGoHome}
          />
        )}

        {screen === 'results' && results && examConfig && (
          <ResultsScreen
            results={results}
            config={examConfig}
            answers={userAnswers}
            onRetry={handleRetry}
            onHome={handleGoHome}
          />
        )}
      </main>
    </>
  );
}
