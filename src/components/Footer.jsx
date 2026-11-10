import React from "react";
import { ArrowUp, Github, Linkedin, Mail, Phone, Heart } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navLinks = [
    { href: "#Home", label: "Home" },
    { href: "#About", label: "About" },
    { href: "#Skills", label: "Skills" },
    { href: "#Projects", label: "Projects" },
    { href: "#Experience", label: "Experience" },
    { href: "#Education", label: "Education" },
    { href: "#Certifications", label: "Certifications" },
    { href: "#Contact", label: "Contact" },
  ];

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#02000f] text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          {/* Brand & Title */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-xl font-bold tracking-tight text-white">
              {personalInfo.name}
            </span>
            <span className="text-xs font-mono text-indigo-400 mt-1">
              {personalInfo.title}
            </span>
            <span className="text-xs text-slate-500 mt-0.5">
              University of Moratuwa – Institute of Technology (ITUM)
            </span>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-indigo-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Icons & Back-to-Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="p-2 rounded-lg bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2 rounded-lg bg-indigo-600/30 text-indigo-300 hover:bg-indigo-600 hover:text-white border border-indigo-500/30 transition-all ml-2"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Mohammed Mahroos. All rights reserved.
          </p>
          <p className="font-mono flex items-center gap-1 text-[11px]">
            Engineered with React 19, Tailwind CSS &amp; Vite
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

