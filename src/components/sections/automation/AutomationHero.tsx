import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, Cpu, Sparkles } from 'lucide-react';

const AutomationHero: React.FC = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-void">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-plasma/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-neon-ice/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            </div>

            <div className="container relative z-10 px-4 mx-auto pt-20">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-plasma/30 bg-plasma/10 backdrop-blur-sm"
                    >
                        <Bot className="w-5 h-5 text-plasma" />
                        <span className="text-sm font-medium text-plasma tracking-wider uppercase">Intelligent Automation</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight"
                    >
                        Automatizamos tu operación con <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-ice to-plasma">Inteligencia Artificial</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto"
                    >
                        Elimina tareas repetitivas, reduce costos operativos y escala tu negocio sin aumentar la nómina.
                        Implementamos RPA y Agentes Copilotos que trabajan 24/7.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <a
                            href="https://form.typeform.com/to/gxR8JkE0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative px-8 py-4 bg-plasma text-white rounded-lg font-medium overflow-hidden transition-all hover:bg-neon-ice hover:scale-105"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Solicitar Diagnóstico IA
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-plasma to-neon-ice opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </a>

                        <a
                            href="#solutions"
                            className="px-8 py-4 bg-glass border border-white/10 text-white rounded-lg font-medium hover:bg-white/5 transition-colors backdrop-blur-md flex items-center gap-2"
                        >
                            <Cpu className="w-4 h-4" />
                            Ver Soluciones
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-10"
                    >
                        {[
                            { label: "Ahorro de Costos", val: "+40%", icon: Sparkles },
                            { label: "Productividad", val: "24/7", icon: Bot },
                            { label: "Errores Humanos", val: "0%", icon: Cpu },
                            { label: "ROI Promedio", val: "3 Meses", icon: ArrowRight },
                        ].map((stat, i) => (
                            <div key={i} className="text-center">
                                <h4 className="text-3xl font-bold text-white mb-1 font-display">{stat.val}</h4>
                                <p className="text-sm text-gray-500 uppercase tracking-widest">{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AutomationHero;
