import { motion } from 'framer-motion';
import { ArrowRight, Cloud, Cpu } from 'lucide-react';

const CaseStudiesHero = () => {
    const scrollToCases = () => {
        const casesSection = document.getElementById('casos-grid');
        if (casesSection) {
            casesSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-obsidian pt-20">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-azure/10 blur-[100px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-neon-purple/10 blur-[100px] rounded-full mix-blend-screen" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 bg-repeat mix-blend-overlay" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm"
                >
                    <Cloud className="w-4 h-4 text-azure" />
                    <span className="text-xs md:text-sm font-medium text-gray-300 uppercase tracking-widest">
                        Infraestructura & Automatización
                    </span>
                    <Cpu className="w-4 h-4 text-neon-purple" />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight"
                >
                    Casos de Éxito: <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-azure via-neon-cyan to-neon-purple text-glow">
                        Soluciones Cloud & Automatización
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
                >
                    Transformamos operaciones de negocio mediante infraestructura en la nube robusta,
                    arquitecturas escalables y automatización inteligente de procesos.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <button
                        onClick={scrollToCases}
                        className="group px-8 py-4 bg-azure hover:bg-azure-glow text-white font-semibold rounded-lg transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(0,127,255,0.4)] flex items-center gap-2"
                    >
                        Explorar Casos
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <a
                        href="https://form.typeform.com/to/gxR8JkE0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-medium rounded-lg backdrop-blur-sm transition-all"
                    >
                        Solicitar Asesoría
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default CaseStudiesHero;
