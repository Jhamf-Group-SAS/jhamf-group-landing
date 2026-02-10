import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PQRSPage from './pages/PQRSPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import AzurePage from './pages/AzurePage';
import AutomationPage from './pages/AutomationPage';
import BlueprintPage from './pages/BlueprintPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import IACaliPage from './pages/IACaliPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/azure" element={<AzurePage />} />
        <Route path="/automatizacion-ia" element={<AutomationPage />} />
        <Route path="/pqrs" element={<PQRSPage />} />
        <Route path="/politica-privacidad" element={<PrivacyPolicyPage />} />
        <Route path="/blueprint" element={<BlueprintPage />} />
        <Route path="/casos-de-exito" element={<CaseStudiesPage />} />
        <Route path="/ia-cali" element={<IACaliPage />} />
      </Routes>
    </Router>
  );
}

export default App;
