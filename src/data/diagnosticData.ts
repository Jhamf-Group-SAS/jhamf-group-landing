export type Question = {
    id: number;
    question: string;
    options: {
        label: string;
        score: number;
    }[];
};

export const diagnosticQuestions: Question[] = [
    {
        id: 1,
        question: "¿Cuál es el tamaño de su empresa en términos de empleados?",
        options: [
            { label: "1 - 10 (Startup/Micro)", score: 1 },
            { label: "11 - 50 (Pequeña)", score: 2 },
            { label: "51 - 200 (Mediana)", score: 3 },
            { label: "+200 (Gran Empresa)", score: 4 },
        ],
    },
    {
        id: 2,
        question: "¿Cómo describiría sus procesos operativos actuales?",
        options: [
            { label: "Manuales (Excel, Papel, Email)", score: 1 },
            { label: "Parcialmente Digitales (Algún software aislado)", score: 2 },
            { label: "Digitalizados (ERP/CRM implementados)", score: 3 },
            { label: "Automatizados (Flujos conectados)", score: 5 },
        ],
    },
    {
        id: 3,
        question: "¿Dónde residen sus datos e infraestructura principal?",
        options: [
            { label: "Servidores On-Premise", score: 1 },
            { label: "Híbrido (Nube + Local)", score: 3 },
            { label: "100% Cloud (Azure, AWS, etc.)", score: 5 },
            { label: "No estoy seguro", score: 1 },
        ],
    },
    {
        id: 4,
        question: "¿Qué herramientas utiliza para la gestión del cliente?",
        options: [
            { label: "Hojas de cálculo / Notas", score: 1 },
            { label: "CRM Básico", score: 2 },
            { label: "CRM Integrado con Marketing", score: 4 },
            { label: "Plataforma Omnicanal Automatizada", score: 5 },
        ],
    },
    {
        id: 5,
        question: "¿Sus sistemas actuales 'hablan' entre sí?",
        options: [
            { label: "No, son silos independientes", score: 1 },
            { label: "Algunas integraciones manuales", score: 2 },
            { label: "Sí, mediante APIs/Conectores", score: 4 },
            { label: "Totalmente orquestados en tiempo real", score: 5 },
        ],
    },
    {
        id: 6,
        question: "¿Ha implementado alguna solución de IA anteriormente?",
        options: [
            { label: "No, nunca", score: 1 },
            { label: "Estamos explorando / PoC", score: 2 },
            { label: "Sí, uso básico (Chatbots simples)", score: 3 },
            { label: "Sí, modelos avanzados o críticos", score: 5 },
        ],
    },
];

export const getResultCategory = (score: number) => {
    const maxScore = diagnosticQuestions.reduce((acc, q) => acc + Math.max(...q.options.map(o => o.score)), 0);
    const percentage = (score / maxScore) * 100;

    if (percentage < 30) {
        return {
            title: "Etapa Inicial",
            description: "Su empresa tiene un enorme potencial de optimización. El primer paso es digitalizar la información base.",
            color: "text-gray-400",
            recommendations: ["Centralizar datos en Cloud", "Implementar CRM básico", "Mapear procesos manuales críticos"]
        };
    } else if (percentage < 60) {
        return {
            title: "En Crecimiento Digital",
            description: "Ya tiene bases sólidas. Es el momento ideal para empezar a conectar sus islas de información.",
            color: "text-electric",
            recommendations: ["Migración estratégica a Azure", "Automatización de reportes (BI)", "Integrar sistemas clave (API)"]
        };
    } else if (percentage < 85) {
        return {
            title: "Avanzado",
            description: "Su infraestructura es robusta. Está listo para dejar que la automatización maneje el trabajo pesado.",
            color: "text-neon-ice",
            recommendations: ["Implementar RPA para tareas repetitivas", "Asistentes virtuales para clientes", "Optimización de costos Cloud"]
        };
    } else {
        return {
            title: "AI-Ready Leader",
            description: "Operación de vanguardia. Su ecosistema está preparado para la inteligencia cognitiva avanzada.",
            color: "text-plasma",
            recommendations: ["Modelos predictivos personalizados", "Agentes autónomos de toma de decisiones", "Automatización End-to-End"]
        };
    }
};
