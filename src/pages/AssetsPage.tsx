import React, { useState } from 'react';
import SEOHead from '../components/seo/SEOHead';
import { useTranslation } from 'react-i18next';
import { useLocale } from '../hooks/useLocale';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import DiagnosticWizard from '../components/diagnostic/DiagnosticWizard';
import AssetsHero from '../components/sections/assets/AssetsHero';
import AssetsOverview from '../components/sections/assets/AssetsOverview';
import AssetsHardware from '../components/sections/assets/AssetsHardware';
import AssetsLicensing from '../components/sections/assets/AssetsLicensing';
import AssetsLifecycle from '../components/sections/assets/AssetsLifecycle';
import AssetsBenefits from '../components/sections/assets/AssetsBenefits';
import AssetsIntegration from '../components/sections/assets/AssetsIntegration';
import AssetsCTA from '../components/sections/assets/AssetsCTA';

const AssetsPage: React.FC = () => {
    const [isWizardOpen, setIsWizardOpen] = useState(false);
    const { t } = useTranslation('assets');
    const { lang } = useLocale();
    const SITE = 'https://www.jhamf.com';

    return (
        <div className="bg-void min-h-screen">
            <SEOHead
                title={t('seo.title')}
                description={t('seo.description')}
                keywords={t('seo.keywords')}
                url={`${SITE}/${lang}/activos-licencias`}
                lang={lang}
                alternateUrls={{
                    es: 'https://www.jhamf.com/es/activos-licencias',
                    en: 'https://www.jhamf.com/en/it-assets-licensing',
                }}
            />
            <Navbar onOpenWizard={() => setIsWizardOpen(true)} />
            <main>
                <AssetsHero />
                <AssetsOverview />
                <AssetsHardware />
                <AssetsLicensing />
                <AssetsLifecycle />
                <AssetsBenefits />
                <AssetsIntegration />
                <AssetsCTA />
            </main>
            <Footer />
            <DiagnosticWizard isOpen={isWizardOpen} onClose={() => setIsWizardOpen(false)} />
        </div>
    );
};

export default AssetsPage;
