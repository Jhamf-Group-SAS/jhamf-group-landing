import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Eye, Users, Heart, Shield, Lightbulb, Sun, Zap, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
    const { t } = useTranslation('about');
    const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'values' | 'policy'>('mission');

    // ✅ Tab definitions inside component — labels from t() re-evaluate on language change
    const tabs = useMemo(() => [
        { key: 'mission' as const, label: t('tabs.mission'), icon: <Target className="w-5 h-5" /> },
        { key: 'vision' as const, label: t('tabs.vision'), icon: <Eye className="w-5 h-5" /> },
        { key: 'values' as const, label: t('tabs.values'), icon: <Heart className="w-5 h-5" /> },
        { key: 'policy' as const, label: t('tabs.policy'), icon: <Award className="w-5 h-5" /> },
    ], [t]);

    const valuesItems = useMemo(() => {
        const raw = t('values.items', { returnObjects: true }) as Array<{ title: string; desc: string }>;
        const icons = [<Users />, <Heart />, <Shield />, <Zap />, <Sun />, <Lightbulb />];
        return Array.isArray(raw)
            ? raw.map((item, i) => ({ ...item, icon: icons[i] }))
            : [];
    }, [t]);

    const policyObjectives = useMemo(() => {
        const raw = t('policy.objectives', { returnObjects: true });
        return Array.isArray(raw) ? raw as string[] : [];
    }, [t]);

    return (
        <section id="nosotros" className="relative py-24 overflow-hidden" style={{ background: 'var(--color-void)' }}>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
                        {t('headline')}
                    </h2>
                    <p className="text-lg text-steel max-w-3xl mx-auto font-light leading-relaxed">
                        {t('subtext')}
                    </p>
                </motion.div>

                {/* Tab Navigation */}
                <div className="flex flex-wrap justify-center gap-4 mb-12" role="tablist">
                    {tabs.map(tab => (
                        <button
                            key={tab.key}
                            role="tab"
                            aria-selected={activeTab === tab.key}
                            onClick={() => setActiveTab(tab.key)}
                            className={`px-6 py-3 rounded-full border transition-all flex items-center gap-2 ${activeTab === tab.key
                                    ? 'bg-electric/20 border-electric text-white shadow-electric'
                                    : 'bg-white/5 border-white/10 text-steel hover:bg-white/10 hover:text-white'
                                }`}
                        >
                            <span className="text-electric" aria-hidden="true">{tab.icon}</span>
                            <span className="font-semibold">{tab.label}</span>
                        </button>
                    ))}
                </div>

                {/* Dynamic Content Area */}
                <div className="min-h-[400px]" role="tabpanel">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="glass-card rounded-3xl p-8 md:p-12"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-electric/10 rounded-xl text-electric">
                                    {tabs.find(t => t.key === activeTab)?.icon}
                                </div>
                                <h3 className="text-3xl font-display font-bold text-white">
                                    {tabs.find(tab => tab.key === activeTab)?.label}
                                </h3>
                            </div>

                            {activeTab === 'values' ? (
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {valuesItems.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="p-6 rounded-xl bg-white/5 border border-white/5 hover:border-electric/30 transition-colors"
                                        >
                                            <div className="text-electric mb-3" aria-hidden="true">{item.icon}</div>
                                            <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                                            <p className="text-steel text-sm font-light">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            ) : activeTab === 'policy' ? (
                                <div>
                                    <p className="text-lg text-steel leading-relaxed mb-8 font-light">
                                        {t('policy.text')}
                                    </p>
                                    <h4 className="text-xl font-bold text-white mb-4">
                                        {t('policy.objectives_title')}
                                    </h4>
                                    <ul className="grid md:grid-cols-2 gap-4">
                                        {policyObjectives.map((obj, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-steel font-light">
                                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-electric shrink-0" aria-hidden="true" />
                                                {obj}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ) : (
                                <p className="text-xl text-steel leading-relaxed font-light whitespace-pre-line">
                                    {t(`${activeTab}.text`)}
                                </p>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
