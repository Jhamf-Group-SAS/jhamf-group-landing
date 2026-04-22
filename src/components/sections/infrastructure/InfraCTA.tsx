import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const InfraCTA: React.FC = () => {
    const { t } = useTranslation('infrastructure');

    return (
        <section className="relative py-28 bg-void overflow-hidden">
            <div className="absolute top-0 left-0 right-0 section-divider" />

            {/* Background orbs */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[10%] w-[50%] h-[70%] rounded-full bg-electric/10 blur-[160px]" />
                <div className="absolute bottom-[-20%] right-[10%] w-[40%] h-[60%] rounded-full bg-signal/8 blur-[140px]" />
            </div>
            <div className="absolute inset-0 bg-grid opacity-20" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-4"
                >
                    <span className="eyebrow-chip">{t('cta.eyebrow')}</span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl md:text-5xl font-display font-bold text-white mb-6"
                >
                    {t('cta.title')}{' '}
                    <span className="text-electric">{t('cta.titleHighlight')}</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-steel max-w-2xl mx-auto mb-10"
                >
                    {t('cta.subtitle')}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
                >
                    <a
                        href="https://form.typeform.com/to/gxR8JkE0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-base px-10 py-4"
                    >
                        {t('cta.button')}
                        <ArrowRight className="w-5 h-5" />
                    </a>
                    <a
                        href="https://wa.me/573001234567"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost"
                    >
                        <MessageCircle className="w-4 h-4" />
                        {t('cta.buttonSecondary')}
                    </a>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.45 }}
                    className="text-xs font-mono tracking-wider text-steel-dark uppercase"
                >
                    {t('cta.note')}
                </motion.p>
            </div>
        </section>
    );
};

export default InfraCTA;
