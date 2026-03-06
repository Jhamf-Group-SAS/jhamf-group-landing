import React, { useState } from 'react';
import SEOHead from '../components/seo/SEOHead';
import { useTranslation } from 'react-i18next';
import { useLocale } from '../hooks/useLocale';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import DiagnosticWizard from '../components/diagnostic/DiagnosticWizard';
import InfraHero from '../components/sections/infrastructure/InfraHero';
import InfraServices from '../components/sections/infrastructure/InfraServices';
import InfraArchitecture from '../components/sections/infrastructure/InfraArchitecture';
import InfraBenefits from '../components/sections/infrastructure/InfraBenefits';
import InfraIndustries from '../components/sections/infrastructure/InfraIndustries';
import InfraTechStack from '../components/sections/infrastructure/InfraTechStack';
import InfraSecurity from '../components/sections/infrastructure/InfraSecurity';
import InfraCTA from '../components/sections/infrastructure/InfraCTA';

const InfrastructurePage: React.FC = () => {
    const [isWizardOpen, setIsWizardOpen] = useState(false);
    const { t } = useTranslation('infrastructure');
    const { lang } = useLocale();
    const SITE = 'https://www.jhamf.com';

    return (
        <div className="bg-void min-h-screen">
            <SEOHead
                title={t('seo.title')}
                description={t('seo.description')}
                keywords={t('seo.keywords')}
                url={`${SITE}/${lang}/infraestructura-redes`}
                lang={lang}
                alternateUrls={{
                    es: 'https://www.jhamf.com/es/infraestructura-redes',
                    en: 'https://www.jhamf.com/en/infrastructure-networks',
                }}
            />
            <Navbar onOpenWizard={() => setIsWizardOpen(true)} />
            <main>
                <InfraHero />
                <InfraServices />
                <InfraArchitecture />
                <InfraBenefits />
                <InfraIndustries />
                <InfraTechStack />
                <InfraSecurity />
                <InfraCTA />
            </main>
            <Footer />
            <DiagnosticWizard isOpen={isWizardOpen} onClose={() => setIsWizardOpen(false)} />
        </div>
    );
};

export default InfrastructurePage;
