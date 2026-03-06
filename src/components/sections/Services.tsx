import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cloud, BrainCircuit, Shield, Server, Headphones, Monitor, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLocale } from '../../hooks/useLocale';

const Services = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const navigate = useNavigate();
    const { t: tSvc } = useTranslation('services');
    const { t: tCommon } = useTranslation('common');
    const { lang } = useLocale();

    // ✅ Defined INSIDE the component so t() is called in React scope and
    //    re-evaluated on every language change.
    const services = useMemo(() => [
        {
            num: tSvc('cards.cloud.num', '01'),
            icon: Cloud,
            iconColor: 'text-electric',
            accentColor: 'rgba(0,102,255,0.15)',
            borderColor: 'rgba(0,102,255,0.5)',
            title: tSvc('cards.cloud.title'),
            subtitle: tSvc('cards.cloud.subtitle'),
            description: tSvc('cards.cloud.description'),
            link: `/${lang}/azure`,
            items: tSvc('cards.cloud.items', { returnObjects: true }) as string[],
        },
        {
            num: tSvc('cards.ai.num', '02'),
            icon: BrainCircuit,
            iconColor: 'text-plasma-bright',
            accentColor: 'rgba(139,92,246,0.15)',
            borderColor: 'rgba(139,92,246,0.5)',
            title: tSvc('cards.ai.title'),
            subtitle: tSvc('cards.ai.subtitle'),
            description: tSvc('cards.ai.description'),
            link: lang === 'es' ? `/${lang}/automatizacion-ia` : `/${lang}/ai-automation`,
            items: tSvc('cards.ai.items', { returnObjects: true }) as string[],
        },
        {
            num: tSvc('cards.cyber.num', '03'),
            icon: Shield,
            iconColor: 'text-neon-ice',
            accentColor: 'rgba(0,212,255,0.12)',
            borderColor: 'rgba(0,212,255,0.4)',
            title: tSvc('cards.cyber.title'),
            subtitle: tSvc('cards.cyber.subtitle'),
            description: tSvc('cards.cyber.description'),
            link: undefined,
            items: tSvc('cards.cyber.items', { returnObjects: true }) as string[],
        },
        {
            num: tSvc('cards.managed.num', '04'),
            icon: Headphones,
            iconColor: 'text-signal',
            accentColor: 'rgba(0,255,136,0.1)',
            borderColor: 'rgba(0,255,136,0.35)',
            title: tSvc('cards.managed.title'),
            subtitle: tSvc('cards.managed.subtitle'),
            description: tSvc('cards.managed.description'),
            link: undefined,
            items: tSvc('cards.managed.items', { returnObjects: true }) as string[],
        },
    ], [tSvc, lang]);

    const secondaryServices = useMemo(() => [
        {
            icon: Server,
            label: tSvc('secondary.infra.label'),
            desc: tSvc('secondary.infra.desc'),
        },
        {
            icon: Monitor,
            label: tSvc('secondary.assets.label'),
            desc: tSvc('secondary.assets.desc'),
        },
    ], [tSvc]);

    return (
        <section
            id="services"
            className="relative py-28 overflow-hidden"
            style={{ background: 'linear-gradient(180deg, var(--color-void) 0%, var(--color-navy) 100%)' }}
        >
            {/* Background decoration */}
            <div className="absolute inset-0 bg-dots opacity-100 pointer-events-none" aria-hidden="true" />
            <div
                className="orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(0,102,255,0.05) 0%, transparent 60%)' }}
                aria-hidden="true"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <span className="eyebrow-chip">{tSvc('eyebrow')}</span>
                    <h2 className="mt-4 text-4xl md:text-5xl font-display font-bold tracking-tight">
                        {tSvc('headline_1')} <br />
                        <span className="text-gradient-electric">{tSvc('headline_2')}</span>
                    </h2>
                    <p className="mt-4 text-lg text-steel max-w-xl leading-relaxed font-light">
                        {tSvc('subtext')}
                    </p>
                </motion.div>

                {/* Main services grid */}
                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        const isHovered = hoveredIndex === index;

                        return (
                            <motion.article
                                key={service.num}
                                initial={{ opacity: 0, y: 32 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                onClick={() => { if (service.link) { navigate(service.link); window.scrollTo(0, 0); } }}
                                className={`group relative flex flex-col p-6 rounded-2xl glass-card transition-all duration-300 ${service.link ? 'cursor-pointer' : ''}`}
                                style={{
                                    borderColor: isHovered ? service.borderColor : 'rgba(255,255,255,0.07)',
                                    boxShadow: isHovered ? `0 0 40px ${service.accentColor}` : 'none',
                                }}
                                aria-label={`${service.title} — ${service.subtitle}`}
                            >
                                {/* Hover background */}
                                <div
                                    className="absolute inset-0 rounded-2xl transition-opacity duration-300 pointer-events-none"
                                    style={{
                                        background: `linear-gradient(135deg, ${service.accentColor} 0%, transparent 60%)`,
                                        opacity: isHovered ? 1 : 0,
                                    }}
                                    aria-hidden="true"
                                />

                                {/* Number */}
                                <span
                                    className="font-mono text-xs font-bold tracking-widest mb-4"
                                    style={{ color: 'rgba(255,255,255,0.15)' }}
                                    aria-hidden="true"
                                >
                                    {service.num}
                                </span>

                                {/* Icon */}
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                                >
                                    <Icon className={`w-6 h-6 ${service.iconColor}`} aria-hidden="true" />
                                </div>

                                {/* Title */}
                                <div className="relative z-10">
                                    <h3 className="text-lg font-display font-bold text-white leading-tight">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-steel-dark mt-0.5 font-medium">{service.subtitle}</p>
                                </div>

                                {/* Content — description or feature list on hover */}
                                <div className="mt-4 flex-1 relative z-10">
                                    <AnimatePresence mode="wait">
                                        {isHovered ? (
                                            <motion.ul
                                                key="items"
                                                initial={{ opacity: 0, y: 8 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -8 }}
                                                transition={{ duration: 0.2 }}
                                                className="space-y-2"
                                                role="list"
                                            >
                                                {Array.isArray(service.items) && service.items.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm text-steel">
                                                        <CheckCircle2 className="w-3.5 h-3.5 text-signal shrink-0 mt-0.5" aria-hidden="true" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </motion.ul>
                                        ) : (
                                            <motion.p
                                                key="desc"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="text-sm text-steel leading-relaxed font-light"
                                            >
                                                {service.description}
                                            </motion.p>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Footer link */}
                                <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-steel-dark group-hover:text-electric transition-colors relative z-10">
                                    <span>{service.link ? tCommon('learn_more') : tCommon('included')}</span>
                                    {service.link && (
                                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                                    )}
                                </div>
                            </motion.article>
                        );
                    })}
                </div>

                {/* Secondary services */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-6 grid md:grid-cols-2 gap-4"
                >
                    {secondaryServices.map((svc) => {
                        const Icon = svc.icon;
                        return (
                            <div
                                key={svc.label}
                                className="flex items-center gap-4 p-5 rounded-xl"
                                style={{
                                    background: 'rgba(255,255,255,0.02)',
                                    border: '1px solid rgba(255,255,255,0.05)',
                                }}
                            >
                                <div
                                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                                    style={{ background: 'rgba(255,255,255,0.05)' }}
                                >
                                    <Icon className="w-5 h-5 text-steel-dark" aria-hidden="true" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-white">{svc.label}</h4>
                                    <p className="text-xs text-steel-dark mt-0.5 font-light">{svc.desc}</p>
                                </div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
