import { Route, Routes } from "react-router";
import Layout from "./components/layout/Layout";
import LandingPage from "./pages/LandingPage";
import ContactPage from "./pages/ContatcPage";
import ExperiencePage from "./pages/ExperiencePage";
import AboutMePage from "./pages/AboutMePage";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";

function App() {
  return (
    <Layout>
      <div className="bgLayout">
        <div className="gradient"></div>
      </div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutMePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
