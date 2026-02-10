import React, { useState } from 'react';
import SEOHead from '../components/seo/SEOHead';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import DiagnosticWizard from '../components/diagnostic/DiagnosticWizard';
import AutomationHero from '../components/sections/automation/AutomationHero';
import AutomationProblems from '../components/sections/automation/AutomationProblems';
import AutomationSolutions from '../components/sections/automation/AutomationSolutions';
import AutomationUseCases from '../components/sections/automation/AutomationUseCases';
import AutomationProcess from '../components/sections/automation/AutomationProcess';
import AutomationCTA from '../components/sections/automation/AutomationCTA';

const AutomationPage: React.FC = () => {
    const [isWizardOpen, setIsWizardOpen] = useState(false);

    const [isWizardOpen, setIsWizardOpen] = useState(false);

    return (
        <div className="bg-obsidian min-h-screen">
            <SEOHead
                title="Automatización de Procesos (RPA) & IA en Colombia | JHAMF Group"
                description="Automatice flujos de trabajo empresariales con Inteligencia Artificial y RPA. Reduzca costos y errores operativos con nuestras soluciones de hiperautomatización."
                keywords="Automatización de Procesos, RPA Colombia, AI Builder, Power Automate, Hiperautomatización, Optimización de Flujos"
                url="https://www.jhamf.com/automatizacion-ia"
            />
            <Navbar onOpenWizard={() => setIsWizardOpen(true)} />
            <main>
                <AutomationHero />
                <AutomationProblems />
                <AutomationSolutions />
                <AutomationUseCases />
                <AutomationProcess />
                <AutomationCTA />
            </main>
            <Footer />
            <DiagnosticWizard isOpen={isWizardOpen} onClose={() => setIsWizardOpen(false)} />
        </div>
    );
};

export default AutomationPage;
