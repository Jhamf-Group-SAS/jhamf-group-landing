import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MapPin, Award, Users } from 'lucide-react';

const AzureBenefits: React.FC = () => {
    return (
        <section className="py-20 bg-[#0A0A15] relative">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                            ¿Por qué elegir a <span className="text-neon-ice">Jhamf Group</span> como tu Partner?
                        </h2>
                        <p className="text-gray-400 mb-8 text-lg">
                            No somos solo un proveedor de licencias. Somos tu equipo extendido de ingeniería cloud, ubicados aquí en Colombia, hablando tu idioma y entendiendo tu mercado.
                        </p>

                        <div className="space-y-6">
                            {[
                                { icon: Award, title: "Microsoft Partner Certificado", desc: "Expertos validados oficialmente por Microsoft." },
                                { icon: MapPin, title: "Ubicación Local en Cali", desc: "Oficinas físicas en San Fernando. Soporte en tu zona horaria." },
                                { icon: Users, title: "Acompañamiento Estratégico", desc: "Consultoría de negocio, no solo soporte técnico." },
                                { icon: CheckCircle2, title: "Facturación Local", desc: "Facilidad administrativa y optimización de costos." }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <div className="mt-1">
                                        <div className="w-10 h-10 rounded-full bg-neon-ice/10 flex items-center justify-center">
                                            <item.icon className="w-5 h-5 text-neon-ice" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                                        <p className="text-gray-400 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-full min-h-[400px] rounded-2xl overflow-hidden border border-white/10 bg-glass backdrop-blur-sm p-2"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.775837691361!2d-76.5458316!3d3.4278453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a6a43870634f%3A0xe487103a8549704e!2sCl.%205b%202%20%2338-27%2C%20San%20Fernando%2C%20Cali%2C%20Valle%20del%20Cauca!5e0!3m2!1sen!2sco!4v1707074400000!5m2!1sen!2sco"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 z-0 opacity-80"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent pointer-events-none z-10" />

                        <div className="relative z-20 h-full flex flex-col items-center justify-end text-center p-8 mt-auto">
                            <div className="bg-void/90 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-2xl">
                                <h3 className="text-xl font-bold text-white mb-2 flex items-center justify-center gap-2">
                                    <MapPin className="w-5 h-5 text-neon-ice" />
                                    Visítanos
                                </h3>
                                <p className="text-gray-300 text-sm">Calle 5b2 No 38-27<br />San Fernando, Cali</p>
                                <a
                                    href="https://maps.app.goo.gl/2j6Z8Z8Z8Z8Z8Z8Z8" // Replace with actual shortlink if available, or just use the location
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-block text-xs text-neon-ice hover:underline"
                                >
                                    Ver en Google Maps &rarr;
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AzureBenefits;
