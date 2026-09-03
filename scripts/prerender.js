import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.resolve(__dirname, '../dist');

const routes = [
    { path: '/es', title: 'JHAMF Group | Innovación y Tecnología', desc: 'Soluciones TI empresariales impulsadas por Inteligencia Artificial y computación Cloud.' },
    { path: '/en', title: 'JHAMF Group | Innovation & Technology', desc: 'Enterprise IT solutions powered by Artificial Intelligence and Cloud computing.' },
    { path: '/es/azure', title: 'Arquitectura Cloud Azure | JHAMF Group', desc: 'Expertos en migración, optimización y ciberseguridad avanzada en Microsoft Azure.' },
    { path: '/en/azure', title: 'Azure Cloud Architecture | JHAMF Group', desc: 'Experts in Microsoft Azure migration, optimization, and advanced cybersecurity.' },
    { path: '/es/automatizacion-ia', title: 'Automatización con IA | JHAMF Group', desc: 'Implementación de Agentes de IA y pipelines automatizados para eficiencia operativa.' },
    { path: '/en/ai-automation', title: 'AI Automation | JHAMF Group', desc: 'Implementation of AI Agents and automated pipelines for operational efficiency.' },
    { path: '/es/ciberseguridad/arquitectura-y-proteccion', title: 'Ciberseguridad Avanzada | JHAMF Group', desc: 'Arquitecturas Zero-Trust y protección perimetral contra amenazas persistentes.' },
    { path: '/es/servicios-ti-gestionados/soporte-empresarial-24-7', title: 'Soporte TI 24/7 | JHAMF Group', desc: 'Mesa de ayuda gestionada y soporte técnico continuo para continuidad de negocio.' }
];

try {
    const indexPath = path.join(DIST_DIR, 'index.html');
    if (!fs.existsSync(indexPath)) {
        console.warn('⚠️ No index.html found in dist. Pre-rendering skipped.');
        process.exit(0);
    }

    const indexHtml = fs.readFileSync(indexPath, 'utf-8');

    routes.forEach(route => {
        const routeDir = path.join(DIST_DIR, route.path);
        if (!fs.existsSync(routeDir)) {
            fs.mkdirSync(routeDir, { recursive: true });
        }

        let newHtml = indexHtml;
        newHtml = newHtml.replace(/<title>.*<\/title>/, `<title>${route.title}</title>`);

        const ogTags = `
    <!-- Static Pre-rendered Meta Tags for Crawlers -->
    <meta property="og:title" content="${route.title}" />
    <meta property="og:description" content="${route.desc}" />
    <meta property="og:image" content="https://jhamf.com/jhamf-logo-full.png" />
    <meta property="og:type" content="website" />
    <meta name="description" content="${route.desc}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${route.title}" />
    <meta name="twitter:description" content="${route.desc}" />
    `;

        newHtml = newHtml.replace('</head>', `${ogTags}\n</head>`);

        fs.writeFileSync(path.join(routeDir, 'index.html'), newHtml);
        console.log(`✅ Pre-rendered route HTML: ${route.path}`);
    });

} catch (error) {
    console.error('Error during pre-rendering:', error);
    process.exit(1);
}
