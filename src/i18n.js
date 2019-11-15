import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-xhr-backend";
import { initReactI18next } from "react-i18next";

/**
 * i18next options definition
 * @var fallbackLng default language
 * @var lng broswer detected lanauge
 * @var whitelist languages which can be available
 * @var wait shoud be true so that site is opening after language data loaded
 * @var useSuspense Since we haven't language selection button so should be false
 * @ignore Rest of params are default
 * 
 */
const availableLanguages = ["en", "tr", "es"];
if (typeof window !== `undefined`) {
  i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    lng: window.navigator.language || window.navigator.userLanguage,
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
}

export default i18n;
