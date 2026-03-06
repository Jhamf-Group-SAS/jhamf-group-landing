import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Brain, Workflow, BarChart3, Sparkles, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLocale } from '../../hooks/useLocale';

// SVG pipeline visual — no user-visible strings, aria-hidden on parent
const AIPipelineVisual = ({ liveLabel, tasksLabel }: { liveLabel: string; tasksLabel: string }) => (
    <div className="relative w-full h-full min-h-[420px] flex items-center justify-center" aria-hidden="true">
        {/* Outer glow ring */}
        <div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.12) 0%, transparent 70%)' }}
        />

        <svg
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-sm"
        >
            {/* Outer ring */}
            <circle cx="200" cy="200" r="170" stroke="rgba(139,92,246,0.12)" strokeWidth="1" />
            <circle cx="200" cy="200" r="130" stroke="rgba(0,102,255,0.12)" strokeWidth="1" strokeDasharray="4 6" />
            <circle cx="200" cy="200" r="90" stroke="rgba(0,212,255,0.1)" strokeWidth="1" />

            {/* Center node */}
            <circle cx="200" cy="200" r="36" fill="rgba(139,92,246,0.2)" stroke="rgba(139,92,246,0.6)" strokeWidth="1.5" />
            <circle cx="200" cy="200" r="20" fill="rgba(139,92,246,0.4)" />
            <circle cx="200" cy="200" r="7" fill="#A78BFA" />

            {/* Satellite nodes */}
            {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                const rad = (angle * Math.PI) / 180;
                const x = 200 + 130 * Math.cos(rad);
                const y = 200 + 130 * Math.sin(rad);
                const colors = ['#0066FF', '#8B5CF6', '#00D4FF', '#0066FF', '#8B5CF6', '#00FF88'];
                return (
                    <g key={i}>
                        <line x1="200" y1="200" x2={x} y2={y} stroke={colors[i]} strokeWidth="0.5" strokeOpacity="0.3" />
                        <circle cx={x} cy={y} r="10" fill={`${colors[i]}22`} stroke={colors[i]} strokeWidth="1" strokeOpacity="0.7" />
                        <circle cx={x} cy={y} r="3" fill={colors[i]} fillOpacity="0.8" />
                    </g>
                );
            })}

            {/* Outer orbit nodes */}
            {[30, 90, 150, 210, 270, 330].map((angle, i) => {
                const rad = (angle * Math.PI) / 180;
                const x = 200 + 170 * Math.cos(rad);
                const y = 200 + 170 * Math.sin(rad);
                return (
                    <circle key={i} cx={x} cy={y} r="4" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
                );
            })}

            {/* Label */}
            <text x="200" y="204" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="8" fontFamily="JetBrains Mono, monospace" fontWeight="500">
                AI CORE
            </text>
        </svg>

        {/* Floating badges */}
        <div className="absolute top-6 right-6 px-3 py-1.5 rounded-full text-xs font-mono font-medium text-signal" style={{ background: 'rgba(0,255,136,0.1)', border: '1px solid rgba(0,255,136,0.25)' }}>
            ● {liveLabel}
        </div>
        <div className="absolute bottom-8 left-6 px-3 py-1.5 rounded-lg text-xs font-mono text-electric" style={{ background: 'rgba(0,102,255,0.1)', border: '1px solid rgba(0,102,255,0.25)' }}>
            12.4k {tasksLabel}
        </div>
        <div className="absolute top-1/3 left-4 px-3 py-1.5 rounded-lg text-xs font-mono text-neon-ice" style={{ background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)' }}>
            GPT-4o ↔ Azure
        </div>
    </div>
);

const AIAutomation = () => {
    const navigate = useNavigate();
    const { t } = useTranslation('home');
    const { lang } = useLocale();

    // ✅ Defined INSIDE the component: re-evaluated on every language change
    const capabilities = useMemo(() => {
        const items = t('ai_automation.capabilities', { returnObjects: true }) as Array<{ label: string; desc: string }>;
        const icons = [Workflow, Brain, BarChart3, Sparkles];
        return Array.isArray(items)
            ? items.map((item, i) => ({ ...item, icon: icons[i] }))
            : [];
    }, [t]);

    const automationLink = lang === 'es' ? `/${lang}/automatizacion-ia` : `/${lang}/ai-automation`;

    return (
        <section
            id="ai-automation"
            className="relative py-28 overflow-hidden"
            style={{ background: 'var(--color-navy)' }}
        >
            {/* Top divider */}
            <div className="section-divider absolute top-0 left-0 right-0" aria-hidden="true" />

            {/* Background orbs */}
            <div className="orb absolute -top-20 -right-20 w-[400px] h-[400px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)' }} aria-hidden="true" />
            <div className="orb absolute bottom-0 left-0 w-[300px] h-[300px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(0,102,255,0.1) 0%, transparent 70%)' }} aria-hidden="true" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <span className="eyebrow-chip" style={{ background: 'rgba(139,92,246,0.12)', border: '1px solid rgba(139,92,246,0.3)', color: '#A78BFA' }}>
                            <Brain className="w-3.5 h-3.5" aria-hidden="true" />
                            {t('ai_automation.eyebrow')}
                        </span>

                        <h2 className="mt-5 text-4xl md:text-5xl font-display font-bold tracking-tight">
                            {t('ai_automation.headline_1')} <br />
                            <span className="text-gradient-plasma">{t('ai_automation.headline_2')}</span>
                        </h2>

                        <p className="mt-5 text-lg text-steel font-light leading-relaxed max-w-lg">
                            {t('ai_automation.subtext')}
                        </p>

                        {/* Capabilities list */}
                        <ul className="mt-8 space-y-4" role="list">
                            {capabilities.map((cap) => {
                                const Icon = cap.icon;
                                return (
                                    <motion.li
                                        key={cap.label}
                                        initial={{ opacity: 0, x: -16 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4 }}
                                        className="flex items-start gap-4"
                                    >
                                        <div
                                            className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                                            style={{ background: 'rgba(139,92,246,0.12)', border: '1px solid rgba(139,92,246,0.25)' }}
                                        >
                                            <Icon className="w-4.5 h-4.5 text-plasma-bright" aria-hidden="true" />
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-semibold text-white">{cap.label}</h3>
                                            <p className="text-sm text-steel font-light mt-0.5">{cap.desc}</p>
                                        </div>
                                    </motion.li>
                                );
                            })}
                        </ul>

                        <div className="mt-10 flex items-center gap-4">
                            <button
                                onClick={() => { navigate(automationLink); window.scrollTo(0, 0); }}
                                className="group flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all"
                                style={{ background: 'rgba(139,92,246,0.2)', border: '1px solid rgba(139,92,246,0.4)' }}
                                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(139,92,246,0.3)')}
                                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(139,92,246,0.2)')}
                            >
                                {t('ai_automation.cta')}
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                            </button>
                        </div>
                    </motion.div>

                    {/* Right: Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="rounded-3xl glass-card p-6 relative overflow-hidden"
                        style={{ border: '1px solid rgba(139,92,246,0.15)' }}
                    >
                        <AIPipelineVisual
                            liveLabel={t('ai_automation.live_badge')}
                            tasksLabel={t('ai_automation.tasks_badge')}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AIAutomation;
