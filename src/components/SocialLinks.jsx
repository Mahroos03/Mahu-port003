import React from "react";
import {
  Linkedin,
  Github,
  Mail,
  Phone,
  ExternalLink,
  MessageSquare,
} from "lucide-react";
import { personalInfo } from "../data/portfolioData";

const links = [
  {
    name: "LinkedIn",
    displayName: "LinkedIn",
    subText: "in/mohamed-mahroos",
    icon: Linkedin,
    url: personalInfo.linkedin,
    color: "#0A66C2",
    badge: "Professional Profile",
    primary: true,
  },
  {
    name: "GitHub",
    displayName: "GitHub",
    subText: "@mahroos03",
    icon: Github,
    url: personalInfo.github,
    color: "#ffffff",
    badge: "Source Code & Repos",
  },
  {
    name: "WhatsApp",
    displayName: "WhatsApp",
    subText: personalInfo.phone,
    icon: Phone,
    url: `https://wa.me/94770651216`,
    color: "#25D366",
    badge: "Direct Messaging",
  },
  {
    name: "Email",
    displayName: "Email",
    subText: personalInfo.email,
    icon: Mail,
    url: `mailto:${personalInfo.email}`,
    color: "#818cf8",
    badge: "Official Inquiries",
  },
];

const SocialLinks = () => {
  return (
    <div className="w-full space-y-3">
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] hover:border-indigo-500/30 transition-all duration-300"
          >
            <div className="flex items-center gap-3.5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105"
                style={{
                  backgroundColor: `${link.color}15`,
                  border: `1px solid ${link.color}30`,
                }}
              >
                <Icon className="w-5 h-5" style={{ color: link.color }} />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {link.displayName}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.05] text-slate-400">
                    {link.badge}
                  </span>
                </div>
                <p className="text-xs font-mono text-slate-400 mt-0.5 truncate max-w-[200px]">
                  {link.subText}
                </p>
              </div>
            </div>

            <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors flex-shrink-0" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
