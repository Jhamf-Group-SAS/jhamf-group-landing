import React from 'react';
import { Workflow, MessageSquare } from 'lucide-react';

const AutomationSolutions: React.FC = () => {
    return (
        <section id="solutions" className="py-24 bg-void relative overflow-hidden">
            {/* Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-plasma/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                        Nuestras Soluciones de <span className="text-neon-ice">Inteligencia Artificial</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Tecnología que trabaja para ti. Desde robots de software hasta asistentes cognitivos avanzados.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Card 1: RPA */}
                    <div className="group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-electric/50 transition-all duration-300">
                        <div className="w-14 h-14 bg-electric/10 rounded-xl flex items-center justify-center mb-8">
                            <Workflow className="w-8 h-8 text-electric" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">RPA (Robotic Process Automation)</h3>
                        <p className="text-gray-400 mb-6">
                            Robots de software que imitan acciones humanas en sistemas digitales. Ideales para facturación, conciliación bancaria y reportes.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center gap-3 text-sm text-gray-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-electric"></span>
                                Automatiza Excel, SAP, Web Apps
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-electric"></span>
                                Cero errores en digitación
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-electric"></span>
                                Ejecución 24/7 sin descanso
                            </li>
                        </ul>
                    </div>

                    {/* Card 2: Chatbots */}
                    <div className="group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-plasma/50 transition-all duration-300">
                        <div className="w-14 h-14 bg-plasma/10 rounded-xl flex items-center justify-center mb-8">
                            <MessageSquare className="w-8 h-8 text-plasma" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Agentes Cognitivos & Chatbots</h3>
                        <p className="text-gray-400 mb-6">
                            Asistentes virtuales potenciados por IA Generativa que entienden lenguaje natural. Para ventas, soporte y HR.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center gap-3 text-sm text-gray-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-plasma"></span>
                                Integración WhatsApp Business API
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-plasma"></span>
                                Calificación automática de leads
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-plasma"></span>
                                Respuestas instantáneas y precisas
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Integration Bar */}
                <div className="mt-16 pt-12 border-t border-white/5 text-center">
                    <p className="text-sm text-gray-500 uppercase tracking-widest mb-8">Nos integramos con tu ecosistema</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Replace with actual logos if needed, using text for now */}
                        <span className="text-xl font-bold text-white">SAP</span>
                        <span className="text-xl font-bold text-white">Salesforce</span>
                        <span className="text-xl font-bold text-white">HubSpot</span>
                        <span className="text-xl font-bold text-white">Microsoft 365</span>
                        <span className="text-xl font-bold text-white">Google Workspace</span>
                        <span className="text-xl font-bold text-white">WhatsApp</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AutomationSolutions;
