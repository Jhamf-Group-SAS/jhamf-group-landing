import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const AssetsBenefits: React.FC = () => {
    const { t } = useTranslation('assets');
    const items = t('benefits.items', { returnObjects: true }) as Array<{
        stat: string;
        label: string;
        description: string;
    }>;

    const accentColors = [
        { text: 'text-plasma-bright', bg: 'bg-plasma/10', border: 'border-plasma/20', glow: '0 0 40px rgba(139,92,246,0.15)' },
        { text: 'text-signal', bg: 'bg-signal/10', border: 'border-signal/20', glow: '0 0 40px rgba(0,255,136,0.15)' },
        { text: 'text-neon-ice', bg: 'bg-neon-ice/10', border: 'border-neon-ice/20', glow: '0 0 40px rgba(0,212,255,0.15)' },
        { text: 'text-electric-glow', bg: 'bg-electric/10', border: 'border-electric/20', glow: '0 0 40px rgba(0,102,255,0.15)' },
    ];

    return (
        <section className="relative py-24 bg-void overflow-hidden">
            <div className="absolute top-0 left-0 right-0 section-divider" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[35%] h-[35%] rounded-full bg-plasma/6 blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-4"
                    >
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-[0.1em] uppercase" style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.3)', color: '#A78BFA' }}>
                            {t('benefits.eyebrow')}
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-display font-bold text-white mb-4"
                    >
                        {t('benefits.title')}{' '}
                        <span className="text-plasma-bright">{t('benefits.titleHighlight')}</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {items.map((item, index) => {
                        const color = accentColors[index % accentColors.length];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.12 }}
                                className={`group relative p-8 rounded-2xl bg-white/[0.03] border ${color.border} hover:bg-white/[0.06] transition-all duration-500`}
                                style={{ boxShadow: color.glow }}
                            >
                                <div className={`text-4xl md:text-5xl font-display font-bold ${color.text} mb-3 tracking-tight`}>
                                    {item.stat}
                                </div>
                                <h3 className="text-base font-bold text-white mb-2">{item.label}</h3>
                                <p className="text-sm text-steel leading-relaxed">{item.description}</p>
                                <div className={`absolute top-0 right-0 w-16 h-16 ${color.bg} rounded-bl-3xl rounded-tr-2xl opacity-50 group-hover:opacity-80 transition-opacity`} />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default AssetsBenefits;
