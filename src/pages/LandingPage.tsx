import { useState, Suspense, lazy } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocale } from '../hooks/useLocale';
import SEOHead from '../components/seo/SEOHead';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';

// Lazy loaded below-the-fold components
const AIAutomation = lazy(() => import('../components/sections/AIAutomation'));
const CloudInfrastructure = lazy(() => import('../components/sections/CloudInfrastructure'));
const Cybersecurity = lazy(() => import('../components/sections/Cybersecurity'));
const Clients = lazy(() => import('../components/sections/Clients'));
const CTABanner = lazy(() => import('../components/sections/CTABanner'));
const AboutUs = lazy(() => import('../components/sections/AboutUs'));
const Contact = lazy(() => import('../components/sections/Contact'));
import DiagnosticWizard from '../components/diagnostic/DiagnosticWizard';

const LandingPage = () => {
    const [isWizardOpen, setIsWizardOpen] = useState(false);
    const { lang } = useLocale();
    const { t } = useTranslation('home');

    const SITE = 'https://www.jhamf.com';

    return (
        <div className="min-h-screen" style={{ background: 'var(--color-void)' }}>
            <SEOHead
                title={t('seo.title')}
                description={t('seo.description')}
                keywords={t('seo.keywords')}
                url={`${SITE}/${lang}/`}
                lang={lang}
                alternateUrls={{ es: `${SITE}/es/`, en: `${SITE}/en/` }}
                jsonLd={{
                    '@context': 'https://schema.org',
                    '@type': 'Organization',
                    name: 'JHAMF Group',
                    description: t('hero.subtext'),
                    url: 'https://jhamf.com',
                    logo: `${SITE}/logo.png`,
                    foundingLocation: { '@type': 'Place', name: 'Cali, Colombia' },
                    sameAs: [
                        'https://www.linkedin.com/company/jhamf-group',
                    ],
                    contactPoint: {
                        '@type': 'ContactPoint',
                        telephone: '+57-300-123-4567',
                        contactType: 'customer service',
                        availableLanguage: ['Spanish', 'English'],
                    },
                }}
            />

            <Navbar onOpenWizard={() => setIsWizardOpen(true)} />

            <main>
                <Hero onOpenWizard={() => setIsWizardOpen(true)} />
                <Services />
                <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center"><div className="w-12 h-12 border-2 border-electric border-t-transparent rounded-full animate-spin" /></div>}>
                    <AIAutomation />
                    <CloudInfrastructure />
                    <Cybersecurity />
                    <Clients />
                    <CTABanner />
                    <AboutUs />
                    <Contact />
                </Suspense>
            </main>

            <DiagnosticWizard isOpen={isWizardOpen} onClose={() => setIsWizardOpen(false)} />
        </div>
    );
};

export default LandingPage;
