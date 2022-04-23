import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import translationsFr from "./fr";
import translationsEn from "./en";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "fr",
    debug: true,
    detection: {
      order: ["queryString", "cookie"],
      cache: ["cookie"],
    },
    resources: {
      fr: { translation: translationsFr },
      en: { translation: translationsEn },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
