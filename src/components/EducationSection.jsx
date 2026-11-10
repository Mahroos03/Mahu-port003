import React, { memo } from "react";
import {
  GraduationCap,
  Calendar,
  MapPin,
  BookOpen,
  Award,
  Sparkles,
  CheckCircle2,
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
            Formal technical education at Sri Lanka's premier technological institution,
            grounded in rigorous engineering and computer science principles.
          </p>
        </div>

        {/* Education Timeline / Cards */}
        <div className="max-w-4xl mx-auto">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              className="relative group rounded-2xl bg-[#090d1f]/80 border border-white/[0.08] p-6 sm:p-10 backdrop-blur-xl shadow-2xl hover:border-indigo-500/40 transition-all duration-300"
            >
              {/* Top Accent Gradient Line */}
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-60" />

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-white/[0.08]">
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-indigo-600/15 border border-indigo-500/30 text-indigo-400 shadow-md flex-shrink-0">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-semibold text-indigo-400 uppercase tracking-wider">
                      {edu.status}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-1">
                      {edu.degree}
                    </h3>
                    <p className="text-base text-purple-300 font-medium">
                      Specialization in {edu.field}
                    </p>
                    <p className="text-sm text-slate-300 mt-1 font-semibold">
                      {edu.institution}
                    </p>
                  </div>
                </div>

                <div className="flex flex-row md:flex-col items-start md:items-end justify-between gap-2 text-xs font-mono text-slate-400">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-indigo-300">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.period}
                  </span>
                  <span className="inline-flex items-center gap-1 text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    {edu.location}
                  </span>
                </div>
              </div>

              {/* Description & Coursework Highlights */}
              <div className="pt-6 space-y-6">
                <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed">
                  {edu.details}
                </p>

                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                    Core Academic Disciplines
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      {
                        title: "Software Engineering & Architecture",
                        desc: "Layered architecture, OOP design patterns, clean code & testing.",
                      },
                      {
                        title: "Relational Database Management Systems",
                        desc: "SQL querying, schema design (3NF), relational constraints, indexing.",
                      },
                      {
                        title: "Web & Enterprise Application Development",
                        desc: "Full-stack frameworks (Spring Boot, React), REST APIs, authentication.",
                      },
                      {
                        title: "Computer Networks & Systems",
                        desc: "Network protocols, client-server models, security fundamentals.",
                      },
                    ].map((item, cIdx) => (
                      <div
                        key={cIdx}
                        className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-start gap-2.5"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-semibold text-white">
                            {item.title}
                          </p>
                          <p className="text-[11px] text-slate-400 mt-0.5">
                            {item.desc}
                          </p>
                        </div>
                      </div>
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

export default memo(EducationSection);

