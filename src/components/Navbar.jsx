import { useState, useEffect } from "react";
import { Menu, X, Download, ArrowUpRight } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

const navItems = [
  { href: "#Home", label: "Home" },
  { href: "#About", label: "About" },
  { href: "#Skills", label: "Skills" },
  { href: "#Projects", label: "Projects" },
  { href: "#Experience", label: "Experience" },
  { href: "#Education", label: "Education" },
  { href: "#Certifications", label: "Certifications" },
  { href: "#Contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionElements = navItems
        .map((item) => {
          const el = document.querySelector(item.href);
          if (el) {
            const rect = el.getBoundingClientRect();
            return {
              id: item.href.replace("#", ""),
              top: rect.top,
              bottom: rect.bottom,
            };
          }
          return null;
        })
        .filter(Boolean);

      // Find current section in view
      const current = sectionElements.find(
        (sec) => sec.top <= 160 && sec.bottom >= 160
      );

      if (current) {
        setActiveSection(current.id);
      } else if (window.scrollY < 100) {
        setActiveSection("Home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      const top = section.offsetTop - 80;
      window.scrollTo({
        top: top >= 0 ? top : 0,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-[#030014]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3"
        : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#Home"
            onClick={(e) => scrollToSection(e, "#Home")}
            className="group flex items-center gap-3 transition-transform duration-200 hover:scale-105"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 p-[1px] shadow-lg shadow-indigo-500/20">
              <div className="w-full h-full bg-[#030014] rounded-[11px] flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                <span className="font-mono text-sm font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-300 group-hover:text-white">
                  MM
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-white group-hover:text-indigo-300 transition-colors">
                Mohammed Mahroos
              </span>
              <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Software Engineer Intern
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 bg-white/[0.03] backdrop-blur-md px-3 py-1.5 rounded-full border border-white/[0.08]">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${isActive
                    ? "text-white bg-gradient-to-r from-indigo-600/40 to-purple-600/40 border border-indigo-500/30 shadow-sm"
                    : "text-slate-300 hover:text-white hover:bg-white/[0.06]"
                    }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* CTA & Download CV Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={personalInfo.resumePdf}
              download="Mahroos_SE.pdf"
              className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-all duration-200 shadow-md shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:-translate-y-0.5"
            >
              <Download className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center gap-2">
            <a
              href={personalInfo.resumePdf}
              download="Mahroos_SE.pdf"
              className="md:hidden inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-white bg-indigo-600/30 border border-indigo-500/30"
            >
              <Download className="w-3 h-3" />
              <span>CV</span>
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-xl text-slate-300 hover:text-white bg-white/5 border border-white/10 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[72px] bottom-0 bg-[#030014]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 overflow-y-auto">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${isActive
                    ? "bg-gradient-to-r from-indigo-600/20 to-purple-600/20 text-indigo-300 border border-indigo-500/30"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-40" />
                </a>
              );
            })}

            <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
              <a
                href={personalInfo.resumePdf}
                download="Mohammed_Mahroos_CV.pdf"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg shadow-indigo-600/20"
              >
                <Download className="w-4 h-4" />
                Download CV (PDF)
              </a>
              <div className="text-center text-xs text-slate-400 pt-2 font-mono">
                {personalInfo.email}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
