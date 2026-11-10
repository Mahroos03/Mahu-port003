import React, { memo } from "react";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Sparkles,
  GitBranch,
  Terminal,
} from "lucide-react";
import { experienceData } from "../data/portfolioData";

const ExperienceSection = () => {
  return (
    <section id="Experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono font-medium text-indigo-300 mb-4">
            <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
            <span>CAREER TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Work{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Hands-on practical software engineering, independent technical project execution,
            and continuous full-stack system development.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent opacity-30" />

          {experienceData.map((exp, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              className="relative pl-12 sm:pl-20 pb-12 last:pb-0"
            >
              {/* Timeline Node Icon */}
              <div className="absolute left-2.5 sm:left-6.5 -translate-x-1/2 top-1.5 w-8 h-8 rounded-full bg-[#030014] border-2 border-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-pulse" />
              </div>

              {/* Card Container */}
              <div className="rounded-2xl bg-[#090d1f]/80 border border-white/[0.08] p-6 sm:p-8 backdrop-blur-xl shadow-xl hover:border-indigo-500/40 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-white/[0.08]">
                  <div>
                    <span className="text-xs font-mono font-semibold text-indigo-400 uppercase tracking-wider">
                      {exp.type}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                      {exp.position}
                    </h3>
                    <p className="text-sm font-medium text-slate-300">
                      {exp.organization}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 text-xs text-slate-400 font-mono">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-indigo-300">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1 text-slate-500">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bullet Points */}
                <div className="space-y-3">
                  {exp.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Technologies Used */}
                <div className="pt-6 mt-6 border-t border-white/[0.08]">
                  <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                    Technologies Applied
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-lg text-xs font-mono bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(ExperienceSection);
