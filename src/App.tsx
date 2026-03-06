import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { AnimatedBackground } from './components/AnimatedBackground';
import { SplashScreen } from './components/SplashScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Footer } from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling while loading
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading]);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-emerald-500/30 selection:text-emerald-400">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <SplashScreen key="splash" onComplete={() => setIsLoading(false)} />
        ) : (
          <main key="main" className="relative">
            <AnimatedBackground />
            <Navbar />
            <Hero />
            <Projects />
            <Experience />
            <Skills />
            <Education />
            <Footer />
          </main>
        )}
      </AnimatePresence>
    </div>
  );
}
