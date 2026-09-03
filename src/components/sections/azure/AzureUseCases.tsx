import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Store } from 'lucide-react';

const AzureUseCases: React.FC = () => {
    return (
        <section className="py-20 bg-void">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                        Escenarios de Éxito
                    </h2>
                    <p className="text-gray-400">Soluciones adaptadas al tamaño y necesidades de tu organización.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Card 1: PyMEs */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="group relative overflow-hidden rounded-2xl bg-[#0F0F1A] border border-white/5 p-8"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Store className="w-32 h-32 text-electric" />
                        </div>

                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center mb-6">
                                <Store className="w-6 h-6 text-orange-400" />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4">PyMEs y Startups</h3>
                            <p className="text-gray-400 mb-6 min-h-[3rem]">
                                Elimina costos de servidores físicos. Paga solo por lo que usas y habilita trabajo remoto seguro.
                            </p>

                            <ul className="space-y-3 mb-8 text-sm text-gray-300">
                                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-orange-400" /> Escritorios virtuales (AVD)</li>
                                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-orange-400" /> Backup automático en la nube</li>
                                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-orange-400" /> Hosting web y bases de datos</li>
                            </ul>

                            <span className="text-orange-400 text-sm font-medium group-hover:underline cursor-pointer">Ver planes para Pymes &rarr;</span>
                        </div>
                    </motion.div>

                    {/* Card 2: Enterprise */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="group relative overflow-hidden rounded-2xl bg-[#0F0F1A] border border-white/5 p-8"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Building2 className="w-32 h-32 text-plasma" />
                        </div>

                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-lg bg-plasma/20 flex items-center justify-center mb-6">
                                <Building2 className="w-6 h-6 text-plasma" />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4">Grandes Empresas</h3>
                            <p className="text-gray-400 mb-6 min-h-[3rem]">
                                Modernización de aplicaciones legacy, arquitectura híbrida y analítica avanzada de datos a gran escala.
                            </p>

                            <ul className="space-y-3 mb-8 text-sm text-gray-300">
                                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-plasma" /> Migración de Datacenters</li>
                                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-plasma" /> Gobernanza y Compliance</li>
                                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-plasma" /> IA Corporativa y Big Data</li>
                            </ul>

                            <span className="text-plasma text-sm font-medium group-hover:underline cursor-pointer">Ver soluciones corporativas &rarr;</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AzureUseCases;
