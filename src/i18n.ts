import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import { LANGUAGES } from 'constants/items';

const resources = {
  en: {
    translation: LANGUAGES.EN.translation,
  },
  pl: {
    translation: LANGUAGES.PL.translation,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: [LANGUAGES.EN.shortcut, LANGUAGES.PL.shortcut],
    lng: LANGUAGES.EN.shortcut,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
