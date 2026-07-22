import React from 'react';
import { HelpCircle, CheckCircle2, ArrowRight, RotateCcw, AlertTriangle } from 'lucide-react';

export default function SmartBlankModal({ isOpen, blankCount, totalCount, onReviewBlanks, onConfirmFinish }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="glass-panel w-full max-w-md bg-[var(--bg-card)] border border-[var(--border-color)] rounded-3xl p-6 shadow-2xl space-y-6 text-center">
        
        {/* Icon */}
        <div className="w-16 h-16 rounded-3xl bg-amber-500/10 text-amber-500 flex items-center justify-center mx-auto border border-amber-500/20 shadow-md shadow-amber-500/10">
          <HelpCircle className="w-8 h-8" />
        </div>

        {/* Title & Description */}
        <div className="space-y-2">
          <h3 className="font-extrabold text-xl tracking-tight">Boş Bırakılan Sorulariniz Var</h3>
          <p className="text-xs text-[var(--text-muted)] leading-relaxed">
            Sınavda toplam <span className="font-bold text-amber-500 text-sm">{blankCount}</span> soruyu boş bıraktınız (Toplam {totalCount} Soru). Sınavı tamamlamadan önce boş sorularınıza göz atmak ister misiniz?
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pt-2">
          <button
            onClick={onReviewBlanks}
            className="w-full py-3.5 px-4 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Evet, Boş Soruları İncele</span>
          </button>

          <button
            onClick={onConfirmFinish}
            className="w-full py-3 px-4 rounded-2xl bg-[var(--bg-card-hover)] hover:bg-[var(--border-color)] text-[var(--text-muted)] font-semibold text-xs transition-colors flex items-center justify-center gap-2"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Hayır, Sınavı Şimdi Bitir ve Sonuçları Gör</span>
          </button>
        </div>

      </div>
    </div>
  );
}
