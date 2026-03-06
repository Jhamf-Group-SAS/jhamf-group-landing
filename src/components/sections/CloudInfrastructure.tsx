import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Cloud, GitMerge, ArrowUpRight, Gauge, Server, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLocale } from '../../hooks/useLocale';

const CloudInfrastructure = () => {
    const navigate = useNavigate();
    const { t } = useTranslation('home');
    const { lang } = useLocale();

    // ✅ All content inside the component: re-evaluated on language change
    const features = useMemo(() => [
        { icon: GitMerge, title: t('cloud.feature_1_title'), desc: t('cloud.feature_1_desc') },
        { icon: Server, title: t('cloud.feature_2_title'), desc: t('cloud.feature_2_desc') },
        { icon: Gauge, title: t('cloud.feature_3_title'), desc: t('cloud.feature_3_desc') },
    ], [t]);

    const stats = useMemo(() => [
        { value: '<20ms', label: t('cloud.stat_latency') },
        { value: '99.99%', label: t('cloud.stat_sla') },
        { value: '4', label: t('cloud.stat_regions') },
        { value: '3x', label: t('cloud.stat_speed') },
    ], [t]);

    return (
        <section
            id="cloud"
            className="relative py-28 overflow-hidden"
            style={{ background: 'linear-gradient(180deg, var(--color-navy) 0%, var(--color-void) 100%)' }}
        >
            {/* Top divider */}
            <div className="section-divider absolute top-0 left-0 right-0" aria-hidden="true" />

            {/* Background orbs */}
            <div className="orb absolute top-10 right-0 w-[500px] h-[500px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(0,102,255,0.1) 0%, transparent 70%)' }} aria-hidden="true" />
            <div className="bg-grid absolute inset-0 opacity-50 pointer-events-none" aria-hidden="true" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid lg:grid-cols-2 gap-12 items-end mb-16"
                >
                    <div>
                        <span className="eyebrow-chip">
                            <Cloud className="w-3.5 h-3.5" aria-hidden="true" />
                            {t('cloud.eyebrow')}
                        </span>
                        <h2 className="mt-5 text-4xl md:text-5xl font-display font-bold tracking-tight">
                            {t('cloud.headline_1')} <br />
                            <span className="text-gradient-electric">{t('cloud.headline_2')}</span>
                        </h2>
                    </div>
                    <p className="text-lg text-steel font-light leading-relaxed lg:self-end">
                        {t('cloud.subtext')}
                    </p>
                </motion.div>

                {/* Feature cards */}
                <div className="grid md:grid-cols-3 gap-5">
                    {features.map((feat, i) => {
                        const Icon = feat.icon;
                        return (
                            <motion.article
                                key={feat.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.12 }}
                                className="group relative p-7 rounded-2xl glass-card transition-all duration-300 hover:border-electric/30 hover:shadow-electric"
                                style={{ borderColor: 'rgba(255,255,255,0.07)' }}
                            >
                                {/* Top accent line on hover */}
                                <div
                                    className="absolute top-0 left-6 right-6 h-px transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                                    style={{ background: 'linear-gradient(90deg, transparent, var(--color-electric), transparent)' }}
                                    aria-hidden="true"
                                />

                                <div
                                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300"
                                    style={{ background: 'rgba(0,102,255,0.1)', border: '1px solid rgba(0,102,255,0.2)' }}
                                >
                                    <Icon className="w-5 h-5 text-electric" aria-hidden="true" />
                                </div>
                                <h3 className="text-lg font-display font-bold text-white">{feat.title}</h3>
                                <p className="mt-2 text-sm text-steel font-light leading-relaxed">{feat.desc}</p>
                            </motion.article>
                        );
                    })}
                </div>

                {/* Stats strip */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-8 rounded-2xl p-6"
                    style={{
                        background: 'rgba(0,102,255,0.06)',
                        border: '1px solid rgba(0,102,255,0.15)',
                    }}
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat) => (
                            <div key={stat.label} className="text-center">
                                <div className="text-3xl font-display font-bold text-gradient-electric">{stat.value}</div>
                                <div className="mt-1 text-xs text-steel font-medium tracking-wide">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Azure partner badge + CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-2xl"
                    style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
                >
                    <div className="flex items-center gap-4">
                        <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center"
                            style={{ background: 'rgba(0,102,255,0.15)' }}
                        >
                            <Globe className="w-5 h-5 text-electric" aria-hidden="true" />
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-white">{t('cloud.partner_label')}</p>
                            <p className="text-xs text-steel-dark font-light">{t('cloud.partner_desc')}</p>
                        </div>
                    </div>
                    <button
                        onClick={() => { navigate(`/${lang}/azure`); window.scrollTo(0, 0); }}
                        className="group flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white shrink-0 transition-all"
                        style={{ background: 'var(--color-electric)', boxShadow: 'none' }}
                        onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 0 30px rgba(0,102,255,0.4)')}
                        onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
                    >
                        {t('cloud.cta')}
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default CloudInfrastructure;
