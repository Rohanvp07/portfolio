import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, Star } from 'lucide-react';
import resumeData from '../data/resume.json';
import { cn } from '../lib/utils';

export const Experience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(0);

  return (
    <section id="experience" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-sm font-mono text-emerald-500 uppercase tracking-[0.3em] mb-4">Journey</h2>
            <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
              Professional <span className="text-white/40">Experience</span>
            </h3>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm max-w-sm">
             <div className="flex items-center space-x-2 text-emerald-400 mb-2">
                <Star size={16} fill="currentColor" />
                <span className="text-xs font-bold uppercase tracking-wider">Impact Highlight</span>
             </div>
             <p className="text-sm text-white/60 italic">
               "I have completed a total of 10+ projects in the domain of Machine Learning and Data Science which also includes End-to-End implemented projects."
             </p>
          </div>
        </div>

        <div className="space-y-6">
          {resumeData.work.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "group relative rounded-3xl border transition-all duration-500 overflow-hidden",
                expandedId === index 
                  ? "bg-white/10 border-white/20 shadow-2xl" 
                  : "bg-white/5 border-white/5 hover:border-white/10"
              )}
            >
              <button
                onClick={() => setExpandedId(expandedId === index ? null : index)}
                className="w-full p-8 text-left flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0 group-hover:scale-110 transition-transform">
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-1">{job.position}</h4>
                    <p className="text-white/60 font-medium">{job.company}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-sm font-mono text-white/40">
                  <div className="flex items-center space-x-2">
                    <Calendar size={14} />
                    <span>{job.startDate} — {job.endDate}</span>
                  </div>
                  {job.location && (
                    <div className="flex items-center space-x-2">
                      <MapPin size={14} />
                      <span>{job.location}</span>
                    </div>
                  )}
                  <div className="hidden md:block">
                    {expandedId === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </div>
              </button>

              <AnimatePresence>
                {expandedId === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 pt-2 md:pl-28">
                      {job.summary && (
                        <p className="text-lg text-white/50 mb-6 leading-relaxed">
                          {job.summary}
                        </p>
                      )}
                      
                      {job.highlights.length > 0 && (
                        <ul className="space-y-4">
                          {job.highlights.map((bullet, bIndex) => (
                            <li key={bIndex} className="flex items-start space-x-3 text-white/40">
                              <div className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {job.duration && (
                        <div className="mt-8 inline-block px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-white/40">
                          Tenure: {job.duration}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
