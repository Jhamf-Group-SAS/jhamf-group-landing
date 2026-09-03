import React from 'react';
import { ClipboardList, PenTool, Rocket, BarChart3 } from 'lucide-react';

const AutomationProcess: React.FC = () => {
    return (
        <section className="py-20 bg-void border-y border-white/5">
            <div className="container px-4 mx-auto text-center">
                <h2 className="text-3xl font-display font-bold text-white mb-16">¿Cómo lo hacemos?</h2>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                    {/* Connection Line (Desktop) */}
                    <div className="hidden md:block absolute top-[2.5rem] left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-plasma/20 via-neon-ice/20 to-plasma/20 z-0" />

                    {[
                        { icon: ClipboardList, step: "01", title: "Diagnóstico", desc: "Identificamos procesos repetitivos de alto impacto." },
                        { icon: PenTool, step: "02", title: "Diseño", desc: "Arquitectura de la solución RPA o Agente IA." },
                        { icon: Rocket, step: "03", title: "Automatización", desc: "Desarrollo, pruebas y despliegue en producción." },
                        { icon: BarChart3, step: "04", title: "Mejora", desc: "Monitoreo de resultados y optimización continua." }
                    ].map((item, idx) => (
                        <div key={idx} className="relative z-10 flex flex-col items-center group">
                            <div className="w-20 h-20 rounded-2xl bg-void border border-white/10 flex items-center justify-center mb-6 group-hover:border-neon-ice/50 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.1)] transition-all duration-300">
                                <item.icon className="w-10 h-10 text-white group-hover:text-neon-ice transition-colors" />
                            </div>
                            <span className="text-4xl font-display font-bold text-white/5 absolute -top-4 -z-10">{item.step}</span>
                            <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                            <p className="text-sm text-gray-400 max-w-[200px]">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AutomationProcess;
