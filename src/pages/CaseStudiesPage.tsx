import React, { useState, Suspense, lazy } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { useLocale } from '../hooks/useLocale';
import SEOHead from '../components/seo/SEOHead';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import DiagnosticWizard from '../components/diagnostic/DiagnosticWizard';

// Shared Components
import ServiceHero from '../components/shared/ServiceHero';
import ServiceBenefits from '../components/shared/ServiceBenefits';
import Testimonials from '../components/sections/cases/Testimonials'; // Moved from Custom Case Studies Components
import CaseStudiesCTA from '../components/sections/cases/CaseStudiesCTA'; // Kept as it's still used in the file

import { BarChart3, TrendingUp, Users } from 'lucide-react'; // Updated icons

const CaseStudiesGrid = lazy(() => import('../components/sections/cases/CaseStudiesGrid'));

const CaseStudiesPage: React.FC = () => {
    const [isWizardOpen, setIsWizardOpen] = useState(false);
    const { t } = useTranslation('casestudies');
    const { lang } = useLocale();
    const SITE = 'https://www.jhamf.com';

    // Map icons for WhyTrustUs items
    const trustIcons = [
        <BarChart3 className="w-6 h-6 text-electric" />,
        <TrendingUp className="w-6 h-6 text-electric" />,
        <Users className="w-6 h-6 text-electric" />
    ];

    return (
        <div className="bg-void min-h-screen selection:bg-electric/30">
            <SEOHead
                title={t('seo.title')}
                description={t('seo.description')}
                keywords={t('seo.keywords')}
                url={`${SITE} /${lang}/casos - de - exito`}
                lang={lang}
                alternateUrls={{ es: `${SITE} /es/casos - de - exito`, en: `${SITE} /en/casos - de - exito` }}
            />
            <Navbar onOpenWizard={() => setIsWizardOpen(true)} />

            <main>
                <ServiceHero
                    badgeText={t('hero.badge')}
                    title={
                        <Trans i18nKey="hero.headline_1" ns="casestudies">
                            Casos de Éxito: <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric via-neon-ice to-plasma">
                                Soluciones Cloud & Automatización
                            </span>
                        </Trans>
                    }
                    description={t('hero.description')}
                    primaryCtaText={t('hero.primary_cta')}
                    primaryCtaOnClick={(e) => {
                        e.preventDefault();
                        const casesSection = document.getElementById('casos-grid');
                        if (casesSection) {
                            casesSection.scrollIntoView({ behavior: 'smooth' });
                        }
                    }}
                    secondaryCtaText={t('hero.secondary_cta')}
                    secondaryCtaLink="https://form.typeform.com/to/gxR8JkE0"
                />

                <ServiceBenefits
                    layout="grid"
                    bgClass="bg-void"
                    title={t('trust.title')}
                    description={t('trust.description')}
                    items={(t('trust.items', { returnObjects: true }) as Array<{ title: string, description: string }>).map((item, idx) => ({
                        icon: trustIcons[idx % trustIcons.length],
                        title: item.title,
                        description: item.description,
                        iconColorClass: "text-electric" // Optional since the icon has it
                    }))}
                />

                <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center"><div className="w-12 h-12 border-2 text-electric border-t-transparent rounded-full animate-spin" /></div>}>
                    <CaseStudiesGrid />
                </Suspense>

                <Testimonials />
                <CaseStudiesCTA />
            </main>

            <Footer />
            <DiagnosticWizard isOpen={isWizardOpen} onClose={() => setIsWizardOpen(false)} />
        </div>
    );
};

export default CaseStudiesPage;
