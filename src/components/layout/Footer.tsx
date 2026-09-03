import { Instagram, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLocale } from '../../hooks/useLocale';

const Footer = () => {
    const { t } = useTranslation('common');
    const { lang } = useLocale();

    return (
        <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 md:gap-12 border-t border-white/10 pt-16 mb-12">

                {/* Brand */}
                <div className="col-span-1">
                    <div className="flex items-center gap-2 mb-6">
                        <img
                            src="/jhamf-logo-white.png"
                            alt="Jhamf Group Logo"
                            className="h-14 w-auto object-contain"
                        />
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        {t('footer.tagline')}
                    </p>
                </div>

                {/* Solutions column */}
                <div>
                    <h4 className="text-white font-bold mb-6">{t('footer.col_solutions')}</h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li><Link to={`/${lang}/azure`} className="hover:text-electric transition-colors">{t('footer.link_cloud')}</Link></li>
                        <li><Link to={lang === 'es' ? `/${lang}/automatizacion-ia` : `/${lang}/ai-automation`} className="hover:text-electric transition-colors">{t('footer.link_automation')}</Link></li>
                        <li><a href={`/${lang}/#ai-automation`} className="hover:text-electric transition-colors">{t('footer.link_ai')}</a></li>
                        <li><Link to={`/${lang}/ia-cali`} className="hover:text-electric transition-colors">{t('footer.link_ia_cali')}</Link></li>
                    </ul>
                </div>

                {/* Company column */}
                <div>
                    <h4 className="text-white font-bold mb-6">{t('footer.col_company')}</h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li><a href={`/${lang}/#nosotros`} className="hover:text-electric transition-colors">{t('footer.link_about')}</a></li>
                        <li><a href="#" className="hover:text-electric transition-colors">{t('footer.link_careers')}</a></li>
                        <li><a href={`/${lang}/#contact`} className="hover:text-electric transition-colors">{t('footer.link_contact')}</a></li>
                    </ul>
                </div>

                {/* Legal & Support column */}
                <div>
                    <h4 className="text-white font-bold mb-6">{t('footer.col_legal')}</h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li><Link to={lang === 'es' ? `/${lang}/pqrs` : `/${lang}/support`} className="hover:text-electric transition-colors">{t('footer.link_pqrs')}</Link></li>
                        <li><Link to={lang === 'es' ? `/${lang}/politica-privacidad` : `/${lang}/privacy-policy`} className="hover:text-electric transition-colors">{t('footer.link_privacy')}</Link></li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-sm text-gray-500 pb-8">
                <p>&copy; {new Date().getFullYear()} Jhamf Group SAS. {t('footer.rights')}</p>
                <div className="flex items-center gap-6 mt-4 md:mt-0">
                    <a href="https://www.instagram.com/jhamfgroup/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
                        <Instagram className="w-5 h-5" />
                    </a>
                    <a href="https://www.linkedin.com/company/jhamf-group" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="mailto:proyectos@jhamf.com" className="hover:text-white transition-colors" aria-label="Email">
                        <Mail className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
