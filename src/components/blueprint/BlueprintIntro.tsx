import { motion } from 'framer-motion';

const BlueprintIntro = () => {
    return (
        <section className="pt-16 pb-8 bg-void text-white relative overflow-hidden">
            {/* Background Tech Mesh */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col gap-8 items-center">
                    {/* Centered Copy */}
                    <div className="w-full max-w-4xl text-center relative z-10">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl font-bold font-display leading-[1.05] tracking-tight mb-6"
                        >
                            Los procesos ya no se olvidan. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-ice to-signal">
                                Se ejecutan solos.
                            </span>
                        </motion.h2>

                        <p className="text-xl md:text-2xl text-gray-400 mb-8 leading-relaxed max-w-2xl mx-auto font-light">
                            Automatización inteligente con IA, orquestada en la nube y diseñada para escalar.
                        </p>

                        <div className="flex justify-center mb-8">
                            <div className="bg-white/5 bg-opacity-50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-lg inline-block text-left">
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                                    {[
                                        'Seguimiento automático de leads',
                                        'Validación inteligente de facturas',
                                        'Alertas y control de inventario',
                                        'Procesos sin intervención humana'
                                    ].map((item, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1 }}
                                            className="flex items-center gap-3 text-gray-200 font-medium text-sm md:text-base"
                                        >
                                            <div className="w-1.5 h-1.5 rounded-full bg-neon-ice shadow-[0_0_10px_rgba(0,240,255,0.5)]" />
                                            {item}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Micro-copy chips */}
                        <div className="flex flex-wrap justify-center gap-2 opacity-80">
                            {['IA decide, sistema ejecuta', 'Auditable 100%', 'Zero Friction'].map((tag, i) => (
                                <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-gray-500">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlueprintIntro;
