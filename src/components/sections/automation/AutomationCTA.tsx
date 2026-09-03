import React from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

const AutomationCTA: React.FC = () => {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#05050A] to-void" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="max-w-4xl mx-auto bg-[#0F0F1A] border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden relative">
                    {/* Background decorations */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-plasma/10 rounded-full blur-[100px] pointer-events-none" />

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                                Descubre cuánto puedes ahorrar hoy
                            </h2>
                            <p className="text-gray-400 mb-8">
                                Agenda una sesión de consultoría gratuita. Analizamos tus procesos y te entregamos una proyección de ROI estimada.
                            </p>

                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3 text-white font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-neon-ice" />
                                    Sin compromiso de compra
                                </li>
                                <li className="flex items-center gap-3 text-white font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-neon-ice" />
                                    Análisis por expertos senior
                                </li>
                                <li className="flex items-center gap-3 text-white font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-neon-ice" />
                                    Propuesta en 48 horas
                                </li>
                            </ul>
                        </div>

                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="text"
                                placeholder="Nombre completo"
                                className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-plasma transition-colors"
                            />
                            <input
                                type="email"
                                placeholder="Correo corporativo"
                                className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-plasma transition-colors"
                            />
                            <textarea
                                placeholder="¿Qué proceso deseas automatizar?"
                                rows={2}
                                className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-plasma transition-colors resize-none"
                            ></textarea>

                            <a
                                href="https://form.typeform.com/to/gxR8JkE0"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-gradient-to-r from-plasma to-plasma/80 hover:from-neon-ice hover:to-neon-ice/80 text-white font-bold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(123,44,191,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] flex items-center justify-center gap-2"
                            >
                                Solicitar Asesoría IA
                                <Send className="w-4 h-4" />
                            </a>
                            <p className="text-xs text-center text-gray-500 mt-4">
                                Tus datos están seguros. Política de Privacidad.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AutomationCTA;
