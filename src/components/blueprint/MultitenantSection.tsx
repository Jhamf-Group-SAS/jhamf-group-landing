import { Shield, Lock, Layers, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const MultitenantSection = () => {
    return (
        <section className="py-12 bg-gradient-to-b from-black to-void border-t border-white/5 overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Unified Compact Container */}
                <div className="max-w-7xl mx-auto bg-white/5 border border-white/10 rounded-3xl overflow-hidden relative">
                    {/* Background Glow */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-neon-ice/5 rounded-full blur-[100px] -z-10" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">

                        {/* Left: Diagram (Darker Background) */}
                        <div className="bg-black/40 p-12 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-white/5 relative overflow-hidden">

                            {/* Central Engine */}
                            <div className="w-full max-w-sm bg-void border border-white/20 p-8 rounded-2xl shadow-2xl mb-10 relative z-10">
                                {/* Core Glow Pulse */}
                                <div className="absolute inset-0 bg-signal/5 rounded-2xl animate-pulse" />

                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-signal text-black text-xs font-bold rounded-full uppercase tracking-wider shadow-[0_0_15px_rgba(204,255,0,0.4)]">
                                    Core Engine
                                </div>
                                <div className="flex justify-around items-center opacity-70 mb-5 relative">
                                    <Layers className="w-8 h-8 text-white" />
                                    {/* Processing Line Animation */}
                                    <div className="h-px bg-white/20 flex-1 mx-4 relative overflow-hidden">
                                        <motion.div
                                            className="absolute inset-0 bg-signal"
                                            animate={{ x: ['-100%', '100%'] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                        />
                                    </div>
                                    <Shield className="w-8 h-8 text-white" />
                                </div>
                                <div className="space-y-2.5">
                                    <div className="h-2 bg-white/10 rounded-full w-3/4 mx-auto overflow-hidden">
                                        <motion.div
                                            className="h-full bg-white/20"
                                            animate={{ width: ['0%', '100%'] }}
                                            transition={{ duration: 3, repeat: Infinity }}
                                        />
                                    </div>
                                    <div className="h-2 bg-white/10 rounded-full w-full" />
                                </div>
                            </div>

                            {/* Connection Lines with Data Flow */}
                            <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent relative">
                                <motion.div
                                    className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-2 bg-neon-ice rounded-full shadow-[0_0_10px_currentColor]"
                                    animate={{ y: [0, 32], opacity: [0, 1, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                />
                            </div>

                            {/* Tenants Grid */}
                            <div className="grid grid-cols-3 gap-4 w-full max-w-md relative z-10">
                                {[1, 2, 3].map((i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="bg-white/5 border border-white/10 p-4 rounded-xl flex flex-col items-center gap-3 hover:bg-white/10 hover:border-white/30 transition-all duration-300 group cursor-default"
                                    >
                                        <div className={`w-3 h-3 rounded-full ${i === 1 ? 'bg-neon-ice' : i === 2 ? 'bg-signal' : 'bg-plasma'
                                            } shadow-[0_0_12px_currentColor] group-hover:scale-150 transition-transform duration-300`} />
                                        <span className="text-xs font-mono text-gray-400 uppercase group-hover:text-white transition-colors">Tenant {String.fromCharCode(64 + i)}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Content (Lighter/Glass) */}
                        <div className="p-10 flex flex-col justify-center">
                            <div className="inline-flex items-center gap-2 mb-6 text-plasma text-xs font-mono uppercase tracking-widest font-bold">
                                <Lock className="w-3 h-3" />
                                Enterprise Grade
                            </div>

                            <h2 className="text-3xl font-bold font-display mb-4 text-white">
                                Arquitectura Multi-Tenant <br />
                            </h2>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Infraestructura diseñada para aislar datos sensibles mientras escala recursos automáticamente. Seguridad bancaria para cada cliente.
                            </p>

                            <ul className="space-y-6">
                                <FeatureRow
                                    icon={Shield}
                                    title="Aislamiento Lógico"
                                    desc="Cero mezcla de datos entre organizaciones."
                                />
                                <FeatureRow
                                    icon={Layers}
                                    title="Escalado Elástico"
                                    desc="Recursos asignados dinámicamente."
                                />
                                <FeatureRow
                                    icon={CheckCircle2}
                                    title="Auditoría Completa"
                                    desc="Logs inmutables de todas las operaciones."
                                />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const FeatureRow = ({ icon: Icon, title, desc }: any) => (
    <li className="flex gap-4">
        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5 text-gray-300" />
        </div>
        <div>
            <h4 className="text-white font-bold text-sm mb-1">{title}</h4>
            <p className="text-sm text-gray-500">{desc}</p>
        </div>
    </li>
);

export default MultitenantSection;
