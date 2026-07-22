import React from 'react';
import { Sun, Moon, Monitor, BookOpen, Clock, LogOut, Award } from 'lucide-react';

export default function Navbar({ theme, setTheme, activeExam, timerSeconds, isExamActive, onExitExam }) {
  
  // Dynamic theme toggle cycle: system -> light -> dark -> system
  const toggleTheme = () => {
    if (theme === 'system') setTheme('light');
    else if (theme === 'light') setTheme('dark');
    else setTheme('system');
  };

  const formatTime = (totalSec) => {
    if (totalSec <= 0) return '00:00:00';
    const hours = Math.floor(totalSec / 3600);
    const minutes = Math.floor((totalSec % 3600) / 60);
    const seconds = totalSec % 60;
    
    const pad = (num) => String(num).padStart(2, '0');
    return hours > 0 
      ? `${pad(hours)}:${pad(minutes)}:${pad(seconds)}` 
      : `${pad(minutes)}:${pad(seconds)}`;
  };

  return (
    <header className="glass-panel sticky top-0 z-40 px-4 py-3 mx-4 mt-3 mb-4 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo & Title */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => !isExamActive && window.location.reload()}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/20">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h1 className="font-bold text-lg leading-tight tracking-tight flex items-center gap-2">
              KPSS <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-500 font-semibold border border-indigo-500/20">Ön Lisans</span>
            </h1>
            <p className="text-xs text-[var(--text-muted)] font-medium">Canlı Sınav & Simülasyon</p>
          </div>
        </div>

        {/* Center Active Exam Badge (If exam is running) */}
        {isExamActive && activeExam && (
          <div className="hidden md:flex items-center gap-4 bg-[var(--bg-card)] px-4 py-1.5 rounded-full border border-[var(--border-color)] shadow-sm">
            <div className="flex items-center gap-2 text-xs font-semibold text-[var(--text-muted)]">
              <Award className="w-4 h-4 text-indigo-500" />
              <span>{activeExam.title}</span>
            </div>
            <div className="w-px h-4 bg-[var(--border-color)]" />
            <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-500">
              <Clock className="w-4 h-4 animate-pulse text-indigo-500" />
              <span>{formatTime(timerSeconds)}</span>
            </div>
          </div>
        )}

        {/* Right Actions: Theme Toggle & Exit Button */}
        <div className="flex items-center gap-3">
          {/* Theme Switcher Button */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-main)] hover:bg-[var(--bg-card-hover)] transition-all duration-200 flex items-center gap-2 text-xs font-medium shadow-sm"
            title={`Mevcut Tema: ${theme === 'system' ? 'Sistem' : theme === 'light' ? 'Aydınlık' : 'Karanlık'}`}
          >
            {theme === 'light' && <Sun className="w-4 h-4 text-amber-500" />}
            {theme === 'dark' && <Moon className="w-4 h-4 text-indigo-400" />}
            {theme === 'system' && <Monitor className="w-4 h-4 text-slate-400" />}
            <span className="hidden sm:inline capitalize">{theme === 'system' ? 'Sistem' : theme === 'light' ? 'Aydınlık' : 'Karanlık'}</span>
          </button>

          {/* Exit Exam Button */}
          {isExamActive && (
            <button
              onClick={onExitExam}
              className="px-3.5 py-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-500 font-semibold text-xs border border-red-500/20 flex items-center gap-1.5 transition-all duration-200"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Sınavı Terk Et</span>
            </button>
          )}
        </div>

      </div>
    </header>
  );
}
