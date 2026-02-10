import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../layout/Footer';

const Contact = () => {
    return (
        <section id="contact" className="relative pt-24 pb-12 bg-obsidian border-t border-white/5">

            {/* CTA Section */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-24">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative p-12 rounded-3xl bg-gradient-to-r from-azure/10 to-neon-purple/10 border border-white/10 overflow-hidden"
                >
                    {/* Glow Effects */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-azure/5 blur-3xl rounded-full" />

                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                            ¿Listo para evolucionar su empresa?
                        </h2>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            Hablemos de cómo la Inteligencia Artificial puede trabajar sobre su infraestructura Cloud hoy mismo.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="https://form.typeform.com/to/gxR8JkE0"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-white text-obsidian font-bold rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
                            >
                                Agendar Consultoría Gratuita
                                <ArrowRight className="w-5 h-5" />
                            </a>
                            <Link
                                to="/casos-de-exito"
                                className="px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 transition-colors"
                            >
                                Ver Casos de Éxito
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div >

            {/* Footer */}
            < Footer />
        </section >
    );
};

export default Contact;
