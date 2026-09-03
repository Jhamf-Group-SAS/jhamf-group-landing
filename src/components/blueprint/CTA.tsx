import { motion } from 'framer-motion';

const CTA = () => {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="absolute inset-0 bg-signal/5" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-signal/20 rounded-full blur-[150px] pointer-events-none opacity-40 animate-pulse" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl md:text-6xl font-bold font-display text-white mb-6">
                        Ahora imagina esto funcionando <br /> con tus <span className="text-signal">datos reales.</span>
                    </h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        En 30 minutos te mostramos qué automatizar y cuánto puedes ganar. <br />
                        <span className="text-gray-500 text-sm font-mono mt-2 block">Sin compromiso. Con números.</span>
                    </p>

                    <button
                        onClick={() => window.open('https://form.typeform.com/to/gxR8JkE0', '_blank')}
                        className="px-10 py-5 bg-white text-black font-bold text-xl rounded-full hover:bg-signal transition-colors duration-300 shadow-xl hover:shadow-[0_0_30px_rgba(204,255,0,0.5)] transform hover:-translate-y-1"
                    >
                        🚀 Solicitar Diagnóstico Gratis
                    </button>
                    <p className="mt-6 text-sm text-gray-500">
                        Solo 5 cupos de consultoría técnica por semana.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
