import { motion } from 'framer-motion';

const Hero = ({ onStartDemo }: { onStartDemo: () => void }) => {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-void z-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-neon-ice/20 rounded-full blur-[120px] opacity-30 animate-pulse" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-signal/10 rounded-full blur-[100px] opacity-20" />
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-signal text-xs font-mono tracking-widest mb-6 uppercase">
                        Product Experience
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display leading-tight mb-8">
                        La IA no se explica.
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-ice to-signal">
                            Se prueba.
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                        Mira cómo una operación completa se automatiza, decide y escala sin fricción.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={onStartDemo}
                        className="group relative px-8 py-4 bg-signal text-void font-bold text-lg rounded-xl overflow-hidden shadow-[0_0_20px_rgba(204,255,0,0.4)] hover:shadow-[0_0_40px_rgba(204,255,0,0.6)] transition-all duration-300"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Probar el sistema ahora
                            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
