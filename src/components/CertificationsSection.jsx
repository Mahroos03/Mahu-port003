import React, { useState, memo } from "react";
import {
  Award,
  Calendar,
  ExternalLink,
  Download,
  Eye,
  X,
  Sparkles,
  CheckCircle2,
  Users,
  Mail,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { certificationsData, referencesData } from "../data/portfolioData";

const CertificationsSection = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const handleDownload = (cert) => {
    const link = document.createElement("a");
    link.href = cert.image;
    link.download = `${cert.title.replace(/\s+/g, "_")}.png`;
    link.click();
  };

  return (
    <section id="Certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono font-medium text-indigo-300 mb-4">
            <Award className="w-3.5 h-3.5 text-indigo-400" />
            <span>CREDENTIALS &amp; VALIDATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Certifications &amp;{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Verified technical certifications from Cisco Networking Academy, University of Moratuwa CODL,
            SoloLearn, Marstech, and SimpliLearn validating programming, security, and cloud skills.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, idx) => (
            <div
              key={cert.id}
              data-aos="fade-up"
              data-aos-delay={idx * 80}
              className="group relative rounded-2xl bg-[#090d1f]/80 border border-white/[0.08] hover:border-indigo-500/40 p-5 backdrop-blur-xl transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Certificate Thumbnail Preview */}
                <div className="relative h-44 rounded-xl overflow-hidden bg-slate-950 border border-white/5 mb-4 group-hover:border-indigo-500/30 transition-colors">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                  {/* Hover Quick Action Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 backdrop-blur-xs">
                    <button
                      onClick={() => setSelectedCert(cert)}
                      className="px-3.5 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-semibold flex items-center gap-1.5 shadow-md hover:bg-indigo-500 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View</span>
                    </button>
                    <button
                      onClick={() => handleDownload(cert)}
                      className="px-3.5 py-1.5 rounded-lg bg-white/20 text-white text-xs font-semibold flex items-center gap-1.5 backdrop-blur-md hover:bg-white/30 transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download</span>
                    </button>
                  </div>
                </div>

                {/* Meta details */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-indigo-400">
                    <span className="truncate">{cert.issuer}</span>
                    <span className="flex items-center gap-1 text-slate-500">
                      <Calendar className="w-3 h-3" />
                      {cert.date}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors line-clamp-1">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                    {cert.description}
                  </p>

                  {cert.code && (
                    <div className="pt-1">
                      <span className="text-[11px] font-mono text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                        Code: {cert.code}
                      </span>
                    </div>
                  )}
                  {cert.certificateNumber && (
                    <div className="pt-1">
                      <span className="text-[11px] font-mono text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                        No: {cert.certificateNumber}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Card View Link */}
              <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500">
                  {cert.organization}
                </span>
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1"
                >
                  <span>Verify</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Academic References Section (Direct from Resume) */}
        <div className="mt-20" data-aos="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono font-medium text-indigo-300 mb-3">
              <Users className="w-3.5 h-3.5 text-indigo-400" />
              <span>ACADEMIC ENDORSEMENTS</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Academic &amp; Professional References
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-400">
              Department leaders and faculty members from the University of Moratuwa – Institute of Technology (ITUM).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {referencesData.map((ref, rIdx) => (
              <div
                key={rIdx}
                className="p-6 rounded-2xl bg-[#090d1f]/60 border border-white/[0.08] hover:border-indigo-500/30 transition-all duration-300 backdrop-blur-xl flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-3">
                    <Users className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white">{ref.name}</h4>
                  <p className="text-xs font-semibold text-indigo-300 font-mono">
                    {ref.title}
                  </p>
                  <p className="text-xs text-slate-400">{ref.institution}</p>
                  {ref.affiliation && (
                    <p className="text-[11px] text-slate-500">
                      {ref.affiliation}
                    </p>
                  )}
                </div>

                <div className="pt-4 mt-4 border-t border-white/[0.06] space-y-1.5 text-xs font-mono text-slate-300">
                  <a
                    href={`mailto:${ref.email}`}
                    className="flex items-center gap-2 hover:text-indigo-400 transition-colors truncate"
                  >
                    <Mail className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
                    <span className="truncate">{ref.email}</span>
                  </a>
                  {ref.phone && (
                    <a
                      href={`tel:${ref.phone}`}
                      className="flex items-center gap-2 hover:text-indigo-400 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
                      <span>{ref.phone}</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for Certificate Preview */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] bg-[#090d1f] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Certificate Image View */}
            <div className="md:w-3/5 bg-black/60 p-6 flex items-center justify-center border-b md:border-b-0 md:border-r border-white/10">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="max-h-[60vh] w-auto object-contain rounded-lg shadow-xl"
              />
            </div>

            {/* Certificate Details */}
            <div className="md:w-2/5 p-6 overflow-y-auto flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div>
                  <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider">
                    {selectedCert.issuer}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {selectedCert.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    Issued: {selectedCert.date}
                  </p>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedCert.description}
                </p>

                {selectedCert.code && (
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                    <p className="text-xs font-mono text-slate-400">
                      Verification Credential Code:
                    </p>
                    <p className="text-sm font-mono font-bold text-indigo-300 mt-0.5">
                      {selectedCert.code}
                    </p>
                  </div>
                )}

                {selectedCert.certificateNumber && (
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                    <p className="text-xs font-mono text-slate-400">
                      Certificate Serial Number:
                    </p>
                    <p className="text-sm font-mono font-bold text-indigo-300 mt-0.5">
                      {selectedCert.certificateNumber}
                    </p>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                <button
                  onClick={() => handleDownload(selectedCert)}
                  className="flex-1 py-2.5 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-all flex items-center justify-center gap-2 shadow-md shadow-indigo-600/25"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Image</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default memo(CertificationsSection);

