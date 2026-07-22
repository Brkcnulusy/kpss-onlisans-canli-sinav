import React, { useState } from 'react';
import { X, Calendar, Layers, Clock, Check, Play, Sparkles, AlertCircle } from 'lucide-react';
import { EXAMS, SUBJECTS, calculateExamDurationInMinutes } from '../data/examsData';

export default function ExamConfigModal({ isOpen, onClose, initialYear, onStartExam }) {
  if (!isOpen) return null;

  const [selectedYear, setSelectedYear] = useState(initialYear || 2024);
  const [examMode, setExamMode] = useState('full'); // 'full' or 'custom'
  const [selectedSubjects, setSelectedSubjects] = useState(['turkce', 'matematik', 'tarih', 'cografya', 'vatandaslik', 'guncel']);

  const activeExam = EXAMS.find(e => e.year === selectedYear) || EXAMS[0];

  // Calculate filtered questions based on selection
  let availableQuestions = activeExam.questions;
  if (examMode === 'custom') {
    availableQuestions = activeExam.questions.filter(q => selectedSubjects.includes(q.subject));
  }

  const questionCount = availableQuestions.length;
  const calculatedDuration = calculateExamDurationInMinutes(questionCount);

  const toggleSubject = (subId) => {
    if (selectedSubjects.includes(subId)) {
      if (selectedSubjects.length === 1) return; // Must keep at least one subject
      setSelectedSubjects(selectedSubjects.filter(id => id !== subId));
    } else {
      setSelectedSubjects([...selectedSubjects, subId]);
    }
  };

  const handleStartClick = () => {
    if (questionCount === 0) return;
    onStartExam({
      exam: activeExam,
      questions: availableQuestions,
      durationMinutes: calculatedDuration,
      year: selectedYear,
      mode: examMode
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="glass-panel w-full max-w-2xl bg-[var(--bg-card)] border border-[var(--border-color)] rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-[var(--border-color)] flex items-center justify-between bg-indigo-500/5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg leading-snug">Sınavı Yapılandır</h3>
              <p className="text-xs text-[var(--text-muted)]">Sınav yılını ve ders tercihlerinizi özelleştirin</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[var(--text-muted)] hover:bg-[var(--bg-card-hover)] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          
          {/* Step 1: Exam Year Selection */}
          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-indigo-500" />
              <span>1. Sınav Yılı Seçin</span>
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2.5">
              {[2024, 2022, 2020, 2018, 2016].map((yr) => (
                <button
                  key={yr}
                  onClick={() => setSelectedYear(yr)}
                  className={`p-3 rounded-2xl text-center font-bold text-sm border transition-all duration-200 ${
                    selectedYear === yr
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-600/20 scale-[1.02]'
                      : 'bg-[var(--bg-card)] text-[var(--text-main)] border-[var(--border-color)] hover:border-indigo-500/40'
                  }`}
                >
                  {yr}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Mode Selection (Full Exam vs Subject Mode) */}
          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-indigo-500" />
              <span>2. Sınav Kapsamı</span>
            </label>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Full Exam Option */}
              <div
                onClick={() => setExamMode('full')}
                className={`p-4 rounded-2xl border cursor-pointer transition-all duration-200 flex items-start gap-3 ${
                  examMode === 'full'
                    ? 'bg-indigo-500/10 border-indigo-500/60 ring-1 ring-indigo-500/40'
                    : 'bg-[var(--bg-card)] border-[var(--border-color)] hover:border-indigo-500/30'
                }`}
              >
                <div className={`w-5 h-5 rounded-full border mt-0.5 flex items-center justify-center ${
                  examMode === 'full' ? 'border-indigo-500 bg-indigo-500 text-white' : 'border-slate-400'
                }`}>
                  {examMode === 'full' && <Check className="w-3.5 h-3.5" />}
                </div>
                <div>
                  <h4 className="font-bold text-sm">Tüm Sınav (ÖSYM Standardı)</h4>
                  <p className="text-xs text-[var(--text-muted)] mt-1">120 Soru Genel Yetenek + Genel Kültür testinin tamamı.</p>
                </div>
              </div>

              {/* Custom Subject Option */}
              <div
                onClick={() => setExamMode('custom')}
                className={`p-4 rounded-2xl border cursor-pointer transition-all duration-200 flex items-start gap-3 ${
                  examMode === 'custom'
                    ? 'bg-indigo-500/10 border-indigo-500/60 ring-1 ring-indigo-500/40'
                    : 'bg-[var(--bg-card)] border-[var(--border-color)] hover:border-indigo-500/30'
                }`}
              >
                <div className={`w-5 h-5 rounded-full border mt-0.5 flex items-center justify-center ${
                  examMode === 'custom' ? 'border-indigo-500 bg-indigo-500 text-white' : 'border-slate-400'
                }`}>
                  {examMode === 'custom' && <Check className="w-3.5 h-3.5" />}
                </div>
                <div>
                  <h4 className="font-bold text-sm">Çoklu Ders Seçimi (Özel Deneme)</h4>
                  <p className="text-xs text-[var(--text-muted)] mt-1">Yalnızca seçtiğiniz derslerden oluşan özel deneme testi.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Subject Multi-selector (If Custom Mode) */}
          {examMode === 'custom' && (
            <div className="space-y-3 pt-2 animate-fade-in">
              <label className="text-xs font-semibold text-[var(--text-muted)]">Dersleri Seçin:</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {SUBJECTS.map((sub) => {
                  const isChecked = selectedSubjects.includes(sub.id);
                  return (
                    <button
                      key={sub.id}
                      onClick={() => toggleSubject(sub.id)}
                      className={`p-3 rounded-xl border text-left text-xs font-semibold flex items-center justify-between transition-all duration-200 ${
                        isChecked
                          ? 'bg-indigo-500/15 border-indigo-500/50 text-indigo-500'
                          : 'bg-[var(--bg-card)] border-[var(--border-color)] text-[var(--text-muted)] hover:border-indigo-500/30'
                      }`}
                    >
                      <span>{sub.name}</span>
                      <div className={`w-4 h-4 rounded flex items-center justify-center ${
                        isChecked ? 'bg-indigo-500 text-white' : 'border border-slate-400'
                      }`}>
                        {isChecked && <Check className="w-3 h-3" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Summary Box */}
          <div className="p-4 rounded-2xl bg-indigo-500/5 border border-indigo-500/20 flex items-center justify-between text-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-[var(--text-muted)]">Hesaplanan Süre ve Soru</p>
                <p className="font-bold text-sm text-[var(--text-main)]">
                  {questionCount} Soru &bull; <span className="text-indigo-500">{calculatedDuration} Dakika</span> Sınav Süresi
                </p>
              </div>
            </div>
          </div>

          {questionCount === 0 && (
            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>Lütfen sınavı başlatabilmek için en az bir ders seçin.</span>
            </div>
          )}

        </div>

        {/* Footer CTA */}
        <div className="p-6 border-t border-[var(--border-color)] bg-[var(--bg-card)] flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-3 rounded-2xl text-xs font-semibold text-[var(--text-muted)] hover:bg-[var(--bg-card-hover)] transition-colors"
          >
            İptal
          </button>
          <button
            onClick={handleStartClick}
            disabled={questionCount === 0}
            className="px-7 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-bold text-sm shadow-lg shadow-indigo-600/25 transition-all flex items-center gap-2"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Sınavı Başlat ({calculatedDuration} Dk)</span>
          </button>
        </div>

      </div>
    </div>
  );
}
