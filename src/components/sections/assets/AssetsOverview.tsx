import React from 'react';
import { motion } from 'framer-motion';
import { MonitorSmartphone, FileText, Database, BarChart3, RefreshCw, PiggyBank } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const overviewIcons = [MonitorSmartphone, FileText, Database, BarChart3, RefreshCw, PiggyBank];

const AssetsOverview: React.FC = () => {
    const { t } = useTranslation('assets');
    const items = t('overview.items', { returnObjects: true }) as Array<{
        title: string;
        description: string;
    }>;

    return (
        <section id="services" className="relative py-24 bg-void overflow-hidden">
            <div className="absolute top-0 left-0 right-0 section-divider" />
            <div className="absolute top-1/3 right-[-15%] w-[35%] h-[50%] rounded-full bg-plasma/5 blur-[130px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-4"
                    >
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-[0.1em] uppercase" style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.3)', color: '#A78BFA' }}>
                            {t('overview.eyebrow')}
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-display font-bold text-white mb-4"
                    >
                        {t('overview.title')}{' '}
                        <span className="text-gradient-plasma">{t('overview.titleHighlight')}</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="text-steel max-w-2xl mx-auto text-lg"
                    >
                        {t('overview.subtitle')}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item, index) => {
                        const Icon = overviewIcons[index] || Database;
                        return (
                            <motion.article
                                key={index}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                className="group glass-card rounded-2xl p-7 hover:neon-border-plasma transition-all duration-500"
                            >
                                <div className="w-12 h-12 rounded-xl bg-plasma/10 flex items-center justify-center mb-5 group-hover:bg-plasma/20 transition-colors duration-300">
                                    <Icon className="w-6 h-6 text-plasma-bright group-hover:scale-110 transition-transform duration-300" />
                                </div>
                                <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-plasma-bright transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-steel leading-relaxed">{item.description}</p>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default AssetsOverview;
