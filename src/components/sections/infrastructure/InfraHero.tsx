import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Network } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const InfraHero: React.FC = () => {
    const { t } = useTranslation('infrastructure');

    return (
        <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-void">
            {/* Animated background orbs */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-15%] left-[-8%] w-[45%] h-[45%] rounded-full bg-electric/15 blur-[140px] animate-pulse-slow" />
                <div className="absolute bottom-[-20%] right-[-12%] w-[50%] h-[50%] rounded-full bg-signal/10 blur-[160px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
                <div className="absolute top-[40%] left-[50%] w-[30%] h-[30%] rounded-full bg-neon-ice/8 blur-[120px] animate-pulse-slow" style={{ animationDelay: '4s' }} />
                {/* Grid overlay */}
                <div className="absolute inset-0 bg-grid opacity-40" />
                {/* Noise texture */}
                <div className="absolute inset-0 noise opacity-30 pointer-events-none" />
            </div>

            {/* Animated scan line */}
            <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-electric/30 to-transparent animate-scan" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Eyebrow chip */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="mb-8 inline-flex flex-col items-center gap-3"
                    >
                        <div className="eyebrow-chip">
                            <Network className="w-3.5 h-3.5" />
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
                        <span className="text-electric">{t('hero.titleHighlight')}</span>
                    </motion.h1>

                    {/* Sub-headline */}
                    <motion.p
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.35 }}
                        className="text-lg md:text-xl text-steel max-w-2xl mx-auto mb-10 leading-relaxed"
                    >
                        {t('hero.subtitle')}
                    </motion.p>

                    {/* CTA Buttons */}
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
                            className="btn-primary"
                        >
                            {t('hero.cta')}
                            <ArrowRight className="w-4 h-4" />
                        </a>
                        <a href="#services" className="btn-ghost">
                            {t('hero.ctaSecondary')}
                        </a>
                    </motion.div>
                </div>

                {/* Decorative bottom indicators */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="mt-20 flex justify-center"
                >
                    <div className="flex items-center gap-8 text-steel-dark text-xs font-mono tracking-widest uppercase">
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-signal animate-pulse" />
                            99.9% Uptime
                        </span>
                        <span className="w-px h-4 bg-white/10" />
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-electric animate-pulse" style={{ animationDelay: '0.5s' }} />
                            ISO 27001
                        </span>
                        <span className="w-px h-4 bg-white/10" />
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-neon-ice animate-pulse" style={{ animationDelay: '1s' }} />
                            24/7 NOC
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default InfraHero;
