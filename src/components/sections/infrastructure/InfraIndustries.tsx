import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Landmark, Factory, Building, ShoppingBag, GraduationCap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const industryIcons = [Heart, Landmark, Factory, Building, ShoppingBag, GraduationCap];

const InfraIndustries: React.FC = () => {
    const { t } = useTranslation('infrastructure');
    const items = t('industries.items', { returnObjects: true }) as Array<{
        name: string;
        description: string;
    }>;

    return (
        <section className="relative py-24 bg-navy overflow-hidden">
            <div className="absolute top-0 left-0 right-0 section-divider" />
            <div className="absolute inset-0 bg-grid opacity-20" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-4"
                    >
                        <span className="eyebrow-chip">{t('industries.eyebrow')}</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-display font-bold text-white mb-4"
                    >
                        {t('industries.title')}{' '}
                        <span className="text-gradient-electric">{t('industries.titleHighlight')}</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="text-steel max-w-2xl mx-auto text-lg"
                    >
                        {t('industries.subtitle')}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item, index) => {
                        const Icon = industryIcons[index] || Building;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                className="group p-6 rounded-2xl bg-white/[0.03] border border-white/8 hover:border-electric/30 transition-all duration-400"
                            >
                                <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center mb-4 group-hover:bg-electric/20 transition-colors">
                                    <Icon className="w-6 h-6 text-electric" />
                                </div>
                                <h3 className="text-lg font-display font-bold text-white mb-2">{item.name}</h3>
                                <p className="text-sm text-steel leading-relaxed">{item.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default InfraIndustries;
