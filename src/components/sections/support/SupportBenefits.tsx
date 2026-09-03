import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const SupportBenefits: React.FC = () => {
    const { t } = useTranslation('support');
    const items = t('benefits.items', { returnObjects: true }) as string[];

    return (
        <section className="py-24 bg-void relative overflow-hidden border-t border-b border-white/5 line-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            {t('benefits.title')}
                        </h2>
                        <div className="w-20 h-1 bg-signal rounded-full mb-8" />

                        <div className="space-y-6">
                            {items.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start gap-4"
                                >
                                    <CheckCircle2 className="w-6 h-6 text-signal shrink-0 mt-1" />
                                    <p className="text-lg text-gray-300 font-medium">{item}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Interactive Graphic / Chart placeholder */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative hidden lg:block"
                    >
                        <div className="aspect-square rounded-full border border-white/10 flex items-center justify-center p-8 relative">
                            <div className="absolute inset-0 border border-signal/20 rounded-full animate-[spin_10s_linear_infinite]" />
                            <div className="absolute inset-4 border border-neon-ice/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                            <div className="w-full h-full bg-void rounded-full flex items-center justify-center border border-white/5 relative z-10 shadow-[0_0_100px_rgba(0,255,157,0.1)]">
                                <div className="text-center flex flex-col items-center">
                                    <Clock className="w-8 h-8 text-signal mb-2" />
                                    <span className="block text-4xl md:text-5xl font-bold text-white mb-2">
                                        {t('benefits.metric_value', '< 15m')}
                                    </span>
                                    <span className="text-signal font-medium uppercase tracking-wider text-xs md:text-sm px-4 text-center leading-tight">
                                        {t('benefits.metric_label', 'Tiempo medio de respuesta')}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SupportBenefits;
