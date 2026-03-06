import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocale } from '../hooks/useLocale';
import SEOHead from '../components/seo/SEOHead';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import AIAutomation from '../components/sections/AIAutomation';
import CloudInfrastructure from '../components/sections/CloudInfrastructure';
import Cybersecurity from '../components/sections/Cybersecurity';
import Clients from '../components/sections/Clients';
import CTABanner from '../components/sections/CTABanner';
import AboutUs from '../components/sections/AboutUs';
import Contact from '../components/sections/Contact';
import DiagnosticWizard from '../components/diagnostic/DiagnosticWizard';

const SEO_CONTENT = {
    es: {
        title: 'JHAMF Group | Infraestructura TI con IA · Azure · Ciberseguridad',
        description: 'Socio estratégico en infraestructura TI, automatización con IA y ciberseguridad empresarial. Partner certificado de Microsoft Azure. Atendemos más de 50 empresas en Latinoamérica.',
        keywords: 'infraestructura TI, automatización IA, Microsoft Azure Colombia, ciberseguridad empresarial, servicios cloud, outsourcing TI Cali',
    },
    en: {
        title: 'JHAMF Group | AI-Powered Cloud Infrastructure & IT Automation',
        description: 'Enterprise AI automation, Microsoft Azure cloud infrastructure, and cybersecurity services. Certified Azure partner. Trusted by 50+ enterprises across Latin America.',
        keywords: 'AI infrastructure, cloud automation, Microsoft Azure partner, enterprise cybersecurity, IT outsourcing, managed IT services Colombia',
    },
};

const LandingPage = () => {
    const [isWizardOpen, setIsWizardOpen] = useState(false);
    const { lang } = useLocale();
    const { t } = useTranslation('home');

    const seo = SEO_CONTENT[lang] ?? SEO_CONTENT.es;
    const SITE = 'https://www.jhamf.com';

    return (
        <div className="min-h-screen" style={{ background: 'var(--color-void)' }}>
            <SEOHead
                title={seo.title}
                description={seo.description}
                keywords={seo.keywords}
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
                <AIAutomation />
                <CloudInfrastructure />
                <Cybersecurity />
                <Clients />
                <CTABanner />
                <AboutUs />
                <Contact />
            </main>

            <DiagnosticWizard isOpen={isWizardOpen} onClose={() => setIsWizardOpen(false)} />
        </div>
    );
};

export default LandingPage;
