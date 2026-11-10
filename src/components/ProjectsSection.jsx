import React, { useState, memo } from "react";
import {
  ExternalLink,
  Github,
  Code2,
  Sparkles,
  ArrowRight,
  Layers,
  CheckCircle2,
  X,
  Eye,
  Server,
  Database,
  Cpu,
} from "lucide-react";
import { Link } from "react-router-dom";
import { projectsData } from "../data/portfolioData";

const ProjectsSection = () => {
  const [filter, setFilter] = useState("All");
  const [activeProject, setActiveProject] = useState(null);

  const categories = ["All", "Full Stack & AI", "Full Stack & Real-Time", "Backend & Architecture", "Enterprise & Database"];

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category.includes(filter) || p.badge.includes(filter));

  return (
    <section id="Projects" className="py-20 relative">
      {/* Fallback anchor for backward compatibility */}
      <div id="Portofolio" className="absolute -top-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono font-medium text-indigo-300 mb-4">
            <Code2 className="w-3.5 h-3.5 text-indigo-400" />
            <span>REAL-WORLD SOFTWARE ENGINEERING</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Featured{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Real software systems engineered with Spring Boot, FastAPI, React 19, Next.js,
            relational databases, WebSockets, and AI services based on actual production requirements.
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          className="flex flex-wrap justify-center gap-2 mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                filter === cat
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-600/20 scale-105"
                  : "bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="group relative rounded-2xl bg-[#090d1f]/80 border border-white/[0.08] hover:border-indigo-500/40 overflow-hidden transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Visual Preview Container */}
                <div className="relative h-60 sm:h-72 overflow-hidden bg-slate-950 border-b border-white/[0.06]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090d1f] via-transparent to-transparent opacity-80" />

                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-600/80 text-white backdrop-blur-md border border-indigo-400/30 shadow-md">
                      {project.badge}
                    </span>
                  </div>

                  {/* Quick Action Overlay */}
                  <div className="absolute top-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => setActiveProject(project)}
                      className="p-2 rounded-lg bg-black/60 text-white hover:bg-indigo-600 backdrop-blur-md border border-white/20 transition-colors"
                      title="Quick Preview"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div>
                    <span className="text-xs font-mono font-medium text-indigo-400 uppercase tracking-wider">
                      {project.subtitle}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors mt-1">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-slate-300/90 text-sm leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Key Features Bullets */}
                  <div className="space-y-1.5 pt-1">
                    {project.features.slice(0, 2).map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span className="line-clamp-2">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="px-6 pb-6 pt-3 border-t border-white/[0.06] flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  )}
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-indigo-300 hover:text-white bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/20 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Demo</span>
                    </a>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveProject(project)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    <span>Full Spec</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <Link
                    to={`/project/${project.id}`}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                    title="Dedicated Page"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="relative max-w-3xl w-full max-h-[90vh] bg-[#090d1f] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/[0.02]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-400"></span>
                <span className="text-xs font-mono text-indigo-300 uppercase">
                  {activeProject.badge}
                </span>
              </div>
              <button
                onClick={() => setActiveProject(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white">
                  {activeProject.title}
                </h3>
                <p className="text-sm font-mono text-slate-400">
                  {activeProject.subtitle}
                </p>
              </div>

              {/* Preview Image */}
              <div className="rounded-xl overflow-hidden border border-white/10 h-64 bg-slate-950">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-slate-200 uppercase font-mono tracking-wider">
                  System Overview
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {activeProject.fullDescription}
                </p>
              </div>

              {/* Key Features */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-slate-200 uppercase font-mono tracking-wider">
                  Engineering Architecture &amp; Key Features
                </h4>
                <div className="space-y-2">
                  {activeProject.features.map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-slate-300">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-slate-200 uppercase font-mono tracking-wider">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 px-6 border-t border-white/10 bg-white/[0.02] flex items-center justify-between">
              <div className="flex items-center gap-3">
                {activeProject.github && (
                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                )}
                {activeProject.liveDemo && (
                  <a
                    href={activeProject.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Preview</span>
                  </a>
                )}
              </div>
              <button
                onClick={() => setActiveProject(null)}
                className="text-xs text-slate-400 hover:text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default memo(ProjectsSection);
