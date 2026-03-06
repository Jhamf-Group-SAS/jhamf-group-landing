import React, { useState } from 'react';
import SEOHead from '../components/seo/SEOHead';
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

    return (
        <div className="bg-void min-h-screen">
            <SEOHead
                title="Infraestructura IT Empresarial y Redes Corporativas | JHAMF Group"
                description="Diseño, implementación y gestión de infraestructura IT empresarial: cableado estructurado, redes corporativas, CCTV, videovigilancia y servidores híbridos en Colombia."
                keywords="infraestructura IT empresarial, redes corporativas, cableado estructurado, CCTV, videovigilancia, servidores híbridos, infraestructura cloud Colombia"
                url="https://www.jhamf.com/es/infraestructura-redes"
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
