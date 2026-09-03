import React, { useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { useLocale } from '../hooks/useLocale';
import SEOHead from '../components/seo/SEOHead';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import DiagnosticWizard from '../components/diagnostic/DiagnosticWizard';

// Shared Components
import ServiceHero from '../components/shared/ServiceHero';
import ServiceBenefits from '../components/shared/ServiceBenefits';
import ServiceContactForm from '../components/shared/ServiceContactForm';

// Icons
import { Sparkles, Bot, Cpu, ArrowRight, AlertTriangle, XCircle, TrendingDown, Workflow, MessageSquare, FileCheck, Users, TrendingUp, ClipboardList, PenTool, Rocket, BarChart3 } from 'lucide-react';

const AutomationPage: React.FC = () => {
    const [isWizardOpen, setIsWizardOpen] = useState(false);
    const { t } = useTranslation('automation');
    const { lang } = useLocale();
    const SITE = 'https://www.jhamf.com';

    return (
        <div className="bg-void min-h-screen">
            <SEOHead
                title={t('seo.title')}
                description={t('seo.description')}
                keywords={t('seo.keywords')}
                url={`${SITE}/${lang}/automatizacion-ia`}
                lang={lang}
                alternateUrls={{ es: `${SITE}/es/automatizacion-ia`, en: `${SITE}/en/automatizacion-ia` }}
            />
            <Navbar onOpenWizard={() => setIsWizardOpen(true)} />

            <main>
                <ServiceHero
                    badgeText={t('hero.badge')}
                    title={
                        <Trans i18nKey="hero.headline_1" ns="automation">
                            Automatizamos tu operación con <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-ice to-plasma">Inteligencia Artificial</span>
                        </Trans>
                    }
                    description={t('hero.description')}
                    primaryCtaText={t('hero.primary_cta')}
                    secondaryCtaText={t('hero.secondary_cta')}
                    secondaryCtaLink="#solutions"
                    cotizadorCtaText="Cotizador Valora Suite"
                    cotizadorCtaLink={`/${lang}/cotizador`}
                    traits={[
                        { icon: <Sparkles className="w-6 h-6" />, label: `${t('hero.traits.0.val')} ${t('hero.traits.0.label')}` },
                        { icon: <Bot className="w-6 h-6" />, label: `${t('hero.traits.1.val')} ${t('hero.traits.1.label')}` },
                        { icon: <Cpu className="w-6 h-6" />, label: `${t('hero.traits.2.val')} ${t('hero.traits.2.label')}` },
                        { icon: <ArrowRight className="w-6 h-6" />, label: `${t('hero.traits.3.val')} ${t('hero.traits.3.label')}` }
                    ]}
                />

                <ServiceBenefits
                    layout="split"
                    bgClass="bg-void"
                    title={
                        <Trans i18nKey="problems.title_1" ns="automation">
                            ¿El Caos Operativo frena tu crecimiento?
                        </Trans>
                    }
                    description={t('problems.description')}
                    items={[
                        { icon: <AlertTriangle className="w-6 h-6 text-red-400" />, title: t('problems.items.0.title'), description: t('problems.items.0.description') },
                        { icon: <XCircle className="w-6 h-6 text-red-500" />, title: t('problems.items.1.title'), description: t('problems.items.1.description') },
                        { icon: <TrendingDown className="w-6 h-6 text-orange-500" />, title: t('problems.items.2.title'), description: t('problems.items.2.description') }
                    ]}
                    sideContent={
                        <div className="h-full min-h-[400px] rounded-2xl border border-white/5 bg-gradient-to-br from-void to-transparent p-8 flex flex-col justify-center relative overflow-hidden">
                            <Bot className="w-64 h-64 text-white/5 absolute -right-10 -bottom-10" />
                            <div className="relative z-10 space-y-6">
                                <div className="p-4 rounded-xl bg-void/80 backdrop-blur-md border border-white/5 shadow-lg animate-float">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-2 h-2 rounded-full bg-red-400" />
                                        <p className="text-sm font-medium text-gray-300">Reporte con errores detectado</p>
                                    </div>
                                    <p className="text-xs text-gray-500">Operación Manual</p>
                                </div>
                                <div className="p-4 rounded-xl bg-void/80 backdrop-blur-md border border-white/5 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-2 h-2 rounded-full bg-orange-400" />
                                        <p className="text-sm font-medium text-gray-300">Retraso en respuesta al cliente</p>
                                    </div>
                                    <p className="text-xs text-gray-500">Cuello de botella</p>
                                </div>
                            </div>
                        </div>
                    }
                />

                <div id="solutions" className="relative">
                    <ServiceBenefits
                        layout="grid"
                        bgClass="bg-void"
                        title={
                            <Trans i18nKey="solutions.title_1" ns="automation">
                                Nuestras Soluciones de <span className="text-neon-ice">Inteligencia Artificial</span>
                            </Trans>
                        }
                        description={t('solutions.description')}
                        items={[
                            {
                                icon: <Workflow className="w-8 h-8 text-electric" />,
                                title: t('solutions.card1.title'),
                                description: (
                                    <>
                                        <span className="block mb-6 text-gray-400">{t('solutions.card1.description')}</span>
                                        <ul className="space-y-3 mb-8">
                                            {(t('solutions.card1.points', { returnObjects: true }) as string[]).map((point, idx) => (
                                                <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-electric flex-shrink-0"></span>
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                )
                            },
                            {
                                icon: <MessageSquare className="w-8 h-8 text-plasma" />,
                                title: t('solutions.card2.title'),
                                description: (
                                    <>
                                        <span className="block mb-6 text-gray-400">{t('solutions.card2.description')}</span>
                                        <ul className="space-y-3 mb-8">
                                            {(t('solutions.card2.points', { returnObjects: true }) as string[]).map((point, idx) => (
                                                <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-plasma flex-shrink-0"></span>
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                )
                            }
                        ]}
                    />

                    {/* Solutions Integration Logos */}
                    <div className="pb-24 pt-4 border-t border-white/5 text-center bg-void">
                        <div className="container px-4 mx-auto">
                            <p className="text-sm text-gray-500 uppercase tracking-widest mb-8">{t('solutions.integration_title')}</p>
                            <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                                <span className="text-xl font-bold text-white">SAP</span>
                                <span className="text-xl font-bold text-white">Salesforce</span>
                                <span className="text-xl font-bold text-white">HubSpot</span>
                                <span className="text-xl font-bold text-white">Microsoft 365</span>
                                <span className="text-xl font-bold text-white">Google Workspace</span>
                                <span className="text-xl font-bold text-white">WhatsApp</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Use Cases Grid */}
                <ServiceBenefits
                    layout="grid"
                    bgClass="bg-void"
                    title={t('use_cases.title')}
                    items={[
                        {
                            icon: <FileCheck className="w-6 h-6 text-electric" />,
                            title: t('use_cases.items.0.title'),
                            description: (
                                <div className="space-y-4">
                                    <div className="relative pl-4 border-l-2 border-red-500/30">
                                        <p className="text-xs text-red-400 uppercase font-bold mb-1">{t('use_cases.labels.before')}</p>
                                        <p className="text-sm text-gray-400">{t('use_cases.items.0.before')}</p>
                                    </div>
                                    <div className="relative pl-4 border-l-2 border-green-500/30">
                                        <p className="text-xs text-green-400 uppercase font-bold mb-1">{t('use_cases.labels.after')}</p>
                                        <p className="text-sm text-gray-300">{t('use_cases.items.0.after')}</p>
                                    </div>
                                    <span className="inline-block mt-4 text-xs font-bold px-3 py-1 rounded-full bg-green-500/20 text-green-400">
                                        {t('use_cases.items.0.impact')}
                                    </span>
                                </div>
                            )
                        },
                        {
                            icon: <Users className="w-6 h-6 text-electric" />,
                            title: t('use_cases.items.1.title'),
                            description: (
                                <div className="space-y-4">
                                    <div className="relative pl-4 border-l-2 border-red-500/30">
                                        <p className="text-xs text-red-400 uppercase font-bold mb-1">{t('use_cases.labels.before')}</p>
                                        <p className="text-sm text-gray-400">{t('use_cases.items.1.before')}</p>
                                    </div>
                                    <div className="relative pl-4 border-l-2 border-green-500/30">
                                        <p className="text-xs text-green-400 uppercase font-bold mb-1">{t('use_cases.labels.after')}</p>
                                        <p className="text-sm text-gray-300">{t('use_cases.items.1.after')}</p>
                                    </div>
                                    <span className="inline-block mt-4 text-xs font-bold px-3 py-1 rounded-full bg-green-500/20 text-green-400">
                                        {t('use_cases.items.1.impact')}
                                    </span>
                                </div>
                            )
                        },
                        {
                            icon: <TrendingUp className="w-6 h-6 text-electric" />,
                            title: t('use_cases.items.2.title'),
                            description: (
                                <div className="space-y-4">
                                    <div className="relative pl-4 border-l-2 border-red-500/30">
                                        <p className="text-xs text-red-400 uppercase font-bold mb-1">{t('use_cases.labels.before')}</p>
                                        <p className="text-sm text-gray-400">{t('use_cases.items.2.before')}</p>
                                    </div>
                                    <div className="relative pl-4 border-l-2 border-green-500/30">
                                        <p className="text-xs text-green-400 uppercase font-bold mb-1">{t('use_cases.labels.after')}</p>
                                        <p className="text-sm text-gray-300">{t('use_cases.items.2.after')}</p>
                                    </div>
                                    <span className="inline-block mt-4 text-xs font-bold px-3 py-1 rounded-full bg-green-500/20 text-green-400">
                                        {t('use_cases.items.2.impact')}
                                    </span>
                                </div>
                            )
                        }
                    ]}
                />

                {/* Inline Architecture/Process */}
                <section className="py-20 bg-void border-y border-white/5">
                    <div className="container px-4 mx-auto text-center">
                        <h2 className="text-3xl font-display font-bold text-white mb-16">{t('process.title')}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                            {/* Connection Line (Desktop) */}
                            <div className="hidden md:block absolute top-[2.5rem] left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-plasma/20 via-neon-ice/20 to-plasma/20 z-0" />
                            {[
                                { icon: ClipboardList, step: "01", title: t('process.items.0.title'), desc: t('process.items.0.description') },
                                { icon: PenTool, step: "02", title: t('process.items.1.title'), desc: t('process.items.1.description') },
                                { icon: Rocket, step: "03", title: t('process.items.2.title'), desc: t('process.items.2.description') },
                                { icon: BarChart3, step: "04", title: t('process.items.3.title'), desc: t('process.items.3.description') }
                            ].map((item, idx) => (
                                <div key={idx} className="relative z-10 flex flex-col items-center group">
                                    <div className="w-20 h-20 rounded-2xl bg-void border border-white/10 flex items-center justify-center mb-6 group-hover:border-neon-ice/50 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.1)] transition-all duration-300">
                                        <item.icon className="w-10 h-10 text-white group-hover:text-neon-ice transition-colors" />
                                    </div>
                                    <span className="text-4xl font-display font-bold text-white/5 absolute -top-4 -z-10">{item.step}</span>
                                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                                    <p className="text-sm text-gray-400 max-w-[200px]">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <ServiceContactForm
                    title={t('cta.title')}
                    description={t('cta.description')}
                    contactTitle="Contacto AI"
                    whatsappText="Hablar por WhatsApp"
                    whatsappLink="https://wa.me/573174660498"
                    emailText="proyectos@jhamf.com"
                    emailLink="mailto:proyectos@jhamf.com"
                    phoneText="+57 317 466 0498"
                    phoneLink="tel:+573174660498"
                    formInputs={[
                        { type: "text", placeholder: t('cta.form_inputs.name') },
                        { type: "email", placeholder: t('cta.form_inputs.email') }
                    ]}
                    formSelect={{
                        placeholder: t('cta.form_inputs.process'),
                        options: [
                            "Facturación y Finanzas",
                            "Recursos Humanos",
                            "Soporte y Ventas",
                            "Logística"
                        ]
                    }}
                    formCtaText={t('cta.form_cta')}
                />
            </main>

            <Footer />
            <DiagnosticWizard isOpen={isWizardOpen} onClose={() => setIsWizardOpen(false)} />
        </div>
    );
};

export default AutomationPage;
