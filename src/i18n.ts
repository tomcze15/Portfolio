import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import { LANGUAGE } from 'constants/items';

const resources = {
  en: {
    translation: LANGUAGE.EN.translation,
  },
  pl: {
    translation: LANGUAGE.PL.translation,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: [LANGUAGE.EN.shortcut, LANGUAGE.PL.shortcut],
    lng: LANGUAGE.EN.shortcut,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
