import { motion } from 'framer-motion';

const Results = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-void to-black border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="p-4"
                    >
                        <div className="text-5xl md:text-6xl font-bold font-display text-white mb-2">-60%</div>
                        <p className="text-gray-400 text-sm uppercase tracking-widest">Tareas Manuales</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="p-4"
                    >
                        <div className="text-5xl md:text-6xl font-bold font-display text-signal mb-2">+30%</div>
                        <p className="text-gray-400 text-sm uppercase tracking-widest">Velocidad Operativa</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="p-4"
                    >
                        <div className="text-5xl md:text-6xl font-bold font-display text-white mb-2">+25%</div>
                        <p className="text-gray-400 text-sm uppercase tracking-widest">Eficiencia Comercial</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="p-4"
                    >
                        <div className="text-5xl md:text-6xl font-bold font-display text-neon-ice mb-2">24/7</div>
                        <p className="text-gray-400 text-sm uppercase tracking-widest">Operación Activa</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Results;
