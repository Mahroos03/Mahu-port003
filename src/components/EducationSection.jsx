import React, { memo } from "react";
import {
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { educationData } from "../data/portfolioData";

const EducationSection = () => {
  return (
    <section id="Education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono font-medium text-indigo-300 mb-4">
            <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Academic{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Formal educational background in Information Technology and Physical Sciences,
            grounded in engineering principles, mathematics, and problem-solving.
          </p>
        </div>

        {/* Education Timeline / Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="relative group rounded-2xl bg-[#090d1f]/80 border border-white/[0.08] p-6 sm:p-8 backdrop-blur-xl shadow-2xl hover:border-indigo-500/40 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-white/[0.08]">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-indigo-600/15 border border-indigo-500/30 text-indigo-400 shadow-md flex-shrink-0">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-semibold text-indigo-400 uppercase tracking-wider">
                      {edu.status}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-purple-300 font-medium">
                      {edu.field}
                    </p>
                    <p className="text-sm text-slate-300 mt-1 font-semibold">
                      {edu.institution}
                    </p>
                  </div>
                </div>

                <div className="flex items-center md:items-end justify-between gap-2 text-xs font-mono text-slate-400">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-indigo-300">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.period}
                  </span>
                </div>
              </div>

              {/* Description & Badges */}
              <div className="pt-6 space-y-4">
                <p className="text-sm text-slate-300/90 leading-relaxed">
                  {edu.details}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {edu.badges.map((badge, bIdx) => (
                    <span
                      key={bIdx}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.03] text-indigo-300 border border-indigo-500/20"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(EducationSection);
