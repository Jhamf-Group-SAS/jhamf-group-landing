import React, { useState } from 'react';
import SEOHead from '../components/seo/SEOHead';
import { useTranslation } from 'react-i18next';
import { useLocale } from '../hooks/useLocale';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import DiagnosticWizard from '../components/diagnostic/DiagnosticWizard';
import ServiceHero from '../components/shared/ServiceHero';
import ServiceBenefits from '../components/shared/ServiceBenefits';
import ServiceCTA from '../components/shared/ServiceCTA';
import SupportBenefits from '../components/sections/support/SupportBenefits';
import SupportProcess from '../components/sections/support/SupportProcess';
import { Clock, Headphones, ShieldAlert, Server, Activity } from 'lucide-react';

const serviceIcons = [Headphones, ShieldAlert, Server, Activity];

const SupportPage: React.FC = () => {
    const [isWizardOpen, setIsWizardOpen] = useState(false);
    const { t } = useTranslation('support');
    const { lang } = useLocale();
    const SITE = 'https://www.jhamf.com';

    const serviceItems = (t('services.items', { returnObjects: true }) as Array<{ title: string; description: string }>)
        .map((item, i) => {
            const Icon = serviceIcons[i % serviceIcons.length];
            return { icon: <Icon className="w-7 h-7 text-signal" />, title: item.title, description: item.description };
        });

    return (
        <div className="bg-void min-h-screen">
            <SEOHead
                title={t('seo.title')}
                description={t('seo.description')}
                keywords={t('seo.keywords')}
                url={`${SITE}/${lang}/servicios-ti-gestionados/soporte-empresarial-24-7`}
                lang={lang}
                alternateUrls={{
                    es: 'https://www.jhamf.com/es/servicios-ti-gestionados/soporte-empresarial-24-7',
                    en: 'https://www.jhamf.com/en/managed-it-services/24-7-enterprise-support',
                }}
            />
            <Navbar onOpenWizard={() => setIsWizardOpen(true)} />
            <main>
                <ServiceHero
                    badgeIcon={<Clock className="w-4 h-4" />}
                    badgeText={t('hero.badge')}
                    title={
                        <>
                            {t('hero.title').split(' ').map((word, i) => (
                                <span
                                    key={i}
                                    className={word.includes('24/7') || word.includes('Crítica') || word.includes('Critical')
                                        ? "text-transparent bg-clip-text bg-gradient-to-r from-neon-ice to-signal"
                                        : undefined}
                                >
                                    {word + ' '}
                                </span>
                            ))}
                        </>
                    }
                    description={t('hero.description')}
                    primaryCtaText={t('hero.primary_cta')}
                    primaryCtaLink="https://form.typeform.com/to/gxR8JkE0"
                    secondaryCtaText={t('hero.secondary_cta')}
                    pillColorClass="bg-signal/10 border-signal/20 text-signal"
                />
                <ServiceBenefits
                    layout="grid"
                    title={t('services.title')}
                    items={serviceItems}
                />
                <SupportBenefits />
                <SupportProcess />
                <ServiceCTA
                    title={t('cta.title')}
                    buttonText={t('cta.button')}
                    glowClass="from-transparent to-signal/5"
                    buttonClass="bg-signal text-void hover:bg-[#00e68d]"
                />
            </main>
            <Footer />
            <DiagnosticWizard isOpen={isWizardOpen} onClose={() => setIsWizardOpen(false)} />
        </div>
    );
};

export default SupportPage;
