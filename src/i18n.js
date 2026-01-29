import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    },
    backend: {
      loadPath: '/locales/{{lng}}.json'
    }
  });

// Add RTL support - update HTML dir and lang attributes when language changes
i18n.on('languageChanged', (lng) => {
  const dir = lng === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.setAttribute('dir', dir);
  document.documentElement.setAttribute('lang', lng);
});

// Set initial direction
const currentLang = i18n.language || 'en';
const initialDir = currentLang === 'ar' ? 'rtl' : 'ltr';
document.documentElement.setAttribute('dir', initialDir);
document.documentElement.setAttribute('lang', currentLang);

export default i18n;
