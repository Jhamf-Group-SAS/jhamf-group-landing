import { useState } from 'react';
import SEOHead from '../components/seo/SEOHead';
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
                jsonLd={{
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "Jhamf Group SAS",
                    "url": "https://jhamf.com",
                    "logo": "https://jhamf.com/logo.png",
                    "sameAs": [
                        "https://www.linkedin.com/company/jhamf-group",
                        "https://twitter.com/jhamfgroup"
                    ],
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "+57-300-123-4567",
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
