import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Shield, Zap, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface HeroProps {
    onOpenWizard: () => void;
}

const TRUST_BADGE_ICONS = ['⬡', '◈', '◇', '⬡'];

const Hero = ({ onOpenWizard }: HeroProps) => {
    const { t } = useTranslation('home');
    return (
        <section
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
            style={{ background: 'var(--color-void)' }}
            aria-label="Hero"
        >
            {/* === BACKGROUND LAYERS === */}

            {/* Grid overlay */}
            <div className="absolute inset-0 bg-grid opacity-100 pointer-events-none" />

            {/* Large electric orb — top left */}
            <div
                className="orb absolute -top-40 -left-40 w-[600px] h-[600px] pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(0,102,255,0.18) 0%, transparent 70%)' }}
                aria-hidden="true"
            />

            {/* Plasma orb — bottom right */}
            <div
                className="orb absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-[500px] h-[500px] pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)' }}
                aria-hidden="true"
            />

            {/* Subtle ice orb — top right */}
            <div
                className="orb absolute top-20 right-0 w-[300px] h-[300px] pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)' }}
                aria-hidden="true"
            />

            {/* Bottom scan line gradient */}
            <div
                className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(0,102,255,0.4), transparent)' }}
                aria-hidden="true"
            />

            {/* === MAIN CONTENT === */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 flex flex-col items-center text-center">

                {/* Eyebrow badge */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="eyebrow-chip" role="text">
                        <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                        {t('hero.badge')}
                    </span>
                </motion.div>

                {/* Main headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-display font-bold leading-[1.05] tracking-tight max-w-5xl"
                >
                    {t('hero.headline_1')}{' '}
                    <span className="block text-gradient-hero">
                        {t('hero.headline_2')}
                    </span>
                    <span className="block text-white">{t('hero.headline_3')}</span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.22 }}
                    className="mt-6 text-lg md:text-xl text-steel max-w-2xl leading-relaxed font-light"
                >
                    {t('hero.subtext')}
                </motion.p>

                {/* CTA row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.34 }}
                    className="mt-10 flex flex-col sm:flex-row items-center gap-4"
                >
                    <button
                        onClick={onOpenWizard}
                        className="btn-primary focus-visible:ring-2 focus-visible:ring-electric focus-visible:outline-none"
                        aria-label={t('cta_diagnostic', { ns: 'common' })}
                    >
                        {t('hero.cta_primary')}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </button>
                    <a
                        href="https://form.typeform.com/to/gxR8JkE0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost"
                    >
                        {t('hero.cta_secondary')}
                    </a>
                </motion.div>

                {/* Trust badges row */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-12 flex flex-wrap items-center justify-center gap-6"
                    aria-label="Certifications and partnerships"
                >
                    {(['azure', 'iso', 'aws', 'google'] as const).map((key, i) => (
                        <div
                            key={key}
                            className="flex items-center gap-2 text-steel-dark text-sm font-medium"
                        >
                            <span className="text-electric/60 text-base" aria-hidden="true">{TRUST_BADGE_ICONS[i]}</span>
                            <span>{t(`trust_badges.${key}`, { ns: 'common' })}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Stats row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.65 }}
                    className="mt-16 w-full max-w-3xl"
                >
                    <div className="grid grid-cols-3 gap-4">
                        {(['deployments', 'uptime', 'support'] as const).map((key, i) => (
                            <motion.div
                                key={key}
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.7 + i * 0.08 }}
                                className="stat-card"
                            >
                                <div
                                    className="text-3xl font-display font-bold text-gradient-electric"
                                    aria-label={t(`stats.${key}_value`)}
                                >
                                    {t(`stats.${key}_value`)}
                                </div>
                                <div className="mt-1 text-xs text-steel font-medium tracking-wide">
                                    {t(`stats.${key}_label`)}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>


                {/* Capability icons row */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className="mt-10 flex items-center gap-8 text-steel-dark"
                >
                    <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest">
                        <Zap className="w-3.5 h-3.5 text-signal" aria-hidden="true" />
                        {t('nav.ai_automation', { ns: 'common' })}
                    </div>
                    <div className="w-px h-4 bg-white/10" aria-hidden="true" />
                    <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest">
                        <Globe className="w-3.5 h-3.5 text-electric/70" aria-hidden="true" />
                        {t('nav.cloud', { ns: 'common' })}
                    </div>
                    <div className="w-px h-4 bg-white/10" aria-hidden="true" />
                    <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest">
                        <Shield className="w-3.5 h-3.5 text-plasma/70" aria-hidden="true" />
                        {t('nav.cybersecurity', { ns: 'common' })}
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                aria-hidden="true"
            >
                <span className="text-2xs text-steel-dark uppercase tracking-[0.2em] font-medium">Scroll</span>
                <div className="w-px h-12 bg-gradient-to-b from-electric/40 to-transparent" />
            </motion.div>
        </section>
    );
};

export default Hero;
