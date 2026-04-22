import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const CTABanner = () => {
    const { t } = useTranslation('home');
    return (
        <section
            id="cta"
            className="relative py-24 overflow-hidden"
            aria-label="Call to action"
        >
            {/* Gradient background */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'linear-gradient(135deg, rgba(0,40,150,0.6) 0%, rgba(0,102,255,0.3) 40%, rgba(139,92,246,0.3) 100%)',
                }}
                aria-hidden="true"
            />
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'var(--color-navy)', opacity: 0.5 }}
                aria-hidden="true"
            />
            <div className="bg-grid absolute inset-0 opacity-60 pointer-events-none" aria-hidden="true" />

            {/* Decorative orbs */}
            <div className="orb absolute top-0 left-0 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(0,102,255,0.25) 0%, transparent 70%)' }} aria-hidden="true" />
            <div className="orb absolute bottom-0 right-0 w-[400px] h-[400px] translate-x-1/2 translate-y-1/2 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)' }} aria-hidden="true" />

            {/* Top border glow */}
            <div
                className="absolute top-0 left-0 right-0 h-px pointer-events-none"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(0,102,255,0.6), rgba(139,92,246,0.6), transparent)' }}
                aria-hidden="true"
            />

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 text-xs font-semibold uppercase tracking-widest" style={{ background: 'rgba(0,255,136,0.1)', border: '1px solid rgba(0,255,136,0.25)', color: 'var(--color-signal)' }}>
                        <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse-slow" aria-hidden="true" />
                        {t('cta_banner.badge')}
                    </div>

                    {/* Headline */}
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-white">
                        {t('cta_banner.headline_1')}
                        <br />
                        <span className="text-electric">{t('cta_banner.headline_2')}</span>
                    </h2>

                    <p className="mt-6 text-lg text-steel font-light max-w-2xl mx-auto leading-relaxed">
                        {t('cta_banner.subtext')}
                    </p>

                    {/* CTAs */}
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="https://form.typeform.com/to/gxR8JkE0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                            aria-label={t('cta_banner.cta_primary')}
                        >
                            <Calendar className="w-4 h-4" aria-hidden="true" />
                            {t('cta_banner.cta_primary')}
                            <ArrowRight className="w-4 h-4" aria-hidden="true" />
                        </a>
                        <a
                            href="/#contact"
                            className="btn-ghost"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            {t('cta_banner.cta_secondary')}
                        </a>
                    </div>

                    {/* Trust line */}
                    <p className="mt-8 text-xs text-steel-dark font-medium">
                        {t('cta_banner.trust_line')}
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default CTABanner;
