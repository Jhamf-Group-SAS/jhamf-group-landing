import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Clients = () => {
    const { t } = useTranslation('home');

    // ✅ Inside component — industry names and testimonials re-evaluated on language change
    const industryKeys = [
        'finance', 'healthcare', 'retail', 'manufacturing',
        'government', 'education', 'logistics', 'realestate', 'legal', 'media',
    ] as const;

    const industries = useMemo(() => {
        const base = industryKeys.map(key => t(`industries.${key}`));
        // Duplicate for seamless CSS marquee loop
        return [...base, ...base];
    }, [t]);

    const testimonials = useMemo(() => [
        {
            quote: t('clients.testimonial_1_quote'),
            author: t('clients.testimonial_1_author'),
            role: t('clients.testimonial_1_role'),
            rating: 5,
        },
        {
            quote: t('clients.testimonial_2_quote'),
            author: t('clients.testimonial_2_author'),
            role: t('clients.testimonial_2_role'),
            rating: 5,
        },
        {
            quote: t('clients.testimonial_3_quote'),
            author: t('clients.testimonial_3_author'),
            role: t('clients.testimonial_3_role'),
            rating: 5,
        },
    ], [t]);

    return (
        <section
            id="clients"
            className="relative py-28 overflow-hidden"
            style={{ background: 'var(--color-navy)' }}
        >
            {/* Top divider */}
            <div className="section-divider absolute top-0 left-0 right-0" aria-hidden="true" />

            {/* Background */}
            <div className="orb absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(0,102,255,0.06) 0%, transparent 70%)' }} aria-hidden="true" />

            <div className="relative z-10">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-14"
                >
                    <span className="eyebrow-chip">{t('clients.eyebrow')}</span>
                    <h2 className="mt-4 text-4xl md:text-5xl font-display font-bold tracking-tight">
                        {t('clients.headline_1')}{' '}
                        <span className="text-electric">{t('clients.headline_2')}</span>
                    </h2>
                    <p className="mt-4 text-lg text-steel font-light max-w-xl mx-auto">
                        {t('clients.subtext')}
                    </p>
                </motion.div>

                {/* Marquee — industry sectors */}
                <div
                    className="relative overflow-hidden py-6 mb-16"
                    aria-label={t('industries.eyebrow')}
                    style={{
                        maskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)',
                        WebkitMaskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)',
                    }}
                >
                    <div className="flex gap-4 animate-marquee w-max">
                        {industries.map((industry, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-3 px-5 py-2.5 rounded-full shrink-0 text-sm font-medium text-steel"
                                style={{
                                    background: 'rgba(255,255,255,0.03)',
                                    border: '1px solid rgba(255,255,255,0.07)',
                                }}
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-electric/50 shrink-0" aria-hidden="true" />
                                {industry}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Testimonials */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-5">
                        {testimonials.map((testimonial, i) => (
                            <motion.article
                                key={i}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.12 }}
                                className="relative p-7 rounded-2xl glass-card flex flex-col gap-5"
                                style={{ borderColor: 'rgba(255,255,255,0.07)' }}
                                aria-label={`${testimonial.author}, ${testimonial.role}`}
                            >
                                {/* Quote mark */}
                                <Quote
                                    className="w-8 h-8 text-electric/20 absolute top-6 right-6"
                                    aria-hidden="true"
                                />

                                {/* Stars */}
                                <div className="flex gap-0.5" aria-label={`${testimonial.rating} stars`} role="img">
                                    {Array.from({ length: testimonial.rating }).map((_, j) => (
                                        <Star key={j} className="w-4 h-4 text-electric fill-electric" aria-hidden="true" />
                                    ))}
                                </div>

                                {/* Quote text */}
                                <blockquote className="text-sm text-steel leading-relaxed font-light flex-1">
                                    &ldquo;{testimonial.quote}&rdquo;
                                </blockquote>

                                {/* Author */}
                                <footer>
                                    <div className="flex items-center gap-3">
                                        <div
                                            className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white"
                                            style={{ background: 'linear-gradient(135deg, var(--color-electric), #8B5CF6)' }}
                                            aria-hidden="true"
                                        >
                                            {testimonial.author.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-white">{testimonial.author}</p>
                                            <p className="text-xs text-steel-dark font-light">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </footer>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;
