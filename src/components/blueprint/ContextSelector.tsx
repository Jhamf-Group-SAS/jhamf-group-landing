import { useBlueprint } from './context/BlueprintContext';
import type { PersonaType } from './context/BlueprintContext';
import { motion } from 'framer-motion';

const personas: { id: PersonaType; label: string; icon: string }[] = [
    { id: 'sales', label: 'Ventas', icon: '💼' },
    { id: 'ops', label: 'Operaciones', icon: '⚙️' },
    { id: 'support', label: 'Soporte', icon: '🎧' },
    { id: 'management', label: 'Dirección', icon: '📈' },
];

const ContextSelector = ({ embedded }: { embedded?: boolean }) => {
    const { activePersona, setPersona } = useBlueprint();

    if (embedded) {
        return (
            <div className="flex flex-wrap justify-center gap-2">
                {personas.map((persona) => (
                    <button
                        key={persona.id}
                        onClick={() => setPersona(persona.id)}
                        className={`relative px-4 py-2 rounded-lg border text-sm transition-all duration-300 ${activePersona === persona.id
                            ? 'bg-signal/10 border-signal text-signal shadow-[0_0_10px_rgba(204,255,0,0.2)]'
                            : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:border-white/20'
                            }`}
                    >
                        <div className="flex items-center gap-2">
                            <span>{persona.icon}</span>
                            <span className="font-bold">{persona.label}</span>
                        </div>
                        {activePersona === persona.id && (
                            <div className="absolute inset-0 rounded-lg bg-signal/5 -z-10" />
                        )}
                    </button>
                ))}
            </div>
        );
    }

    return (
        <section className="py-10 border-b border-white/5 bg-void/50 backdrop-blur-sm sticky top-20 z-40">
            <div className="container mx-auto px-4">
                <div className="text-center mb-6">
                    <p className="text-sm text-gray-500 font-mono uppercase tracking-widest">Selecciona tu contexto</p>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                    {personas.map((persona) => (
                        <button
                            key={persona.id}
                            onClick={() => setPersona(persona.id)}
                            className={`relative px-6 py-3 rounded-lg border transition-all duration-300 ${activePersona === persona.id
                                ? 'bg-signal/10 border-signal text-signal shadow-[0_0_15px_rgba(204,255,0,0.2)]'
                                : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:border-white/20'
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                <span className="text-xl">{persona.icon}</span>
                                <span className="font-bold">{persona.label}</span>
                            </div>
                            {activePersona === persona.id && (
                                <motion.div
                                    layoutId="activeGlow"
                                    className="absolute inset-0 rounded-lg bg-signal/5"
                                    transition={{ duration: 0.3 }}
                                />
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContextSelector;
