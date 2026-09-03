import React from 'react';
import { Send, Phone, Mail, MessageSquare } from 'lucide-react';

const AzureContact: React.FC = () => {
    return (
        <section id="contact" className="py-24 bg-gradient-to-b from-void to-black relative overflow-hidden">
            {/* Glow effect */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-electric/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-xl">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                            ¿Listo para migrar a la nube?
                        </h2>
                        <p className="text-gray-400">
                            Agenda una sesión de diagnóstico gratuita de 30 minutos con un arquitecto de soluciones de Jhamf.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h3 className="text-xl font-semibold text-white mb-4">Contacto Directo</h3>

                            <a href="https://wa.me/573174660498" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20">
                                    <MessageSquare className="w-5 h-5 text-green-500" />
                                </div>
                                <span>Chat en WhatsApp</span>
                            </a>

                            <a href="mailto:proyectos@jhamf.com" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                                <div className="w-10 h-10 rounded-full bg-electric/10 flex items-center justify-center group-hover:bg-electric/20">
                                    <Mail className="w-5 h-5 text-electric" />
                                </div>
                                <span>proyectos@jhamf.com</span>
                            </a>

                            <a href="tel:+573174660498" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10">
                                    <Phone className="w-5 h-5 text-white" />
                                </div>
                                <span>+57 317 466 0498</span>
                            </a>
                        </div>

                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Nombre de la empresa"
                                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-electric transition-colors"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Correo corporativo"
                                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-electric transition-colors"
                                />
                            </div>
                            <div>
                                <select className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-electric transition-colors">
                                    <option>Interés Principal: Migración</option>
                                    <option>Interés Principal: Infraestructura</option>
                                    <option>Interés Principal: Datos e IA</option>
                                    <option>Interés Principal: Seguridad</option>
                                </select>
                            </div>

                            <a
                                href="https://form.typeform.com/to/gxR8JkE0"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-electric hover:bg-electric-glow text-white font-medium py-3 rounded-lg transition-all flex items-center justify-center gap-2 group"
                            >
                                Solicitar Asesoría
                                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AzureContact;
