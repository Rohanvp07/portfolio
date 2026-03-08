import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download, MapPin } from 'lucide-react';
import resumeData from '../data/resume.json';

export const Hero: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for Opportunities</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-6 leading-[0.9]">
            {resumeData.basics.name.split(' ')[0]}<br />
            <span className="text-white/40">{resumeData.basics.name.split(' ')[1]}</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/60 font-medium mb-8 max-w-xl">
            {resumeData.basics.label}
          </p>

          <p className="text-lg text-white/40 mb-10 max-w-xl leading-relaxed">
            {resumeData.basics.summary}
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#experience"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-emerald-500 text-black font-bold rounded-xl flex items-center space-x-2 hover:bg-emerald-400 transition-colors"
            >
              <span>View Experience</span>
              <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href="href=https://rohanvp07.github.io/portfolio/resume.pdf"
              download="Rohan_Patil_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/5 text-white font-bold rounded-xl border border-white/10 flex items-center space-x-2 hover:bg-white/10 transition-colors"
            >
              <Download size={18} />
              <span>Download CV</span>
            </motion.a>
          </div>

          <div className="mt-12 flex items-center space-x-6 text-white/30 text-sm font-mono">
            <div className="flex items-center space-x-2">
              <MapPin size={14} />
              <span>{resumeData.basics.location.city}, {resumeData.basics.location.countryCode}</span>
            </div>
            <div className="h-4 w-px bg-white/10" />
            <span>{resumeData.work[0].duration} Experience</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 w-full aspect-square rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-3xl flex items-center justify-center">
             <div className="text-[20rem] font-bold text-white/5 select-none">RP</div>
             <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-blue-500/10" />
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-[80px]" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-[80px]" />
        </motion.div>
      </div>
    </section>
  );
};
