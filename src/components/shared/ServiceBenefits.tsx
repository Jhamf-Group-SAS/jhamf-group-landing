import React from 'react';
import { motion } from 'framer-motion';

export interface ServiceBenefitItem {
    icon?: React.ReactNode;
    title: string;
    description: React.ReactNode;
    iconColorClass?: string;
}

export interface ServiceBenefitsProps {
    title: React.ReactNode;
    description?: React.ReactNode;
    items: ServiceBenefitItem[];
    layout?: 'grid' | 'split';
    sideContent?: React.ReactNode;
    bgClass?: string;
}

const ServiceBenefits: React.FC<ServiceBenefitsProps> = ({
    title,
    description,
    items,
    layout = 'grid',
    sideContent,
    bgClass = "bg-[#0A0A15]"
}) => {
    if (layout === 'split') {
        return (
            <section className={`py-20 relative ${bgClass}`}>
                <div className="container px-4 mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                {title}
                            </h2>
                            {description && (
                                <p className="text-gray-400 mb-8 text-lg">
                                    {description}
                                </p>
                            )}

                            <div className="space-y-6">
                                {items.map((item, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        {item.icon && (
                                            <div className="mt-1">
                                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                                                    {item.icon}
                                                </div>
                                            </div>
                                        )}
                                        <div>
                                            <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                                            <p className="text-gray-400 text-sm mt-1">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative h-full min-h-[400px] w-full lg:h-auto"
                        >
                            {sideContent}
                        </motion.div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className={`py-20 ${bgClass}`}>
            <div className="container px-4 mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {title}
                    </h2>
                    {description && (
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            {description}
                        </p>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {items.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-8 rounded-2xl bg-[#0F0F1A] border border-white/5 hover:border-white/10 transition-colors"
                        >
                            {item.icon && (
                                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6">
                                    {item.icon}
                                </div>
                            )}
                            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceBenefits;
