import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const CyberArchBenefits: React.FC = () => {
    const { t } = useTranslation('cyberarch');
    const items = t('benefits.items', { returnObjects: true }) as Array<{ title: string; label: string }>;

    return (
        <section className="py-24 bg-obsidian relative overflow-hidden border-t border-b border-white/5 line-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        {t('benefits.title')}
                    </h2>
                    <div className="w-20 h-1 bg-neon-cyan rounded-full mx-auto" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-black/40 border border-white/5 rounded-xl p-6 text-center hover:border-neon-cyan/30 transition-colors group"
                        >
                            <div className="w-10 h-10 mx-auto bg-white/5 rounded-full flex items-center justify-center mb-4 group-hover:bg-neon-cyan/10 transition-colors">
                                <Check className="w-5 h-5 text-gray-400 group-hover:text-neon-cyan" />
                            </div>
                            <h4 className="text-white font-bold mb-2 text-lg">{item.title}</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">{item.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CyberArchBenefits;
