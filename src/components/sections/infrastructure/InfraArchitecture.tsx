import React from 'react';
import { motion } from 'framer-motion';
import { Server, Cloud, ArrowLeftRight, Activity } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const InfraArchitecture: React.FC = () => {
    const { t } = useTranslation('infrastructure');
    const onPremiseItems = t('architecture.onPremiseItems', { returnObjects: true }) as string[];
    const cloudItems = t('architecture.cloudItems', { returnObjects: true }) as string[];

    return (
        <section className="relative py-24 bg-navy overflow-hidden">
            {/* Subtle dot pattern */}
            <div className="absolute inset-0 bg-dots opacity-40" />
            <div className="absolute top-0 left-0 right-0 section-divider" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-4"
                    >
                        <span className="eyebrow-chip">
                            {t('architecture.eyebrow')}
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-display font-bold text-white mb-4"
                    >
                        {t('architecture.title')}{' '}
                        <span className="text-electric">{t('architecture.titleHighlight')}</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="text-steel max-w-2xl mx-auto text-lg"
                    >
                        {t('architecture.subtitle')}
                    </motion.p>
                </div>

                {/* Architecture Diagram */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-0 items-stretch">
                        {/* On-Premise Column */}
                        <div className="glass-card rounded-2xl p-8 neon-border-electric">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 rounded-lg bg-electric/15 flex items-center justify-center">
                                    <Server className="w-5 h-5 text-electric" />
                                </div>
                                <h3 className="text-lg font-display font-bold text-white">{t('architecture.onPremise')}</h3>
                            </div>
                            <div className="space-y-3">
                                {onPremiseItems.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + i * 0.08 }}
                                        className="flex items-center gap-3 p-3 rounded-lg bg-white/3 border border-white/5 hover:border-electric/30 transition-colors"
                                    >
                                        <span className="w-2 h-2 rounded-full bg-electric animate-pulse" style={{ animationDelay: `${i * 0.3}s` }} />
                                        <span className="text-sm text-white/80 font-medium">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Connection Bridge */}
                        <div className="flex lg:flex-col items-center justify-center px-4 py-6 lg:py-0">
                            <div className="flex lg:flex-col items-center gap-3">
                                <div className="w-12 h-px lg:w-px lg:h-12 bg-gradient-to-r lg:bg-gradient-to-b from-electric to-transparent" />
                                <motion.div
                                    animate={{ scale: [1, 1.15, 1] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                                    className="w-12 h-12 rounded-full bg-navy-mid border border-electric/40 flex items-center justify-center shadow-electric"
                                >
                                    <ArrowLeftRight className="w-5 h-5 text-electric" />
                                </motion.div>
                                <div className="w-12 h-px lg:w-px lg:h-12 bg-gradient-to-l lg:bg-gradient-to-t from-signal to-transparent" />
                            </div>
                            <div className="hidden lg:block mt-4">
                                <p className="text-2xs font-mono text-steel-dark text-center tracking-wider uppercase whitespace-nowrap">
                                    {t('architecture.connection')}
                                </p>
                            </div>
                        </div>

                        {/* Cloud Column */}
                        <div className="glass-card rounded-2xl p-8" style={{ border: '1px solid rgba(0, 255, 136, 0.25)', boxShadow: '0 0 20px rgba(0, 255, 136, 0.1), inset 0 0 20px rgba(0, 255, 136, 0.03)' }}>
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 rounded-lg bg-signal/15 flex items-center justify-center">
                                    <Cloud className="w-5 h-5 text-signal" />
                                </div>
                                <h3 className="text-lg font-display font-bold text-white">{t('architecture.cloud')}</h3>
                            </div>
                            <div className="space-y-3">
                                {cloudItems.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + i * 0.08 }}
                                        className="flex items-center gap-3 p-3 rounded-lg bg-white/3 border border-white/5 hover:border-signal/30 transition-colors"
                                    >
                                        <span className="w-2 h-2 rounded-full bg-signal animate-pulse" style={{ animationDelay: `${i * 0.3}s` }} />
                                        <span className="text-sm text-white/80 font-medium">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Monitoring bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="mt-8 flex items-center justify-center gap-3 p-4 rounded-xl bg-white/3 border border-white/8"
                    >
                        <Activity className="w-5 h-5 text-neon-ice animate-pulse" />
                        <span className="text-sm font-medium text-white/70">{t('architecture.monitoring')}</span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default InfraArchitecture;
