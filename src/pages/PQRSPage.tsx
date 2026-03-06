import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Upload, Send, FileText, AlertCircle } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SEO from '../components/seo/SEO';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import { useLocale } from '../hooks/useLocale';
import { useTranslation } from 'react-i18next';

// ⚠️ REEMPLAZA ESTOS VALORES CON LOS TUYOS DE EMAILJS
const EMAILJS_SERVICE_ID = 'service_tuxji4s';      // Ej: 'service_xyz123'
const EMAILJS_TEMPLATE_ID = 'template_t56ifou';    // Ej: 'template_abc123'
const EMAILJS_PUBLIC_KEY = 'm-Iue2hNH0SNnZdmt';      // Ej: 'abc123XYZ'

const PQRSPage = () => {
    const { lang } = useLocale();
    const { t } = useTranslation('pqrs');
    const [formData, setFormData] = useState({
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        type: '',
        service: '',
        description: '',
        acceptedPolicy: false
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [referenceNumber, setReferenceNumber] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, acceptedPolicy: e.target.checked }));
    };

    const generateReference = () => {
        return `PQRS-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}-${new Date().getFullYear()}`;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage('');

        const reference = generateReference();

        try {
            // Preparar los datos para EmailJS
            const templateParams = {
                fullName: formData.fullName,
                companyName: formData.companyName,
                email: formData.email,
                phone: formData.phone || 'No proporcionado',
                type: formData.type,
                service: formData.service,
                description: formData.description,
                referenceNumber: reference,
                fecha: new Date().toLocaleString('es-CO', {
                    timeZone: 'America/Bogota',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                })
            };

            // Enviar email con EmailJS
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                templateParams,
                EMAILJS_PUBLIC_KEY
            );

            setReferenceNumber(reference);
            setSubmitStatus('success');
            window.scrollTo({ top: 0, behavior: 'smooth' });

        } catch (error) {
            console.error('Error al enviar PQRS:', error);
            setSubmitStatus('error');
            setErrorMessage(t('messages.error.desc'));
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-obsidian min-h-screen text-white font-sans flex flex-col">
            <SEO
                title={t('seo.title')}
                description={t('seo.description')}
                keywords={t('seo.keywords')}
            />
            <Navbar onOpenWizard={() => { }} />

            <div className="flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan to-azure mb-6">
                        {t('hero.title')}
                    </h1>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
                        {t('hero.description')}
                    </p>
                    <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                            <FileText size={16} className="text-neon-cyan" />
                            {t('hero.response_time')}
                        </span>
                    </div>
                </motion.div>

                <AnimatePresence mode="wait">
                    {submitStatus === 'success' ? (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white/5 border border-neon-cyan/30 rounded-2xl p-8 text-center"
                        >
                            <div className="w-20 h-20 bg-neon-cyan/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle className="text-neon-cyan w-10 h-10" />
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-4">{t('messages.success.title')}</h2>
                            <p className="text-gray-300 mb-6">
                                {t('messages.success.desc1')}
                                <span className="text-neon-cyan font-medium"> coordinacionsgt@jhamf.com</span>
                                {t('messages.success.desc2')}
                            </p>
                            <div className="bg-black/40 rounded-lg p-4 inline-block mb-8 border border-white/10">
                                <p className="text-sm text-gray-400 mb-1">{t('messages.success.ref')}</p>
                                <p className="text-2xl font-mono text-neon-cyan tracking-wider">{referenceNumber}</p>
                            </div>
                            <div>
                                <button
                                    onClick={() => {
                                        setSubmitStatus('idle');
                                        setFormData({
                                            fullName: '',
                                            companyName: '',
                                            email: '',
                                            phone: '',
                                            type: '',
                                            service: '',
                                            description: '',
                                            acceptedPolicy: false
                                        });
                                    }}
                                    className="px-8 py-3 bg-azure hover:bg-azure/80 text-white rounded-lg transition-colors font-medium"
                                >
                                    {t('messages.success.new_request')}
                                </button>
                            </div>
                        </motion.div>
                    ) : submitStatus === 'error' ? (
                        <motion.div
                            key="error"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white/5 border border-red-500/30 rounded-2xl p-8 text-center"
                        >
                            <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <AlertCircle className="text-red-500 w-10 h-10" />
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-4">{t('messages.error.title')}</h2>
                            <p className="text-gray-300 mb-6">
                                {errorMessage || t('messages.error.desc')}
                            </p>
                            <button
                                onClick={() => setSubmitStatus('idle')}
                                className="px-8 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors font-medium"
                            >
                                {t('messages.error.retry')}
                            </button>
                        </motion.div>
                    ) : (
                        <motion.form
                            key="form"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            onSubmit={handleSubmit}
                            className="space-y-8 bg-white/5 border border-white/10 p-8 md:p-10 rounded-2xl backdrop-blur-sm"
                        >
                            {/* Personal Information */}
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-2">
                                    <span className="text-neon-cyan">01.</span> {t('form.section_1')}
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">{t('form.fields.fullname')}</label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            required
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan outline-none transition-all placeholder:text-gray-600"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">{t('form.fields.company')}</label>
                                        <input
                                            type="text"
                                            name="companyName"
                                            required
                                            value={formData.companyName}
                                            onChange={handleChange}
                                            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan outline-none transition-all placeholder:text-gray-600"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">{t('form.fields.email')}</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan outline-none transition-all placeholder:text-gray-600"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">{t('form.fields.phone')}</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan outline-none transition-all placeholder:text-gray-600"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* PQRS Details */}
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-2">
                                    <span className="text-neon-cyan">02.</span> {t('form.section_2')}
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">{t('form.fields.type')}</label>
                                        <select
                                            name="type"
                                            required
                                            value={formData.type}
                                            onChange={handleChange}
                                            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan outline-none transition-all appearance-none cursor-pointer"
                                        >
                                            <option value="" disabled className="text-gray-500">{t('form.types.placeholder')}</option>
                                            <option value={t('form.types.peticion')}>{t('form.types.peticion')}</option>
                                            <option value={t('form.types.queja')}>{t('form.types.queja')}</option>
                                            <option value={t('form.types.reclamo')}>{t('form.types.reclamo')}</option>
                                            <option value={t('form.types.sugerencia')}>{t('form.types.sugerencia')}</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">{t('form.fields.service')}</label>
                                        <select
                                            name="service"
                                            required
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan outline-none transition-all appearance-none cursor-pointer"
                                        >
                                            <option value="" disabled>{t('form.services.placeholder')}</option>
                                            <option value={t('form.services.consultoria')}>{t('form.services.consultoria')}</option>
                                            <option value={t('form.services.ciberseguridad')}>{t('form.services.ciberseguridad')}</option>
                                            <option value={t('form.services.cloud')}>{t('form.services.cloud')}</option>
                                            <option value={t('form.services.infraestructura')}>{t('form.services.infraestructura')}</option>
                                            <option value={t('form.services.otro')}>{t('form.services.otro')}</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">{t('form.fields.description')}</label>
                                    <textarea
                                        name="description"
                                        required
                                        value={formData.description}
                                        onChange={handleChange}
                                        rows={5}
                                        className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan outline-none transition-all placeholder:text-gray-600 resize-none"
                                        placeholder={t('form.fields.description_placeholder')}
                                    ></textarea>
                                </div>
                            </div>

                            {/* Attachments Section - Visual Only */}
                            <div>
                                <div className="border border-dashed border-white/20 rounded-lg p-6 text-center hover:bg-white/5 transition-colors cursor-pointer group">
                                    <Upload className="mx-auto h-8 w-8 text-gray-400 group-hover:text-neon-cyan mb-3 transition-colors" />
                                    <p className="text-sm text-gray-300 font-medium">{t('form.attachments.title')}</p>
                                    <p className="text-xs text-gray-500 mt-1">{t('form.attachments.subtitle')}</p>
                                </div>
                            </div>

                            {/* Policies and Submit */}
                            <div className="pt-4 space-y-6">
                                <label className="flex items-start gap-3 cursor-pointer group">
                                    <div className="relative flex items-center">
                                        <input
                                            type="checkbox"
                                            required
                                            name="acceptedPolicy"
                                            checked={formData.acceptedPolicy}
                                            onChange={handleCheckboxChange}
                                            className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-500 transition-all checked:border-neon-cyan checked:bg-neon-cyan group-hover:border-neon-cyan"
                                        />
                                        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity peer-checked:opacity-100">
                                            <svg className="h-3.5 w-3.5 text-black" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                    <span className="text-sm text-gray-400 select-none">
                                        {t('form.policy.text1')} <Link to={lang === 'es' ? `/${lang}/politica-privacidad` : `/${lang}/privacy-policy`} target="_blank" className="text-neon-cyan underline hover:text-white transition-colors">{t('form.policy.link')}</Link> {t('form.policy.text2')}
                                    </span>
                                </label>

                                <button
                                    type="submit"
                                    disabled={isSubmitting || !formData.acceptedPolicy}
                                    className={`w-full py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-all
                    ${isSubmitting || !formData.acceptedPolicy
                                            ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                                            : 'bg-gradient-to-r from-azure to-neon-blue hover:shadow-lg hover:shadow-neon-cyan/25 text-white'
                                        }`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            {t('form.submitting')}
                                        </>
                                    ) : (
                                        <>
                                            <Send size={20} />
                                            {t('form.submit')}
                                        </>
                                    )}
                                </button>
                            </div>
                        </motion.form>
                    )}
                </AnimatePresence>
            </div>

            {/* Added Footer since PrivacyPolicy has it but PQRS didn't seem to have one properly integrated in layout sometimes or was omitted in snippet, actually it wasn't in the snippet but I should add Footer back if it was there or add it. Wait, the original had `<Footer />`? Let's check the original */}
            <Footer />
        </div>
    );
};

export default PQRSPage;