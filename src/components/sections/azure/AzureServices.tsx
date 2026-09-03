import React from 'react';
import { Server, Shield, Database, Brain, RefreshCw, LifeBuoy } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        icon: Server,
        title: 'Infraestructura Cloud',
        description: 'Servidores virtuales, redes y almacenamiento escalable en Azure. Diseñamos arquitecturas robustas y rentables.'
    },
    {
        icon: RefreshCw,
        title: 'Migración y Modernización',
        description: 'Llevamos tus apps y datos a la nube sin interrupciones. Estrategias Rehost, Refactor o Rearchitect.'
    },
    {
        icon: Shield,
        title: 'Ciberseguridad y Cumplimiento',
        description: 'Protección avanzada con Azure Sentinel y Defender. Auditorías de seguridad y gestión de identidades.'
    },
    {
        icon: Database,
        title: 'Backup y Disaster Recovery',
        description: 'Protege tu negocio contra pérdida de datos. Soluciones de continuidad de negocio (BCDR) resilientes.'
    },
    {
        icon: Brain,
        title: 'IA y Analítica de Datos',
        description: 'Implementa Azure OpenAI, Machine Learning y servicios cognitivos para potenciar tus decisiones.'
    },
    {
        icon: LifeBuoy,
        title: 'Soporte Gestionado 24/7',
        description: 'Monitoreo proactivo, optimización de costos y resolución de incidentes por expertos locales.'
    }
];

const AzureServices: React.FC = () => {
    return (
        <section id="services" className="py-20 bg-void relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-electric to-transparent opacity-50" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-display font-bold text-white mb-4"
                    >
                        Soluciones Integrales <span className="text-electric">Microsoft Azure</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 max-w-2xl mx-auto"
                    >
                        Potencia cada aspecto de tu tecnología con el ecosistema cloud más confiable del mundo.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-electric-glow/50 transition-all duration-300 hover:bg-white/[0.07]"
                        >
                            <div className="w-14 h-14 rounded-xl bg-electric/10 flex items-center justify-center mb-6 group-hover:bg-electric/20 transition-colors">
                                <service.icon className="w-7 h-7 text-electric group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-electric-glow transition-colors">{service.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AzureServices;
