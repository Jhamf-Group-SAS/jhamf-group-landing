import { motion } from 'framer-motion';
import { ShieldCheck, CloudLightning, Zap, Scale } from 'lucide-react';

const benefits = [
    {
        icon: CloudLightning,
        title: "Expertos en Azure",
        description: "Arquitecturas cloud nativas, migraciones complejas y optimización de costos."
    },
    {
        icon: Zap,
        title: "Automatización Inteligente",
        description: "RPA y flujos de trabajo con IA para eliminar tareas repetitivas."
    },
    {
        icon: ShieldCheck,
        title: "Seguridad Robusta",
        description: "Implementación de mejores prácticas de Ciberseguridad y Compliance."
    },
    {
        icon: Scale,
        title: "Escalabilidad Total",
        description: "Soluciones diseñadas para crecer con su negocio sin fricción."
    }
];

const WhyTrustUs = () => {
    return (
        <section className="py-24 bg-obsidian relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                        Por qué confiar en JHAMF
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Combinamos experiencia técnica profunda con una visión estratégica de negocio para entregar valor real.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-azure/30 transition-all hover:bg-white/10 group"
                        >
                            <div className="w-12 h-12 rounded-lg bg-azure/10 flex items-center justify-center mb-4 group-hover:bg-azure/20 transition-colors">
                                <benefit.icon className="w-6 h-6 text-azure" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyTrustUs;
