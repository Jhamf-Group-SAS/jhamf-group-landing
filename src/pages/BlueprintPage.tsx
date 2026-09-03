import { BlueprintProvider } from '../components/blueprint/context/BlueprintContext';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SEO from '../components/seo/SEO';
import Hero from '../components/blueprint/Hero';
import BlueprintIntro from '../components/blueprint/BlueprintIntro';
import ArchitectureSection from '../components/blueprint/ArchitectureSection';
import MultitenantSection from '../components/blueprint/MultitenantSection';
import AutomationDemo from '../components/blueprint/demos/AutomationDemo';
import Results from '../components/blueprint/Results';
import CTA from '../components/blueprint/CTA';

const BlueprintPageContent = () => {
    const handleStartDemo = () => {
        // Simple scroll to intro if needed, or remove completely if hero button logic changes.
        // For now, let's target the unified blueprint section roughly.
        const section = document.querySelector('main');
        section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div className="min-h-screen bg-void text-white font-sans selection:bg-signal selection:text-void">
            <SEO
                title="Blueprint | Jhamf Group"
                description="La IA no se explica, se prueba. Interactúa con una operación real de IA y automatización funcionando como si fuera tu empresa."
            />

            <Navbar onOpenWizard={() => window.open('https://form.typeform.com/to/gxR8JkE0', '_blank')} />

            <main className="relative">
                <Hero onStartDemo={handleStartDemo} />

                <BlueprintIntro />

                <MultitenantSection />

                <ArchitectureSection />
                <AutomationDemo />
                <Results />
                <CTA />
            </main>

            <Footer />
        </div>
    );
};

const BlueprintPage = () => {
    return (
        <BlueprintProvider>
            <BlueprintPageContent />
        </BlueprintProvider>
    );
};

export default BlueprintPage;
