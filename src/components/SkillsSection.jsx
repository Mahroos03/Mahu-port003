import React, { useState, memo } from "react";
import {
  Code,
  Layers,
  Server,
  Database,
  Smartphone,
  Terminal,
  GitBranch,
  Globe2,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { skillsData } from "../data/portfolioData";

const categoryList = [
  { id: "all", label: "All Skills", icon: Sparkles },
  { id: "languages", label: "Languages", icon: Code },
  { id: "frontend", label: "Frontend", icon: Layers },
  { id: "backend", label: "Backend", icon: Server },
  { id: "database", label: "Database", icon: Database },
  { id: "mobileApp", label: "Mobile App", icon: Smartphone },
  { id: "tools", label: "Tools", icon: Terminal },
  { id: "versionControl", label: "Version Control", icon: GitBranch },
];

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("all");

  const categories = [
    {
      id: "languages",
      title: "Languages",
      icon: Code,
      color: "from-blue-500 to-indigo-500",
      skills: skillsData.languages,
    },
    {
      id: "frontend",
      title: "Frontend",
      icon: Layers,
      color: "from-purple-500 to-pink-500",
      skills: skillsData.frontend,
    },
    {
      id: "backend",
      title: "Backend",
      icon: Server,
      color: "from-emerald-500 to-teal-500",
      skills: skillsData.backend,
    },
    {
      id: "database",
      title: "Database",
      icon: Database,
      color: "from-cyan-500 to-blue-500",
      skills: skillsData.database,
    },
    {
      id: "mobileApp",
      title: "Mobile App",
      icon: Smartphone,
      color: "from-amber-500 to-orange-500",
      skills: skillsData.mobileApp,
    },
    {
      id: "tools",
      title: "Tools",
      icon: Terminal,
      color: "from-fuchsia-500 to-rose-500",
      skills: skillsData.tools,
    },
    {
      id: "versionControl",
      title: "Version Control",
      icon: GitBranch,
      color: "from-indigo-500 to-purple-500",
      skills: skillsData.versionControl,
    },
  ];

  const filteredCategories =
    activeTab === "all"
      ? categories
      : categories.filter((c) => c.id === activeTab);

  return (
    <section id="Skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono font-medium text-indigo-300 mb-4">
            <Code className="w-3.5 h-3.5 text-indigo-400" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Technical{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            Verified technologies, frameworks, and developer workflows organized exactly by my
            latest curriculum and hands-on projects.
          </p>
        </div>

        {/* Filter Pills */}
        <div
          className="flex flex-wrap justify-center gap-2 mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {categoryList.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isSelected
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-600/25 scale-105"
                    : "bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, idx) => {
            const CatIcon = category.icon;
            return (
              <div
                key={category.id}
                data-aos="fade-up"
                data-aos-delay={idx * 80}
                className="group relative rounded-2xl bg-slate-900/40 border border-white/[0.08] p-6 hover:border-indigo-500/40 hover:bg-slate-900/70 transition-all duration-300 backdrop-blur-xl flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 pb-4 mb-4 border-b border-white/[0.08]">
                    <div
                      className={`p-2.5 rounded-xl bg-gradient-to-br ${category.color} bg-opacity-20 text-white shadow-md`}
                    >
                      <CatIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-[11px] font-mono text-slate-400">
                        {category.skills.length} competencies
                      </p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-2.5">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.06] hover:border-white/[0.1] transition-all"
                      >
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                          <span className="text-sm font-medium text-slate-200">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-slate-400">
                          {skill.detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Spoken Languages Card */}
        <div
          className="mt-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] p-6 backdrop-blur-xl"
          data-aos="fade-up"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
                <Globe2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">
                  Languages
                </h4>
                <p className="text-xs text-slate-400">
                  Multilingual communication proficiency: English, Tamil, Sinhala
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {skillsData.spokenLanguages.map((lang, lIdx) => (
                <div
                  key={lIdx}
                  className="px-3.5 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center gap-2"
                >
                  <span className="text-xs font-semibold text-white">
                    {lang.name}
                  </span>
                  <span className="text-[11px] text-indigo-300 font-mono">
                    ({lang.fluency})
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(SkillsSection);
