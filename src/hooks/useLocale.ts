import { useTranslation } from 'react-i18next';
import { useParams, useLocation } from 'react-router-dom';
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from '../i18n';
import type { SupportedLanguage } from '../i18n';

/**
 * Reads the current locale from the URL pathname (/es/... or /en/...)
 * and provides a switchLocale() function that navigates to the same
 * path with a different language prefix.
 *
 * We parse the pathname directly rather than relying solely on useParams,
 * because nested <Routes> inside the /:lang/* parent may not forward
 * the :lang param in all React Router v6 configurations.
 */
export const useLocale = () => {
    const { lang: paramLang } = useParams<{ lang?: string }>();
    const location = useLocation();
    const { t, i18n } = useTranslation();

    // Primary: use :lang param. Fallback: parse pathname (/es/... or /en/...)
    const pathLang = location.pathname.split('/')[1];
    const rawLang = paramLang || pathLang;
    const currentLang: SupportedLanguage =
        SUPPORTED_LANGUAGES.includes(rawLang as SupportedLanguage)
            ? (rawLang as SupportedLanguage)
            : DEFAULT_LANGUAGE;

    /**
     * Navigate to the same route with a different language prefix.
     */
    const switchLocale = (newLang: SupportedLanguage) => {
        if (newLang === currentLang) return;
        const currentPath = location.pathname;
        // Replace the leading /es or /en segment
        const newPath = currentPath.replace(/^\/(es|en)(\/|$)/, `/${newLang}$2`) || `/${newLang}/`;
        // Use full page navigation to ensure i18next reinitializes with the new language
        window.location.href = newPath + location.search + location.hash;
    };

    return { lang: currentLang, switchLocale, t, i18n };
};
