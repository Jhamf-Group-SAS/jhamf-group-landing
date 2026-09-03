import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const SupportProcess: React.FC = () => {
    const { t } = useTranslation('support');
    const steps = t('process.steps', { returnObjects: true }) as Array<{ step: string; title: string; description: string }>;

    return (
        <section className="py-24 bg-void">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        {t('process.title')}
                    </motion.h2>
                </div>

                <div className="relative">
                    {/* Connecting UI line for desktop */}
                    <div className="hidden lg:block absolute top-[4.5rem] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative text-center group"
                            >
                                <div className="w-16 h-16 mx-auto bg-void border-2 border-white/10 rounded-full flex items-center justify-center mb-6 relative z-10 group-hover:border-signal transition-colors group-hover:shadow-[0_0_30px_rgba(0,255,157,0.2)]">
                                    <span className="text-xl font-bold font-mono text-gray-400 group-hover:text-signal transition-colors">{step.step}</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SupportProcess;
