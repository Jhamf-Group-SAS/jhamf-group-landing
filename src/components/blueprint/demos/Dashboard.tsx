import { useBlueprint } from '../context/BlueprintContext';
import { motion } from 'framer-motion';
import { Activity, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';

const Dashboard = () => {
    const { activePersona } = useBlueprint();

    const metrics = {
        management: [
            { label: 'EBITDA Actual', value: '$120M', trend: '+8%', icon: TrendingUp, color: 'text-signal' },
            { label: 'Velocidad Entrega', value: '1.2h', trend: '-15%', icon: Activity, color: 'text-neon-ice' },
            { label: 'NPS Global', value: '72', trend: '+4', icon: CheckCircle, color: 'text-white' },
        ],
        sales: [
            { label: 'Leads Calificados', value: '85', trend: '+45%', icon: Activity, color: 'text-neon-ice' },
            { label: 'Tasa de Cierre', value: '22%', trend: '+5%', icon: TrendingUp, color: 'text-signal' },
            { label: 'Tiempo Resp.', value: '2min', trend: '-95%', icon: CheckCircle, color: 'text-white' },
        ],
        ops: [
            { label: 'Stock Crítico', value: '2', trend: 'Items', icon: AlertTriangle, color: 'text-red-500' },
            { label: 'Órdenes Auto', value: '14', trend: 'Esta sem', icon: CheckCircle, color: 'text-neon-ice' },
            { label: 'Eficiencia', value: '98%', trend: '+15%', icon: TrendingUp, color: 'text-signal' },
        ],
        support: [
            { label: 'Tickets Totales', value: '450', trend: 'Hoy', icon: Activity, color: 'text-white' },
            { label: 'Resueltos por IA', value: '315', trend: '70%', icon: CheckCircle, color: 'text-signal' },
            { label: 'Satisfacción', value: '4.8', trend: '/ 5.0', icon: TrendingUp, color: 'text-neon-ice' },
        ]
    };

    const data = metrics[activePersona];

    return (
        <section className="py-20 bg-black relative">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-8">
                    <div className="text-left">
                        <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
                            Visibilidad Total. <br />
                            <span className="text-gray-500">Sin Hojas de Cálculo.</span>
                        </h2>
                        <p className="text-gray-400 max-w-xl">
                            Si no lo ves, no lo controlas. Si lo controlas, lo puedes escalar.
                            Un tablero unificado para toda su operación.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {data.map((metric, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <metric.icon className={`w-8 h-8 ${metric.color} opacity-80 group-hover:opacity-100 transition-opacity`} />
                                <span className="text-xs font-mono text-gray-500 bg-white/5 px-2 py-1 rounded">LIVE</span>
                            </div>
                            <h3 className="text-4xl font-bold text-white mb-2">{metric.value}</h3>
                            <div className="flex justify-between items-end">
                                <p className="text-gray-400 text-sm">{metric.label}</p>
                                <span className={`text-sm font-medium ${metric.trend.includes('-') ? 'text-signal' : 'text-neon-ice'}`}>
                                    {metric.trend}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
