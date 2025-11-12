import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import SolutionsPage from './pages/SolutionsPage';
import ServicesPage from './pages/ServicesPage';
import IndustriesPage from './pages/IndustriesPage';
import DigitalTwinPage from './pages/services/DigitalTwinPage';
import AIPenTestingPage from './pages/services/AIPenTestingPage';
import StrategicRoadmapPage from './pages/services/StrategicRoadmapPage';
import SbomGbAnalysisPage from './pages/services/SbomGbAnalysisPage';
import PredictiveIntelligencePage from './pages/services/PredictiveIntelligencePage';
import IEC62443Page from './pages/services/IEC62443Page';
import ExpressBriefsPage from './pages/services/ExpressBriefsPage';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/services/digital-twin" element={<DigitalTwinPage />} />
          <Route path="/services/ai-pen-testing" element={<AIPenTestingPage />} />
          <Route path="/services/strategic-roadmap" element={<StrategicRoadmapPage />} />
          <Route path="/services/sbom-gbom-analysis" element={<SbomGbAnalysisPage />} />
          <Route path="/services/predictive-intelligence" element={<PredictiveIntelligencePage />} />
          <Route path="/services/iec-62443" element={<IEC62443Page />} />
          <Route path="/services/express-briefs" element={<ExpressBriefsPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
