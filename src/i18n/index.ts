import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import AOS from "aos";
import { es } from "./locales/es";
import { en } from "./locales/en";

const STORAGE_KEY = "job-application-tracker:lang";

const storedLang = localStorage.getItem(STORAGE_KEY);
const browserLang = navigator.language.startsWith("en") ? "en" : "es";

i18n.use(initReactI18next).init({
  resources: { es, en },
  lng: storedLang ?? browserLang,
  fallbackLng: "es",
  interpolation: { escapeValue: false },
});

i18n.on("languageChanged", (lng) => {
  localStorage.setItem(STORAGE_KEY, lng);
  // Every t() re-render rewrites data-aos elements' className via React,
  // wiping the "aos-animate" class AOS added imperatively. Re-scan on the
  // next frame so anything already in view re-animates instead of staying
  // stuck invisible (AOS's "once" option otherwise never revisits it).
  requestAnimationFrame(() => AOS.refreshHard());
});

export default i18n;
