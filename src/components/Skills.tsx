import React from 'react';
import { motion } from 'motion/react';
import { Code2, Cpu, Database, Layout } from 'lucide-react';
import resumeData from '../data/resume.json';

const iconMap: Record<string, any> = {
  'Data Engineering': Database,
  'Machine Learning & AI': Cpu,
  'Analytics & BI': Layout,
  'Programming': Code2,
  'Default': Database
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-mono text-emerald-500 uppercase tracking-[0.3em] mb-4">Stack</h2>
          <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
            Technical <span className="text-white/40">Expertise</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resumeData.skills.map((skillGroup, index) => {
            const Icon = iconMap[skillGroup.name] || iconMap.Default;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-emerald-500/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-6 group-hover:rotate-12 transition-transform">
                  <Icon size={24} />
                </div>
                <h4 className="text-xl font-bold text-white mb-6">{skillGroup.name}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.keywords.map((skill, sIndex) => (
                    <span
                      key={sIndex}
                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-white/60 hover:text-emerald-400 hover:border-emerald-500/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
