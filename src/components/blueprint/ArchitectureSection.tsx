import {
    Mail, Globe, Webhook,
    Share2, GitMerge,
    BrainCircuit,
    Database, Server, Send, MessageSquare
} from 'lucide-react';

import { useBlueprint } from './context/BlueprintContext';
import ContextSelector from './ContextSelector';

const ArchitectureSection = () => {
    const { activePersona } = useBlueprint();

    // Configuration for active nodes based on persona
    const activeNodes: any = {
        sales: { inputs: ['Web Forms', 'Email'], actions: ['CRM', 'WhatsApp', 'Email'] },
        ops: { inputs: ['Docs', 'Email'], actions: ['ERP', 'Database'] },
        support: { inputs: ['Webhooks', 'Email'], actions: ['Server', 'Email'] },
        management: { inputs: ['Docs', 'Webhooks'], actions: ['Database', 'Server'] },
    };

    const currentActive = activeNodes[activePersona] || { inputs: [], actions: [] };

    const isNodeActive = (label: string, type: 'inputs' | 'actions') =>
        currentActive[type].includes(label);

    return (
        <section className="py-12 bg-void text-white relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center">

                    {/* Unified System Container */}
                    <div className="w-full max-w-7xl">
                        <div className="relative bg-black/40 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm ring-1 ring-white/5 shadow-2xl">

                            {/* Integrated Status Bar */}
                            <div className="flex flex-wrap gap-6 justify-between items-center mb-8 border-b border-white/5 pb-6">
                                <div className="flex gap-3 items-center">
                                    <div className="w-2 h-2 rounded-full bg-signal animate-pulse shadow-[0_0_8px_rgba(204,255,0,0.5)]" />
                                    <span className="text-[10px] md:text-xs font-mono text-gray-300 uppercase tracking-[0.2em]">System Operational</span>
                                </div>

                                {/* Context Selector Integrated */}
                                <div className="flex-1 flex justify-center">
                                    <ContextSelector embedded />
                                </div>

                                <div className="flex gap-6 items-center">
                                    <MetricBadge label="Uptime" value="99.9%" />
                                    <MetricBadge label="Avg. Latency" value="120ms" />
                                    <MetricBadge label="Active Threads" value="24/24" />
                                </div>
                            </div>

                            {/* Continuous Pipeline Grid */}
                            <div className="relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-stretch">

                                {/* Background Connection Line (The "Pipe") */}
                                <div className="hidden md:block absolute top-1/2 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 z-0" />

                                {/* STAGE 1: TRIGGER */}
                                <div className="md:col-span-2 relative z-10 flex flex-col gap-3">
                                    <div className="bg-white/5 border border-white/5 rounded-xl p-4 backdrop-blur-md h-full flex flex-col justify-between group hover:border-white/10 transition-colors">
                                        <div className="mb-2">
                                            <MicroLabel label="TRIGGER" />
                                            <div className="text-[10px] text-gray-500 mt-1 pl-3 font-mono">EVENT SOURCE</div>
                                        </div>
                                        <div className="space-y-2">
                                            <InputCard icon={Globe} label="Web Forms" active={isNodeActive('Web Forms', 'inputs')} />
                                            <InputCard icon={Mail} label="Email" active={isNodeActive('Email', 'inputs')} />
                                            <InputCard icon={Webhook} label="Webhooks" active={isNodeActive('Webhooks', 'inputs')} />
                                        </div>
                                    </div>
                                    {/* Mobile Connector */}
                                    <div className="md:hidden flex justify-center text-white/20">↓</div>
                                </div>

                                {/* STAGE 2: ORCHESTRATION (Grouped) */}
                                <div className="md:col-span-4 relative z-10 flex flex-col gap-3">
                                    <div className="bg-white/5 border border-white/5 rounded-xl p-4 backdrop-blur-md h-full flex flex-col relative group hover:border-white/10 transition-colors">

                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <MicroLabel label="ORCHESTRATION" color="text-neon-ice" />
                                                <div className="text-[10px] text-gray-500 mt-1 pl-3 font-mono">ROUTING & LOGIC</div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-neon-ice animate-pulse" />
                                                <span className="text-[9px] uppercase text-neon-ice font-bold tracking-wider">Processing</span>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-3 h-full items-center">
                                            <TechBlock
                                                icon={GitMerge}
                                                title="n8n"
                                                subtitle="Normalize"
                                                color="border-signal/30 bg-signal/5"
                                                active
                                                compact
                                            />
                                            <TechBlock
                                                icon={Share2}
                                                title="Logic Apps"
                                                subtitle="Enterprise Route"
                                                color="border-blue-500/30 bg-blue-500/5"
                                                active
                                                compact
                                            />
                                        </div>
                                    </div>
                                    {/* Mobile Connector */}
                                    <div className="md:hidden flex justify-center text-white/20">↓</div>
                                </div>

                                {/* STAGE 3: AI INTELLIGENCE */}
                                <div className="md:col-span-3 relative z-10 flex flex-col gap-3">
                                    <div className="bg-gradient-to-br from-plasma/20 to-pink-500/10 border border-plasma/30 rounded-xl p-1 backdrop-blur-md h-full shadow-[0_0_20px_rgba(180,0,255,0.1)]">
                                        <div className="bg-void/80 rounded-lg p-5 h-full flex flex-col items-center justify-center text-center relative overflow-hidden">
                                            <MicroLabel label="AI CORE" color="text-plasma" />

                                            <div className="my-4 relative">
                                                <div className="absolute inset-0 bg-plasma/20 blur-xl rounded-full" />
                                                <BrainCircuit className="w-10 h-10 text-white relative z-10" />
                                            </div>

                                            <h3 className="text-base font-bold text-white mb-2 leading-tight">Azure OpenAI<br />+ Vision</h3>
                                            <div className="flex flex-wrap gap-1.5 justify-center">
                                                <Badge>OCR</Badge>
                                                <Badge>Classify</Badge>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Mobile Connector */}
                                    <div className="md:hidden flex justify-center text-white/20">↓</div>
                                </div>

                                {/* STAGE 4: ACTION */}
                                <div className="md:col-span-3 relative z-10 flex flex-col gap-3">
                                    <div className="bg-white/5 border border-white/5 rounded-xl p-4 backdrop-blur-md h-full flex flex-col justify-between group hover:border-white/10 transition-colors">
                                        <div className="mb-2">
                                            <MicroLabel label="EXECUTION" />
                                            <div className="text-[10px] text-gray-500 mt-1 pl-3 font-mono">FINAL OUTCOME</div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-2">
                                            <ActionCard icon={Server} label="CRM" active={isNodeActive('CRM', 'actions')} />
                                            <ActionCard icon={Database} label="ERP" active={isNodeActive('ERP', 'actions')} />
                                            <ActionCard icon={MessageSquare} label="WhatsApp" active={isNodeActive('WhatsApp', 'actions')} />
                                            <ActionCard icon={Send} label="Email" active={isNodeActive('Email', 'actions')} />
                                        </div>

                                        {/* Status Toast */}
                                        <div className="mt-3 bg-signal/10 border border-signal/20 roundedmd p-2 flex items-center gap-2">
                                            <div className="w-4 h-4 rounded-full bg-signal flex items-center justify-center text-black text-[10px] font-bold">✓</div>
                                            <span className="text-[10px] font-bold text-signal uppercase tracking-wide">Success 200 OK</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Sub-components

const MicroLabel = ({ label, color = "text-gray-500" }: { label: string, color?: string }) => (
    <div className={`text-[10px] font-mono tracking-[0.2em] ${color} font-bold uppercase border-l-2 ${color.replace('text-', 'border-')} pl-3`}>{label}</div>
);

const MetricBadge = ({ label, value }: { label: string, value: string }) => (
    <div className="flex flex-col">
        <span className="text-[10px] uppercase text-gray-500 tracking-wider font-mono">{label}</span>
        <span className="text-sm font-bold text-gray-200">{value}</span>
    </div>
);

const InputCard = ({ icon: Icon, label, active }: any) => (
    <div className={`border p-4 rounded-xl flex flex-col items-center gap-2 transition-all duration-500 ${active
        ? 'bg-neon-ice/10 border-neon-ice/50 shadow-[0_0_15px_rgba(0,240,255,0.2)] scale-105'
        : 'bg-white/5 border-white/10 opacity-50'
        }`}>
        <Icon className={`w-5 h-5 ${active ? 'text-neon-ice' : 'text-gray-400'}`} />
        <span className={`text-xs font-medium ${active ? 'text-white' : 'text-gray-400'}`}>{label}</span>
        {active && <div className="w-1.5 h-1.5 rounded-full bg-neon-ice animate-pulse mt-1" />}
    </div>
);

const TechBlock = ({ icon: Icon, title, subtitle, color, active, compact }: any) => (
    <div className={`${compact ? 'p-4' : 'p-6'} rounded-xl border-2 backdrop-blur-md relative overflow-hidden group ${color} transition-all duration-500 hover:scale-[1.02]`}>
        <div className="flex items-center gap-4 relative z-10">
            <div className={`p-2 ${compact ? 'rounded-md' : 'rounded-lg'} bg-black/50`}>
                <Icon className={`${compact ? 'w-5 h-5' : 'w-6 h-6'} text-white`} />
            </div>
            <div>
                <h4 className={`font-bold text-white ${compact ? 'text-base' : 'text-lg'}`}>{title}</h4>
                <p className="text-[10px] opacity-70 uppercase tracking-wider">{subtitle}</p>
            </div>
        </div>
        {active && (
            <div className="absolute inset-0 bg-white/5 animate-pulse" />
        )}
    </div>
);

const Badge = ({ children }: any) => (
    <span className="px-2 py-1 bg-white/10 rounded text-[10px] text-gray-300 font-mono border border-white/5">
        {children}
    </span>
);

const ActionCard = ({ icon: Icon, label, active }: any) => (
    <div className={`border p-4 rounded-xl flex items-center justify-between transition-all duration-500 ${active
        ? 'bg-signal/10 border-signal/50 shadow-[0_0_15px_rgba(204,255,0,0.2)] scale-105'
        : 'bg-white/5 border-white/10 opacity-50'
        }`}>
        <span className={`text-sm font-medium ${active ? 'text-white' : 'text-gray-300'}`}>{label}</span>
        <Icon className={`w-4 h-4 ${active ? 'text-signal' : 'text-gray-500'}`} />
    </div>
);

export default ArchitectureSection;
