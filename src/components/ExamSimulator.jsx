import React, { useState, useEffect } from 'react';
import { Play, Pause, Clock, Flag, ChevronLeft, ChevronRight, CheckCircle2, RotateCcw, XCircle, Grid, AlertCircle, HelpCircle } from 'lucide-react';
import SmartBlankModal from './SmartBlankModal';

export default function ExamSimulator({ examConfig, timerSeconds, setTimerSeconds, onFinishExam }) {
  const { exam, questions, durationMinutes } = examConfig;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [flaggedQuestions, setFlaggedQuestions] = useState({});
  const [isPaused, setIsPaused] = useState(false);
  
  // Smart Blank Review Mode State
  const [isBlankOnlyMode, setIsBlankOnlyMode] = useState(false);
  const [showSmartBlankModal, setShowSmartBlankModal] = useState(false);

  const currentQuestion = questions[currentIndex] || questions[0];
  const selectedAnswer = userAnswers[currentQuestion.id] || null;
  const isFlagged = flaggedQuestions[currentQuestion.id] || false;

  // Auto timer tick
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setTimerSeconds(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          handleTimeExpired();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isPaused, setTimerSeconds]);

  // Handle automatic finish when time expires
  const handleTimeExpired = () => {
    onFinishExam(questions, userAnswers);
  };

  // Option selection
  const handleOptionSelect = (optionKey) => {
    setUserAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: optionKey
    }));
  };

  // Clear answer (Boş bırak)
  const handleClearAnswer = () => {
    setUserAnswers(prev => {
      const updated = { ...prev };
      delete updated[currentQuestion.id];
      return updated;
    });
  };

  // Flag toggle (Sonra bak)
  const handleToggleFlag = () => {
    setFlaggedQuestions(prev => ({
      ...prev,
      [currentQuestion.id]: !prev[currentQuestion.id]
    }));
  };

  // Get list of blank question indices
  const getBlankQuestionIndices = () => {
    return questions
      .map((q, idx) => (!userAnswers[q.id] ? idx : null))
      .filter(idx => idx !== null);
  };

  const blankIndices = getBlankQuestionIndices();

  // Navigation handlers
  const handleNext = () => {
    if (isBlankOnlyMode) {
      const nextBlanks = blankIndices.filter(i => i > currentIndex);
      if (nextBlanks.length > 0) {
        setCurrentIndex(nextBlanks[0]);
      } else if (blankIndices.length > 0) {
        setCurrentIndex(blankIndices[0]);
      }
    } else {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    }
  };

  const handlePrev = () => {
    if (isBlankOnlyMode) {
      const prevBlanks = blankIndices.filter(i => i < currentIndex);
      if (prevBlanks.length > 0) {
        setCurrentIndex(prevBlanks[prevBlanks.length - 1]);
      } else if (blankIndices.length > 0) {
        setCurrentIndex(blankIndices[blankIndices.length - 1]);
      }
    } else {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    }
  };

  // Click Finish Exam Button
  const handleFinishAttempt = () => {
    if (blankIndices.length > 0) {
      setShowSmartBlankModal(true);
    } else {
      onFinishExam(questions, userAnswers);
    }
  };

  // User decides to review blank questions from modal
  const handleReviewBlanksFromModal = () => {
    setShowSmartBlankModal(false);
    setIsBlankOnlyMode(true);
    if (blankIndices.length > 0) {
      setCurrentIndex(blankIndices[0]);
    }
  };

  const formatTime = (totalSec) => {
    const hours = Math.floor(totalSec / 3600);
    const mins = Math.floor((totalSec % 3600) / 60);
    const secs = totalSec % 60;
    const pad = (n) => String(n).padStart(2, '0');
    return hours > 0 ? `${pad(hours)}:${pad(mins)}:${pad(secs)}` : `${pad(mins)}:${pad(secs)}`;
  };

  // Math text renderer helper
  const renderFormattedText = (text) => {
    if (!text) return null;
    return text.split('\n').map((paragraph, idx) => (
      <p key={idx} className="mb-2 leading-relaxed">
        {paragraph}
      </p>
    ));
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-4 space-y-6 animate-fade-in relative">
      
      {/* Smart Blank Modal */}
      <SmartBlankModal
        isOpen={showSmartBlankModal}
        blankCount={blankIndices.length}
        totalCount={questions.length}
        onReviewBlanks={handleReviewBlanksFromModal}
        onConfirmFinish={() => {
          setShowSmartBlankModal(false);
          onFinishExam(questions, userAnswers);
        }}
      />

      {/* Floating Timer Badge & Controls Header */}
      <div className="glass-panel p-4 flex flex-wrap items-center justify-between gap-4 sticky top-20 z-30 shadow-md">
        
        {/* Question Counter & Mode */}
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-xl bg-indigo-500/10 text-indigo-500 font-extrabold text-sm border border-indigo-500/20">
            Soru {currentIndex + 1} / {questions.length}
          </span>
          <span className="text-xs font-semibold text-[var(--text-muted)] px-2.5 py-1 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)]">
            {currentQuestion.subjectTitle}
          </span>
        </div>

        {/* Blank Mode Banner Badge if active */}
        {isBlankOnlyMode && (
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-500 text-xs font-bold animate-pulse">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Boş Soruları İnceleme Modu ({blankIndices.length} Boş)</span>
            <button
              onClick={() => setIsBlankOnlyMode(false)}
              className="ml-1 text-[10px] underline hover:opacity-80"
            >
              (Tüm Sorulara Dön)
            </button>
          </div>
        )}

        {/* Timer Control Badge */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="p-2 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-main)] hover:bg-[var(--bg-card-hover)] transition-colors flex items-center gap-1.5 text-xs font-semibold shadow-sm"
          >
            {isPaused ? <Play className="w-4 h-4 text-emerald-500 fill-emerald-500" /> : <Pause className="w-4 h-4 text-amber-500 fill-amber-500" />}
            <span>{isPaused ? 'Devam Et' : 'Duraklat'}</span>
          </button>

          <div className={`px-4 py-2 rounded-xl border font-mono font-bold text-sm flex items-center gap-2 shadow-sm ${
            timerSeconds < 300
              ? 'bg-red-500/15 border-red-500/40 text-red-500 animate-pulse'
              : 'bg-indigo-500/10 border-indigo-500/30 text-indigo-500'
          }`}>
            <Clock className="w-4 h-4" />
            <span>{formatTime(timerSeconds)}</span>
          </div>

          <button
            onClick={handleFinishAttempt}
            className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-600/20 transition-all flex items-center gap-1.5"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Sınavı Bitir</span>
          </button>
        </div>

      </div>

      {/* Main Question Card */}
      <div className="glass-panel p-6 sm:p-8 space-y-6 relative border border-[var(--border-color)] shadow-lg">
        
        {/* Question Header & Quick Action Buttons */}
        <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-[var(--text-subtle)]">Konu:</span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--text-muted)]">
              {currentQuestion.topic || 'Genel Soru'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Clear selection button */}
            {selectedAnswer && (
              <button
                onClick={handleClearAnswer}
                className="px-3 py-1.5 rounded-lg bg-slate-500/10 text-slate-500 hover:bg-slate-500/20 text-xs font-semibold transition-colors flex items-center gap-1"
              >
                <XCircle className="w-3.5 h-3.5" />
                <span>Seçimi Temizle (Boş Bırak)</span>
              </button>
            )}

            {/* Flag for later button */}
            <button
              onClick={handleToggleFlag}
              className={`px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all flex items-center gap-1.5 ${
                isFlagged
                  ? 'bg-amber-500/15 border-amber-500/50 text-amber-500 font-bold'
                  : 'bg-[var(--bg-card)] border-[var(--border-color)] text-[var(--text-muted)] hover:border-amber-500/30'
              }`}
            >
              <Flag className={`w-3.5 h-3.5 ${isFlagged ? 'fill-amber-500' : ''}`} />
              <span>{isFlagged ? 'İşaretlendi' : 'Sonra Bak'}</span>
            </button>
          </div>
        </div>

        {/* Question Body Text */}
        <div className="text-base sm:text-lg font-medium leading-relaxed text-[var(--text-main)] py-2">
          {renderFormattedText(currentQuestion.text)}
        </div>

        {/* Option Choices A, B, C, D, E */}
        <div className="space-y-3 pt-2">
          {Object.entries(currentQuestion.options).map(([key, value]) => {
            const isSelected = selectedAnswer === key;
            return (
              <button
                key={key}
                onClick={() => handleOptionSelect(key)}
                className={`w-full p-4 rounded-2xl border text-left text-sm sm:text-base font-medium flex items-center gap-4 transition-all duration-200 group ${
                  isSelected
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-600/20 scale-[1.005]'
                    : 'bg-[var(--bg-card)] text-[var(--text-main)] border-[var(--border-color)] hover:border-indigo-500/40 hover:bg-[var(--bg-card-hover)]'
                }`}
              >
                <span className={`w-8 h-8 rounded-xl font-bold flex items-center justify-center shrink-0 transition-colors ${
                  isSelected
                    ? 'bg-white text-indigo-900 shadow-sm'
                    : 'bg-[var(--badge-bg)] text-[var(--text-muted)] group-hover:bg-indigo-500/10 group-hover:text-indigo-500'
                }`}>
                  {key}
                </span>
                <span className="leading-snug">{value}</span>
              </button>
            );
          })}
        </div>

        {/* Bottom Navigation Buttons */}
        <div className="pt-6 border-t border-[var(--border-color)] flex items-center justify-between gap-4">
          <button
            onClick={handlePrev}
            disabled={!isBlankOnlyMode && currentIndex === 0}
            className="px-5 py-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-main)] hover:bg-[var(--bg-card-hover)] disabled:opacity-40 font-semibold text-xs transition-all flex items-center gap-1.5"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>{isBlankOnlyMode ? 'Önceki Boş Soru' : 'Önceki Soru'}</span>
          </button>

          <button
            onClick={handleNext}
            disabled={!isBlankOnlyMode && currentIndex === questions.length - 1}
            className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-600/20 transition-all flex items-center gap-1.5"
          >
            <span>{isBlankOnlyMode ? 'Sonraki Boş Soru' : 'Sonraki Soru'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Question Palette Matrix (Bottom Grid) */}
      <div className="glass-panel p-5 space-y-3 border border-[var(--border-color)]">
        <div className="flex items-center justify-between text-xs">
          <h4 className="font-bold flex items-center gap-1.5 text-[var(--text-muted)]">
            <Grid className="w-4 h-4 text-indigo-500" />
            <span>Soru Navigasyon Matrisi</span>
          </h4>
          
          <div className="flex items-center gap-4 text-[11px] font-medium text-[var(--text-muted)]">
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-indigo-600"></span> Cevaplandı</span>
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span> İşaretli</span>
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-[var(--border-color)]"></span> Boş</span>
          </div>
        </div>

        <div className="grid grid-cols-6 sm:grid-cols-10 md:grid-cols-15 gap-2 max-h-36 overflow-y-auto p-1">
          {questions.map((q, idx) => {
            const isAns = !!userAnswers[q.id];
            const isFlag = !!flaggedQuestions[q.id];
            const isCur = idx === currentIndex;

            let bgClass = 'bg-[var(--bg-card)] text-[var(--text-muted)] border-[var(--border-color)]';
            if (isAns) bgClass = 'bg-indigo-600 text-white border-indigo-600';
            else if (isFlag) bgClass = 'bg-amber-500 text-white border-amber-500';

            return (
              <button
                key={q.id}
                onClick={() => setCurrentIndex(idx)}
                className={`h-8 rounded-lg font-bold text-xs border flex items-center justify-center transition-all duration-150 ${bgClass} ${
                  isCur ? 'ring-2 ring-indigo-500 ring-offset-2 ring-offset-[var(--bg-main)] scale-110 font-black' : 'hover:scale-105'
                }`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
}
