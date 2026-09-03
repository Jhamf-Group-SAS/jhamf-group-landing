import { useTranslation } from 'react-i18next';
import ServiceContactForm from '../shared/ServiceContactForm';
import Footer from '../layout/Footer';

const Contact = () => {
    const { t } = useTranslation('common');

    return (
        <>
            <ServiceContactForm
                title={t('cta_schedule')}
                description="Hablemos de cómo la tecnología puede evolucionar su infraestructura hoy mismo."
                contactTitle="Contacto Directo"
                formCtaText="Solicitar Consultoría Gratuita"
                bgClass="bg-void border-t border-white/5"
            />

            {/* Footer */}
            <Footer />
        </>
    );
};

export default Contact;
