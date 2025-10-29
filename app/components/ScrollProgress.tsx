'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { useState, useEffect } from 'react';

interface ScrollProgressProps {
  sections: string[];
}

export default function ScrollProgress({ sections }: ScrollProgressProps) {
  const [activeSection, setActiveSection] = useState(0);
  const { scrollYProgress } = useScroll();
  
  // SMOOTH spring configuration - ADJUST THESE for smoothness:
  // - stiffness: 50-100 (lower = smoother, higher = snappier)
  // - damping: 25-35 (higher = less bouncy, smoother)
  // - mass: 0.3-0.8 (lower = lighter/faster, higher = heavier/slower)
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 60,        // Reduced from 100 for smoother motion
    damping: 35,          // Increased from 30 for less bounce
    restDelta: 0.0005,    // Smaller for more precision
    mass: 0.4,            // Reduced from 0.5 for lighter feel
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      const sectionElements = sections.map(id => document.getElementById(id));
      
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (index: number) => {
    const element = document.getElementById(sections[index]);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0066ff] via-[#00d9ff] to-[#ff0080] origin-left z-50"
        style={{ scaleX }}
      />

      {/* Section Dots */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
        {sections.map((section, index) => (
          <motion.button
            key={section}
            onClick={() => scrollToSection(index)}
            className="group relative"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to section ${index + 1}`}
          >
            <motion.div
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                activeSection === index
                  ? 'bg-[#00d9ff] border-[#00d9ff] shadow-lg shadow-[#00d9ff]/50'
                  : 'bg-transparent border-[#0066ff]/50 hover:border-[#00d9ff]'
              }`}
              animate={{
                scale: activeSection === index ? 1.2 : 1,
              }}
            />
            
            {/* Tooltip */}
            <motion.span
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-[#0f1628] text-[#00d9ff] px-3 py-1.5 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 border border-[#0066ff]/30"
              initial={{ opacity: 0, x: 10 }}
              whileHover={{ opacity: 1, x: 0 }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </motion.span>
          </motion.button>
        ))}
      </div>

      {/* Mobile Section Counter */}
      <motion.div
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 lg:hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0 }}
      >
        <div className="bg-[#0f1628]/90 backdrop-blur-sm border border-[#0066ff]/30 rounded-full px-4 py-2 flex items-center gap-2">
          <span className="text-[#00d9ff] text-sm font-bold">
            {activeSection + 1}
          </span>
          <span className="text-[#b0b0b0] text-sm">/</span>
          <span className="text-[#b0b0b0] text-sm">{sections.length}</span>
        </div>
      </motion.div>
    </>
  );
}
