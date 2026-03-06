import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// ES translations
import esCommon from './locales/es/common.json';
import esHome from './locales/es/home.json';
import esServices from './locales/es/services.json';
import esAbout from './locales/es/about.json';
import esInfrastructure from './locales/es/infrastructure.json';
import esAssets from './locales/es/assets.json';
import esPqrs from './locales/es/pqrs.json';
import esPrivacy from './locales/es/privacy.json';

// EN translations
import enCommon from './locales/en/common.json';
import enHome from './locales/en/home.json';
import enServices from './locales/en/services.json';
import enAbout from './locales/en/about.json';
import enInfrastructure from './locales/en/infrastructure.json';
import enAssets from './locales/en/assets.json';
import enPqrs from './locales/en/pqrs.json';
import enPrivacy from './locales/en/privacy.json';

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
                infrastructure: esInfrastructure,
                assets: esAssets,
                pqrs: esPqrs,
                privacy: esPrivacy,
            },
            en: {
                common: enCommon,
                home: enHome,
                services: enServices,
                about: enAbout,
                infrastructure: enInfrastructure,
                assets: enAssets,
                pqrs: enPqrs,
                privacy: enPrivacy,
            },
        },
        lng: DEFAULT_LANGUAGE,
        fallbackLng: 'es',
        defaultNS: 'common',
        ns: ['common', 'home', 'services', 'about', 'infrastructure', 'assets', 'pqrs', 'privacy'],
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
