import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award } from 'lucide-react';
import resumeData from '../data/resume.json';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-sm font-mono text-emerald-500 uppercase tracking-[0.3em] mb-4">Academic</h2>
            <h3 className="text-5xl font-bold text-white tracking-tighter mb-12">
              Education
            </h3>
            
            <div className="space-y-12">
              {resumeData.education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-8 border-l border-white/10"
                >
                  <div className="absolute top-0 left-[-5px] w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <div className="text-emerald-500 font-mono text-sm mb-2">
                    {edu.startDate} — {edu.endDate}
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-1">{edu.area}</h4>
                  <p className="text-white/60 text-lg mb-2">{edu.studyType}</p>
                  <p className="text-white/40 font-medium">{edu.institution}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-mono text-emerald-500 uppercase tracking-[0.3em] mb-4">Recognition</h2>
            <h3 className="text-5xl font-bold text-white tracking-tighter mb-12">
              Certifications
            </h3>

            <div className="space-y-6">
              {resumeData.certificates.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-start space-x-4 group hover:bg-white/10 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">
                      {cert.name}
                    </h4>
                    {cert.issuer && <p className="text-white/40 text-sm">{cert.issuer}</p>}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 p-8 rounded-3xl bg-emerald-500/5 border border-emerald-500/10">
               <h4 className="text-emerald-400 font-bold mb-4 flex items-center space-x-2">
                 <GraduationCap size={20} />
                 <span>Additional Information</span>
               </h4>
               <ul className="space-y-4">
                 {resumeData.extra.map((item, index) => (
                   <li key={index} className="text-sm text-white/50 leading-relaxed">
                     {item}
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
