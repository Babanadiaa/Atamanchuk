import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslations from '../locales/en.json';
import uaTranslations from '../locales/ua.json';

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,
    
    resources: {
      en: {
        translation: enTranslations
      },
      ua: {
        translation: uaTranslations
      },
    },

    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false,
    },

    react: {
      useSuspense: false,
    },
  });

export default i18next;