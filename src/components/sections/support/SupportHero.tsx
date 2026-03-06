import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowRight, PhoneCall } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const SupportHero: React.FC = () => {
    const { t } = useTranslation('support');

    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-obsidian" />
                {/* Tech dark minimal gradient */}
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_20%,rgba(0,255,157,0.08),transparent_50%)]" />
                <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_80%,rgba(0,163,255,0.05),transparent_50%)]" />
                {/* Grid minimalista */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-signal/10 border border-signal/20 mb-6"
                    >
                        <Clock className="w-4 h-4 text-signal" />
                        <span className="text-sm font-medium text-signal tracking-wide uppercase">
                            Servicios de TI Gestionados
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
                    >
                        {t('hero.title').split(' ').map((word, i) => (
                            <span key={i} className={word.includes('24/7') || word.includes('Crítica') ? "text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-signal" : ""}>
                                {word + ' '}
                            </span>
                        ))}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed font-light"
                    >
                        {t('hero.description')}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <a href="#contact" className="px-8 py-4 bg-azure hover:bg-electric-glow text-white rounded-lg transition-all flex items-center justify-center gap-2 font-medium group relative overflow-hidden">
                            <span className="relative z-10">{t('hero.primary_cta')}</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                        </a>
                        <a href="https://wa.me/573000000000" target="_blank" rel="noreferrer" className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-all flex items-center justify-center gap-2 font-medium border border-white/10 group">
                            <span className="relative z-10">{t('hero.secondary_cta')}</span>
                            <PhoneCall className="w-5 h-5 text-gray-400 group-hover:text-signal transition-colors relative z-10" />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SupportHero;
