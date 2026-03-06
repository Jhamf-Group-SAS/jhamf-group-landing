import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export interface ServiceCTAProps {
    title: React.ReactNode;
    buttonText: string;
    buttonLink?: string;
    bgClass?: string;
    glowClass?: string;
    buttonClass?: string;
}

const ServiceCTA: React.FC<ServiceCTAProps> = ({
    title,
    buttonText,
    buttonLink = "https://form.typeform.com/to/gxR8JkE0",
    bgClass = "bg-obsidian",
    glowClass = "from-transparent to-azure/5",
    buttonClass = "bg-azure text-white hover:bg-electric-glow"
}) => {
    return (
        <section className={`py-24 relative overflow-hidden ${bgClass}`}>
            <div className={`absolute inset-0 bg-gradient-to-b ${glowClass}`} />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="p-12 md:p-16 rounded-3xl border border-white/10 bg-void/50 backdrop-blur-md relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-azure/10 rounded-full blur-[100px]" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-cyan/10 rounded-full blur-[100px]" />

                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 relative z-10">
                        {title}
                    </h2>

                    <a href={buttonLink} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-[0_0_30px_rgba(0,163,255,0.3)] transition-all group relative z-10 ${buttonClass}`}>
                        {buttonText}
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default ServiceCTA;
