import React, { useState } from 'react';
import { Send, Phone, Mail, MessageSquare, CheckCircle } from 'lucide-react';

export interface ServiceContactFormProps {
    title: React.ReactNode;
    description: string;
    contactTitle?: string;
    whatsappText?: string;
    whatsappLink?: string;
    emailText?: string;
    emailLink?: string;
    phoneText?: string;
    phoneLink?: string;
    formInputs?: { type: string; placeholder: string }[];
    formSelect?: { placeholder: string; options: string[] };
    formCtaText: string;
    bgClass?: string;
    glowClass?: string;
    buttonClass?: string;
}

const ServiceContactForm: React.FC<ServiceContactFormProps> = ({
    title,
    description,
    contactTitle,
    whatsappText = "Chat en WhatsApp",
    whatsappLink = "https://wa.me/573022388714",
    emailText = "proyectos@jhamf.com",
    emailLink = "mailto:proyectos@jhamf.com",
    phoneText = "+57 302 238 8714",
    phoneLink = "tel:+573022388714",
    formInputs = [
        { type: "text", placeholder: "Nombre de la empresa" },
        { type: "email", placeholder: "Correo corporativo" }
    ],
    formSelect,
    formCtaText,
    bgClass = "bg-gradient-to-b from-void to-black",
    glowClass = "bg-electric/10",
    buttonClass = "bg-electric hover:bg-electric-glow"
}) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate emailjs or API submission
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            setTimeout(() => { setIsSuccess(false); }, 5000); // Reset after 5s
        }, 1500);
    };

    return (
        <section id="contact" className={`py-24 relative overflow-hidden ${bgClass}`}>
            {/* Glow effect */}
            <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] blur-[120px] rounded-full pointer-events-none ${glowClass}`} />

            <div className="container px-4 mx-auto relative z-10">
                <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-xl">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            {title}
                        </h2>
                        <p className="text-gray-400">
                            {description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            {contactTitle && (
                                <h3 className="text-xl font-semibold text-white mb-4">{contactTitle}</h3>
                            )}

                            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20">
                                    <MessageSquare className="w-5 h-5 text-green-500" />
                                </div>
                                <span>{whatsappText}</span>
                            </a>

                            <a href={emailLink} className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                                <div className="w-10 h-10 rounded-full bg-electric/10 flex items-center justify-center group-hover:bg-electric/20">
                                    <Mail className="w-5 h-5 text-electric" />
                                </div>
                                <span>{emailText}</span>
                            </a>

                            <a href={phoneLink} className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10">
                                    <Phone className="w-5 h-5 text-white" />
                                </div>
                                <span>{phoneText}</span>
                            </a>
                        </div>

                        <form className="space-y-4" onSubmit={handleSubmit} aria-label="Formulario de contacto">
                            {formInputs.map((input, idx) => (
                                <div key={idx}>
                                    <label htmlFor={`field-${idx}`} className="block text-sm font-medium text-steel mb-2">
                                        {input.type === 'text' ? 'Nombre de la empresa' : 'Correo corporativo'}
                                        <span className="sr-only"> (requerido)</span>
                                    </label>
                                    <input
                                        id={`field-${idx}`}
                                        type={input.type}
                                        required
                                        aria-required="true"
                                        autoComplete={input.type === 'email' ? 'email' : 'organization'}
                                        placeholder={input.placeholder}
                                        className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-electric focus:border-electric transition-colors"
                                    />
                                </div>
                            ))}
                            {formSelect && (
                                <div>
                                    <label htmlFor="form-select" className="block text-sm font-medium text-steel mb-2">
                                        {formSelect.placeholder}
                                        <span className="sr-only"> (requerido)</span>
                                    </label>
                                    <select required id="form-select" aria-required="true" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-electric focus:border-electric transition-colors">
                                        <option value="" disabled selected>{formSelect.placeholder}</option>
                                        {formSelect.options.map((opt, idx) => (
                                            <option key={idx} value={opt}>{opt}</option>
                                        ))}
                                    </select>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting || isSuccess}
                                aria-label={isSubmitting ? 'Enviando formulario...' : isSuccess ? 'Formulario enviado correctamente' : formCtaText}
                                className={`w-full text-white font-medium py-3 rounded-lg transition-all flex items-center justify-center gap-2 group focus-visible:ring-2 focus-visible:ring-electric focus-visible:outline-none ${buttonClass} disabled:opacity-75`}
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center gap-2">
                                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" aria-hidden="true" />
                                        <span>Enviando...</span>
                                    </span>
                                ) : isSuccess ? (
                                    <span className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-400" aria-hidden="true" />
                                        <span>Solicitud Enviada</span>
                                    </span>
                                ) : (
                                    <span className="flex items-center gap-2">
                                        <span>{formCtaText}</span>
                                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                                    </span>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceContactForm;
