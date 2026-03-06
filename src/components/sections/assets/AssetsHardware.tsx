import React from 'react';
import { motion } from 'framer-motion';
import { Laptop, HardDrive, Network } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const categoryIcons = [Laptop, HardDrive, Network];

const AssetsHardware: React.FC = () => {
    const { t } = useTranslation('assets');
    const categories = t('hardware.categories', { returnObjects: true }) as Array<{
        name: string;
        items: string[];
    }>;
    const steps = (t('hardware.process.steps', { returnObjects: true }) as Array<{
        step: string;
        title: string;
        description: string;
    }>);

    return (
        <section className="relative py-24 bg-navy overflow-hidden">
            <div className="absolute top-0 left-0 right-0 section-divider" />
            <div className="absolute inset-0 bg-dots opacity-30" />

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
                            {t('hardware.eyebrow')}
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-display font-bold text-white mb-4"
                    >
                        {t('hardware.title')}{' '}
                        <span className="text-gradient-plasma">{t('hardware.titleHighlight')}</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="text-steel max-w-2xl mx-auto text-lg"
                    >
                        {t('hardware.subtitle')}
                    </motion.p>
                </div>

                {/* Hardware categories */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {categories.map((cat, cIdx) => {
                        const Icon = categoryIcons[cIdx] || HardDrive;
                        return (
                            <motion.div
                                key={cIdx}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: cIdx * 0.1 }}
                                className="glass-card rounded-2xl p-7"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-lg bg-plasma/15 flex items-center justify-center">
                                        <Icon className="w-5 h-5 text-plasma-bright" />
                                    </div>
                                    <h3 className="text-base font-display font-bold text-white">{cat.name}</h3>
                                </div>
                                <div className="space-y-2.5">
                                    {cat.items.map((item, iIdx) => (
                                        <div key={iIdx} className="flex items-center gap-3 p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-plasma-bright flex-shrink-0" />
                                            <span className="text-sm text-white/75">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Procurement Process */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <h3 className="text-xl font-display font-bold text-white text-center mb-10">
                        {t('hardware.process.title')}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {steps.map((step, sIdx) => (
                            <motion.div
                                key={sIdx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + sIdx * 0.1 }}
                                className="relative p-6 rounded-xl bg-white/[0.03] border border-white/8"
                            >
                                <div className="text-3xl font-display font-bold text-plasma/30 mb-3">{step.step}</div>
                                <h4 className="text-base font-bold text-white mb-2">{step.title}</h4>
                                <p className="text-sm text-steel leading-relaxed">{step.description}</p>
                                {/* Connector line */}
                                {sIdx < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-plasma/40 to-transparent" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AssetsHardware;
