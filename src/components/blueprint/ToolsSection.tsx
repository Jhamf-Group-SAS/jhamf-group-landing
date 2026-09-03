import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Network, Workflow, BrainCircuit, BarChart3 } from 'lucide-react';

const ToolsSection = () => {
    return (
        <section className="py-24 bg-void text-white">
            <div className="container mx-auto px-4">
                {/* 1. Automation */}
                <ToolBlock
                    title="Automatización de Procesos"
                    description="Los procesos ya no se olvidan. Se ejecutan solos."
                    icon={Workflow}
                    color="text-neon-ice"
                    features={['Seguimiento automático de leads', 'Alertas de inventario', 'Validación de facturas']}
                    diagram="Formulario → n8n → Acción"
                />

                {/* 2. Logic Apps */}
                <ToolBlock
                    title="Azure Logic Apps"
                    description="Automatización de nivel corporativo, sin complejidad. Integración nativa con Microsoft 365."
                    icon={Network}
                    color="text-blue-400"
                    features={['SharePoint & Teams Sync', 'Auditoría Enterprise', 'Seguridad Bancaria']}
                    diagram="Sistemas MSFT → Logic Apps → ERP"
                    reversed
                />

                {/* 3. AI */}
                <ToolBlock
                    title="Inteligencia Artificial"
                    description="La IA no responde. Decide. Agentes autónomos que entienden el contexto."
                    icon={BrainCircuit}
                    color="text-plasma"
                    features={['Clasificación de correos', 'Análisis de contratos', 'Soporte Nivel 1']}
                    diagram="Datos → LLM → Decisión"
                />

                {/* 4. Data */}
                <ToolBlock
                    title="Datos y Visibilidad"
                    description="Si no lo ves, no lo controlas. Dashboards vivos para tomar decisiones."
                    icon={BarChart3}
                    color="text-signal"
                    features={['KPIs en tiempo real', 'Predicción de tendencias', 'Alertas financieras']}
                    diagram="Operación → BI → Gerencia"
                    reversed
                />
            </div>
        </section>
    );
};

interface ToolBlockProps {
    title: string;
    description: string;
    icon: React.ElementType;
    color: string;
    features: string[];
    diagram: string;
    reversed?: boolean;
}

const ToolBlock = ({ title, description, icon: Icon, color, features, diagram, reversed = false }: ToolBlockProps) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

    return (
        <div ref={ref} className={`flex flex-col md:flex-row gap-12 md:gap-24 items-center mb-32 ${reversed ? 'md:flex-row-reverse' : ''}`}>
            <div className="flex-1">
                <div className="inline-flex items-center gap-2 mb-4">
                    <Icon className={`w-6 h-6 ${color}`} />
                    <span className={`text-sm font-mono uppercase tracking-widest ${color}`}>{title}</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-bold font-display mb-6 leading-tight">
                    {description.split('.')[0]}. <br />
                    <span className="text-gray-500">{description.split('.')[1]}</span>
                </h3>
                <ul className="space-y-4 mb-8">
                    {features.map((feature: string, i: number) => (
                        <li key={i} className="flex items-center gap-3 text-gray-300">
                            <div className={`w-1.5 h-1.5 rounded-full ${color.replace('text-', 'bg-')}`} />
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex-1 w-full">
                <motion.div
                    style={{ y }}
                    className="aspect-square md:aspect-video bg-white/5 border border-white/10 rounded-2xl p-8 flex items-center justify-center relative overflow-hidden group"
                >
                    <div className={`absolute inset-0 opacity-10 ${color.replace('text-', 'bg-')}`} />

                    {/* Abstract Diagram Representation */}
                    <div className="flex items-center gap-4 text-sm md:text-base font-mono font-bold">
                        {diagram.split(' → ').map((step: string, i: number) => (
                            <div key={i} className="flex items-center gap-4">
                                <div className="px-4 py-2 bg-black/40 border border-white/10 rounded-lg backdrop-blur text-white">
                                    {step}
                                </div>
                                {i < 2 && <span className="text-gray-600">→</span>}
                            </div>
                        ))}
                    </div>

                    {/* Decorative glow */}
                    <div className={`absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-[100px] opacity-20 ${color.replace('text-', 'bg-')}`} />
                </motion.div>
            </div>
        </div>
    );
};

export default ToolsSection;
