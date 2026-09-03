import { motion } from 'framer-motion';
import { Database, Cpu, ArrowRight, Layers } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Evolution = () => {
    const navigate = useNavigate();

    return (
        <section id="evolution" className="relative py-24 bg-void overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                        Nuestra Evolución <br />
                        <span className="text-gray-400">es su ventaja competitiva</span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                        Durante años, hemos construido las bases más sólidas en <span className="text-electric font-semibold">Microsoft Azure</span>.
                        Hoy, usamos esa experiencia para construir el futuro: sistemas que no solo funcionan, sino que <span className="text-neon-ice font-semibold">piensan</span> y <span className="text-neon-ice font-semibold">gestionan</span> por sí mismos.
                    </p>
                </motion.div>

                {/* Split Cards */}
                <div className="grid md:grid-cols-2 gap-8 relative">

                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                        <div className="w-12 h-12 bg-void border border-white/10 rounded-full flex items-center justify-center">
                            <ArrowRight className="text-gray-500" />
                        </div>
                    </div>

                    {/* Legacy/Foundation Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        onClick={() => { navigate('/azure'); window.scrollTo(0, 0); }}
                        className="group relative p-8 rounded-2xl border border-white/5 bg-gradient-to-br from-white/5 to-transparent hover:border-electric/30 transition-all duration-500 cursor-pointer"
                    >
                        <div className="absolute inset-0 bg-electric/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-electric/10 rounded-xl flex items-center justify-center mb-6 border border-electric/20">
                                <Database className="w-8 h-8 text-electric" />
                            </div>
                            <h3 className="text-2xl font-display font-bold text-white mb-4">Infraestructura & Cloud</h3>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex items-center gap-2">
                                    <Layers className="w-4 h-4 text-electric" /> Microsoft Azure Partners
                                </li>
                                <li className="flex items-center gap-2">
                                    <Layers className="w-4 h-4 text-electric" /> Arquitectura Hybrida & Multi-cloud
                                </li>
                                <li className="flex items-center gap-2">
                                    <Layers className="w-4 h-4 text-electric" /> Seguridad y Compliance
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Future/AI Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        onClick={() => { navigate('/automatizacion-ia'); window.scrollTo(0, 0); }}
                        className="group relative p-8 rounded-2xl border border-white/5 bg-gradient-to-br from-white/5 to-transparent hover:border-neon-ice/30 transition-all duration-500 cursor-pointer"
                    >
                        <div className="absolute inset-0 bg-neon-ice/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-neon-ice/10 rounded-xl flex items-center justify-center mb-6 border border-neon-ice/20">
                                <Cpu className="w-8 h-8 text-neon-ice" />
                            </div>
                            <h3 className="text-2xl font-display font-bold text-white mb-4">Automatización & IA</h3>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex items-center gap-2">
                                    <SparklesIcon className="w-4 h-4 text-neon-ice" /> Automatización de Procesos (RPA)
                                </li>
                                <li className="flex items-center gap-2">
                                    <SparklesIcon className="w-4 h-4 text-neon-ice" /> Agentes Cognitivos & Chatbots
                                </li>
                                <li className="flex items-center gap-2">
                                    <SparklesIcon className="w-4 h-4 text-neon-ice" /> Análisis Predictivo de Datos
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

// Mini helper component for the list icon spread
const SparklesIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /></svg>
);

export default Evolution;
