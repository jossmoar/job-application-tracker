import { useEffect, useRef, useState, type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";

const CLOSE_DURATION = 250;

interface ModalProps {
  title: string;
  onClose: () => void;
  // Render-prop so children (e.g. a form) can trigger the same animated
  // close — "requestClose" plays the exit transition, then unmounts.
  children: (requestClose: () => void) => ReactNode;
}

export function Modal({ title, onClose, children }: ModalProps) {
  const { t } = useTranslation();
  const panelRef = useRef<HTMLDivElement>(null);
  const [isClosing, setIsClosing] = useState(false);

  // AOS only animates elements the IntersectionObserver has seen scroll into
  // view; a modal mounts without a scroll event, so force a refresh once it's
  // in the DOM to make the entrance animation actually fire.
  useEffect(() => {
    AOS.refreshHard();
  }, []);

  function requestClose() {
    if (isClosing) return;
    setIsClosing(true);
    // AOS drives the entrance by toggling "aos-animate" on top of the
    // [data-aos] base style; removing it plays the same transition in
    // reverse, so the exit uses AOS's own easing/timing, not a bespoke one.
    panelRef.current?.classList.remove("aos-animate");
    window.setTimeout(onClose, CLOSE_DURATION);
  }

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") requestClose();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-overlay backdrop-blur-md px-4 transition-opacity duration-250 ${
        isClosing ? "opacity-0" : "opacity-100"
      }`}
      style={{ transitionDuration: `${CLOSE_DURATION}ms` }}
      onClick={requestClose}
      role="presentation"
    >
      <div
        ref={panelRef}
        data-aos="zoom-in"
        data-aos-duration={CLOSE_DURATION}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg rounded-2xl border border-hairline bg-surface p-6 shadow-xl"
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-display text-xl font-medium text-ink-primary">{title}</h2>
          <button
            onClick={requestClose}
            aria-label={t("form.close")}
            className="rounded-lg px-2 py-1 text-ink-muted transition-colors hover:bg-ink-primary/5 hover:text-ink-primary"
          >
            ✕
          </button>
        </div>
        {children(requestClose)}
      </div>
    </div>
  );
}
