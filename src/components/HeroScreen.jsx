import React from 'react';
import { Play, Calendar, Clock, CheckCircle2, Award, Zap, HelpCircle, Layers, ArrowRight } from 'lucide-react';
import { EXAMS } from '../data/examsData';

export default function HeroScreen({ onStartExamClick, onSelectYearDirect }) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-12 animate-fade-in">
      
      {/* Main Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-800 text-white p-8 sm:p-12 shadow-xl shadow-indigo-600/15 border border-indigo-500/30">
        {/* Decorative background shapes */}
        <div className="absolute -right-12 -top-12 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none" />
        <div className="absolute -left-12 -bottom-12 w-64 h-64 rounded-full bg-indigo-400/20 blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold backdrop-blur-md">
            <Zap className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
            <span>2024 - 2016 Geçmiş Sınav Arşivi Yayında</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            KPSS Ön Lisans Canlı Sınav Simülatörü
          </h2>

          <p className="text-indigo-100 text-base sm:text-lg leading-relaxed font-normal">
            ÖSYM formatında 130 dakikalık canlı süreli deneme çözün, çoklu ders filtreleri uygulayın, boş sorularınızı akıllı modda gözden geçirin ve net & puanınız anında hesaplansın.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={onStartExamClick}
              className="px-8 py-4 rounded-2xl bg-white text-indigo-900 font-bold text-base hover:bg-indigo-50 transition-all duration-300 shadow-lg shadow-black/10 hover:shadow-indigo-500/25 hover:scale-[1.02] flex items-center gap-3 group"
            >
              <Play className="w-5 h-5 fill-indigo-900 group-hover:translate-x-0.5 transition-transform" />
              <span>Sınava Başla</span>
            </button>
          </div>
        </div>
      </div>

      {/* Feature Highlights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        
        <div className="glass-panel p-5 space-y-2 hover:border-indigo-500/40 transition-all duration-200">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center font-bold">
            <Calendar className="w-5 h-5" />
          </div>
          <h3 className="font-semibold text-base">5 Yıllık Çıkmış Sınav</h3>
          <p className="text-xs text-[var(--text-muted)] leading-relaxed">
            2024, 2022, 2020, 2018 ve 2016 KPSS Ön Lisans Genel Yetenek & Genel Kültür soruları.
          </p>
        </div>

        <div className="glass-panel p-5 space-y-2 hover:border-indigo-500/40 transition-all duration-200">
          <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-500 flex items-center justify-center font-bold">
            <Clock className="w-5 h-5" />
          </div>
          <h3 className="font-semibold text-base">Orantılı Dinamik Süre</h3>
          <p className="text-xs text-[var(--text-muted)] leading-relaxed">
            Seçtiğiniz ders ve soru sayısına göre süre otomatik hesaplanır (Örn: 30 soru = 33 dk).
          </p>
        </div>

        <div className="glass-panel p-5 space-y-2 hover:border-indigo-500/40 transition-all duration-200">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold">
            <HelpCircle className="w-5 h-5" />
          </div>
          <h3 className="font-semibold text-base">Akıllı Boş Soru Modu</h3>
          <p className="text-xs text-[var(--text-muted)] leading-relaxed">
            Sınav sonunda boş bıraktığınız sorular tespit edilip yalnızca boş sorular arası gezinti sunulur.
          </p>
        </div>

        <div className="glass-panel p-5 space-y-2 hover:border-indigo-500/40 transition-all duration-200">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">
            <Award className="w-5 h-5" />
          </div>
          <h3 className="font-semibold text-base">ÖSYM Net & P93 Hesabı</h3>
          <p className="text-xs text-[var(--text-muted)] leading-relaxed">
            4 yanlış 1 doğruyu götürür kuralıyla netiniz ve tahmini P93 puanınız anında hesaplanır.
          </p>
        </div>

      </div>

      {/* Exam Selection Cards */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold tracking-tight">Geçmiş Yıl Sınavları</h3>
            <p className="text-xs text-[var(--text-muted)]">İstediğiniz yılın sınavını seçerek hemen başlayabilirsiniz.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {EXAMS.map((exam) => (
            <div
              key={exam.id}
              onClick={() => onSelectYearDirect(exam.year)}
              className="glass-panel p-6 cursor-pointer hover:scale-[1.01] hover:border-indigo-500/50 transition-all duration-200 space-y-4 group flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
                    {exam.year} ÖSYM
                  </span>
                  <span className="text-xs font-medium text-[var(--text-muted)] flex items-center gap-1">
                    <Layers className="w-3.5 h-3.5" /> 120 Soru
                  </span>
                </div>
                <h4 className="font-bold text-lg group-hover:text-indigo-500 transition-colors">
                  {exam.title}
                </h4>
                <p className="text-xs text-[var(--text-muted)] line-clamp-2 leading-relaxed">
                  {exam.description}
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-[var(--border-color)] text-xs font-semibold text-indigo-500 group-hover:translate-x-1 transition-transform">
                <span>Sınavı Yapılandır & Başlat</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
