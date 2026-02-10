import React, { useState } from 'react';
import SEOHead from '../components/seo/SEOHead';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import DiagnosticWizard from '../components/diagnostic/DiagnosticWizard';
import { motion } from 'framer-motion';
import { MapPin, Cpu, Server, Shield } from 'lucide-react';

const IACaliPage: React.FC = () => {
    const [isWizardOpen, setIsWizardOpen] = useState(false);

    return (
        <div className="bg-obsidian min-h-screen">
            <SEOHead
                title="Inteligencia Artificial en Cali & Valle del Cauca | JHAMF Group"
                description="Empresa líder en desarrollo de IA, Automatización de Procesos y Soporte TI en Cali. Transformamos empresas del Valle del Cauca con tecnología de punta."
                keywords="IA Cali, Inteligencia Artificial Valle del Cauca, Automatización Cali, Desarrollo Software Cali, Soporte TI Cali, Empresas de Tecnología Cali"
                url="https://www.jhamf.com/ia-cali"
                jsonLd={{
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": "Jhamf Group - Sede Cali",
                    "image": "https://www.jhamf.com/og-image.jpg",
                    "telephone": "+57-300-123-4567",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Calle 123 #45-67", // Placeholder
                        "addressLocality": "Cali",
                        "addressRegion": "Valle del Cauca",
                        "addressCountry": "CO"
                    },
                    "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": 3.4516,
                        "longitude": -76.5320
                    },
                    "url": "https://www.jhamf.com/ia-cali"
                }}
            />
            <Navbar onOpenWizard={() => setIsWizardOpen(true)} />

            <main>
                {/* Hero Section */}
                <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
                    <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
                    <div className="absolute top-0 right-0 w-96 h-96 bg-azure/20 blur-[100px] rounded-full mix-blend-screen" />

                    <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm"
                        >
                            <MapPin className="w-4 h-4 text-neon-lime" />
                            <span className="text-sm font-medium text-gray-300 uppercase tracking-widest">
                                Soluciones Tecnológicas en Cali
                            </span>
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
                            Inteligencia Artificial <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-lime to-azure">
                                made in Cali
                            </span>
                        </h1>

                        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
                            Impulsamos la competitividad de las empresas del Valle del Cauca con automatización inteligente, infraestructura cloud y soporte TI de clase mundial.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => setIsWizardOpen(true)}
                                className="px-8 py-4 bg-azure hover:bg-azure-glow text-white font-bold rounded-lg transition-all hover:scale-105"
                            >
                                Diagnóstico Gratuito
                            </button>
                        </div>
                    </div>
                </section>

                {/* Local Services Grid */}
                <section className="py-20 bg-white/[0.02]">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-neon-lime/30 transition-colors">
                                <Cpu className="w-10 h-10 text-neon-lime mb-4" />
                                <h3 className="text-xl font-bold text-white mb-3">Automatización RPA en Cali</h3>
                                <p className="text-gray-400">
                                    Robots de software para automatizar tareas administrativas en empresas caleñas. Reduzca costos operativos hoy.
                                </p>
                            </div>
                            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-azure/30 transition-colors">
                                <Server className="w-10 h-10 text-azure mb-4" />
                                <h3 className="text-xl font-bold text-white mb-3">Infraestructura & Cloud</h3>
                                <p className="text-gray-400">
                                    Migración a Azure y servicios de nube híbrida. Soporte local para su infraestructura crítica.
                                </p>
                            </div>
                            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-neon-purple/30 transition-colors">
                                <Shield className="w-10 h-10 text-neon-purple mb-4" />
                                <h3 className="text-xl font-bold text-white mb-3">Ciberseguridad</h3>
                                <p className="text-gray-400">
                                    Protección de datos y auditoría de seguridad para cumplimiento normativo en Colombia.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
            <DiagnosticWizard isOpen={isWizardOpen} onClose={() => setIsWizardOpen(false)} />
        </div>
    );
};

export default IACaliPage;
