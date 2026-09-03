import React, { useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { useLocale } from '../hooks/useLocale';
import SEOHead from '../components/seo/SEOHead';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import DiagnosticWizard from '../components/diagnostic/DiagnosticWizard';
import ServiceHero from '../components/shared/ServiceHero';
import ServiceBenefits from '../components/shared/ServiceBenefits';
import ServiceContactForm from '../components/shared/ServiceContactForm';
import AzureTrust from '../components/sections/azure/AzureTrust';

import { Shield, Zap, Cloud, Award, MapPin, Users, CheckCircle2, Server, RefreshCw, Database, Brain, LifeBuoy, Store, Building2, ArrowRight } from 'lucide-react';

const AzurePage: React.FC = () => {
    const [isWizardOpen, setIsWizardOpen] = useState(false);
    const { t } = useTranslation('azure');
    const { lang } = useLocale();
    const SITE = 'https://www.jhamf.com';

    return (
        <div className="bg-void min-h-screen">
            <SEOHead
                title={t('seo.title')}
                description={t('seo.description')}
                keywords={t('seo.keywords')}
                url={`${SITE}/${lang}/azure`}
                lang={lang}
                alternateUrls={{ es: `${SITE}/es/azure`, en: `${SITE}/en/azure` }}
            />
            <Navbar onOpenWizard={() => setIsWizardOpen(true)} />

            <main>
                <ServiceHero
                    badgeText={t('hero.badge')}
                    title={
                        <Trans i18nKey="hero.headline_1" ns="azure">
                            Escala tu negocio con <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-neon-ice">Microsoft Azure</span>
                        </Trans>
                    }
                    description={t('hero.description')}
                    primaryCtaText={t('hero.primary_cta')}
                    secondaryCtaText={t('hero.secondary_cta')}
                    secondaryCtaLink="#services"
                    traits={[
                        { icon: <Shield className="w-6 h-6" />, label: t('hero.traits.0') },
                        { icon: <Zap className="w-6 h-6" />, label: t('hero.traits.1') },
                        { icon: <Cloud className="w-6 h-6" />, label: t('hero.traits.2') }
                    ]}
                />

                <AzureTrust />

                {/* Services Grid */}
                <div id="services" className="relative group">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-electric to-transparent opacity-50 z-10" />
                </div>
                <ServiceBenefits
                    layout="grid"
                    bgClass="bg-void relative z-0"
                    title={
                        <Trans i18nKey="services.title_1" ns="azure">
                            Soluciones Integrales <span className="text-electric">Microsoft Azure</span>
                        </Trans>
                    }
                    description={t('services.description')}
                    items={[
                        { icon: <Server className="w-7 h-7 text-electric" />, title: t('services.items.0.title'), description: t('services.items.0.description') },
                        { icon: <RefreshCw className="w-7 h-7 text-electric" />, title: t('services.items.1.title'), description: t('services.items.1.description') },
                        { icon: <Shield className="w-7 h-7 text-electric" />, title: t('services.items.2.title'), description: t('services.items.2.description') },
                        { icon: <Database className="w-7 h-7 text-electric" />, title: t('services.items.3.title'), description: t('services.items.3.description') },
                        { icon: <Brain className="w-7 h-7 text-electric" />, title: t('services.items.4.title'), description: t('services.items.4.description') },
                        { icon: <LifeBuoy className="w-7 h-7 text-electric" />, title: t('services.items.5.title'), description: t('services.items.5.description') }
                    ]}
                />

                {/* Benefits Split Grid */}
                <ServiceBenefits
                    layout="split"
                    bgClass="bg-void"
                    title={
                        <Trans i18nKey="benefits.title_1" ns="azure">
                            ¿Por qué elegir a <span className="text-neon-ice">Jhamf Group</span> como tu Partner?
                        </Trans>
                    }
                    description={t('benefits.description')}
                    items={[
                        { icon: <Award className="w-5 h-5 text-neon-ice" />, title: t('benefits.items.0.title'), description: t('benefits.items.0.description') },
                        { icon: <MapPin className="w-5 h-5 text-neon-ice" />, title: t('benefits.items.1.title'), description: t('benefits.items.1.description') },
                        { icon: <Users className="w-5 h-5 text-neon-ice" />, title: t('benefits.items.2.title'), description: t('benefits.items.2.description') },
                        { icon: <CheckCircle2 className="w-5 h-5 text-neon-ice" />, title: t('benefits.items.3.title'), description: t('benefits.items.3.description') }
                    ]}
                    sideContent={
                        <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden border border-white/10 bg-glass backdrop-blur-sm p-2">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.775837691361!2d-76.5458316!3d3.4278453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a6a43870634f%3A0xe487103a8549704e!2sCl.%205b%202%20%2338-27%2C%20San%20Fernando%2C%20Cali%2C%20Valle%20del%20Cauca!5e0!3m2!1sen!2sco!4v1707074400000!5m2!1sen!2sco"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute inset-0 z-0 opacity-80"
                                title="Google Maps"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent pointer-events-none z-10" />
                            <div className="relative z-20 h-full flex flex-col items-center justify-end text-center p-8 mt-auto">
                                <div className="bg-void/90 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-2xl">
                                    <h3 className="text-xl font-bold text-white mb-2 flex items-center justify-center gap-2">
                                        <MapPin className="w-5 h-5 text-neon-ice" />
                                        {t('benefits.map_title')}
                                    </h3>
                                    <p className="text-gray-300 text-sm whitespace-pre-line">{t('benefits.map_address')}</p>
                                    <a href="https://maps.app.goo.gl/2j6Z8Z8Z8Z8Z8Z8Z8" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-xs text-neon-ice hover:underline">
                                        {t('benefits.map_link_text')}
                                    </a>
                                </div>
                            </div>
                        </div>
                    }
                />

                {/* Use Cases Grid Custom (Or we can use ServiceBenefits but format differently) */}
                <ServiceBenefits
                    layout="grid"
                    bgClass="bg-void"
                    title={t('use_cases.title')}
                    description={t('use_cases.description')}
                    items={[
                        {
                            icon: <Store className="w-6 h-6 text-orange-400" />,
                            title: t('use_cases.card1.title'),
                            description: (
                                <>
                                    <span className="block mb-6 min-h-[3rem]">{t('use_cases.card1.description')}</span>
                                    <ul className="space-y-3 mb-8 text-sm text-gray-300">
                                        {(t('use_cases.card1.points', { returnObjects: true }) as string[]).map((point, idx) => (
                                            <li key={idx} className="flex items-center gap-2">
                                                <ArrowRight className="w-4 h-4 text-orange-400 flex-shrink-0" />
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <span className="text-orange-400 text-sm font-medium hover:underline cursor-pointer">{t('use_cases.card1.link')}</span>
                                </>
                            )
                        },
                        {
                            icon: <Building2 className="w-6 h-6 text-plasma" />,
                            title: t('use_cases.card2.title'),
                            description: (
                                <>
                                    <span className="block mb-6 min-h-[3rem]">{t('use_cases.card2.description')}</span>
                                    <ul className="space-y-3 mb-8 text-sm text-gray-300">
                                        {(t('use_cases.card2.points', { returnObjects: true }) as string[]).map((point, idx) => (
                                            <li key={idx} className="flex items-center gap-2">
                                                <ArrowRight className="w-4 h-4 text-plasma flex-shrink-0" />
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <span className="text-plasma text-sm font-medium hover:underline cursor-pointer">{t('use_cases.card2.link')}</span>
                                </>
                            )
                        }
                    ]}
                />

                <ServiceContactForm
                    title={t('contact.title')}
                    description={t('contact.description')}
                    contactTitle={t('contact.primary_title')}
                    whatsappText={t('contact.whatsapp')}
                    whatsappLink="https://wa.me/573174660498"
                    emailText="proyectos@jhamf.com"
                    emailLink="mailto:proyectos@jhamf.com"
                    phoneText="+57 317 466 0498"
                    phoneLink="tel:+573174660498"
                    formInputs={[
                        { type: "text", placeholder: t('contact.form_inputs.name') },
                        { type: "email", placeholder: t('contact.form_inputs.email') }
                    ]}
                    formSelect={{
                        placeholder: t('contact.form_select.placeholder'),
                        options: t('contact.form_select.options', { returnObjects: true }) as string[]
                    }}
                    formCtaText={t('contact.form_cta')}
                />
            </main>

            <Footer />
            <DiagnosticWizard isOpen={isWizardOpen} onClose={() => setIsWizardOpen(false)} />
        </div>
    );
};

export default AzurePage;
