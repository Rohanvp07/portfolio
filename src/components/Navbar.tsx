import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { cn } from '../lib/utils';
import resumeData from '../data/resume.json';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b',
        isScrolled 
          ? 'bg-black/80 backdrop-blur-md border-white/10 py-4' 
          : 'bg-transparent border-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-tighter text-white"
        >
          RP<span className="text-emerald-500">.</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-emerald-400',
                activeSection === item.href.substring(1) ? 'text-emerald-400' : 'text-white/60'
              )}
            >
              {item.name}
            </a>
          ))}
          <div className="h-4 w-px bg-white/10" />
          <div className="flex items-center space-x-4">
            <a href={resumeData.basics.profiles.find(p => p.network === 'GitHub')?.url} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
              <Github size={18} />
            </a>
            <a href={resumeData.basics.profiles.find(p => p.network === 'LinkedIn')?.url} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-white/80 hover:text-emerald-400"
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center space-x-6 pt-4">
                <a href={resumeData.basics.profiles.find(p => p.network === 'GitHub')?.url} target="_blank" rel="noopener noreferrer" className="text-white/60">
                  <Github size={24} />
                </a>
                <a href={resumeData.basics.profiles.find(p => p.network === 'LinkedIn')?.url} target="_blank" rel="noopener noreferrer" className="text-white/60">
                  <Linkedin size={24} />
                </a>
                <a href={`mailto:${resumeData.basics.email}`} className="text-white/60">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

import { AnimatePresence } from 'motion/react';
