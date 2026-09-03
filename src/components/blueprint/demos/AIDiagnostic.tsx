import { useState, useRef, useEffect } from 'react';
import { useBlueprint } from '../context/BlueprintContext';
import { motion } from 'framer-motion';
import { Send, Bot, User } from 'lucide-react';

const AIDiagnostic = () => {
    const { activePersona } = useBlueprint();
    const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        // Reset chat when persona changes
        setMessages([
            { role: 'ai', text: getGreeting(activePersona) }
        ]);
    }, [activePersona]);

    const getGreeting = (persona: string) => {
        switch (persona) {
            case 'management': return 'Analizando rendimiento global. ¿Qué KPI necesita atención inmediata?';
            case 'sales': return 'Analizando pipeline de ventas. ¿Qué impide cerrar más tratos?';
            case 'ops': return 'Monitoreando cadena de suministro. ¿Cuál es su mayor cuello de botella?';
            case 'support': return 'Revisando tickets de soporte. ¿Qué quejas se repiten más?';
            default: return 'Sistema listo. ¿En qué puedo ayudarle?';
        }
    };

    const getResponse = (query: string, persona: string) => {
        // Simulate "smart" analysis based on keywords
        if (query.length < 5) return "Por favor, dame más detalles para un análisis preciso.";

        const responses = {
            management: "Detectado: Desviación en margen operativo. \nSolución: Dashboard unificado con alertas de P&L en tiempo real.\nImpacto: Toma de decisiones basada en datos, no intuición.",
            sales: "Leads calificados perdidos por demora en respuesta. \nSolución: Agente IA de respuesta inmediata + Scoring automático.\nImpacto: +30% en tasa de conversión.",
            ops: "Desconexión entre inventario y compras. \nSolución: Forecasting predictivo conectado a órdenes de compra.\nImpacto: -20% en stock inmovilizado.",
            support: "Sobrecarga por preguntas frecuentes (Tier 1). \nSolución: IA entrenada en base de conocimiento para resolución automática.\nImpacto: Reducción del 70% en tickets humanos."
        };

        // @ts-ignore
        return responses[persona] || "Entendido. Podemos automatizar ese flujo para recuperar control y eficiencia.";
    };

    const handleSend = () => {
        if (!input.trim()) return;

        const userMsg = input;
        setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
        setInput('');
        setIsTyping(true);

        setTimeout(() => {
            const aiResponse = getResponse(userMsg, activePersona);
            setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <section className="py-20 bg-void relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-plasma/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
                            IA Aplicada. <br />
                            <span className="text-plasma">No Chat Genérico.</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-8">
                            Un chatbot responde preguntas. Este sistema entiende tu operación, diagnostica problemas y ejecuta soluciones.
                        </p>

                        <div className="flex gap-4 mb-8">
                            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                                <h4 className="text-signal font-bold text-2xl mb-1">24/7</h4>
                                <p className="text-xs text-gray-500 uppercase">Disponibilidad</p>
                            </div>
                            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                                <h4 className="text-neon-ice font-bold text-2xl mb-1">0.2s</h4>
                                <p className="text-xs text-gray-500 uppercase">Latencia</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-black/50 backdrop-blur-md border border-white/10 rounded-2xl h-[500px] flex flex-col shadow-2xl relative">
                        {/* Header */}
                        <div className="p-4 border-b border-white/10 flex items-center gap-3">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                            <span className="ml-2 text-xs text-gray-500 font-mono">Jhamf AI Core v2.1</span>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
                            {messages.map((msg, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                                >
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'ai' ? 'bg-plasma/20 text-plasma' : 'bg-white/10 text-white'
                                        }`}>
                                        {msg.role === 'ai' ? <Bot size={20} /> : <User size={20} />}
                                    </div>
                                    <div className={`p-4 rounded-2xl max-w-[80%] text-sm leading-relaxed whitespace-pre-line ${msg.role === 'ai'
                                        ? 'bg-plasma/10 text-gray-200 border border-plasma/20 rounded-tl-none'
                                        : 'bg-white/10 text-white rounded-tr-none'
                                        }`}>
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}
                            {isTyping && (
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-plasma/20 flex items-center justify-center shrink-0">
                                        <Bot size={20} className="text-plasma" />
                                    </div>
                                    <div className="flex gap-1 items-center bg-plasma/10 p-4 rounded-2xl rounded-tl-none h-12">
                                        <span className="w-2 h-2 bg-plasma rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                        <span className="w-2 h-2 bg-plasma rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                        <span className="w-2 h-2 bg-plasma rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="p-4 border-t border-white/10 bg-black/20">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Describa un problema operativo..."
                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-white placeholder-gray-500 focus:outline-none focus:border-plasma transition-colors"
                                />
                                <button
                                    onClick={handleSend}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-white transition-colors"
                                >
                                    <Send size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AIDiagnostic;
