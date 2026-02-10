import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
    title: string;
    description: string;
    keywords?: string;
    url?: string;
    image?: string;
    type?: string;
}

const SEOHead = ({
    title,
    description,
    keywords = "JHAMF Group, IA Colombia, Azure Colombia, Automatización de Procesos, Soporte TI Cali",
    url = "https://www.jhamf.com/",
    image = "https://www.jhamf.com/og-image.jpg",
    type = "website"
}: SEOHeadProps) => {
    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />

            {/* Canonical */}
            <link rel="canonical" href={url} />
        </Helmet>
    );
};

export default SEOHead;
