import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Brain, Workflow, BarChart3, Sparkles, ArrowRight, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLocale } from '../../hooks/useLocale';

// Animated workflow pipeline visual
const AIPipelineVisual = ({ liveLabel, tasksLabel }: { liveLabel: string; tasksLabel: string }) => (
    <div className="relative w-full h-full min-h-[420px] flex items-center justify-center font-mono overflow-hidden rounded-2xl bg-void" aria-hidden="true">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-10" style={{ 
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', 
            backgroundSize: '20px 20px' 
        }} />

        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <line x1="15" y1="50" x2="50" y2="50" stroke="rgba(139,92,246,0.3)" strokeWidth="2" strokeDasharray="2 2" vectorEffect="non-scaling-stroke" />
            <path d="M 50 50 L 65 50 L 70 25 L 85 25" fill="none" stroke="rgba(0,255,136,0.3)" strokeWidth="2" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
            <path d="M 50 50 L 65 50 L 70 75 L 85 75" fill="none" stroke="rgba(0,102,255,0.3)" strokeWidth="2" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
        </svg>

        {/* Particles */}
        <motion.div 
            className="absolute w-2 h-2 rounded-full bg-plasma-bright shadow-[0_0_10px_rgba(139,92,246,0.8)] -ml-1 -mt-1"
            animate={{ left: ['15%', '50%'], top: ['50%', '50%'], opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
            className="absolute w-2 h-2 rounded-full bg-plasma-bright shadow-[0_0_10px_rgba(139,92,246,0.8)] -ml-1 -mt-1"
            animate={{ left: ['15%', '50%'], top: ['50%', '50%'], opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.75 }}
        />
        <motion.div 
            className="absolute w-2 h-2 rounded-full bg-signal shadow-[0_0_10px_rgba(0,255,136,0.8)] -ml-1 -mt-1"
            animate={{ left: ['50%', '65%', '70%', '85%'], top: ['50%', '50%', '25%', '25%'], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
            className="absolute w-2 h-2 rounded-full bg-electric shadow-[0_0_10px_rgba(0,102,255,0.8)] -ml-1 -mt-1"
            animate={{ left: ['50%', '65%', '70%', '85%'], top: ['50%', '50%', '75%', '75%'], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
        />

        {/* Input Node (Repetitive Tasks) */}
        <motion.div 
            className="absolute left-[15%] top-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3"
            initial={{ opacity: 0.9 }}
        >
            <div className="w-14 h-14 rounded-lg bg-[#0a0a0a] border border-white/10 flex items-center justify-center relative overflow-hidden shadow-lg">
                <FileText className="w-6 h-6 text-steel" />
                <motion.div 
                    className="absolute inset-0 bg-white/5" 
                    animate={{ y: ['100%', '-100%'] }} 
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }} 
                />
            </div>
            <div className="text-center bg-void/50 px-2 py-1 rounded backdrop-blur-sm">
                <div className="text-[10px] text-steel font-bold tracking-widest uppercase">Manual</div>
                <div className="text-[9px] text-steel/60">Hojas de cálculo</div>
            </div>
        </motion.div>

        {/* Central AI Node */}
        <motion.div 
            className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-10"
            animate={{ y: ['-50%', 'calc(-50% - 5px)', '-50%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
            <div className="relative">
                <motion.div 
                    className="absolute inset-0 bg-plasma-bright/30 blur-2xl rounded-full"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="w-24 h-24 rounded-2xl bg-[#0a0a0a] border border-plasma-bright/50 text-plasma-bright flex items-center justify-center relative shadow-[0_0_30px_rgba(139,92,246,0.2)]">
                    <Brain className="w-10 h-10" />
                    <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
                        <circle cx="48" cy="48" r="46" fill="none" stroke="rgba(139,92,246,0.1)" strokeWidth="2" />
                        <motion.circle 
                            cx="48" cy="48" r="46" fill="none" stroke="rgba(139,92,246,0.8)" strokeWidth="2"
                            strokeDasharray="289"
                            animate={{ strokeDashoffset: [289, 0, 289] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </svg>
                </div>
            </div>
            <div className="flex flex-col items-center bg-[#0a0a0a]/80 backdrop-blur-sm border border-plasma/30 px-4 py-1.5 rounded-lg">
                <span className="text-[11px] text-white font-bold tracking-wider">AI CORE</span>
                <span className="text-[9px] text-plasma-bright animate-pulse">Automatizando...</span>
            </div>
        </motion.div>

        {/* Output Node 1 (Strategy) */}
        <motion.div 
            className="absolute left-[85%] top-[25%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
            <div className="w-14 h-14 rounded-full bg-[#0a0a0a] border border-signal/40 flex items-center justify-center shadow-[0_0_20px_rgba(0,255,136,0.15)] relative">
                <motion.div 
                    className="absolute inset-0 bg-signal/10 rounded-full"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                />
                <Sparkles className="w-6 h-6 text-signal" />
            </div>
            <div className="text-center bg-void/50 px-2 py-1 rounded backdrop-blur-sm">
                <div className="text-[10px] text-signal font-bold tracking-widest uppercase">Estrategia</div>
                <div className="text-[9px] text-signal/60">Enfoque vital</div>
            </div>
        </motion.div>

        {/* Output Node 2 (Growth) */}
        <motion.div 
            className="absolute left-[85%] top-[75%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
            <div className="w-14 h-14 rounded-full bg-[#0a0a0a] border border-electric/40 flex items-center justify-center shadow-[0_0_20px_rgba(0,102,255,0.15)] relative">
                <motion.div 
                    className="absolute inset-0 bg-electric/10 rounded-full"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
                />
                <BarChart3 className="w-6 h-6 text-electric" />
            </div>
            <div className="text-center bg-void/50 px-2 py-1 rounded backdrop-blur-sm">
                <div className="text-[10px] text-electric font-bold tracking-widest uppercase">Crecimiento</div>
                <div className="text-[9px] text-electric/60">Escalabilidad</div>
            </div>
        </motion.div>

        {/* Floating badges */}
        <motion.div 
            className="absolute top-6 left-6 px-3 py-1.5 rounded-md text-[10px] font-medium text-signal border border-signal/20 bg-signal/10 flex items-center gap-2 backdrop-blur-sm"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
            <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse" />
            {liveLabel}
        </motion.div>
        <motion.div 
            className="absolute bottom-6 left-6 px-3 py-1.5 rounded-md text-[10px] text-electric border border-electric/20 bg-electric/10 backdrop-blur-sm"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
            {tasksLabel}: 12.4k/hr
        </motion.div>
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
                            <span className="text-plasma-bright">{t('ai_automation.headline_2')}</span>
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
