import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Code2,
  Star,
  ChevronRight,
  Layers,
  Globe,
  Package,
  Cpu,
  CheckCircle2,
  Calendar,
  Sparkles,
} from "lucide-react";
import Swal from "sweetalert2";
import { projectsData, personalInfo } from "../data/portfolioData";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const found = projectsData.find((p) => String(p.id) === String(id));
    if (found) {
      setProject(found);
    } else {
      // Fallback check
      const stored = JSON.parse(localStorage.getItem("projects") || "[]");
      const sFound = stored.find((p) => String(p.id) === String(id));
      if (sFound) {
        setProject({
          ...sFound,
          title: sFound.Title || sFound.title,
          fullDescription: sFound.Description || sFound.fullDescription,
          features: sFound.Features || sFound.features || [],
          techStack: sFound.TechStack || sFound.techStack || [],
          image: sFound.Img || sFound.image,
          github: sFound.Link || sFound.github,
          liveDemo: sFound.LiveDemo || sFound.liveDemo,
        });
      }
    }
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#030014] flex flex-col items-center justify-center p-4">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 mx-auto border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
          <h2 className="text-xl font-bold text-white">Locating Project Specifications...</h2>
          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors"
          >
            Return to Portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030014] text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Background Subtle Blobs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 space-y-8">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </button>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-400">
            <Link to="/" className="hover:text-indigo-400">Portfolio</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>Projects</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-indigo-300 font-semibold truncate max-w-[200px]">{project.title}</span>
          </div>
        </div>

        {/* Project Header Banner */}
        <div className="rounded-3xl bg-[#090d1f]/80 border border-white/[0.08] p-6 sm:p-10 backdrop-blur-xl shadow-2xl space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
              {project.badge || project.category}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-white/[0.04] text-slate-400 border border-white/[0.06]">
              {project.category}
            </span>
          </div>

          <div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              {project.title}
            </h1>
            <p className="mt-2 text-base sm:text-lg text-slate-400 font-mono">
              {project.subtitle || project.shortDescription}
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/10 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
            )}
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-md shadow-indigo-600/20 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demonstration</span>
              </a>
            )}
          </div>
        </div>

        {/* Project Image Showcase */}
        <div className="rounded-3xl overflow-hidden border border-white/[0.08] bg-slate-950 shadow-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto max-h-[550px] object-cover object-top"
          />
        </div>

        {/* Detailed Two-Column Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Description & Features */}
          <div className="lg:col-span-8 space-y-8">
            <div className="rounded-2xl bg-[#090d1f]/60 border border-white/[0.08] p-6 sm:p-8 backdrop-blur-xl space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Code2 className="w-5 h-5 text-indigo-400" />
                <span>Architectural Overview</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Key Features */}
            {project.features && project.features.length > 0 && (
              <div className="rounded-2xl bg-[#090d1f]/60 border border-white/[0.08] p-6 sm:p-8 backdrop-blur-xl space-y-4">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Star className="w-5 h-5 text-amber-400" />
                  <span>Key Engineering Features</span>
                </h2>
                <div className="space-y-3">
                  {project.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-300 leading-relaxed">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Stack & Metadata */}
          <div className="lg:col-span-4 space-y-6">
            {/* Tech Stack Box */}
            <div className="rounded-2xl bg-[#090d1f]/60 border border-white/[0.08] p-6 backdrop-blur-xl space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-400" />
                <span>Tech Stack</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack?.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.04] text-slate-200 border border-white/[0.08]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Author / Engineering Contact */}
            <div className="rounded-2xl bg-[#090d1f]/60 border border-white/[0.08] p-6 backdrop-blur-xl space-y-3">
              <h3 className="text-base font-bold text-white">Lead Engineer</h3>
              <div className="text-xs space-y-1 font-mono text-slate-300">
                <p className="font-bold text-white text-sm">{personalInfo.name}</p>
                <p className="text-indigo-400">{personalInfo.title}</p>
                <p className="text-slate-400">{personalInfo.location}</p>
                <p className="text-slate-500 pt-2">{personalInfo.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
