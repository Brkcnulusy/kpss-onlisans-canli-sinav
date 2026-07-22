import React, { useState, useEffect } from 'react';
import { Award, CheckCircle2, XCircle, HelpCircle, RotateCcw, Filter, ChevronDown, ChevronUp, BookOpen, Sparkles, TrendingUp } from 'lucide-react';
import confetti from 'canvas-confetti';
import { calculateResults, SUBJECTS } from '../data/examsData';

export default function ResultsScreen({ examConfig, questions, userAnswers, onRestartExam }) {
  const results = calculateResults(questions, userAnswers);

  const [activeFilter, setActiveFilter] = useState('all'); // 'all', 'correct', 'wrong', 'empty'
  const [expandedSolutions, setExpandedSolutions] = useState({});

  // Confetti effect on load
  useEffect(() => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      console.log('Confetti effect ignored:', e);
    }
  }, []);

  const toggleSolution = (qId) => {
    setExpandedSolutions(prev => ({
      ...prev,
      [qId]: !prev[qId]
    }));
  };

  // Filter questions for solution list
  const filteredQuestions = questions.filter(q => {
    const ans = userAnswers[q.id];
    if (activeFilter === 'correct') return ans === q.correctAnswer;
    if (activeFilter === 'wrong') return ans && ans !== q.correctAnswer;
    if (activeFilter === 'empty') return !ans;
    return true;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8 animate-fade-in">
      
      {/* Header Banner & Score Card */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-700 via-indigo-800 to-violet-900 text-white p-8 sm:p-10 shadow-2xl border border-indigo-500/30 text-center space-y-6">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-amber-300 fill-amber-300" />
          <span>Sınav Tamamlandı! Raporunuz Hazır</span>
        </div>

        <div className="max-w-md mx-auto space-y-2">
          <p className="text-xs text-indigo-200 uppercase tracking-widest font-bold">Tahmini KPSS Ön Lisans P93 Puanı</p>
          <h2 className="text-5xl sm:text-6xl font-black tracking-tight text-white font-mono drop-shadow-md">
            {results.estimatedP93Score} <span className="text-xl text-indigo-300 font-normal font-sans">/ 100</span>
          </h2>
        </div>

        {/* Big Net Indicator */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto pt-2">
          
          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
            <p className="text-[11px] text-indigo-200 font-semibold uppercase">Toplam Net</p>
            <p className="text-2xl font-black text-white">{results.totalNet}</p>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30">
            <p className="text-[11px] text-emerald-200 font-semibold uppercase">Doğru</p>
            <p className="text-2xl font-black text-emerald-300">{results.totalCorrect}</p>
          </div>

          <div className="p-4 rounded-2xl bg-red-500/20 backdrop-blur-md border border-red-500/30">
            <p className="text-[11px] text-red-200 font-semibold uppercase">Yanlış</p>
            <p className="text-2xl font-black text-red-300">{results.totalWrong}</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-500/20 backdrop-blur-md border border-slate-500/30">
            <p className="text-[11px] text-slate-300 font-semibold uppercase">Boş</p>
            <p className="text-2xl font-black text-slate-200">{results.totalEmpty}</p>
          </div>

        </div>

      </div>

      {/* Subject Breakdown Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold tracking-tight flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-indigo-500" />
          <span>Ders Bazlı Başarı Analizi</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SUBJECTS.map((sub) => {
            const data = results.breakdown[sub.id] || { correct: 0, wrong: 0, empty: 0, net: 0 };
            return (
              <div key={sub.id} className="glass-panel p-5 space-y-3 border border-[var(--border-color)]">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-sm text-[var(--text-main)]">{sub.name}</h4>
                  <span className="text-xs font-extrabold px-2.5 py-1 rounded-lg bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
                    {data.net} Net
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-xs pt-1 border-t border-[var(--border-color)]">
                  <div>
                    <span className="text-[var(--text-muted)] block text-[10px]">Doğru</span>
                    <span className="font-bold text-emerald-500">{data.correct}</span>
                  </div>
                  <div>
                    <span className="text-[var(--text-muted)] block text-[10px]">Yanlış</span>
                    <span className="font-bold text-red-500">{data.wrong}</span>
                  </div>
                  <div>
                    <span className="text-[var(--text-muted)] block text-[10px]">Boş</span>
                    <span className="font-bold text-[var(--text-subtle)]">{data.empty}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detailed Solution Viewer */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold tracking-tight flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-indigo-500" />
              <span>Çözümlü Cevap Anahtarı</span>
            </h3>
            <p className="text-xs text-[var(--text-muted)]">Soruların detaylı çözümlerini ve açıklamalarını inceleyin.</p>
          </div>

          {/* Filter Buttons */}
          <div className="flex items-center gap-2 bg-[var(--bg-card)] p-1 rounded-xl border border-[var(--border-color)] text-xs font-semibold">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                activeFilter === 'all' ? 'bg-indigo-600 text-white shadow-sm' : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
              }`}
            >
              Tümü ({questions.length})
            </button>
            <button
              onClick={() => setActiveFilter('wrong')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                activeFilter === 'wrong' ? 'bg-red-500 text-white shadow-sm' : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
              }`}
            >
              Yanlış ({results.totalWrong})
            </button>
            <button
              onClick={() => setActiveFilter('empty')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                activeFilter === 'empty' ? 'bg-amber-500 text-white shadow-sm' : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
              }`}
            >
              Boş ({results.totalEmpty})
            </button>
            <button
              onClick={() => setActiveFilter('correct')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                activeFilter === 'correct' ? 'bg-emerald-600 text-white shadow-sm' : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
              }`}
            >
              Doğru ({results.totalCorrect})
            </button>
          </div>
        </div>

        {/* Questions List */}
        <div className="space-y-4">
          {filteredQuestions.map((q, idx) => {
            const userAns = userAnswers[q.id];
            const isCorrect = userAns === q.correctAnswer;
            const isEmpty = !userAns;
            const isExpanded = expandedSolutions[q.id] || false;

            return (
              <div
                key={q.id}
                className={`glass-panel p-6 border rounded-2xl transition-all ${
                  isCorrect
                    ? 'border-emerald-500/30 bg-emerald-500/5'
                    : isEmpty
                    ? 'border-amber-500/30 bg-amber-500/5'
                    : 'border-red-500/30 bg-red-500/5'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    
                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-extrabold px-2 py-0.5 rounded bg-[var(--badge-bg)]">Soru {idx + 1}</span>
                      <span className="text-[var(--text-muted)]">&bull; {q.subjectTitle}</span>
                      
                      {isCorrect && (
                        <span className="inline-flex items-center gap-1 font-bold text-emerald-500">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Doğru Cevaplandı
                        </span>
                      )}
                      {!isCorrect && !isEmpty && (
                        <span className="inline-flex items-center gap-1 font-bold text-red-500">
                          <XCircle className="w-3.5 h-3.5" /> Yanlış Cevaplandı
                        </span>
                      )}
                      {isEmpty && (
                        <span className="inline-flex items-center gap-1 font-bold text-amber-500">
                          <HelpCircle className="w-3.5 h-3.5" /> Boş Bırakıldı
                        </span>
                      )}
                    </div>

                    <p className="font-semibold text-sm leading-relaxed">{q.text}</p>

                    {/* User and Correct Answers info */}
                    <div className="pt-2 text-xs font-medium space-y-1">
                      <p>
                        <span className="text-[var(--text-muted)]">Sizin Cevabınız: </span>
                        <span className={`font-bold ${isCorrect ? 'text-emerald-500' : isEmpty ? 'text-amber-500' : 'text-red-500'}`}>
                          {userAns ? `${userAns}) ${q.options[userAns]}` : 'Boş Bırakıldı'}
                        </span>
                      </p>
                      <p>
                        <span className="text-[var(--text-muted)]">Doğru Cevap: </span>
                        <span className="font-bold text-emerald-500">{q.correctAnswer}) {q.options[q.correctAnswer]}</span>
                      </p>
                    </div>

                  </div>

                  {/* Toggle Explanation Button */}
                  <button
                    onClick={() => toggleSolution(q.id)}
                    className="p-2 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-xs font-semibold hover:bg-[var(--bg-card-hover)] flex items-center gap-1 shrink-0"
                  >
                    <span>{isExpanded ? 'Çözümü Gizle' : 'Çözümü Gör'}</span>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>

                {/* Expanded Solution Box */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-[var(--border-color)] text-xs leading-relaxed space-y-2 animate-fade-in bg-[var(--bg-card)] p-4 rounded-xl">
                    <p className="font-bold text-indigo-500">Soru Çözümü & Açıklama:</p>
                    <p className="text-[var(--text-main)]">{q.explanation}</p>
                  </div>
                )}

              </div>
            );
          })}
        </div>
      </div>

      {/* Restart CTA */}
      <div className="text-center pt-4">
        <button
          onClick={onRestartExam}
          className="px-8 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-base shadow-xl shadow-indigo-600/25 transition-all inline-flex items-center gap-2"
        >
          <RotateCcw className="w-5 h-5" />
          <span>Yeni Bir Sınava Başla</span>
        </button>
      </div>

    </div>
  );
}
