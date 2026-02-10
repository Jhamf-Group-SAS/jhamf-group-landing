import React, { useEffect, useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import DiagnosticWizard from '../components/diagnostic/DiagnosticWizard';
import CaseStudiesHero from '../components/sections/cases/CaseStudiesHero';
import WhyTrustUs from '../components/sections/cases/WhyTrustUs';
import CaseStudiesGrid from '../components/sections/cases/CaseStudiesGrid';
import Testimonials from '../components/sections/cases/Testimonials';
import CaseStudiesCTA from '../components/sections/cases/CaseStudiesCTA';

const CaseStudiesPage: React.FC = () => {
    const [isWizardOpen, setIsWizardOpen] = useState(false);

    useEffect(() => {
        document.title = "Casos de Éxito | Jhamf Group - Soluciones Cloud & Automatización";
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-obsidian min-h-screen selection:bg-azure/30">
            <Navbar onOpenWizard={() => setIsWizardOpen(true)} />
            <main>
                <CaseStudiesHero />
                <WhyTrustUs />
                <CaseStudiesGrid />
                <Testimonials />
                <CaseStudiesCTA />
            </main>
            <Footer />
            <DiagnosticWizard isOpen={isWizardOpen} onClose={() => setIsWizardOpen(false)} />
        </div>
    );
};

export default CaseStudiesPage;
