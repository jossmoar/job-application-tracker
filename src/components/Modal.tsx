import { useEffect, type ReactNode } from "react";
import AOS from "aos";

interface ModalProps {
  title: string;
  onClose: () => void;
  children: ReactNode;
}

export function Modal({ title, onClose, children }: ModalProps) {
  // AOS only animates elements the IntersectionObserver has seen scroll into
  // view; a modal mounts without a scroll event, so force a refresh once it's
  // in the DOM to make the entrance animation actually fire.
  useEffect(() => {
    AOS.refreshHard();
  }, []);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink-primary/40 backdrop-blur-sm px-4"
      onClick={onClose}
      role="presentation"
    >
      <div
        data-aos="zoom-in"
        data-aos-duration="250"
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg rounded-2xl border border-hairline bg-surface p-6 shadow-xl"
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-display text-xl font-medium text-ink-primary">{title}</h2>
          <button
            onClick={onClose}
            aria-label="Cerrar"
            className="rounded-lg px-2 py-1 text-ink-muted transition-colors hover:bg-ink-primary/5 hover:text-ink-primary"
          >
            ✕
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
