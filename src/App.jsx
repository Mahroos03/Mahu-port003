import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import "./index.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import AnimatedBackground from "./components/Background";
import Navbar from "./components/Navbar";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import CertificationsSection from "./components/CertificationsSection";
import ContactPage from "./Pages/Contact";
import Footer from "./components/Footer";
import ProjectDetails from "./components/ProjectDetail";
import WelcomeScreen from "./Pages/WelcomeScreen";
import { AnimatePresence } from "framer-motion";

const LandingPage = ({ showWelcome, setShowWelcome }) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {showWelcome && (
          <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>

      {!showWelcome && (
        <div className="relative min-h-screen bg-[#030014] text-slate-100 flex flex-col selection:bg-indigo-500/30 selection:text-indigo-200">
          <Navbar />
          <AnimatedBackground />

          <main className="flex-grow">
            <Home />
            <About />
            <SkillsSection />
            <ProjectsSection />
            <ExperienceSection />
            <EducationSection />
            <CertificationsSection />
            <ContactPage />
          </main>

          <Footer />
        </div>
      )}
    </>
  );
};

const ProjectPageLayout = () => (
  <div className="relative min-h-screen bg-[#030014] text-slate-100 flex flex-col">
    <Navbar />
    <main className="flex-grow pt-16">
      <ProjectDetails />
    </main>
    <Footer />
  </div>
);

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              showWelcome={showWelcome}
              setShowWelcome={setShowWelcome}
            />
          }
        />
        <Route path="/project/:id" element={<ProjectPageLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
