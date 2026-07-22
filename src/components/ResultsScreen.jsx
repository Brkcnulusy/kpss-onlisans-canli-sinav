import { useState, useMemo } from 'react';
import { SUBJECTS } from '../data/examsData';

/* Icons */
const HomeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);
const RefreshIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/>
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
  </svg>
);
const CheckCircleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--c-success)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);
const XCircleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--c-danger)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
  </svg>
);
const MinusCircleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--c-text-3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="8" y1="12" x2="16" y2="12"/>
  </svg>
);

export default function ResultsScreen({ results, config, answers, onRetry, onHome }) {
  const [showAnswerKey, setShowAnswerKey] = useState(false);
  const [answerFilter, setAnswerFilter] = useState('all'); // 'all' | 'correct' | 'wrong' | 'empty'

  const { totalCorrect, totalWrong, totalEmpty, totalNet, estimatedP93Score, breakdown } = results;
  const totalQ = config.questions.length;

  /* Score bar width */
  const scorePercent = Math.round((totalNet / totalQ) * 100);

  /* Subject breakdown with data */
  const subjectData = useMemo(() => {
    return SUBJECTS
      .filter(s => breakdown[s.id] && (breakdown[s.id].correct + breakdown[s.id].wrong + breakdown[s.id].empty) > 0)
      .map(s => {
        const b = breakdown[s.id];
        const total = b.correct + b.wrong + b.empty;
        return { ...s, ...b, total };
      });
  }, [breakdown]);

  /* Filtered answer key */
  const filteredQuestions = useMemo(() => {
    return config.questions.filter(q => {
      const ans = answers[q.id];
      if (answerFilter === 'correct') return ans === q.correctAnswer;
      if (answerFilter === 'wrong') return ans && ans !== q.correctAnswer;
      if (answerFilter === 'empty') return !ans;
      return true;
    });
  }, [config.questions, answers, answerFilter]);

  return (
    <div className="results">
      <div className="results__container">
        {/* ─── Header ─── */}
        <div className="results__header anim-slide">
          <h1 className="results__title">Sınav Sonuçları</h1>
          <p className="results__exam-name">{config.exam.title}</p>
        </div>

        {/* ─── Score Cards ─── */}
        <div className="results__score-grid anim-slide" style={{ animationDelay: '.08s' }}>
          {/* Main Score Card */}
          <div className="results__main-card surface">
            <div className="results__score-circle">
              <svg viewBox="0 0 120 120" className="results__score-ring">
                <circle cx="60" cy="60" r="52" fill="none" stroke="var(--c-border)" strokeWidth="8" />
                <circle
                  cx="60" cy="60" r="52"
                  fill="none"
                  stroke="var(--c-primary)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 52}`}
                  strokeDashoffset={`${2 * Math.PI * 52 * (1 - scorePercent / 100)}`}
                  style={{ transition: 'stroke-dashoffset 1s ease-out', transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
                />
              </svg>
              <div className="results__score-inner">
                <span className="results__score-value">{totalNet}</span>
                <span className="results__score-label">Net</span>
              </div>
            </div>
            <div className="results__p93">
              <span className="results__p93-label">Tahmini P93 Puanı</span>
              <span className="results__p93-value">{estimatedP93Score}</span>
            </div>
          </div>

          {/* Stat Cards */}
          <div className="results__stat-card surface results__stat-card--success">
            <span className="results__stat-num">{totalCorrect}</span>
            <span className="results__stat-label">Doğru</span>
          </div>
          <div className="results__stat-card surface results__stat-card--danger">
            <span className="results__stat-num">{totalWrong}</span>
            <span className="results__stat-label">Yanlış</span>
          </div>
          <div className="results__stat-card surface results__stat-card--muted">
            <span className="results__stat-num">{totalEmpty}</span>
            <span className="results__stat-label">Boş</span>
          </div>
        </div>

        {/* ─── Subject Breakdown ─── */}
        <div className="results__breakdown surface anim-slide" style={{ animationDelay: '.16s' }}>
          <h2 className="results__section-title">Ders Bazlı Performans</h2>
          <div className="results__breakdown-table">
            <div className="results__breakdown-header">
              <span>Ders</span><span>Doğru</span><span>Yanlış</span><span>Boş</span><span>Net</span>
            </div>
            {subjectData.map(s => (
              <div key={s.id} className="results__breakdown-row">
                <span className="results__breakdown-name">
                  <span className="results__breakdown-dot" style={{ background: s.color }} />
                  {s.name}
                </span>
                <span className="results__breakdown-val results__breakdown-val--success">{s.correct}</span>
                <span className="results__breakdown-val results__breakdown-val--danger">{s.wrong}</span>
                <span className="results__breakdown-val">{s.empty}</span>
                <span className="results__breakdown-val results__breakdown-val--net">{s.net.toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Answer Key Toggle ─── */}
        <div className="results__answer-section anim-slide" style={{ animationDelay: '.24s' }}>
          <button
            id="toggle-answer-key"
            className="btn btn--primary"
            onClick={() => setShowAnswerKey(v => !v)}
          >
            {showAnswerKey ? 'Cevap Anahtarını Gizle' : 'Çözümlü Cevap Anahtarı'}
          </button>

          {showAnswerKey && (
            <div className="results__answer-key anim-fade">
              {/* Filters */}
              <div className="results__answer-filters">
                {[
                  { key: 'all', label: `Tümü (${totalQ})` },
                  { key: 'correct', label: `Doğru (${totalCorrect})` },
                  { key: 'wrong', label: `Yanlış (${totalWrong})` },
                  { key: 'empty', label: `Boş (${totalEmpty})` },
                ].map(f => (
                  <button
                    key={f.key}
                    className={`btn btn--ghost results__filter-btn ${answerFilter === f.key ? 'results__filter-btn--active' : ''}`}
                    onClick={() => setAnswerFilter(f.key)}
                  >
                    {f.label}
                  </button>
                ))}
              </div>

              {/* Questions */}
              <div className="results__answer-list">
                {filteredQuestions.map((q, i) => {
                  const userAns = answers[q.id];
                  const isCorrect = userAns === q.correctAnswer;
                  const isEmpty = !userAns;
                  return (
                    <div key={q.id} className="results__answer-item surface">
                      <div className="results__answer-status">
                        {isEmpty ? <MinusCircleIcon /> : isCorrect ? <CheckCircleIcon /> : <XCircleIcon />}
                      </div>
                      <div className="results__answer-content">
                        <div className="results__answer-q-header">
                          <span className="badge badge--muted">Soru {config.questions.indexOf(q) + 1}</span>
                          <span className="badge badge--muted">{q.subjectTitle}</span>
                        </div>
                        <p className="results__answer-q-text">{q.text}</p>
                        <div className="results__answer-info">
                          {!isEmpty && (
                            <span className={isCorrect ? 'results__ans--correct' : 'results__ans--wrong'}>
                              Cevabınız: <strong>{userAns}</strong>
                            </span>
                          )}
                          {!isCorrect && (
                            <span className="results__ans--correct">
                              Doğru: <strong>{q.correctAnswer}</strong>
                            </span>
                          )}
                        </div>
                        {q.explanation && (
                          <p className="results__explanation">{q.explanation}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* ─── Actions ─── */}
        <div className="results__actions anim-slide" style={{ animationDelay: '.3s' }}>
          <button className="btn btn--ghost" onClick={onHome}>
            <HomeIcon /> Ana Sayfa
          </button>
          <button className="btn btn--primary" onClick={onRetry}>
            <RefreshIcon /> Tekrar Çöz
          </button>
        </div>
      </div>
    </div>
  );
}
