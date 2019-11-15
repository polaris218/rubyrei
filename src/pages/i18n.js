import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-xhr-backend";
import { initReactI18next } from "react-i18next";

const availableLanguages = ["en", "ru", "tr", "es"];

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    lng: navigator.language || navigator.userLanguage,
    debug: true,
    whitelist: availableLanguages,
    ns: ["translation"],
    keySeparator: false,
    interpolation: {
      escapeValue: false
    },
    react: {
      wait: true,
      useSuspense: false,
    }
  });

export default i18n;
