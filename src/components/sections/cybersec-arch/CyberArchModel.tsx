import React from 'react';
import { motion } from 'framer-motion';
import { Network, Smartphone, Fingerprint, AppWindow, Database } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const pillarsIcons = [Fingerprint, Smartphone, Network, AppWindow, Database];

const CyberArchModel: React.FC = () => {
    const { t } = useTranslation('cyberarch');
    const pillars = t('model.pillars', { returnObjects: true }) as Array<{ name: string; desc: string }>;

    return (
        <section className="py-24 bg-void relative">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-electric-glow to-neon-ice mb-6"
                    >
                        {t('model.title')}
                    </motion.h2>
                </div>

                <div className="relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden lg:block absolute top-12 left-10 right-10 h-0.5 bg-gradient-to-r from-transparent via-neon-ice/20 to-transparent" />

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
                        {pillars.map((pillar, index) => {
                            const Icon = pillarsIcons[index % pillarsIcons.length];
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative flex flex-col items-center text-center group"
                                >
                                    <div className="w-24 h-24 rounded-full bg-void border border-white/10 flex items-center justify-center mb-6 group-hover:border-neon-ice/50 group-hover:shadow-[0_0_30px_rgba(0,255,157,0.15)] transition-all relative">
                                        <div className="absolute inset-0 rounded-full border border-neon-ice/0 group-hover:border-neon-ice/20 animate-[spin_4s_linear_infinite]" />
                                        <Icon className="w-10 h-10 text-gray-400 group-hover:text-neon-ice transition-colors relative z-10" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-ice transition-colors">{pillar.name}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{pillar.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CyberArchModel;
