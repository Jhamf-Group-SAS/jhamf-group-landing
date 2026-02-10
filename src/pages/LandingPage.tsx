import React, { useState } from 'react';
import SEOHead from '../components/seo/SEOHead';
import SEO from '../components/seo/SEO';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import AboutUs from '../components/sections/AboutUs';
import Evolution from '../components/sections/Evolution';
import Services from '../components/sections/Services';
import Contact from '../components/sections/Contact';
import DiagnosticWizard from '../components/diagnostic/DiagnosticWizard';

const LandingPage = () => {
    const [isWizardOpen, setIsWizardOpen] = useState(false);

    return (
        <div className="bg-obsidian min-h-screen text-white">
            <SEOHead
                title="JHAMF Group | IA, Cloud Azure & Automatización en Colombia"
                description="Expertos en Inteligencia Artificial, Cloud Computing (Azure), Venta y Alquiler de Computadores, y Soporte TI en Cali y Colombia. Transformamos su negocio hoy."
                keywords="IA Cali, Azure Colombia, Venta de Computadores Cali, Alquiler de Equipos, Soporte TI, Automatización de Procesos"
                url="https://www.jhamf.com/"
            />
            <SEO
                title="Consultoría Azure & Automatización IA"
                description="Jhamf Group: Expertos en infraestructura cloud Microsoft Azure, automatización de procesos empresariales y soluciones de IA en Colombia. Transforme su negocio hoy."
                keywords="Azure consulting Colombia, Automatización de procesos, Inteligencia artificial empresas, Outsourcing TI, Cloud Infrastructure"
                jsonLd={{
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "Jhamf Group SAS",
                    "url": "https://jhamf.com", // Assuming domain
                    "logo": "https://jhamf.com/logo.png", // Placeholder
                    "sameAs": [
                        "https://www.linkedin.com/company/jhamf-group",
                        "https://twitter.com/jhamfgroup"
                    ],
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "+57-300-123-4567", // Placeholder
                        "contactType": "customer service"
                    }
                }}
            />
            <Navbar onOpenWizard={() => setIsWizardOpen(true)} />
            <main>
                <Hero onOpenWizard={() => setIsWizardOpen(true)} />
                <Evolution />
                <Services />
                <AboutUs />
                <Contact />
            </main>
            <DiagnosticWizard isOpen={isWizardOpen} onClose={() => setIsWizardOpen(false)} />
        </div>
    );
};

export default LandingPage;
