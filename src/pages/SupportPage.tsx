import React, { useState } from 'react';
import SEOHead from '../components/seo/SEOHead';
import { useTranslation } from 'react-i18next';
import { useLocale } from '../hooks/useLocale';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import DiagnosticWizard from '../components/diagnostic/DiagnosticWizard';
import SupportHero from '../components/sections/support/SupportHero';
import SupportServices from '../components/sections/support/SupportServices';
import SupportBenefits from '../components/sections/support/SupportBenefits';
import SupportProcess from '../components/sections/support/SupportProcess';
import SupportCTA from '../components/sections/support/SupportCTA';

const SupportPage: React.FC = () => {
    const [isWizardOpen, setIsWizardOpen] = useState(false);
    const { t } = useTranslation('support');
    const { lang } = useLocale();
    const SITE = 'https://www.jhamf.com';

    return (
        <div className="bg-void min-h-screen">
            <SEOHead
                title={t('seo.title')}
                description={t('seo.description')}
                keywords={t('seo.keywords')}
                url={`${SITE}/${lang}/servicios-ti-gestionados/soporte-empresarial-24-7`}
                lang={lang}
                alternateUrls={{
                    es: 'https://www.jhamf.com/es/servicios-ti-gestionados/soporte-empresarial-24-7',
                    en: 'https://www.jhamf.com/en/managed-it-services/24-7-enterprise-support',
                }}
            />
            <Navbar onOpenWizard={() => setIsWizardOpen(true)} />
            <main>
                <SupportHero />
                <SupportServices />
                <SupportBenefits />
                <SupportProcess />
                <SupportCTA />
            </main>
            <Footer />
            <DiagnosticWizard isOpen={isWizardOpen} onClose={() => setIsWizardOpen(false)} />
        </div>
    );
};

export default SupportPage;
