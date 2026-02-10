import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CaseStudiesCTA = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-obsidian to-azure/10 border-t border-white/5">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-white/5 border border-white/10 rounded-3xl p-12 backdrop-blur-xl relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/20 blur-[80px] rounded-full mix-blend-screen" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-azure/20 blur-[80px] rounded-full mix-blend-screen" />

                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 relative z-10">
                        ¿Quieres un caso de éxito como estos?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto relative z-10">
                        Agenda una sesión estratégica gratuita y descubramos cómo la nube y la automatización pueden transformar tu negocio.
                    </p>

                    <a
                        href="https://form.typeform.com/to/gxR8JkE0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-azure hover:bg-azure-glow text-white font-bold rounded-lg shadow-lg hover:shadow-[0_0_30px_rgba(0,127,255,0.4)] transition-all transform hover:scale-105 relative z-10"
                    >
                        Agendar Consultoría
                        <ArrowRight className="w-5 h-5" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default CaseStudiesCTA;
