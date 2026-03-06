import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const SplashScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative mb-8"
      >
        <div className="text-6xl font-bold tracking-tighter text-white">
          RP<span className="text-emerald-500">.</span>
        </div>
        <motion.div
          className="absolute -inset-4 rounded-full border border-emerald-500/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-emerald-500"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
        />
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-4 text-xs font-mono text-white/40 uppercase tracking-[0.2em]"
      >
        Initializing Portfolio
      </motion.p>
    </motion.div>
  );
};
