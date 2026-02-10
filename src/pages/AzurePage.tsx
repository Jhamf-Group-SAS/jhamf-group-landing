import React, { useState } from 'react';
import SEOHead from '../components/seo/SEOHead';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import DiagnosticWizard from '../components/diagnostic/DiagnosticWizard';
import AzureHero from '../components/sections/azure/AzureHero';
import AzureTrust from '../components/sections/azure/AzureTrust';
import AzureServices from '../components/sections/azure/AzureServices';
import AzureBenefits from '../components/sections/azure/AzureBenefits';
import AzureUseCases from '../components/sections/azure/AzureUseCases';
import AzureContact from '../components/sections/azure/AzureContact';

const AzurePage: React.FC = () => {
    const [isWizardOpen, setIsWizardOpen] = useState(false);

    const [isWizardOpen, setIsWizardOpen] = useState(false);

    return (
        <div className="bg-obsidian min-h-screen">
            <SEOHead
                title="Consultoría Microsoft Azure Colombia | Servicios Cloud & Migración"
                description="Expertos en Microsoft Azure en Colombia. Migración a la nube, optimización de costos, arquitecturas serverless y soluciones híbridas para empresas."
                keywords="Microsoft Azure Colombia, Consultoría Azure, Cloud Computing, Migración Nube, Azure DevOps, Arquitectura Cloud"
                url="https://www.jhamf.com/azure"
            />
            <Navbar onOpenWizard={() => setIsWizardOpen(true)} />
            <main>
                <AzureHero />
                <AzureTrust />
                <AzureServices />
                <AzureBenefits />
                <AzureUseCases />
                <AzureContact />
            </main>
            <Footer />
            <DiagnosticWizard isOpen={isWizardOpen} onClose={() => setIsWizardOpen(false)} />
        </div>
    );
};

export default AzurePage;
