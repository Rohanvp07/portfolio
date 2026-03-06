import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Layers, Terminal, Database, Cpu } from 'lucide-react';
import resumeData from '../data/resume.json';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-sm font-mono text-emerald-500 uppercase tracking-[0.3em] mb-4">Portfolio</h2>
          <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
            Featured <span className="text-white/40">Projects</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resumeData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-emerald-500/30 transition-all duration-500 flex flex-col h-full"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                  {index % 4 === 0 ? <Database size={24} /> : 
                   index % 4 === 1 ? <Cpu size={24} /> :
                   index % 4 === 2 ? <Layers size={24} /> : <Terminal size={24} />}
                </div>
                <div className="flex space-x-2">
                   <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-white/40 uppercase tracking-wider">
                      Live Demo
                   </div>
                </div>
              </div>

              <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h4>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.split(',').map((tech, tIndex) => (
                  <span key={tIndex} className="text-[10px] font-mono text-emerald-500/60 uppercase tracking-widest">
                    {tech.trim()}
                  </span>
                ))}
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {project.highlights.map((bullet, bIndex) => (
                  <li key={bIndex} className="text-sm text-white/40 leading-relaxed flex items-start space-x-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-emerald-500 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-white/5 mt-auto">
                <button className="flex items-center space-x-2 text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                  <span>View Case Study</span>
                  <ExternalLink size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
