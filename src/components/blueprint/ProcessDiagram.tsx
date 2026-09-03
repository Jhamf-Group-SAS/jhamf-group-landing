import { motion } from 'framer-motion';
import { Database, Cpu, Zap, BarChart, ArrowRight } from 'lucide-react';

const ProcessDiagram = () => {
    return (
        <section className="py-20 bg-black border-y border-white/5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
                        Así funciona una operación <br /><span className="text-signal">End-to-End</span>
                    </h2>
                    <p className="text-gray-400">
                        Flujo de datos continuo, sin intervención humana.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 relative">
                    {/* Event */}
                    <DiagramStep icon={Zap} label="Evento" color="text-neon-ice" delay={0} />
                    <Arrow />

                    {/* Automation */}
                    <DiagramStep icon={Cpu} label="Automatización" color="text-signal" delay={0.2} />
                    <Arrow />

                    {/* AI Decision */}
                    <DiagramStep icon={Database} label="IA Decide" color="text-plasma" delay={0.4} />
                    <Arrow />

                    {/* Action */}
                    <DiagramStep icon={Zap} label="Acción" color="text-white" delay={0.6} />
                    <Arrow />

                    {/* Result */}
                    <DiagramStep icon={BarChart} label="Resultado" color="text-neon-ice" delay={0.8} />
                </div>
            </div>
        </section>
    );
};

const DiagramStep = ({ icon: Icon, label, color, delay }: { icon: React.ElementType, label: string, color: string, delay: number }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className="flex flex-col items-center gap-4 z-10"
    >
        <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-signal/50 transition-colors cursor-pointer group shadow-lg">
            <Icon className={`w-8 h-8 ${color} group-hover:scale-110 transition-transform`} />
        </div>
        <span className="font-mono text-sm tracking-wider text-gray-400 uppercase">{label}</span>
    </motion.div>
);

const Arrow = () => (
    <div className="hidden md:block">
        <ArrowRight className="w-6 h-6 text-white/20" />
    </div>
);

export default ProcessDiagram;
