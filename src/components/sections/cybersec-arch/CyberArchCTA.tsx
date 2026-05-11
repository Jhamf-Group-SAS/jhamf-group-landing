import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLocale } from '../../../hooks/useLocale';

const CyberArchCTA: React.FC = () => {
    const { t } = useTranslation('cyberarch');
    const { lang } = useLocale();

    return (
        <section className="py-24 bg-obsidian relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neon-cyan/5" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="p-12 md:p-16 rounded-3xl border border-neon-cyan/20 bg-void/50 backdrop-blur-md relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-neon-cyan/10 rounded-full blur-[100px]" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-electric-glow/10 rounded-full blur-[100px]" />

                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 relative z-10">
                        {t('cta.title')}
                    </h2>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a href={`/${lang}/cotizador`} className="inline-flex items-center gap-2 px-8 py-4 bg-neon-cyan text-obsidian rounded-lg font-bold text-lg hover:bg-white hover:shadow-[0_0_30px_rgba(0,255,157,0.3)] transition-all group relative z-10 w-full sm:w-auto min-h-[44px]">
                            Cotizador Valora Suite
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="https://form.typeform.com/to/gxR8JkE0" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan/10 rounded-lg font-bold text-lg transition-all group relative z-10 w-full sm:w-auto min-h-[44px]">
                            {t('cta.button')}
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CyberArchCTA;
