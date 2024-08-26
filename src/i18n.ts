import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from "./locales/en/translation.json"
import uaTranslation from "./locales/ua/translation.json"

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    resources: {
      en: {
        translation: enTranslation
      },
      ua: {
        translation: uaTranslation
      },
    },
    lng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
