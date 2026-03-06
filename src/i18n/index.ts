import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// ES translations
import esCommon from './locales/es/common.json';
import esHome from './locales/es/home.json';
import esServices from './locales/es/services.json';
import esAbout from './locales/es/about.json';

// EN translations
import enCommon from './locales/en/common.json';
import enHome from './locales/en/home.json';
import enServices from './locales/en/services.json';
import enAbout from './locales/en/about.json';

export const SUPPORTED_LANGUAGES = ['es', 'en'] as const;
export type SupportedLanguage = typeof SUPPORTED_LANGUAGES[number];
export const DEFAULT_LANGUAGE: SupportedLanguage = 'es';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            es: {
                common: esCommon,
                home: esHome,
                services: esServices,
                about: esAbout,
            },
            en: {
                common: enCommon,
                home: enHome,
                services: enServices,
                about: enAbout,
            },
        },
        lng: DEFAULT_LANGUAGE,
        fallbackLng: 'es',
        defaultNS: 'common',
        ns: ['common', 'home', 'services', 'about'],
        interpolation: {
            escapeValue: false, // React already escapes
        },
        detection: {
            order: ['path', 'localStorage', 'navigator'],
            lookupFromPathIndex: 0,
            caches: ['localStorage'],
        },
    });

export default i18n;
