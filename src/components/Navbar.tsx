import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.png";

export function Navbar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const isLanding = location.pathname === "/";

  function setLang(lang: "es" | "en") {
    i18n.changeLanguage(lang);
  }

  return (
    <nav className="sticky top-0 z-40 border-b border-hairline bg-surface/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-5">
        <Link to="/" aria-label="Ima Developer">
          <img src={logo} alt="Ima Developer" className="h-12 w-12 object-contain" />
        </Link>

        <div className="flex items-center gap-3">
          {!isLanding && (
            <Link
              to="/"
              className="text-sm text-ink-secondary transition-colors hover:text-ink-primary"
            >
              {t("nav.backHome")}
            </Link>
          )}

          <div className="flex items-center rounded-full border border-hairline p-0.5 text-xs font-medium">
            <button
              onClick={() => setLang("es")}
              aria-pressed={i18n.language === "es"}
              className={`rounded-full px-2.5 py-1 transition-colors ${
                i18n.language === "es" ? "bg-ink-primary text-plane" : "text-ink-secondary hover:text-ink-primary"
              }`}
            >
              ES
            </button>
            <button
              onClick={() => setLang("en")}
              aria-pressed={i18n.language === "en"}
              className={`rounded-full px-2.5 py-1 transition-colors ${
                i18n.language === "en" ? "bg-ink-primary text-plane" : "text-ink-secondary hover:text-ink-primary"
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
