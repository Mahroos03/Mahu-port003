import React, { memo } from "react";
import {
  FileText,
  Code2,
  GraduationCap,
  Sparkles,
  Server,
  Layers,
  Cpu,
  CheckCircle2,
  Terminal,
} from "lucide-react";
import { personalInfo } from "../data/portfolioData";

const About = () => {
  return (
    <section id="About" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono font-medium text-indigo-300 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>ENGINEERING BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
              Mohammed Mahroos
            </span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Information Technology student at the University of Moratuwa (ITUM) focused on
            software engineering, scalable backend architectures, and modern web systems.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image with Glass Frame */}
          <div
            className="lg:col-span-5 flex justify-center"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            <div className="relative group w-full max-w-sm">
              {/* Outer Glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-600 rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity duration-500" />

              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-white/10 shadow-2xl">
                <img
                  src="/assets/profiles/about profile.png"
                  alt="Mohammed Mahroos Profile"
                  className="w-full h-auto object-cover object-center transform group-hover:scale-102 transition-transform duration-500"
                />

                {/* Glass Badge Overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#030014]/85 backdrop-blur-md border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">
                        University of Moratuwa
                      </p>
                      <p className="text-[11px] font-mono text-slate-400">
                        ITUM • NDT in Information Technology
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Narrative & Core Strengths */}
          <div
            className="lg:col-span-7 space-y-6"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            {/* Story Paragraphs */}
            <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
              <p>{personalInfo.about.paragraph1}</p>
              <p>{personalInfo.about.paragraph2}</p>
              <p>{personalInfo.about.paragraph3}</p>
            </div>

            {/* Core Competency Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-indigo-500/30 transition-colors">
                <div className="flex items-center gap-2.5 mb-2">
                  <Server className="w-4 h-4 text-indigo-400" />
                  <h4 className="text-sm font-semibold text-white">
                    Backend &amp; REST APIs
                  </h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Enterprise Java (Spring Boot 17) and Python (FastAPI) services with JWT security and layered architecture.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-purple-500/30 transition-colors">
                <div className="flex items-center gap-2.5 mb-2">
                  <Layers className="w-4 h-4 text-purple-400" />
                  <h4 className="text-sm font-semibold text-white">
                    Full-Stack Modern UI
                  </h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  React 19, Next.js, and Tailwind CSS responsive frontends paired seamlessly with real-time WebSockets.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-2.5 mb-2">
                  <Cpu className="w-4 h-4 text-blue-400" />
                  <h4 className="text-sm font-semibold text-white">
                    Databases &amp; Docker
                  </h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Normalized schemas (3NF) in PostgreSQL and MySQL, orchestrated via Docker Compose with automated seeding.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-pink-500/30 transition-colors">
                <div className="flex items-center gap-2.5 mb-2">
                  <Sparkles className="w-4 h-4 text-pink-400" />
                  <h4 className="text-sm font-semibold text-white">
                    AI Microservices
                  </h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Integration of Google Gemini API for intelligent text triage, classification, and citizen chatbots.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href={personalInfo.resumePdf}
                download={personalInfo.downloadFileName}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-all shadow-md shadow-indigo-600/20"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>
              <a
                href="#Projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
              >
                <Code2 className="w-4 h-4" />
                <span>Explore Projects</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(About);
