export default function SmartBlankModal({ blankIndices, onGoToBlank, onForceFinish, onClose }) {
  return (
    <div className="modal-backdrop" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="blank-modal surface anim-slide">
        <div className="blank-modal__header">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--c-warning)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
            <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
          <h3 className="blank-modal__title">Boş Bırakılan Sorular</h3>
        </div>

        <p className="blank-modal__text">
          <strong>{blankIndices.length}</strong> adet soruyu boş bıraktınız. Gözden geçirmek ister misiniz?
        </p>

        <div className="blank-modal__list">
          {blankIndices.slice(0, 20).map(idx => (
            <button
              key={idx}
              className="blank-modal__item btn btn--ghost"
              onClick={() => onGoToBlank(idx)}
            >
              Soru {idx + 1}
            </button>
          ))}
          {blankIndices.length > 20 && (
            <span className="blank-modal__more">+{blankIndices.length - 20} soru daha…</span>
          )}
        </div>

        <div className="blank-modal__actions">
          <button className="btn btn--ghost" onClick={onClose}>
            Geri Dön
          </button>
          <button className="btn btn--danger-ghost" onClick={onForceFinish}>
            Sınavı Bitir
          </button>
        </div>
      </div>
    </div>
  );
}
