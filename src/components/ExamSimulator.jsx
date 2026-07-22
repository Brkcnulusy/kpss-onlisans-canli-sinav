import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import SmartBlankModal from './SmartBlankModal';
import MathText from './MathText';

/* ─── Icons ─── */
const PauseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
);
const PlayIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
);
const FlagIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>
  </svg>
);
const ChevronLeftIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
);
const ChevronRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
);

/* Format seconds → mm:ss */
const formatTime = (totalSeconds) => {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  if (h > 0) return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
};

export default function ExamSimulator({ config, onFinish, onQuit }) {
  const { questions, durationMinutes } = config;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});       // { questionId: 'A'|'B'|... }
  const [flagged, setFlagged] = useState(new Set()); // marked-for-review question ids
  const [secondsLeft, setSecondsLeft] = useState(durationMinutes * 60);
  const [isPaused, setIsPaused] = useState(false);
  const [showBlankModal, setShowBlankModal] = useState(false);
  const [showPalette, setShowPalette] = useState(false);
  const timerRef = useRef(null);

  /* Timer */
  useEffect(() => {
    if (isPaused || secondsLeft <= 0) return;
    timerRef.current = setInterval(() => {
      setSecondsLeft(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          onFinish(answers);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [isPaused, secondsLeft, answers, onFinish]);

  /* Current question */
  const question = questions[currentIndex];
  const options = Object.entries(question.options);

  /* Derived counts */
  const answeredCount = Object.keys(answers).length;
  const emptyCount = questions.length - answeredCount;
  const flaggedCount = flagged.size;

  /* Timer urgency */
  const timerUrgent = secondsLeft <= 300; // last 5 min

  /* Handlers */
  const selectAnswer = useCallback((optKey) => {
    setAnswers(prev => {
      // If clicking same answer, clear it (boş bırakma)
      if (prev[question.id] === optKey) {
        const next = { ...prev };
        delete next[question.id];
        return next;
      }
      return { ...prev, [question.id]: optKey };
    });
  }, [question]);

  const clearAnswer = useCallback(() => {
    setAnswers(prev => {
      const next = { ...prev };
      delete next[question.id];
      return next;
    });
  }, [question]);

  const toggleFlag = useCallback(() => {
    setFlagged(prev => {
      const next = new Set(prev);
      if (next.has(question.id)) next.delete(question.id);
      else next.add(question.id);
      return next;
    });
  }, [question]);

  const goTo = useCallback((idx) => {
    setCurrentIndex(idx);
    setShowPalette(false);
  }, []);

  const goPrev = () => setCurrentIndex(i => Math.max(0, i - 1));
  const goNext = () => setCurrentIndex(i => Math.min(questions.length - 1, i + 1));

  /* Finish flow */
  const handleFinishClick = () => {
    if (emptyCount > 0) {
      setShowBlankModal(true);
    } else {
      onFinish(answers);
    }
  };

  /* Blank modal: navigate to blanks */
  const blankQuestionIndices = useMemo(() => {
    return questions.reduce((acc, q, i) => {
      if (!answers[q.id]) acc.push(i);
      return acc;
    }, []);
  }, [questions, answers]);

  const handleGoToBlank = (idx) => {
    setCurrentIndex(idx);
    setShowBlankModal(false);
  };

  const handleForceFinish = () => {
    setShowBlankModal(false);
    onFinish(answers);
  };

  /* Subject label for current question */
  const subjectLabel = question.subjectTitle || question.subject;

  return (
    <div className="exam">
      {/* ─── Top Bar ─── */}
      <div className="exam__topbar">
        <div className="exam__topbar-left">
          <span className="exam__topbar-title">{config.exam.title}</span>
          <span className="badge badge--muted">{currentIndex + 1} / {questions.length}</span>
        </div>

        <div className="exam__topbar-center">
          <div className={`exam__timer ${timerUrgent ? 'exam__timer--urgent' : ''}`}>
            <button
              id="timer-pause-btn"
              className="exam__timer-btn"
              onClick={() => setIsPaused(p => !p)}
              aria-label={isPaused ? 'Devam Et' : 'Duraklat'}
            >
              {isPaused ? <PlayIcon /> : <PauseIcon />}
            </button>
            <span className="exam__timer-display">{formatTime(secondsLeft)}</span>
          </div>
        </div>

        <div className="exam__topbar-right">
          <button
            className="btn btn--ghost"
            onClick={() => setShowPalette(p => !p)}
          >
            Soru Haritası
          </button>
          <button
            id="finish-exam-btn"
            className="btn btn--primary"
            onClick={handleFinishClick}
          >
            Sınavı Bitir
          </button>
        </div>
      </div>

      {/* ─── Main Content ─── */}
      <div className="exam__body">
        {/* Question Card */}
        <div className="exam__question-area">
          <div className="exam__question-card surface anim-fade" key={question.id}>
            {/* Question Header */}
            <div className="exam__q-header">
              <div className="exam__q-meta">
                <span className="badge badge--primary">Soru {currentIndex + 1}</span>
                <span className="badge badge--muted">{subjectLabel}</span>
                {question.topic && <span className="badge badge--muted">{question.topic}</span>}
              </div>
              <div className="exam__q-actions">
                <button
                  className={`btn btn--icon exam__flag-btn ${flagged.has(question.id) ? 'exam__flag-btn--active' : ''}`}
                  onClick={toggleFlag}
                  title="İşaretle / Bayrak"
                  aria-label="Soruyu işaretle"
                >
                  <FlagIcon />
                </button>
              </div>
            </div>

            {/* Question Text */}
            <div className="exam__q-text">
              <p><MathText text={question.text} /></p>
            </div>

            {/* Options */}
            <div className="exam__options">
              {options.map(([key, text]) => {
                const isSelected = answers[question.id] === key;
                return (
                  <button
                    key={key}
                    id={`option-${question.id}-${key}`}
                    className={`exam__option ${isSelected ? 'exam__option--selected' : ''}`}
                    onClick={() => selectAnswer(key)}
                  >
                    <span className="exam__option-letter">{key}</span>
                    <span className="exam__option-text"><MathText text={text} /></span>
                  </button>
                );
              })}
            </div>

            {/* Clear + Flag actions */}
            <div className="exam__q-footer">
              <button className="btn btn--ghost" onClick={clearAnswer} disabled={!answers[question.id]}>
                Yanıtı Temizle
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div className="exam__nav">
            <button className="btn btn--ghost" onClick={goPrev} disabled={currentIndex === 0}>
              <ChevronLeftIcon /> Önceki
            </button>
            <button className="btn btn--ghost" onClick={goNext} disabled={currentIndex === questions.length - 1}>
              Sonraki <ChevronRightIcon />
            </button>
          </div>
        </div>

        {/* ─── Side Palette ─── */}
        {showPalette && (
          <aside className="exam__palette surface anim-slide">
            <div className="exam__palette-header">
              <h3 className="exam__palette-title">Soru Haritası</h3>
              <button className="btn btn--icon" onClick={() => setShowPalette(false)} aria-label="Kapat">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            </div>
            <div className="exam__palette-legend">
              <span className="exam__legend-item"><span className="exam__legend-dot exam__legend-dot--answered" /> Cevaplandı ({answeredCount})</span>
              <span className="exam__legend-item"><span className="exam__legend-dot exam__legend-dot--empty" /> Boş ({emptyCount})</span>
              <span className="exam__legend-item"><span className="exam__legend-dot exam__legend-dot--flagged" /> İşaretli ({flaggedCount})</span>
            </div>
            <div className="exam__palette-grid">
              {questions.map((q, i) => {
                const isAnswered = !!answers[q.id];
                const isFlagged = flagged.has(q.id);
                const isCurrent = i === currentIndex;
                let cls = 'exam__palette-cell';
                if (isCurrent) cls += ' exam__palette-cell--current';
                if (isAnswered) cls += ' exam__palette-cell--answered';
                if (isFlagged) cls += ' exam__palette-cell--flagged';
                return (
                  <button key={q.id} className={cls} onClick={() => goTo(i)}>
                    {i + 1}
                  </button>
                );
              })}
            </div>
          </aside>
        )}
      </div>

      {/* ─── Smart Blank Modal ─── */}
      {showBlankModal && (
        <SmartBlankModal
          blankIndices={blankQuestionIndices}
          onGoToBlank={handleGoToBlank}
          onForceFinish={handleForceFinish}
          onClose={() => setShowBlankModal(false)}
        />
      )}
    </div>
  );
}
