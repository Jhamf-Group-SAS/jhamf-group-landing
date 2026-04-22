import React from 'react';
import { motion } from 'framer-motion';
import { Cable, Wifi, Eye, Server } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const serviceIcons = [Cable, Wifi, Eye, Server];

const InfraServices: React.FC = () => {
    const { t } = useTranslation('infrastructure');
    const items = t('services.items', { returnObjects: true }) as Array<{
        title: string;
        description: string;
        features: string[];
    }>;

    return (
        <section id="services" className="relative py-24 bg-void overflow-hidden">
            {/* Top divider */}
            <div className="absolute top-0 left-0 right-0 section-divider" />

            {/* Background accent */}
            <div className="absolute top-1/2 left-[-20%] w-[40%] h-[60%] -translate-y-1/2 rounded-full bg-electric/5 blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-4"
                    >
                        <span className="eyebrow-chip">
                            <Server className="w-3.5 h-3.5" />
                            {t('services.eyebrow')}
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-display font-bold text-white mb-4"
                    >
                        {t('services.title')}{' '}
                        <span className="text-electric">{t('services.titleHighlight')}</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="text-steel max-w-2xl mx-auto text-lg"
                    >
                        {t('services.subtitle')}
                    </motion.p>
                </div>

                {/* Service Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {items.map((service, index) => {
                        const Icon = serviceIcons[index] || Server;
                        return (
                            <motion.article
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group glass-card rounded-2xl p-8 hover:neon-border-electric transition-all duration-500"
                            >
                                {/* Icon */}
                                <div className="w-14 h-14 rounded-xl bg-electric/10 flex items-center justify-center mb-6 group-hover:bg-electric/20 transition-colors duration-300">
                                    <Icon className="w-7 h-7 text-electric group-hover:scale-110 transition-transform duration-300" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-electric-glow transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-steel text-sm leading-relaxed mb-6">
                                    {service.description}
                                </p>

                                {/* Feature tags */}
                                <div className="flex flex-wrap gap-2">
                                    {service.features.map((feature, fIdx) => (
                                        <span
                                            key={fIdx}
                                            className="px-3 py-1 text-2xs font-mono tracking-wider uppercase rounded-full bg-white/5 border border-white/8 text-steel"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default InfraServices;
