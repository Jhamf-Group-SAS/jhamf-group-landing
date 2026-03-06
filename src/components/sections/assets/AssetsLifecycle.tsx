import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, ShoppingCart, Rocket, Settings, TrendingUp, Trash2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const stageIcons: Record<string, React.FC<{ className?: string }>> = {
    plan: ClipboardList,
    acquire: ShoppingCart,
    deploy: Rocket,
    operate: Settings,
    optimize: TrendingUp,
    retire: Trash2,
};

const stageColors = [
    { dot: 'bg-plasma', line: 'from-plasma/60' },
    { dot: 'bg-plasma-bright', line: 'from-plasma-bright/60' },
    { dot: 'bg-neon-ice', line: 'from-neon-ice/60' },
    { dot: 'bg-electric', line: 'from-electric/60' },
    { dot: 'bg-signal', line: 'from-signal/60' },
    { dot: 'bg-steel', line: 'from-steel/60' },
];

const AssetsLifecycle: React.FC = () => {
    const { t } = useTranslation('assets');
    const stages = t('lifecycle.stages', { returnObjects: true }) as Array<{
        name: string;
        description: string;
        icon: string;
    }>;

    return (
        <section className="relative py-24 bg-navy overflow-hidden">
            <div className="absolute top-0 left-0 right-0 section-divider" />
            <div className="absolute inset-0 bg-grid opacity-15" />
            <div className="absolute top-[20%] left-[-10%] w-[30%] h-[40%] rounded-full bg-plasma/5 blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-4"
                    >
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-[0.1em] uppercase" style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.3)', color: '#A78BFA' }}>
                            {t('lifecycle.eyebrow')}
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-display font-bold text-white mb-4"
                    >
                        {t('lifecycle.title')}{' '}
                        <span className="text-gradient-plasma">{t('lifecycle.titleHighlight')}</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="text-steel max-w-2xl mx-auto text-lg"
                    >
                        {t('lifecycle.subtitle')}
                    </motion.p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Desktop timeline track */}
                    <div className="hidden lg:block absolute top-14 left-0 right-0 h-px bg-gradient-to-r from-plasma/40 via-neon-ice/30 to-signal/40" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-4">
                        {stages.map((stage, sIdx) => {
                            const Icon = stageIcons[stage.icon] || Settings;
                            const color = stageColors[sIdx] || stageColors[0];
                            return (
                                <motion.div
                                    key={sIdx}
                                    initial={{ opacity: 0, y: 25 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: sIdx * 0.1 }}
                                    className="relative text-center"
                                >
                                    {/* Node dot */}
                                    <div className="relative z-10 mx-auto mb-6">
                                        <div className={`w-11 h-11 mx-auto rounded-full ${color.dot}/15 flex items-center justify-center border border-white/10`}>
                                            <Icon className="w-5 h-5 text-white/80" />
                                        </div>
                                    </div>
                                    {/* Card */}
                                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/8 hover:border-plasma/25 transition-colors">
                                        <h4 className="text-sm font-display font-bold text-white mb-2">{stage.name}</h4>
                                        <p className="text-xs text-steel leading-relaxed">{stage.description}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AssetsLifecycle;
