import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Key, AlertTriangle, FileCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Security score ring — no user-visible text; receives translated labels as props
const SecurityScoreRing = ({ scoreLabel, protectedLabel }: { scoreLabel: string; protectedLabel: string }) => (
    <div className="flex flex-col items-center gap-3" aria-hidden="true">
        <div className="relative w-40 h-40">
            <svg viewBox="0 0 160 160" className="w-full h-full -rotate-90">
                {/* Track */}
                <circle cx="80" cy="80" r="64" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="10" />
                {/* Score arc ~94% */}
                <circle
                    cx="80" cy="80" r="64"
                    fill="none"
                    stroke="url(#scoreGrad)"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray={`${0.94 * 402} ${402}`}
                />
                <defs>
                    <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#00D4FF" />
                    </linearGradient>
                </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-display font-bold text-white">94</span>
                <span className="text-xs text-steel font-medium">{scoreLabel}</span>
            </div>
        </div>
        <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-signal animate-pulse-slow" />
            <span className="text-xs font-medium text-signal">{protectedLabel}</span>
        </div>
    </div>
);

const Cybersecurity = () => {
    const { t } = useTranslation('home');

    // ✅ Inside component — re-evaluated on language change
    const pillars = useMemo(() => [
        { icon: Eye, title: t('cyber.pillar_1_title'), desc: t('cyber.pillar_1_desc') },
        { icon: Key, title: t('cyber.pillar_2_title'), desc: t('cyber.pillar_2_desc') },
        { icon: FileCheck, title: t('cyber.pillar_3_title'), desc: t('cyber.pillar_3_desc') },
        { icon: AlertTriangle, title: t('cyber.pillar_4_title'), desc: t('cyber.pillar_4_desc') },
    ], [t]);

    const complianceBadges = [
        { label: 'ISO 27001', color: 'rgba(0,102,255,0.15)', border: 'rgba(0,102,255,0.3)', text: '#3388FF' },
        { label: 'NIST CSF', color: 'rgba(139,92,246,0.15)', border: 'rgba(139,92,246,0.3)', text: '#A78BFA' },
        { label: 'GDPR', color: 'rgba(0,212,255,0.1)', border: 'rgba(0,212,255,0.25)', text: '#00D4FF' },
        { label: 'SOC 2', color: 'rgba(0,255,136,0.1)', border: 'rgba(0,255,136,0.25)', text: '#00FF88' },
    ];

    return (
        <section
            id="cybersecurity"
            className="relative py-28 overflow-hidden"
            style={{ background: 'linear-gradient(180deg, var(--color-void) 0%, var(--color-navy) 100%)' }}
        >
            {/* Top divider */}
            <div className="section-divider absolute top-0 left-0 right-0" aria-hidden="true" />

            {/* Background plasma orb */}
            <div className="orb absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 w-[500px] h-[500px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)' }} aria-hidden="true" />
            <div className="bg-grid absolute inset-0 opacity-40 pointer-events-none" aria-hidden="true" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header + Score */}
                <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-start mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="eyebrow-chip" style={{ background: 'rgba(139,92,246,0.12)', border: '1px solid rgba(139,92,246,0.3)', color: '#A78BFA' }}>
                            <Shield className="w-3.5 h-3.5" aria-hidden="true" />
                            {t('cyber.eyebrow')}
                        </span>
                        <h2 className="mt-5 text-4xl md:text-5xl font-display font-bold tracking-tight">
                            {t('cyber.headline_1')} <br />
                            <span className="text-gradient-plasma">{t('cyber.headline_2')}</span>
                        </h2>
                        <p className="mt-5 text-lg text-steel font-light leading-relaxed max-w-xl">
                            {t('cyber.subtext')}
                        </p>

                        {/* Compliance badges — labels are framework names, not user-facing text */}
                        <div className="mt-7 flex flex-wrap gap-3" aria-label="Compliance frameworks">
                            {complianceBadges.map((badge) => (
                                <span
                                    key={badge.label}
                                    className="px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wide"
                                    style={{ background: badge.color, border: `1px solid ${badge.border}`, color: badge.text }}
                                >
                                    {badge.label}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="hidden lg:flex p-8 rounded-2xl glass-card justify-center"
                        style={{ border: '1px solid rgba(139,92,246,0.15)' }}
                    >
                        <SecurityScoreRing
                            scoreLabel={t('cyber.score_label')}
                            protectedLabel={t('cyber.protected')}
                        />
                    </motion.div>
                </div>

                {/* 4 Pillars grid */}
                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
                    {pillars.map((pillar, i) => {
                        const Icon = pillar.icon;
                        return (
                            <motion.article
                                key={pillar.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="group p-6 rounded-2xl glass-card transition-all duration-300 hover:border-plasma/30 hover:shadow-plasma"
                                style={{ borderColor: 'rgba(255,255,255,0.07)' }}
                            >
                                <div
                                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                                    style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)' }}
                                >
                                    <Icon className="w-5 h-5 text-plasma-bright" aria-hidden="true" />
                                </div>
                                <h3 className="text-base font-display font-bold text-white">{pillar.title}</h3>
                                <p className="mt-2 text-sm text-steel font-light leading-relaxed">{pillar.desc}</p>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Cybersecurity;
