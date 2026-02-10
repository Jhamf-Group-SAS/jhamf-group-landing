import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import InteractiveBackground from '../ui/InteractiveBackground';

interface HeroProps {
    onOpenWizard: () => void;
}

const Hero = ({ onOpenWizard }: HeroProps) => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-obsidian selection:bg-neon-cyan/30">
            {/* Interactive Background */}
            <InteractiveBackground />

            {/* Background Ambience (Fallback/Layering) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-azure/5 via-obsidian to-obsidian opacity-40 blur-3xl animate-pulse" />
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,_var(--tw-gradient-stops))] from-neon-purple/20 via-transparent to-transparent opacity-30" />
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 bg-repeat mix-blend-overlay"></div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8"
                >
                    <Sparkles className="w-4 h-4 text-neon-cyan" />
                    <span className="text-xs md:text-sm font-medium text-gray-300 uppercase tracking-widest">
                        Expertos en Azure & IA Workflows
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-display font-bold text-white mb-6 leading-tight"
                >
                    Infraestructura <br />
                    Cloud <span className="text-transparent bg-clip-text bg-gradient-to-r from-azure to-neon-cyan text-glow">
                        Azure & IA
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    Transformamos su base sólida en Microsoft Azure en un motor de innovación con Inteligencia Artificial.
                    El futuro no se administra, <span className="text-white font-semibold">se automatiza</span>.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <button
                        onClick={onOpenWizard}
                        className="group relative px-8 py-4 bg-azure hover:bg-azure-glow text-white font-semibold rounded-lg overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(0,127,255,0.4)]"
                    >
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 transform" />
                        <span className="relative flex items-center gap-2">
                            Iniciar Diagnóstico <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </button>

                    <a
                        href="https://form.typeform.com/to/gxR8JkE0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-gradient-to-r from-neon-purple to-pink-600 text-white font-bold rounded-lg shadow-lg hover:shadow-[0_0_30px_rgba(123,44,191,0.6)] transition-all hover:scale-105 border border-white/10"
                    >
                        Agendar Consultoría
                    </a>

                    <button
                        onClick={() => {
                            const servicesSection = document.getElementById('services');
                            if (servicesSection) {
                                servicesSection.scrollIntoView({ behavior: 'smooth' });
                                // Dispatch custom event to trigger highlight in Services
                                window.dispatchEvent(new CustomEvent('highlight-services'));
                            }
                        }}
                        className="px-8 py-4 bg-[#00EFFF] border border-[#00EFFF] text-obsidian font-bold rounded-lg shadow-lg hover:shadow-[0_0_30px_rgba(0,239,255,0.6)] transition-all hover:scale-105 hover:bg-[#00EFFF]/90"
                    >
                        Explorar Soluciones
                    </button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs text-gray-500 uppercase tracking-widest">Descubra más</span>
                <div className="w-[1px] h-16 bg-gradient-to-b from-azure to-transparent" />
            </motion.div>
        </section>
    );
};

export default Hero;
