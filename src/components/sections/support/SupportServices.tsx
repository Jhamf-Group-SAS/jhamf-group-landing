import React from 'react';
import { motion } from 'framer-motion';
import { Headphones, ShieldAlert, Server, Activity } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const icons = [Headphones, ShieldAlert, Server, Activity];

const SupportServices: React.FC = () => {
    const { t } = useTranslation('support');

    // As in other components, items is an array of objects
    const items = t('services.items', { returnObjects: true }) as Array<{ title: string; description: string }>;

    return (
        <section className="py-24 bg-void relative">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-6"
                    >
                        {t('services.title')}
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
                                className="group relative bg-obsidian border border-white/10 rounded-2xl p-8 hover:border-signal/50 transition-colors"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-signal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

                                <div className="relative z-10">
                                    <div className="w-14 h-14 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:bg-signal/10 group-hover:border-signal/30">
                                        <Icon className="w-7 h-7 text-gray-400 group-hover:text-signal transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-signal transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default SupportServices;
