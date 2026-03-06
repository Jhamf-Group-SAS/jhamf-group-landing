import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SEO from '../components/seo/SEO';
import { useTranslation } from 'react-i18next';

const PrivacyPolicyPage = () => {
    const { t } = useTranslation('privacy');

    return (
        <div className="bg-obsidian min-h-screen text-white font-sans flex flex-col">
            <SEO
                title={t('seo.title')}
                description={t('seo.description')}
                keywords={t('seo.keywords')}
            />
            <Navbar onOpenWizard={() => { }} />

            <main className="flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="text-center mb-16">
                        <span className="text-neon-cyan font-mono mb-4 block">{t('header.subtitle')}</span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('header.title')}</h1>
                        <p className="text-gray-400">{t('header.updated')} {new Date().getFullYear()}</p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-12 backdrop-blur-sm">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-neon-cyan/10 rounded-xl flex items-center justify-center border border-neon-cyan/20">
                                    <FileText className="w-8 h-8 text-neon-cyan" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1">{t('document.title')}</h3>
                                    <p className="text-gray-400 text-sm">{t('document.filename')}</p>
                                </div>
                            </div>
                            <a
                                href="/Politica-Tratamiento-de-datos-002.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full md:w-auto px-8 py-3 bg-azure hover:bg-neon-blue text-white rounded-lg transition-all flex items-center justify-center gap-2 font-medium group"
                            >
                                <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                                {t('document.download')}
                            </a>
                        </div>
                    </div>

                    <div className="prose prose-invert prose-lg max-w-none text-gray-300">
                        <p>{t('content.intro')}</p>

                        <h3>{t('content.section1.title')}</h3>
                        <p>{t('content.section1.text')}</p>

                        <h3>{t('content.section2.title')}</h3>
                        <p>{t('content.section2.text')}</p>
                        <ul>
                            {(t('content.section2.list', { returnObjects: true }) as string[]).map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>

                        <h3>{t('content.section3.title')}</h3>
                        <p>{t('content.section3.text')}</p>

                        <p className="text-sm text-gray-500 mt-8 italic border-t border-white/10 pt-4">
                            {t('content.note')}
                        </p>
                    </div>
                </motion.div>
            </main>

            <Footer />
        </div>
    );
};

export default PrivacyPolicyPage;
