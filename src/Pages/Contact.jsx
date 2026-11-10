import React, { useState } from "react";
import {
  Mail,
  User,
  MessageSquare,
  Send,
  MapPin,
  Phone,
  Sparkles,
  Download,
  CheckCircle2,
} from "lucide-react";
import SocialLinks from "../components/SocialLinks";
import Swal from "sweetalert2";
import { personalInfo } from "../data/portfolioData";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    Swal.fire({
      title: "Transmitting Message...",
      text: "Connecting to dispatch endpoint...",
      allowOutsideClick: false,
      background: "#090d1f",
      color: "#ffffff",
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const response = await fetch("https://formsubmit.co/ajax/mhmdmahroos3622@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "Portfolio Contact Inquiry",
          message: formData.message,
        }),
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Message Delivered!",
          text: "Thank you for reaching out, Mohammed Mahroos will respond promptly.",
          confirmButtonColor: "#6366f1",
          background: "#090d1f",
          color: "#ffffff",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Form submission error");
      }
    } catch (err) {
      // Fallback submission
      Swal.fire({
        icon: "info",
        title: "Direct Dispatch",
        text: "Opening your default email client to send message directly to Mohammed Mahroos.",
        confirmButtonColor: "#6366f1",
        background: "#090d1f",
        color: "#ffffff",
      }).then(() => {
        window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
          formData.subject || "Portfolio Inquiry"
        )}&body=${encodeURIComponent(
          `From: ${formData.name} (${formData.email})\n\n${formData.message}`
        )}`;
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="Contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono font-medium text-indigo-300 mb-4">
            <Mail className="w-3.5 h-3.5 text-indigo-400" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Get in{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Interested in discussing internship opportunities, engineering collaborations, or software projects?
            Reach out directly or send a message below.
          </p>
        </div>

        {/* Contact Container */}
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl bg-[#090d1f]/80 border border-white/[0.08] p-6 sm:p-10 lg:p-12 backdrop-blur-xl shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Column: Functional Contact Form */}
              <div className="lg:col-span-7">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white">Send a Message</h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1 font-mono">
                    Directly forwarded to mhmdmahroos3622@gmail.com
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <User className="absolute left-4 top-3.5 w-4 h-4 text-slate-500" />
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name *"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-indigo-500 focus:bg-white/[0.05] focus:outline-none text-sm text-white placeholder-slate-500 transition-colors font-sans"
                      />
                    </div>

                    <div className="relative">
                      <Mail className="absolute left-4 top-3.5 w-4 h-4 text-slate-500" />
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email *"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-indigo-500 focus:bg-white/[0.05] focus:outline-none text-sm text-white placeholder-slate-500 transition-colors font-sans"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject (e.g. Software Engineer Internship Opportunity)"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-indigo-500 focus:bg-white/[0.05] focus:outline-none text-sm text-white placeholder-slate-500 transition-colors font-sans"
                    />
                  </div>

                  <div className="relative">
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Your Message *"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-indigo-500 focus:bg-white/[0.05] focus:outline-none text-sm text-white placeholder-slate-500 transition-colors font-sans resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 disabled:opacity-50 transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/25 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? "Dispatching..." : "Send Message"}</span>
                  </button>
                </form>
              </div>

              {/* Right Column: Direct Info & Social Channels */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6 lg:pl-6 lg:border-l border-white/[0.08]">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">Contact Information</h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Available for immediate internship recruitment and technical discussions.
                    </p>
                  </div>

                  {/* Location & Availability badge */}
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>Ready to join engineering teams immediately</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{personalInfo.location}</span>
                    </div>
                  </div>

                  {/* Social Channel Cards */}
                  <SocialLinks />
                </div>

                {/* Direct CV Download Link */}
                <div className="pt-4 border-t border-white/[0.08]">
                  <a
                    href={personalInfo.resumePdf}
                    download="Mohammed_Mahroos_CV.pdf"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 transition-colors"
                  >
                    <Download className="w-4 h-4 text-indigo-400" />
                    <span>Download Complete Resume (PDF)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
