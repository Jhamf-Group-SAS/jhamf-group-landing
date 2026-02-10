import { Quote } from 'lucide-react';

const testimonials = [
    {
        quote: "La migración a Azure con JHAMF fue impecable. Logramos reducir costos y mejorar nuestra disponibilidad en tiempo récord.",
        author: "Carlos Rodriguez",
        role: "CTO, Fintech Andina"
    },
    {
        quote: "Gracias a la automatización de nuestros procesos contables, el equipo ahora se enfoca en análisis estratégico en lugar de digitación manual.",
        author: "Ana Martinez",
        role: "Gerente Financiera, Retail Co."
    },
    {
        quote: "El nivel de expertise en seguridad y cloud que aportaron fue clave para nuestro cumplimiento regulatorio.",
        author: "David Gomez",
        role: "Director de TI, SaludTotal"
    }
];

const Testimonials = () => {
    return (
        <section className="py-24 bg-white/[0.02]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-display font-bold text-white">
                        Lo que dicen nuestros clientes
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-obsidian border border-white/10 p-8 rounded-2xl relative">
                            <Quote className="w-10 h-10 text-azure/20 absolute top-6 right-6" />
                            <p className="text-gray-300 text-lg mb-6 leading-relaxed italic">
                                "{t.quote}"
                            </p>
                            <div>
                                <h4 className="text-white font-bold">{t.author}</h4>
                                <p className="text-azure text-sm">{t.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
