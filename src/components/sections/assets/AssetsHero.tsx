import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Package } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AssetsHero: React.FC = () => {
    const { t } = useTranslation('assets');

    return (
        <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-void">
            {/* Animated background orbs — plasma/ice theme */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-12%] right-[-8%] w-[45%] h-[45%] rounded-full bg-plasma/15 blur-[140px] animate-pulse-slow" />
                <div className="absolute bottom-[-15%] left-[-10%] w-[45%] h-[45%] rounded-full bg-neon-ice/10 blur-[150px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
                <div className="absolute top-[50%] right-[30%] w-[25%] h-[25%] rounded-full bg-electric/8 blur-[120px] animate-pulse-slow" style={{ animationDelay: '4s' }} />
                <div className="absolute inset-0 bg-grid opacity-40" />
                <div className="absolute inset-0 noise opacity-30 pointer-events-none" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Eyebrow */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="mb-8 inline-flex flex-col items-center gap-3"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-[0.1em] uppercase" style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.3)', color: '#A78BFA' }}>
                            <Package className="w-3.5 h-3.5" />
                            <span>{t('hero.eyebrow')}</span>
                        </div>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-[1.08] tracking-tight"
                    >
                        {t('hero.title')}{' '}
                        <br className="hidden sm:block" />
                        <span className="text-plasma-bright">{t('hero.titleHighlight')}</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.35 }}
                        className="text-lg md:text-xl text-steel max-w-2xl mx-auto mb-10 leading-relaxed"
                    >
                        {t('hero.subtitle')}
                    </motion.p>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.55 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <a
                            href="https://form.typeform.com/to/gxR8JkE0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center gap-2 px-8 py-4 font-semibold text-white rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02]"
                            style={{ background: 'linear-gradient(135deg, #8B5CF6, #00D4FF)', boxShadow: '0 0 30px rgba(139,92,246,0.3)' }}
                        >
                            {t('hero.cta')}
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="#services" className="btn-ghost">
                            {t('hero.ctaSecondary')}
                        </a>
                    </motion.div>
                </div>

                {/* Bottom indicators */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="mt-20 flex justify-center"
                >
                    <div className="flex items-center gap-8 text-steel-dark text-xs font-mono tracking-widest uppercase">
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-plasma animate-pulse" />
                            ITAM
                        </span>
                        <span className="w-px h-4 bg-white/10" />
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-neon-ice animate-pulse" style={{ animationDelay: '0.5s' }} />
                            SAM
                        </span>
                        <span className="w-px h-4 bg-white/10" />
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-signal animate-pulse" style={{ animationDelay: '1s' }} />
                            ROI+
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AssetsHero;
