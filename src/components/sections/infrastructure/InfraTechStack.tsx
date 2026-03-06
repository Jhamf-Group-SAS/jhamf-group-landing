import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const InfraTechStack: React.FC = () => {
    const { t } = useTranslation('infrastructure');
    const categories = t('techStack.categories', { returnObjects: true }) as Array<{
        name: string;
        brands: string[];
    }>;

    const brandColors: Record<string, string> = {
        'Cisco': '#049FD9', 'Ubiquiti': '#0559C9', 'Aruba': '#FF8300', 'MikroTik': '#293239',
        'Dell': '#007DB8', 'HPE': '#01A982', 'Lenovo': '#E2231A', 'Supermicro': '#00457C',
        'Fortinet': '#EE3124', 'Palo Alto': '#FA582D', 'SonicWall': '#F47B20', 'Sophos': '#003366',
        'Microsoft Azure': '#0078D4', 'AWS': '#FF9900', 'Google Cloud': '#4285F4', 'VMware': '#607078',
    };

    return (
        <section className="relative py-24 bg-void overflow-hidden">
            <div className="absolute top-0 left-0 right-0 section-divider" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-4"
                    >
                        <span className="eyebrow-chip">{t('techStack.eyebrow')}</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-display font-bold text-white mb-4"
                    >
                        {t('techStack.title')}{' '}
                        <span className="text-gradient-electric">{t('techStack.titleHighlight')}</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="text-steel max-w-2xl mx-auto text-lg"
                    >
                        {t('techStack.subtitle')}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category, cIdx) => (
                        <motion.div
                            key={cIdx}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: cIdx * 0.1 }}
                            className="glass-card rounded-2xl p-6"
                        >
                            <h3 className="text-sm font-mono font-medium text-electric tracking-wider uppercase mb-6">
                                {category.name}
                            </h3>
                            <div className="space-y-3">
                                {category.brands.map((brand, bIdx) => {
                                    const color = brandColors[brand] || '#94A3B8';
                                    return (
                                        <div
                                            key={bIdx}
                                            className="group flex items-center gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all duration-300"
                                        >
                                            <div
                                                className="w-3 h-3 rounded-full flex-shrink-0"
                                                style={{ backgroundColor: color, boxShadow: `0 0 10px ${color}40` }}
                                            />
                                            <span className="text-sm text-white/80 font-medium group-hover:text-white transition-colors">
                                                {brand}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InfraTechStack;
