// src/i18n.js
import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
    .use(Backend)
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        preload: ['en-US'],
        fallbackLng: "en-US",
        debug: true,
        saveMissing: true,
        saveMissingTo: 'all',

        interpolation: {
            escapeValue: false
        },
        react: {
            useSuspense: false
        }
    });

export default i18n;