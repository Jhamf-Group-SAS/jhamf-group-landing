import React, { useState } from 'react';
import SEOHead from '../components/seo/SEOHead';
import { useTranslation } from 'react-i18next';
import { useLocale } from '../hooks/useLocale';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import DiagnosticWizard from '../components/diagnostic/DiagnosticWizard';
import CyberArchHero from '../components/sections/cybersec-arch/CyberArchHero';
import CyberArchCapabilities from '../components/sections/cybersec-arch/CyberArchCapabilities';
import CyberArchBenefits from '../components/sections/cybersec-arch/CyberArchBenefits';
import CyberArchModel from '../components/sections/cybersec-arch/CyberArchModel';
import CyberArchCTA from '../components/sections/cybersec-arch/CyberArchCTA';

const CyberArchPage: React.FC = () => {
    const [isWizardOpen, setIsWizardOpen] = useState(false);
    const { t } = useTranslation('cyberarch');
    const { lang } = useLocale();
    const SITE = 'https://www.jhamf.com';

    return (
        <div className="bg-void min-h-screen">
            <SEOHead
                title={t('seo.title')}
                description={t('seo.description')}
                keywords={t('seo.keywords')}
                url={`${SITE}/${lang}/ciberseguridad/arquitectura-y-proteccion`}
                lang={lang}
                alternateUrls={{
                    es: 'https://www.jhamf.com/es/ciberseguridad/arquitectura-y-proteccion',
                    en: 'https://www.jhamf.com/en/cybersecurity/architecture-and-protection',
                }}
            />
            <Navbar onOpenWizard={() => setIsWizardOpen(true)} />
            <main>
                <CyberArchHero />
                <CyberArchCapabilities />
                <CyberArchBenefits />
                <CyberArchModel />
                <CyberArchCTA />
            </main>
            <Footer />
            <DiagnosticWizard isOpen={isWizardOpen} onClose={() => setIsWizardOpen(false)} />
        </div>
    );
};

export default CyberArchPage;
