import { useLocale } from '../../hooks/useLocale';
import { SUPPORTED_LANGUAGES } from '../../i18n';
import type { SupportedLanguage } from '../../i18n';
import { useTranslation } from 'react-i18next';

const LANG_LABELS: Record<SupportedLanguage, string> = {
    es: 'ES',
    en: 'EN',
};

/**
 * Compact pill language switcher for use in the Navbar.
 * Shows current language highlighted; clicking another switches locale.
 */
const LanguageSwitcher = () => {
    const { lang, switchLocale } = useLocale();
    const { t } = useTranslation('common');

    return (
        <div
            className="flex items-center gap-0.5 p-0.5 rounded-lg"
            style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
            }}
            role="group"
            aria-label={t('nav.lang_switch_label')}
        >
            {(SUPPORTED_LANGUAGES as readonly SupportedLanguage[]).map((l) => (
                <button
                    key={l}
                    onClick={() => switchLocale(l)}
                    className={`px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric ${lang === l
                        ? 'text-white'
                        : 'text-steel hover:text-white'
                        }`}
                    style={
                        lang === l
                            ? { background: 'var(--color-electric)' }
                            : { background: 'transparent' }
                    }
                    aria-label={l === 'es' ? 'Cambiar a Español' : 'Switch to English'}
                    aria-pressed={lang === l}
                >
                    {LANG_LABELS[l]}
                </button>
            ))}
        </div>
    );
};

export default LanguageSwitcher;
