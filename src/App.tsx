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
        <Route path="*" element={<Navigate to="." replace />} />
      </Routes>
    </>
  );
}

export default App;
