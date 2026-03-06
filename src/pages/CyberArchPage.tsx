import React, { useState } from 'react';
import SEOHead from '../components/seo/SEOHead';
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

    return (
        <div className="bg-void min-h-screen">
            <SEOHead
                title="Ciberseguridad Arquitectura y Protección | JHAMF Group"
                description="Protección integral de infraestructura, identidades y datos mediante arquitectura moderna de seguridad y monitoreo continuo basado en Zero-Trust."
                keywords="ciberseguridad empresarial, arquitectura zero-trust, protección de datos, monitoreo de seguridad, gestión de identidades, iso 27001 colombia"
                url="https://www.jhamf.com/es/ciberseguridad/arquitectura-y-proteccion"
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
