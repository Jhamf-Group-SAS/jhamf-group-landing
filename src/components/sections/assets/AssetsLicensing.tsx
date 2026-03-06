import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const AssetsLicensing: React.FC = () => {
    const { t } = useTranslation('assets');
    const types = t('licensing.types', { returnObjects: true }) as Array<{
        name: string;
        description: string;
        highlight: string;
    }>;
    const vendors = t('licensing.vendors', { returnObjects: true }) as string[];

    const cardBorders = [
        'border-plasma/30 hover:border-plasma/60',
        'border-neon-ice/30 hover:border-neon-ice/60',
        'border-signal/30 hover:border-signal/60',
    ];
    const highlightColors = ['bg-plasma/15 text-plasma-bright', 'bg-neon-ice/15 text-neon-ice', 'bg-signal/15 text-signal'];

    return (
        <section className="relative py-24 bg-void overflow-hidden">
            <div className="absolute top-0 left-0 right-0 section-divider" />
            <div className="absolute bottom-[-10%] left-[-8%] w-[35%] h-[50%] rounded-full bg-neon-ice/6 blur-[130px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-4"
                    >
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-[0.1em] uppercase" style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.3)', color: '#00D4FF' }}>
                            {t('licensing.eyebrow')}
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-display font-bold text-white mb-4"
                    >
                        {t('licensing.title')}{' '}
                        <span className="text-gradient-plasma">{t('licensing.titleHighlight')}</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="text-steel max-w-2xl mx-auto text-lg"
                    >
                        {t('licensing.subtitle')}
                    </motion.p>
                </div>

                {/* License type comparison */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
                    {types.map((type, tIdx) => (
                        <motion.div
                            key={tIdx}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: tIdx * 0.12 }}
                            className={`group glass-card rounded-2xl p-8 border ${cardBorders[tIdx]} transition-all duration-400`}
                        >
                            <div className={`inline-block px-3 py-1 rounded-full text-2xs font-mono font-medium tracking-wider uppercase mb-5 ${highlightColors[tIdx]}`}>
                                {type.highlight}
                            </div>
                            <h3 className="text-xl font-display font-bold text-white mb-3">{type.name}</h3>
                            <p className="text-sm text-steel leading-relaxed">{type.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Vendor partners */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap justify-center gap-4"
                >
                    {vendors.map((vendor, vIdx) => (
                        <div
                            key={vIdx}
                            className="px-5 py-3 rounded-xl bg-white/[0.04] border border-white/8 text-sm font-medium text-white/70 hover:text-white hover:border-plasma/30 transition-all duration-300"
                        >
                            {vendor}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default AssetsLicensing;
