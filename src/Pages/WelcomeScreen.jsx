import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Github, Terminal, Sparkles } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

const WelcomeScreen = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        onLoadingComplete?.();
      }, 500);
    }, 1800);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 bg-[#030014] flex items-center justify-center px-4"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-700" />
          </div>

          <div className="relative text-center space-y-6 max-w-md w-full">
            {/* Monogram Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 p-[1px] shadow-2xl shadow-indigo-500/30 flex items-center justify-center"
            >
              <div className="w-full h-full bg-[#030014] rounded-[15px] flex items-center justify-center">
                <span className="font-mono text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-300">
                  MM
                </span>
              </div>
            </motion.div>

            {/* Title & Role */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="space-y-2"
            >
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {personalInfo.name}
              </h1>
              <p className="text-xs sm:text-sm font-mono text-indigo-300">
                {personalInfo.title}
              </p>
              <p className="text-xs text-slate-400">
                University of Moratuwa (ITUM)
              </p>
            </motion.div>

            {/* Loading Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center gap-2 pt-4"
            >
              <div className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce" style={{ animationDelay: "0ms" }} />
              <div className="w-2 h-2 rounded-full bg-purple-500 animate-bounce" style={{ animationDelay: "150ms" }} />
              <div className="w-2 h-2 rounded-full bg-pink-500 animate-bounce" style={{ animationDelay: "300ms" }} />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;
