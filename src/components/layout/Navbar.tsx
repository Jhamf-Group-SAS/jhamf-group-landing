import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLocale } from '../../hooks/useLocale';
import LanguageSwitcher from './LanguageSwitcher';

interface NavbarProps {
    onOpenWizard: () => void;
}

const Navbar = ({ onOpenWizard }: NavbarProps) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const { t } = useTranslation('common');
    const { lang } = useLocale();

    // Nav links using translated labels and lang-prefixed hrefs
    const navLinks = [
        { key: 'services', name: t('nav.services'), id: 'services' },
        { key: 'ai', name: t('nav.ai_automation'), id: 'ai-automation' },
        { key: 'cloud', name: t('nav.cloud'), id: 'cloud' },
        { key: 'cyber', name: t('nav.cybersecurity'), id: 'cybersecurity' },
        { key: 'clients', name: t('nav.clients'), id: 'clients' },
        { key: 'about', name: t('nav.about'), id: 'nosotros' },
    ];

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 24);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    const handleNavAnchor = (id: string) => {
        setIsMobileMenuOpen(false);
        // Check if we're on the landing page for this lang
        const landingPath = `/${lang}/`;
        if (location.pathname !== landingPath && location.pathname !== `/${lang}`) {
            window.location.href = `${landingPath}#${id}`;
        } else {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav
            role="navigation"
            aria-label="Main navigation"
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'glass-elevated border-b border-white/5 shadow-[0_4px_24px_rgba(0,0,0,0.5)]'
                    : 'bg-transparent'
                }`}
        >
            {/* Top accent line */}
            <div className="h-px bg-gradient-to-r from-transparent via-electric/60 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-18 py-3">

                    {/* Logo */}
                    <button
                        onClick={() => handleNavAnchor('hero')}
                        className="flex items-center gap-3 group"
                        aria-label="JHAMF Group — Home"
                    >
                        <img
                            src="/jhamf-logo-white.png"
                            alt="JHAMF Group"
                            className="h-10 w-auto object-contain transition-opacity group-hover:opacity-80"
                        />
                    </button>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-7">
                        {navLinks.map((link) => (
                            <button
                                key={link.key}
                                onClick={() => handleNavAnchor(link.id)}
                                className="text-sm font-medium text-steel hover:text-white transition-colors duration-200 bg-transparent border-none cursor-pointer tracking-wide"
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>

                    {/* Desktop CTA + Language Switcher */}
                    <div className="hidden lg:flex items-center gap-3">
                        <LanguageSwitcher />

                        <a
                            href={`/${lang}/cotizador`}
                            className="group flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-neon-ice rounded-xl border border-neon-ice/40 hover:bg-neon-ice/10 transition-all duration-200"
                            aria-label="Ir al Cotizador Valora Suite"
                        >
                            Cotizar
                        </a>

                        <button
                            onClick={onOpenWizard}
                            className="group flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-xl border border-electric/30 bg-electric/10 hover:bg-electric/20 hover:border-electric/60 transition-all duration-200 hover:shadow-electric focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric"
                            aria-label="Open AI Diagnostic Wizard"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse-slow" aria-hidden="true" />
                            {t('nav.cta')}
                            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                        </button>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        className="lg:hidden text-steel hover:text-white w-11 h-11 flex items-center justify-center rounded-lg hover:bg-white/5 transition-colors focus-visible:ring-2 focus-visible:ring-electric focus-visible:outline-none"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="lg:hidden glass-elevated border-t border-white/5 overflow-hidden"
                    >
                        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <button
                                    key={link.key}
                                    onClick={() => handleNavAnchor(link.id)}
                                    className="text-left px-4 min-h-11 flex items-center text-sm font-medium text-steel hover:text-white hover:bg-white/5 rounded-lg transition-all bg-transparent border-none cursor-pointer w-full focus-visible:ring-2 focus-visible:ring-electric focus-visible:outline-none"
                                >
                                    {link.name}
                                </button>
                            ))}

                            <div className="pt-3 mt-2 border-t border-white/5 flex flex-col gap-3">
                                <div className="flex items-center justify-between px-1">
                                    <span className="text-xs text-steel-dark font-medium">{t('nav.lang_switch_label')}</span>
                                    <LanguageSwitcher />
                                </div>
                                <a
                                    href={`/${lang}/cotizador`}
                                    className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-neon-ice rounded-xl border border-neon-ice/40 hover:bg-neon-ice/10 transition-all"
                                >
                                    Cotizar
                                </a>
                                <button
                                    onClick={() => { setIsMobileMenuOpen(false); onOpenWizard(); }}
                                    className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white rounded-xl border border-electric/40 bg-electric/10 hover:bg-electric/20 transition-all"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse-slow" aria-hidden="true" />
                                    {t('nav.cta')}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
