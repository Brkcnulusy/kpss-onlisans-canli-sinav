import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroScreen from './components/HeroScreen';
import ExamConfigModal from './components/ExamConfigModal';
import ExamSimulator from './components/ExamSimulator';
import ResultsScreen from './components/ResultsScreen';

export default function App() {
  // Theme Management (System default, Light, Dark)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('kpss_theme') || 'system';
  });

  // Screen state: 'hero', 'exam', 'results'
  const [screen, setScreen] = useState('hero');
  const [isConfigOpen, setIsConfigOpen] = useState(false);
  const [initialConfigYear, setInitialConfigYear] = useState(2024);

  // Active Exam state
  const [examConfig, setExamConfig] = useState(null);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [completedQuestions, setCompletedQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});

  // Theme effect
  useEffect(() => {
    localStorage.setItem('kpss_theme', theme);
    let targetTheme = theme;

    if (theme === 'system') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      targetTheme = prefersDark ? 'dark' : 'light';
    }

    document.documentElement.setAttribute('data-theme', targetTheme);
  }, [theme]);

  // Open config modal
  const handleOpenConfig = (year = 2024) => {
    setInitialConfigYear(year);
    setIsConfigOpen(true);
  };

  // Start exam from modal
  const handleStartExam = (config) => {
    setExamConfig(config);
    setTimerSeconds(config.durationMinutes * 60);
    setIsConfigOpen(false);
    setScreen('exam');
  };

  // Finish exam from simulator
  const handleFinishExam = (questions, answers) => {
    setCompletedQuestions(questions);
    setUserAnswers(answers);
    setScreen('results');
  };

  // Restart exam
  const handleRestart = () => {
    setScreen('hero');
    setExamConfig(null);
  };

  // Exit exam early
  const handleExitExam = () => {
    if (window.confirm('Sınavı bitirmeden çıkmak istediğinize emin misiniz? İlerlemeniz silinecektir.')) {
      handleRestart();
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-main)] text-[var(--text-main)] transition-colors duration-300">
      
      {/* Navigation Bar */}
      <Navbar
        theme={theme}
        setTheme={setTheme}
        activeExam={examConfig?.exam}
        timerSeconds={timerSeconds}
        isExamActive={screen === 'exam'}
        onExitExam={handleExitExam}
      />

      {/* Main Screen Router */}
      <main className="flex-1 pb-12">
        {screen === 'hero' && (
          <HeroScreen
            onStartExamClick={() => handleOpenConfig(2024)}
            onSelectYearDirect={(yr) => handleOpenConfig(yr)}
          />
        )}

        {screen === 'exam' && examConfig && (
          <ExamSimulator
            examConfig={examConfig}
            timerSeconds={timerSeconds}
            setTimerSeconds={setTimerSeconds}
            onFinishExam={handleFinishExam}
          />
        )}

        {screen === 'results' && (
          <ResultsScreen
            examConfig={examConfig}
            questions={completedQuestions}
            userAnswers={userAnswers}
            onRestartExam={handleRestart}
          />
        )}
      </main>

      {/* Exam Setup Config Modal */}
      <ExamConfigModal
        isOpen={isConfigOpen}
        onClose={() => setIsConfigOpen(false)}
        initialYear={initialConfigYear}
        onStartExam={handleStartExam}
      />

      {/* Footer */}
      <footer className="py-6 border-t border-[var(--border-color)] text-center text-xs text-[var(--text-muted)]">
        <p>KPSS Ön Lisans Canlı Sınav Platformu &bull; Tüm Hakları Saklıdır &copy; 2026</p>
      </footer>

    </div>
  );
}
