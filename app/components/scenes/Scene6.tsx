'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Scene6() {
  return (
    <section id="join" className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 relative overflow-hidden snap-start snap-always">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0066ff]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      <div className="max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="text-7xl sm:text-8xl lg:text-9xl">🚀</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
        >
          <span className="bg-gradient-to-r from-[#ff0080] via-[#0066ff] to-[#00d9ff] bg-clip-text text-transparent">
            Ready to Level Up?
          </span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#b0b0b0] mb-12 max-w-3xl mx-auto leading-relaxed px-4"
        >
          Whether you&apos;re a beginner or an experienced developer, there&apos;s a place for you in Parallax.
          Join our community and start your journey in game development and immersive technologies.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center"
        >
          <Link 
            href="/contact" 
            className="group relative w-full sm:w-auto px-12 py-5 overflow-hidden rounded-lg"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#ff0080] to-[#0066ff]"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 text-white font-bold text-lg">Join the Club</span>
          </Link>
          
          <Link 
            href="/team" 
            className="w-full sm:w-auto px-12 py-5 border-2 border-[#0066ff] text-[#00d9ff] font-bold rounded-lg hover:bg-[#0066ff]/10 transition-all duration-300 text-lg"
          >
            Meet the Team
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
