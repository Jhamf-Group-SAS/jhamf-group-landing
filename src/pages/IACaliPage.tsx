import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocale } from '../hooks/useLocale';
import SEOHead from '../components/seo/SEOHead';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import DiagnosticWizard from '../components/diagnostic/DiagnosticWizard';

import ServiceHero from '../components/shared/ServiceHero';
import ServiceBenefits from '../components/shared/ServiceBenefits';
import { MapPin, Cpu, Server, Shield } from 'lucide-react';

const IACaliPage: React.FC = () => {
    const [isWizardOpen, setIsWizardOpen] = useState(false);
    const { t } = useTranslation('iacali');
    const { lang } = useLocale();
    const SITE = 'https://www.jhamf.com';

    return (
        <div className="bg-void min-h-screen">
            <SEOHead
                title={t('seo.title')}
                description={t('seo.description')}
                keywords={t('seo.keywords')}
                url={`${SITE}/${lang}/ia-cali`}
                lang={lang}
                alternateUrls={{ es: `${SITE}/es/ia-cali`, en: `${SITE}/en/ia-cali` }}
                jsonLd={{
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": "Jhamf Group - Sede Cali",
                    "image": `${SITE}/og-image.jpg`,
                    "telephone": "+57-317-466-0498",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Cali",
                        "addressLocality": "Cali",
                        "addressRegion": "Valle del Cauca",
                        "addressCountry": "CO"
                    },
                    "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": 3.4516,
                        "longitude": -76.5320
                    },
                    "url": `${SITE}/${lang}/ia-cali`
                }}
            />
            <Navbar onOpenWizard={() => setIsWizardOpen(true)} />

            <main>
                <ServiceHero
                    badgeIcon={<MapPin className="w-4 h-4 text-signal" />}
                    badgeText={t('hero.badge')}
                    title={
                        <h1 dangerouslySetInnerHTML={{ __html: t('hero.headline_1') }} />
                    }
                    description={t('hero.description')}
                    primaryCtaText={t('hero.primary_cta')}
                    primaryCtaOnClick={(e) => {
                        e.preventDefault();
                        setIsWizardOpen(true);
                    }}
                    cotizadorCtaText="Cotizador Valora Suite"
                    cotizadorCtaLink={`/${lang}/cotizador`}
                />

                <ServiceBenefits
                    layout="grid"
                    bgClass="bg-void"
                    title=""
                    items={[
                        {
                            icon: <Cpu className="w-10 h-10 text-signal" />,
                            title: t('services.items.0.title'),
                            description: t('services.items.0.description'),
                            iconColorClass: "border-signal/30 hover:border-signal"
                        },
                        {
                            icon: <Server className="w-10 h-10 text-electric" />,
                            title: t('services.items.1.title'),
                            description: t('services.items.1.description'),
                            iconColorClass: "border-electric/30 hover:border-electric"
                        },
                        {
                            icon: <Shield className="w-10 h-10 text-plasma" />,
                            title: t('services.items.2.title'),
                            description: t('services.items.2.description'),
                            iconColorClass: "border-plasma/30 hover:border-plasma"
                        }
                    ]}
                />
            </main>

            <Footer />
            <DiagnosticWizard isOpen={isWizardOpen} onClose={() => setIsWizardOpen(false)} />
        </div>
    );
};

export default IACaliPage;
