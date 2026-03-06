import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LandingPage from './pages/LandingPage';
import PQRSPage from './pages/PQRSPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import AzurePage from './pages/AzurePage';
import AutomationPage from './pages/AutomationPage';
import BlueprintPage from './pages/BlueprintPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import IACaliPage from './pages/IACaliPage';
import InfrastructurePage from './pages/InfrastructurePage';
import AssetsPage from './pages/AssetsPage';
import SupportPage from './pages/SupportPage';
import CyberArchPage from './pages/CyberArchPage';
import { SUPPORTED_LANGUAGES } from './i18n';
import type { SupportedLanguage } from './i18n';

/** Syncs the <html lang> attribute and i18n language to the :lang URL param */
function LangSync({ lang }: { lang: string }) {
  const { i18n } = useTranslation();
  const validLang: SupportedLanguage = SUPPORTED_LANGUAGES.includes(lang as SupportedLanguage)
    ? (lang as SupportedLanguage)
    : 'es';

  useEffect(() => {
    document.documentElement.lang = validLang;
    if (i18n.language !== validLang) {
      i18n.changeLanguage(validLang);
    }
  }, [validLang, i18n]);

  return null;
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Root: redirect to Spanish (primary) */}
        <Route path="/" element={<Navigate to="/es/" replace />} />

        {/* Global redirects without language prefix */}
        <Route path="/pqrs" element={<Navigate to="/es/pqrs" replace />} />
        <Route path="/support" element={<Navigate to="/es/support" replace />} />
        <Route path="/politica-privacidad" element={<Navigate to="/es/politica-privacidad" replace />} />
        <Route path="/privacy-policy" element={<Navigate to="/es/privacy-policy" replace />} />
        <Route path="/casos-de-exito" element={<Navigate to="/es/casos-de-exito" replace />} />
        <Route path="/ia-cali" element={<Navigate to="/es/ia-cali" replace />} />

        {/* Language-prefixed routes */}
        <Route path="/:lang/*" element={<LocalizedRoutes />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/es/" replace />} />
      </Routes>
    </Router>
  );
}

function LocalizedRoutes() {
  // Extract :lang from the matched path prefix via the wildcard parent
  const lang = window.location.pathname.split('/')[1] || 'es';

  // Language validation guard
  if (!SUPPORTED_LANGUAGES.includes(lang as SupportedLanguage)) {
    const restOfPath = window.location.pathname.split('/').slice(2).join('/');
    return <Navigate to={`/es/${restOfPath}`} replace />;
  }

  return (
    <>
      <LangSync lang={lang} />
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="azure" element={<AzurePage />} />
        <Route path="automatizacion-ia" element={<AutomationPage />} />
        <Route path="ai-automation" element={<AutomationPage />} />
        <Route path="pqrs" element={<PQRSPage />} />
        <Route path="support" element={<PQRSPage />} />
        <Route path="politica-privacidad" element={<PrivacyPolicyPage />} />
        <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="blueprint" element={<BlueprintPage />} />
        <Route path="casos-de-exito" element={<CaseStudiesPage />} />
        <Route path="case-studies" element={<CaseStudiesPage />} />
        <Route path="ia-cali" element={<IACaliPage />} />
        <Route path="infraestructura-redes" element={<InfrastructurePage />} />
        <Route path="infrastructure-networks" element={<InfrastructurePage />} />
        <Route path="activos-licencias" element={<AssetsPage />} />
        <Route path="it-assets-licensing" element={<AssetsPage />} />
        {/* Nuevas Subpáginas de Servicios */}
        <Route path="servicios-ti-gestionados/soporte-empresarial-24-7" element={<SupportPage />} />
        <Route path="managed-it-services/24-7-enterprise-support" element={<SupportPage />} />

        {/* Nueva Subpágina Ciberseguridad */}
        <Route path="ciberseguridad/arquitectura-y-proteccion" element={<CyberArchPage />} />
        <Route path="cybersecurity/architecture-and-protection" element={<CyberArchPage />} />

        <Route path="*" element={<Navigate to="." replace />} />
      </Routes>
    </>
  );
}

export default App;
