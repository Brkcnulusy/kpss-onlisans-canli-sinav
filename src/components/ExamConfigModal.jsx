import { useState, useMemo, useCallback } from 'react';
import { SUBJECTS, calculateExamDurationInMinutes } from '../data/examsData';

/* Icons */
const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);
const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);

export default function ExamConfigModal({ exams, onStart, onClose }) {
  const [selectedCategory, setSelectedCategory] = useState('onlisans'); // 'onlisans' | 'lisans'
  const [selectedExamId, setSelectedExamId] = useState(null);
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  /* Filter exams by category */
  const categoryExams = useMemo(() => {
    return exams.filter(e => (e.category || 'onlisans') === selectedCategory);
  }, [exams, selectedCategory]);

  const selectedExam = useMemo(() => exams.find(e => e.id === selectedExamId), [exams, selectedExamId]);

  /* Switch Category */
  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setSelectedExamId(null);
    setSelectedSubjects([]);
  };

  /* Subjects available in the selected exam */
  const availableSubjects = useMemo(() => {
    if (!selectedExam) return [];
    const subIds = new Set(selectedExam.questions.map(q => q.subject));
    return SUBJECTS.filter(s => subIds.has(s.id));
  }, [selectedExam]);

  const handleExamSelect = useCallback((id) => {
    setSelectedExamId(id);
    setSelectedSubjects([]); // reset subjects on exam change
  }, []);

  const handleToggleSubject = useCallback((subId) => {
    setSelectedSubjects(prev =>
      prev.includes(subId) ? prev.filter(s => s !== subId) : [...prev, subId]
    );
  }, []);

  const handleSelectAll = useCallback(() => {
    if (selectedSubjects.length === availableSubjects.length) {
      setSelectedSubjects([]);
    } else {
      setSelectedSubjects(availableSubjects.map(s => s.id));
    }
  }, [selectedSubjects, availableSubjects]);

  /* Build final question set */
  const finalQuestions = useMemo(() => {
    if (!selectedExam || selectedSubjects.length === 0) return [];
    return selectedExam.questions.filter(q => selectedSubjects.includes(q.subject));
  }, [selectedExam, selectedSubjects]);

  const duration = useMemo(() => calculateExamDurationInMinutes(finalQuestions.length), [finalQuestions]);

  const handleStart = () => {
    if (finalQuestions.length === 0) return;
    onStart({
      exam: selectedExam,
      subjects: selectedSubjects,
      questions: finalQuestions,
      durationMinutes: duration,
    });
  };

  return (
    <div className="modal-backdrop" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="config-modal surface anim-slide">
        {/* Header */}
        <div className="config-modal__header">
          <h2 className="config-modal__title">Sınav Yapılandırma</h2>
          <button className="btn btn--icon" onClick={onClose} aria-label="Kapat">
            <XIcon />
          </button>
        </div>

        {/* Step 1: Exam Category (Ön Lisans vs Lisans) */}
        <div className="config-modal__section">
          <h3 className="config-modal__label">1. Sınav Düzeyi Seçin</h3>
          <div className="config-modal__cat-grid">
            <button
              id="cat-onlisans-btn"
              className={`config-modal__cat-btn ${selectedCategory === 'onlisans' ? 'config-modal__cat-btn--active' : ''}`}
              onClick={() => handleCategoryChange('onlisans')}
            >
              <span className="config-modal__cat-title">KPSS Ön Lisans</span>
              <span className="config-modal__cat-desc">2 Yıllık Mezunlar İçin</span>
            </button>
            <button
              id="cat-lisans-btn"
              className={`config-modal__cat-btn ${selectedCategory === 'lisans' ? 'config-modal__cat-btn--active' : ''}`}
              onClick={() => handleCategoryChange('lisans')}
            >
              <span className="config-modal__cat-title">KPSS Lisans (GY-GK)</span>
              <span className="config-modal__cat-desc">4 Yıllık Mezunlar İçin (Genel Yetenek - Genel Kültür)</span>
            </button>
          </div>
        </div>

        {/* Step 2: Exam Year */}
        <div className="config-modal__section">
          <h3 className="config-modal__label">2. Sınav Yılı Seçin</h3>
          <div className="config-modal__year-grid">
            {categoryExams.map(exam => (
              <button
                key={exam.id}
                id={`exam-year-${exam.year}`}
                className={`config-modal__year-btn ${selectedExamId === exam.id ? 'config-modal__year-btn--active' : ''}`}
                onClick={() => handleExamSelect(exam.id)}
              >
                <span className="config-modal__year-num">{exam.year}</span>
                <span className="config-modal__year-label">{selectedCategory === 'lisans' ? 'KPSS Lisans' : 'KPSS Ön Lisans'}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Step 3: Subjects */}
        {selectedExam && (
          <div className="config-modal__section anim-fade">
            <div className="config-modal__section-header">
              <h3 className="config-modal__label">3. Ders Seçimi</h3>
              <button className="btn btn--ghost" onClick={handleSelectAll} style={{ fontSize: '.75rem', padding: '4px 10px' }}>
                {selectedSubjects.length === availableSubjects.length ? 'Tümünü Kaldır' : 'Tümünü Seç'}
              </button>
            </div>
            <div className="config-modal__subject-grid">
              {availableSubjects.map(sub => {
                const isSelected = selectedSubjects.includes(sub.id);
                const qCount = selectedExam.questions.filter(q => q.subject === sub.id).length;
                return (
                  <button
                    key={sub.id}
                    id={`subject-${sub.id}`}
                    className={`config-modal__subject-btn ${isSelected ? 'config-modal__subject-btn--active' : ''}`}
                    onClick={() => handleToggleSubject(sub.id)}
                  >
                    <span className="config-modal__subject-check">
                      {isSelected && <CheckIcon />}
                    </span>
                    <span className="config-modal__subject-name">{sub.name}</span>
                    <span className="badge badge--muted">{qCount} Soru</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Footer Summary */}
        <div className="config-modal__footer">
          <div className="config-modal__summary">
            {finalQuestions.length > 0 ? (
              <>
                <span className="badge badge--primary">{finalQuestions.length} Soru</span>
                <span className="config-modal__duration">
                  <ClockIcon />
                  {duration} Dakika
                </span>
              </>
            ) : (
              <span className="config-modal__hint">Sınav yılı ve en az bir ders seçin</span>
            )}
          </div>
          <button
            id="start-exam-btn"
            className="btn btn--primary btn--lg"
            disabled={finalQuestions.length === 0}
            onClick={handleStart}
          >
            Sınava Başla
          </button>
        </div>
      </div>
    </div>
  );
}
