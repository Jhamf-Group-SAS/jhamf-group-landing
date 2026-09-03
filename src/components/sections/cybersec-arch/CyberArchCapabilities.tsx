import React from 'react';
import { motion } from 'framer-motion';
import { Lock, SearchCode, FileCheck, KeyRound } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const icons = [Lock, SearchCode, FileCheck, KeyRound];

const CyberArchCapabilities: React.FC = () => {
    const { t } = useTranslation('cyberarch');
    const items = t('capabilities.items', { returnObjects: true }) as Array<{ title: string; description: string }>;

    return (
        <section className="py-24 bg-void relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        {t('capabilities.title')}
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {items.map((service, index) => {
                        const Icon = icons[index % icons.length];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-void border border-white/5 hover:border-neon-ice/30 rounded-2xl p-8 transition-all hover:bg-white/[0.02]"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="w-14 h-14 shrink-0 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center group-hover:bg-neon-ice/10 group-hover:border-neon-ice/30 transition-colors">
                                        <Icon className="w-7 h-7 text-electric-glow group-hover:text-neon-ice transition-colors" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-ice transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-400 leading-relaxed text-sm">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CyberArchCapabilities;
