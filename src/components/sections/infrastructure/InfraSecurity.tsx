import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, ArrowUpCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const InfraSecurity: React.FC = () => {
    const { t } = useTranslation('infrastructure');
    const items = t('security.items', { returnObjects: true }) as Array<{
        title: string;
        description: string;
    }>;

    return (
        <section className="relative py-24 bg-navy overflow-hidden">
            <div className="absolute top-0 left-0 right-0 section-divider" />
            <div className="absolute inset-0 bg-dots opacity-30" />
            <div className="absolute top-[20%] right-[-10%] w-[30%] h-[40%] rounded-full bg-electric/6 blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-4"
                    >
                        <span className="eyebrow-chip">
                            <Shield className="w-3.5 h-3.5" />
                            {t('security.eyebrow')}
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-display font-bold text-white mb-4"
                    >
                        {t('security.title')}{' '}
                        <span className="text-gradient-electric">{t('security.titleHighlight')}</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="text-steel max-w-2xl mx-auto text-lg"
                    >
                        {t('security.subtitle')}
                    </motion.p>
                </div>

                {/* Compliance badges grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group glass-card rounded-2xl p-6 text-center hover:neon-border-electric transition-all duration-400"
                        >
                            <div className="w-12 h-12 mx-auto rounded-full bg-electric/10 flex items-center justify-center mb-4 group-hover:bg-electric/20 transition-colors">
                                <CheckCircle className="w-6 h-6 text-electric" />
                            </div>
                            <h3 className="text-lg font-display font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-sm text-steel leading-relaxed">{item.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Uptime guarantee banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="max-w-3xl mx-auto p-8 rounded-2xl neon-border-electric bg-electric/[0.04] text-center"
                >
                    <div className="flex items-center justify-center gap-3 mb-3">
                        <ArrowUpCircle className="w-6 h-6 text-signal" />
                        <h3 className="text-xl font-display font-bold text-white">{t('security.uptimeGuarantee')}</h3>
                    </div>
                    <p className="text-steel text-sm">{t('security.uptimeDescription')}</p>
                </motion.div>
            </div>
        </section>
    );
};

export default InfraSecurity;
