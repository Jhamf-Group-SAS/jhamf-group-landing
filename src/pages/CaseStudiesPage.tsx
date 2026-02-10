import React, { useState } from 'react';
import SEOHead from '../components/seo/SEOHead';
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



    return (
        <div className="bg-obsidian min-h-screen selection:bg-azure/30">
            <SEOHead
                title="Casos de Éxito: IA & Cloud en Colombia | Portafolio JHAMF"
                description="Descubra cómo hemos transformado empresas colombianas con soluciones de Inteligencia Artificial y Microsoft Azure. Casos reales de éxito y transformación digital."
                keywords="Casos de éxito IA, Proyectos Azure Colombia, Transformación Digital Ejemplos, Portafolio JHAMF, Historias de Clientes"
                url="https://www.jhamf.com/casos-de-exito"
            />
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
