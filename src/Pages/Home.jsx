import React, { useState, useEffect, useCallback, memo } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Terminal,
  MapPin,
  Sparkles,
  ArrowRight,
  Code2,
  Database,
  Cpu,
  Layers,
} from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import AOS from "aos";
import "aos/dist/aos.css";

const TYPING_SPEED = 85;
const ERASING_SPEED = 40;
const PAUSE_DURATION = 2200;

const Home = () => {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    AOS.init({ once: true, offset: 10 });
  }, []);

  const handleTyping = useCallback(() => {
    const currentWord = personalInfo.roles[wordIndex];
    if (isTyping) {
      if (charIndex < currentWord.length) {
        setText(currentWord.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => setIsTyping(false), PAUSE_DURATION);
      }
    } else {
      if (charIndex > 0) {
        setText(currentWord.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else {
        setWordIndex((prev) => (prev + 1) % personalInfo.roles.length);
        setIsTyping(true);
      }
    }
  }, [charIndex, isTyping, wordIndex]);

  useEffect(() => {
    const timeout = setTimeout(
      handleTyping,
      isTyping ? TYPING_SPEED : ERASING_SPEED
    );
    return () => clearTimeout(timeout);
  }, [handleTyping, isTyping]);

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) {
      const top = el.offsetTop - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="Home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 left-1/12 w-96 h-96 bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/12 w-96 h-96 bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Bio, CTAs */}
          <div
            className="lg:col-span-7 space-y-6 text-left"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-indigo-300">
                Seeking Software Engineer Internship
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-slate-400" /> Palavi, Sri Lanka
              </span>
            </div>

            {/* Main Greeting and Name */}
            <div className="space-y-2">
              <p className="text-slate-400 text-sm sm:text-base font-mono tracking-wide uppercase">
                Hello, world! I am
              </p>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white">
                <span className="block">{personalInfo.name}</span>
              </h1>
            </div>

            {/* Dynamic Animated Role */}
            <div className="flex items-center gap-2 min-h-[40px]">
              <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
                {text}
              </span>
              <span className="w-0.5 h-6 bg-indigo-400 animate-blink inline-block" />
            </div>

            {/* Subtitle / Introduction from Resume */}
            <p className="text-slate-300/90 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Information Technology student at the{" "}
              <span className="text-white font-semibold">
                University of Moratuwa (ITUM)
              </span>{" "}
              with practical experience engineering full-stack web applications,
              robust REST APIs, and relational database systems using{" "}
              <span className="text-indigo-300 font-medium">Java, Spring Boot, React, FastAPI,</span> and{" "}
              <span className="text-purple-300 font-medium">PostgreSQL</span>.
            </p>

            {/* Core Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                "Java 17",
                "Spring Boot",
                "React 19",
                "FastAPI",
                "PostgreSQL",
                "Docker",
                "WebSockets",
                "Gemini AI",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-white/[0.04] text-slate-300 border border-white/[0.08] hover:border-indigo-500/30 hover:text-white transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => scrollTo("#Projects")}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:-translate-y-0.5"
              >
                <span>View Featured Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={personalInfo.resumePdf}
                download="Mohammed_Mahroos_CV.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-indigo-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links & Direct Mail */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/[0.08]">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Connect:
              </span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-lg bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.08] transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-lg bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.08] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Send Email"
                className="p-2.5 rounded-lg bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.08] transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Developer Showcase Card & Photo */}
          <div
            className="lg:col-span-5 relative"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            {/* Glowing Backdrop */}
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-20"></div>

            {/* Terminal Window Card */}
            <div className="relative rounded-2xl bg-[#090d1f]/90 border border-white/10 backdrop-blur-xl overflow-hidden shadow-2xl">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-white/[0.03] border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400">
                    mahroos@itum-dev: ~
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
                  <Terminal className="w-3 h-3" />
                  <span>zsh</span>
                </div>
              </div>

              {/* Developer Profile Preview with Split View */}
              <div className="p-5 space-y-4">
                {/* Profile Header snippet */}
                <div className="flex items-center gap-4 pb-4 border-b border-white/[0.08]">
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-indigo-500/30 shadow-md flex-shrink-0">
                    <img
                      src="/assets/profiles/home profile.jpg"
                      alt={personalInfo.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm">
                      Mohammed Mahroos
                    </h3>
                    <p className="text-xs text-indigo-300 font-mono">
                      NDT in Information Technology
                    </p>
                    <p className="text-[11px] text-slate-400">
                      University of Moratuwa (ITUM)
                    </p>
                  </div>
                </div>

                {/* Code Terminal Output */}
                <div className="font-mono text-xs space-y-2 text-slate-300">
                  <div className="text-slate-500">
                    <span className="text-emerald-400">$</span> agy inspect --profile
                  </div>
                  <div className="bg-black/40 rounded-lg p-3 border border-white/5 space-y-1 text-[11px]">
                    <div className="text-slate-400">
                      <span className="text-indigo-400">const</span> developer = &#123;
                    </div>
                    <div className="pl-4 text-slate-300">
                      name: <span className="text-amber-300">"Mohammed Mahroos"</span>,
                    </div>
                    <div className="pl-4 text-slate-300">
                      role: <span className="text-emerald-300">"Software Engineer Intern"</span>,
                    </div>
                    <div className="pl-4 text-slate-300">
                      backend: [<span className="text-purple-300">"Spring Boot (Java 17)"</span>, <span className="text-purple-300">"FastAPI (Python)"</span>],
                    </div>
                    <div className="pl-4 text-slate-300">
                      frontend: [<span className="text-sky-300">"React 19"</span>, <span className="text-sky-300">"Next.js"</span>, <span className="text-sky-300">"Tailwind"</span>],
                    </div>
                    <div className="pl-4 text-slate-300">
                      database: [<span className="text-blue-300">"PostgreSQL"</span>, <span className="text-blue-300">"MySQL"</span>],
                    </div>
                    <div className="pl-4 text-slate-300">
                      container: <span className="text-indigo-300">"Docker Compose"</span>,
                    </div>
                    <div className="pl-4 text-slate-300">
                      ai_service: <span className="text-pink-300">"Google Gemini API"</span>,
                    </div>
                    <div className="pl-4 text-slate-300">
                      availability: <span className="text-emerald-400">true</span>
                    </div>
                    <div className="text-slate-400">&#125;;</div>
                  </div>
                </div>

                {/* Metrics Bar */}
                <div className="grid grid-cols-3 gap-2 pt-2 text-center font-mono">
                  <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5">
                    <div className="text-base font-bold text-white">4+</div>
                    <div className="text-[10px] text-slate-400">Core Projects</div>
                  </div>
                  <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5">
                    <div className="text-base font-bold text-indigo-400">ITUM</div>
                    <div className="text-[10px] text-slate-400">Uni Moratuwa</div>
                  </div>
                  <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5">
                    <div className="text-base font-bold text-emerald-400">100%</div>
                    <div className="text-[10px] text-slate-400">Clean Code</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Home);
