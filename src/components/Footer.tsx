import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import resumeData from '../data/resume.json';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-20 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <div className="text-3xl font-bold tracking-tighter text-white mb-4">
              RP<span className="text-emerald-500">.</span>
            </div>
            <p className="text-white/40 max-w-xs">
              Building the future of AI and Data Engineering, one project at a time.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex items-center space-x-6">
              <a href={resumeData.basics.profiles.find(p => p.network === 'GitHub')?.url} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/20 transition-all">
                <Github size={20} />
              </a>
              <a href={resumeData.basics.profiles.find(p => p.network === 'LinkedIn')?.url} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/20 transition-all">
                <Linkedin size={20} />
              </a>
              <a href={`mailto:${resumeData.basics.email}`} className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/20 transition-all">
                <Mail size={20} />
              </a>
            </div>
            <button 
              onClick={scrollToTop}
              className="group flex items-center space-x-2 text-white/40 hover:text-emerald-400 transition-colors text-sm font-mono uppercase tracking-widest"
            >
              <span>Back to top</span>
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-white/20 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Rohan Patil. All rights reserved.</p>
          <p>Designed for the future</p>
        </div>
      </div>
    </footer>
  );
};
