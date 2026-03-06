import React, { useState } from 'react';
import SEOHead from '../components/seo/SEOHead';
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

    return (
        <div className="bg-void min-h-screen">
            <SEOHead
                title="Soporte Empresarial 24/7 | JHAMF Group"
                description="Garantizamos continuidad operativa mediante monitoreo constante, soporte técnico especializado y gestión proactiva de incidentes TI para infraestructura crítica."
                keywords="soporte ti 24/7, soporte empresarial, mesa de ayuda, help desk colombia, mantenimiento preventivo, gestión de incidentes ti"
                url="https://www.jhamf.com/es/servicios-ti-gestionados/soporte-empresarial-24-7"
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
