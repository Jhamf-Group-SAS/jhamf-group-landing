import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, Sparkles, RefreshCcw, Send, Copy, Check } from 'lucide-react';
import { diagnosticQuestions, getResultCategory } from '../../data/diagnosticData';

interface DiagnosticWizardProps {
    isOpen: boolean;
    onClose: () => void;
}

// Número de WhatsApp (con código país, sin +)
const WHATSAPP_NUMBER = '573174660498';

const DiagnosticWizard = ({ isOpen, onClose }: DiagnosticWizardProps) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Record<number, number>>({});
    const [answerLabels, setAnswerLabels] = useState<Record<number, string>>({});
    const [showResult, setShowResult] = useState(false);
    const [sending, setSending] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [copied, setCopied] = useState(false);

    const maxScore = diagnosticQuestions.reduce((acc, q) => acc + Math.max(...q.options.map(o => o.score)), 0);
    const progress = ((currentStep + 1) / diagnosticQuestions.length) * 100;

    const handleOptionSelect = (score: number, label: string) => {
        setAnswers(prev => ({ ...prev, [currentStep]: score }));
        setAnswerLabels(prev => ({ ...prev, [currentStep]: label }));

        if (currentStep < diagnosticQuestions.length - 1) {
            setTimeout(() => setCurrentStep(prev => prev + 1), 250);
        } else {
            setTimeout(() => setShowResult(true), 250);
        }
    };

    const calculateTotalScore = () =>
        Object.values(answers).reduce((a, b) => a + b, 0);

    const resetWizard = () => {
        setCurrentStep(0);
        setAnswers({});
        setAnswerLabels({});
        setShowResult(false);
    };

    const getIndividualAnswers = () => {
        const individualAnswers: Record<string, any> = {};

        diagnosticQuestions.forEach((question, index) => {
            individualAnswers[`pregunta_${index + 1}`] = {
                pregunta: question.question,
                respuesta: answerLabels[index] || 'No respondida',
                puntuacion: answers[index] || 0
            };
        });

        return individualAnswers;
    };

    // 🟢 MENSAJE WHATSAPP (con texto inicial solicitado)
    const formatWhatsAppMessage = () => {
        const totalScore = calculateTotalScore();
        const result = getResultCategory(totalScore);
        const individualAnswers = getIndividualAnswers();

        let message = `Quiero recibir más información sobre el siguiente diagnóstico:\n\n`;
        message += `*DIAGNÓSTICO IA*\n`;
        message += `*Puntuación Total:* ${totalScore} puntos\n`;
        message += `*Resultado:* ${result?.title}\n\n`;

        message += `*RESPUESTAS DETALLADAS*\n`;
        message += `${'='.repeat(35)}\n\n`;

        Object.values(individualAnswers).forEach((item: any, index) => {
            message += `*${index + 1}. ${item.pregunta}*\n`;
            message += `✓ ${item.respuesta}\n`;
            message += `Puntos: ${item.puntuacion}\n\n`;
        });

        message += `${'='.repeat(35)}\n\n`;
        message += `*EVALUACIÓN:*\n${result?.description}\n\n`;
        message += `*RECOMENDACIONES:*\n`;

        result?.recommendations.forEach((rec, idx) => {
            message += `${idx + 1}. ${rec}\n`;
        });

        message += `\n📅 ${new Date().toLocaleString('es-ES')}`;

        return encodeURIComponent(message);
    };

    const sendToWhatsApp = () => {
        setSending(true);
        const message = formatWhatsAppMessage();
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
        setTimeout(() => setSending(false), 1000);
    };

    const handleCopyReport = () => {
        const textToCopy = `RESULTADOS DIAGNÓSTICO IA\n\nTotal: ${calculateTotalScore()} / ${maxScore}\nCategoría: ${getResultCategory(calculateTotalScore())?.title}\n\n${Object.values(getIndividualAnswers()).map((a: any) => `- ${a.pregunta}: ${a.respuesta} (${a.puntuacion} pts)`).join('\n')}`;

        navigator.clipboard.writeText(textToCopy);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };



    if (!isOpen) return null;

    const result = showResult ? getResultCategory(calculateTotalScore()) : null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/90 backdrop-blur-sm"
            >
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    className="relative w-full max-w-2xl bg-obsidian border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
                >
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-white/5 bg-white/5">
                        <div className="flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-neon-cyan" />
                            <span className="font-display font-bold text-white">
                                Diagnóstico IA
                            </span>
                        </div>
                        <button onClick={onClose}>
                            <X className="w-6 h-6 text-gray-400 hover:text-white" />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-8 overflow-y-auto flex-1">
                        {!showResult ? (
                            <>
                                <div className="w-full h-1 bg-white/10 rounded-full mb-8">
                                    <motion.div
                                        className="h-full bg-gradient-to-r from-azure to-neon-cyan rounded-full"
                                        animate={{ width: `${progress}%` }}
                                    />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-2">
                                    {diagnosticQuestions[currentStep].question}
                                </h3>

                                <div className="space-y-3 mt-6">
                                    {diagnosticQuestions[currentStep].options.map((option, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => handleOptionSelect(option.score, option.label)}
                                            className="w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 flex justify-between"
                                        >
                                            <span className="text-gray-300">{option.label}</span>
                                            <ChevronRight className="w-4 h-4 text-azure" />
                                        </button>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <div className="text-center">
                                <h2 className={`text-3xl font-bold mb-4 ${result?.color}`}>
                                    {result?.title}
                                </h2>

                                <p className="text-gray-300 mb-6">{result?.description}</p>

                                <div className="flex flex-col gap-3">
                                    {/* BOTÓN PRINCIPAL */}
                                    <button
                                        onClick={sendToWhatsApp}
                                        disabled={sending}
                                        className="w-full py-4 bg-azure hover:bg-azure-glow text-white font-bold rounded-xl flex justify-center gap-2"
                                    >
                                        <Send />
                                        {sending ? 'Abriendo WhatsApp...' : 'Quiero recibir asesoría'}
                                    </button>

                                    <button
                                        onClick={() => setShowDetails(!showDetails)}
                                        className="w-full py-4 bg-white/5 text-gray-300 rounded-xl hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                                    >
                                        {showDetails ? 'Ocultar Informe Técnico' : 'Ver Informe Técnico y Desglose'}
                                        <ChevronRight className={`w-4 h-4 transition-transform ${showDetails ? 'rotate-90' : ''}`} />
                                    </button>

                                    <AnimatePresence>
                                        {showDetails && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="bg-black/40 rounded-xl p-6 mt-4 border border-white/10 space-y-6">
                                                    {/* Score Visualization */}
                                                    <div>
                                                        <div className="flex justify-between items-end mb-2">
                                                            <span className="text-gray-400 text-sm uppercase tracking-wider font-semibold">Nivel de Madurez Digital</span>
                                                            <span className={`text-2xl font-bold ${result?.color}`}>
                                                                {calculateTotalScore()} <span className="text-gray-500 text-lg">/ {maxScore} pts</span>
                                                            </span>
                                                        </div>
                                                        <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                                                            <motion.div
                                                                initial={{ width: 0 }}
                                                                animate={{ width: `${(calculateTotalScore() / maxScore) * 100}%` }}
                                                                transition={{ duration: 1, ease: "easeOut" }}
                                                                className={`h-full ${result?.color.replace('text-', 'bg-')}`}
                                                            />
                                                        </div>
                                                        <div className="flex justify-between mt-1 text-xs text-gray-500 font-mono">
                                                            <span>Inicial</span>
                                                            <span>Líder</span>
                                                        </div>
                                                    </div>

                                                    {/* Detailed Answers with Badges */}
                                                    <div className="space-y-4">
                                                        <h4 className="text-white font-semibold flex items-center gap-2">
                                                            <Sparkles className="w-4 h-4 text-yellow-400" />
                                                            Análisis de Factores
                                                        </h4>
                                                        <div className="grid gap-3">
                                                            {diagnosticQuestions.map((q, idx) => {
                                                                const userAnswer = answerLabels[idx];
                                                                const userScore = answers[idx];
                                                                const maxQScore = Math.max(...q.options.map(o => o.score));

                                                                let statusColor = "text-yellow-400 border-yellow-400/30 bg-yellow-400/10";
                                                                if (userScore === maxQScore) statusColor = "text-green-400 border-green-400/30 bg-green-400/10";
                                                                if (userScore <= 1) statusColor = "text-red-400 border-red-400/30 bg-red-400/10";

                                                                return (
                                                                    <div key={idx} className="p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                                                        <p className="text-xs text-gray-400 mb-1 line-clamp-1">{q.question}</p>
                                                                        <div className="flex justify-between items-center gap-4">
                                                                            <span className="text-sm text-gray-200 font-medium truncate">{userAnswer}</span>
                                                                            <span className={`text-xs px-2 py-1 rounded-full border ${statusColor} font-mono whitespace-nowrap`}>
                                                                                +{userScore} pts
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>
                                                    </div>

                                                    {/* Copy Action */}
                                                    <button
                                                        onClick={handleCopyReport}
                                                        className="w-full py-3 bg-white/5 hover:bg-white/10 text-gray-300 rounded-lg flex items-center justify-center gap-2 text-sm transition-colors border border-white/5"
                                                    >
                                                        {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                                                        {copied ? '¡Copiado al portapapeles!' : 'Copiar Informe Técnico'}
                                                    </button>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    <button
                                        onClick={onClose}
                                        className="w-full py-3 text-gray-400 hover:text-white transition-colors"
                                    >
                                        Cerrar
                                    </button>

                                    <button
                                        onClick={resetWizard}
                                        className="text-xs text-gray-600 hover:text-gray-400 flex justify-center gap-1 transition-colors"
                                    >
                                        <RefreshCcw className="w-3 h-3" /> Reiniciar Test
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default DiagnosticWizard;