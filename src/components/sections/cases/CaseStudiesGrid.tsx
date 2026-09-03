import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface CaseType {
    title: string;
    client: string;
    type: string;
    challenge: string;
    solution: string;
    results: string[];
}

const CaseStudiesGrid = () => {
    const { t } = useTranslation('casestudies');
    const [filter, setFilter] = useState('All');

    const cases = t('grid.cases', { returnObjects: true }) as CaseType[];

    const filteredCases = filter === 'All'
        ? cases
        : cases.filter(c => c.type === filter);

    return (
        <section id="casos-grid" className="py-24 bg-void border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Filters */}
                <div className="flex justify-center mb-16 space-x-4">
                    {['All', 'Cloud', 'Automation'].map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${filter === f
                                ? 'bg-electric text-white shadow-lg shadow-electric/25'
                                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                                }`}
                        >
                            {f === 'All' ? t('grid.filters.all') : f === 'Cloud' ? t('grid.filters.cloud') : t('grid.filters.automation')}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <AnimatePresence>
                        {filteredCases.map((project, idx) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={idx}
                                className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 hover:border-electric/30 transition-colors group"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${project.type === 'Cloud'
                                            ? 'bg-electric/10 text-electric border border-electric/20'
                                            : 'bg-plasma/10 text-plasma border border-plasma/20'
                                            }`}>
                                            {project.type === 'Cloud' ? t('grid.filters.cloud') : t('grid.filters.automation')}
                                        </span>
                                        <h3 className="text-2xl font-bold text-white group-hover:text-electric transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-sm text-gray-500 mt-1">{project.client}</p>
                                    </div>
                                    <div className="p-2 bg-white/5 rounded-full group-hover:bg-electric group-hover:text-white transition-all overflow-hidden relative">
                                        <ArrowUpRight className="w-5 h-5 relative z-10" />
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wide mb-2">{t('grid.labels.challenge')}</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">{project.challenge}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wide mb-2">{t('grid.labels.solution')}</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">{project.solution}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wide mb-3">{t('grid.labels.results')}</h4>
                                        <ul className="space-y-2">
                                            {project.results.map((result, i) => (
                                                <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                                                    <CheckCircle2 className="w-4 h-4 text-signal flex-shrink-0" />
                                                    {result}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default CaseStudiesGrid;
