import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PhoneCall } from 'lucide-react';

export interface ServiceHeroProps {
    badgeIcon?: React.ReactNode;
    badgeText: string;
    title: React.ReactNode;
    description: string;
    primaryCtaText: string;
    primaryCtaLink?: string;
    primaryCtaOnClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
    secondaryCtaText?: string;
    secondaryCtaLink?: string;
    traits?: { icon: React.ReactNode; label: string }[];
    pillColorClass?: string;
    bgClass?: string;
}

const ServiceHero: React.FC<ServiceHeroProps> = ({
    badgeIcon,
    badgeText,
    title,
    description,
    primaryCtaText,
    primaryCtaLink,
    primaryCtaOnClick,
    secondaryCtaText,
    secondaryCtaLink = "https://wa.me/573022388714",
    traits,
    pillColorClass = "bg-white/5 border-white/10 text-white",
    bgClass = "bg-obsidian"
}) => {
    return (
        <section className={`relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden ${bgClass}`}>
            {/* Default Background Effects - Can be customized via generic classes later if needed */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-azure/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-neon-cyan/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-6 ${pillColorClass}`}
                    >
                        {badgeIcon}
                        <span className="text-sm font-medium tracking-wide uppercase">
                            {badgeText}
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
                    >
                        {title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl lg:max-w-none leading-relaxed font-light mx-auto lg:mx-0"
                    >
                        {description}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
                    >
                        <a
                            href={primaryCtaLink || "#"}
                            target={primaryCtaLink ? "_blank" : undefined}
                            rel={primaryCtaLink ? "noopener noreferrer" : undefined}
                            onClick={primaryCtaOnClick ? (e) => {
                                if (!primaryCtaLink) e.preventDefault();
                                primaryCtaOnClick(e);
                            } : undefined}
                            className="px-8 py-4 bg-azure hover:bg-electric-glow text-white rounded-lg transition-all flex items-center justify-center gap-2 font-medium group relative overflow-hidden w-full sm:w-auto"
                        >
                            <span className="relative z-10">{primaryCtaText}</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                        </a>
                        {secondaryCtaText && (
                            <a href={secondaryCtaLink} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-all flex items-center justify-center gap-2 font-medium border border-white/10 group w-full sm:w-auto">
                                <span className="relative z-10">{secondaryCtaText}</span>
                                <PhoneCall className="w-5 h-5 text-gray-400 group-hover:text-signal transition-colors relative z-10" />
                            </a>
                        )}
                    </motion.div>

                    {traits && traits.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="mt-16 flex flex-wrap justify-center lg:justify-start gap-8 md:gap-12 grayscale opacity-50"
                        >
                            {traits.map((trait, index) => (
                                <div key={index} className="flex items-center gap-2 text-white">
                                    {trait.icon}
                                    <span className="font-semibold text-sm md:text-base">{trait.label}</span>
                                </div>
                            ))}
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ServiceHero;
