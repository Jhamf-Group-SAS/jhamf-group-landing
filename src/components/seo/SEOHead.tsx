import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
    title: string;
    description: string;
    keywords?: string;
    url?: string;
    image?: string;
    type?: string;
    lang?: 'es' | 'en';
    alternateUrls?: { es: string; en: string };
    jsonLd?: Record<string, any>;
}

const SITE_BASE = 'https://www.jhamf.com';

const SEOHead = ({
    title,
    description,
    keywords = 'JHAMF Group, IA Colombia, Azure Colombia, Automatización de Procesos, Soporte TI',
    url = `${SITE_BASE}/es/`,
    image = `${SITE_BASE}/og-image.jpg`,
    type = 'website',
    lang = 'es',
    alternateUrls,
    jsonLd,
}: SEOHeadProps) => {
    const esUrl = alternateUrls?.es ?? `${SITE_BASE}/es/`;
    const enUrl = alternateUrls?.en ?? `${SITE_BASE}/en/`;

    return (
        <Helmet>
            {/* Language */}
            <html lang={lang} />

            {/* Primary Meta */}
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}

            {/* hreflang — critical for multilingual SEO */}
            <link rel="alternate" hrefLang="es" href={esUrl} />
            <link rel="alternate" hrefLang="en" href={enUrl} />
            <link rel="alternate" hrefLang="x-default" href={esUrl} />

            {/* Canonical */}
            <link rel="canonical" href={url} />

            {/* Open Graph */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:locale" content={lang === 'es' ? 'es_CO' : 'en_US'} />
            <meta property="og:locale:alternate" content={lang === 'es' ? 'en_US' : 'es_CO'} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />

            {/* JSON-LD */}
            {jsonLd && (
                <script type="application/ld+json">
                    {JSON.stringify(jsonLd)}
                </script>
            )}
        </Helmet>
    );
};

export default SEOHead;
