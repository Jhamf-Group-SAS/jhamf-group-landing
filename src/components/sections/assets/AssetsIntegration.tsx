import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightLeft, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AssetsIntegration: React.FC = () => {
    const { t } = useTranslation('assets');
    const platforms = t('integration.platforms', { returnObjects: true }) as Array<{
        name: string;
        category: string;
    }>;
    const features = t('integration.features', { returnObjects: true }) as string[];

    return (
        <section className="relative py-24 bg-navy overflow-hidden">
            <div className="absolute top-0 left-0 right-0 section-divider" />
            <div className="absolute inset-0 bg-dots opacity-25" />
            <div className="absolute top-[30%] right-[-10%] w-[30%] h-[40%] rounded-full bg-neon-ice/5 blur-[130px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-4"
                    >
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-[0.1em] uppercase" style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.3)', color: '#00D4FF' }}>
                            <ArrowRightLeft className="w-3.5 h-3.5" />
                            {t('integration.eyebrow')}
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-display font-bold text-white mb-4"
                    >
                        {t('integration.title')}{' '}
                        <span className="text-plasma-bright">{t('integration.titleHighlight')}</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="text-steel max-w-2xl mx-auto text-lg"
                    >
                        {t('integration.subtitle')}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Platform hub */}
                    <motion.div
                        initial={{ opacity: 0, x: -25 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {platforms.map((platform, pIdx) => (
                                <div
                                    key={pIdx}
                                    className="group glass-card rounded-xl p-5 text-center hover:neon-border-plasma transition-all duration-400"
                                >
                                    <div className="text-sm font-bold text-white mb-1 group-hover:text-plasma-bright transition-colors">
                                        {platform.name}
                                    </div>
                                    <div className="text-2xs font-mono text-steel-dark uppercase tracking-wider">
                                        {platform.category}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Integration features */}
                    <motion.div
                        initial={{ opacity: 0, x: 25 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col justify-center"
                    >
                        <div className="space-y-4">
                            {features.map((feature, fIdx) => (
                                <motion.div
                                    key={fIdx}
                                    initial={{ opacity: 0, x: 15 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.35 + fIdx * 0.08 }}
                                    className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/8 hover:border-neon-ice/25 transition-colors"
                                >
                                    <CheckCircle2 className="w-5 h-5 text-neon-ice mt-0.5 flex-shrink-0" />
                                    <span className="text-sm text-white/80">{feature}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AssetsIntegration;
