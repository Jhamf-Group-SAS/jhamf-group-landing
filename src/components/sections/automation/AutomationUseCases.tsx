import React from 'react';
import { motion } from 'framer-motion';
import { FileCheck, Users, TrendingUp } from 'lucide-react';

const AutomationUseCases: React.FC = () => {
    return (
        <section className="py-20 bg-[#05050A]">
            <div className="container px-4 mx-auto">
                <div className="mb-12">
                    <h2 className="text-3xl font-display font-bold text-white">Casos de Uso Reales</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        {
                            icon: FileCheck,
                            title: "Facturación Automática",
                            before: "3 días al mes dedicados a generar y enviar facturas.",
                            after: "Bots generan y envían facturas en minutos al recibir la orden.",
                            impact: "90% menos tiempo"
                        },
                        {
                            icon: Users,
                            title: "Atención al Cliente",
                            before: "Clientes esperan horas por respuestas básicas en WhatsApp.",
                            after: "IA responde instantáneamente 24/7 y escala casos complejos.",
                            impact: "+40% satisfacción"
                        },
                        {
                            icon: TrendingUp,
                            title: "Reportes de Ventas",
                            before: "Gerencia espera al cierre de mes para ver métricas consolid.",
                            after: "Dashboards actualizados en tiempo real por bots de datos.",
                            impact: "Decisiones ágiles"
                        }
                    ].map((useCase, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -5 }}
                            className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-all"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <div className="p-3 rounded-lg bg-electric/10 text-electric">
                                    <useCase.icon className="w-6 h-6" />
                                </div>
                                <span className="text-xs font-bold px-3 py-1 rounded-full bg-green-500/20 text-green-400">
                                    {useCase.impact}
                                </span>
                            </div>

                            <h3 className="text-lg font-bold text-white mb-4">{useCase.title}</h3>

                            <div className="space-y-4">
                                <div className="relative pl-4 border-l-2 border-red-500/30">
                                    <p className="text-xs text-red-400 uppercase font-bold mb-1">Antes</p>
                                    <p className="text-sm text-gray-400">{useCase.before}</p>
                                </div>
                                <div className="relative pl-4 border-l-2 border-green-500/30">
                                    <p className="text-xs text-green-400 uppercase font-bold mb-1">Después (con IA)</p>
                                    <p className="text-sm text-gray-300">{useCase.after}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AutomationUseCases;
