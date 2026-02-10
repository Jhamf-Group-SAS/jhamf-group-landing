import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';

const cases = [
    {
        id: 1,
        title: "Migración Azure High-Availability",
        client: "Fintech Leader",
        type: "Cloud",
        challenge: "Infraestructura legacy con tiempos de caída frecuentes y altos costos operativos.",
        solution: "Migración a Azure Kubernetes Service (AKS) con arquitectura multi-región y auto-scaling.",
        results: [
            "99.99% Uptime garantizado",
            "40% Reducción de costos",
            "Despliegues en minutos, no horas"
        ]
    },
    {
        id: 2,
        title: "Automatización de Facturación",
        client: "Retail Chain Colombia",
        type: "Automation",
        challenge: "Procesamiento manual de 5000+ facturas mensuales con alta tasa de error humano.",
        solution: "Implementación de RPA con AI Builder para extracción de datos y contabilización automática en ERP.",
        results: [
            "0% Errores de digitación",
            "Ahorro de 120 horas/mes",
            "Procesamiento en tiempo real"
        ]
    },
    {
        id: 3,
        title: "Data Lakehouse para Analytics",
        client: "Logistics Corp",
        type: "Cloud",
        challenge: "Silos de datos desconectados impedían análisis de negocio en tiempo real.",
        solution: "Construcción de Data Lakehouse en Azure Synapse + Power BI para dashboards ejecutivos.",
        results: [
            "Visión 360° del negocio",
            "Reportes automatizados",
            "Toma de decisiones basada en datos"
        ]
    },
    {
        id: 4,
        title: "Chatbot de Atención al Cliente",
        client: "E-commerce Startup",
        type: "Automation",
        challenge: "Soporte al cliente saturado y tiempos de respuesta lentos.",
        solution: "Desarrollo de agente IA con Azure OpenAI para atención 24/7 y resolución de tickets.",
        results: [
            "70% Tickets resueltos automáticamente",
            "Satisfacción del cliente +30%",
            "Disponibilidad 24/7"
        ]
    }
];

const CaseStudiesGrid = () => {
    const [filter, setFilter] = useState('All');

    const filteredCases = filter === 'All'
        ? cases
        : cases.filter(c => c.type === filter);

    return (
        <section id="casos-grid" className="py-24 bg-obsidian border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Filters */}
                <div className="flex justify-center mb-16 space-x-4">
                    {['All', 'Cloud', 'Automation'].map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${filter === f
                                    ? 'bg-azure text-white shadow-lg shadow-azure/25'
                                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                                }`}
                        >
                            {f === 'All' ? 'Todos' : f === 'Cloud' ? 'Cloud & Azure' : 'Automatización'}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <AnimatePresence>
                        {filteredCases.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={project.id}
                                className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 hover:border-azure/30 transition-colors group"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${project.type === 'Cloud'
                                                ? 'bg-azure/10 text-azure border border-azure/20'
                                                : 'bg-neon-purple/10 text-neon-purple border border-neon-purple/20'
                                            }`}>
                                            {project.type === 'Cloud' ? 'Cloud & Azure' : 'Automatización'}
                                        </span>
                                        <h3 className="text-2xl font-bold text-white group-hover:text-azure transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-sm text-gray-500 mt-1">{project.client}</p>
                                    </div>
                                    <div className="p-2 bg-white/5 rounded-full group-hover:bg-azure group-hover:text-white transition-all">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wide mb-2">El Reto</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">{project.challenge}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wide mb-2">La Solución</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">{project.solution}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wide mb-3">Resultados Clave</h4>
                                        <ul className="space-y-2">
                                            {project.results.map((result, i) => (
                                                <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                                                    <CheckCircle2 className="w-4 h-4 text-neon-lime flex-shrink-0" />
                                                    {result}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default CaseStudiesGrid;
