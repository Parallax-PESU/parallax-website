'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Scene1() {
  return (
    <section id="hero" className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden snap-start snap-always">
      {/* Animated background elements with parallax */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-96 h-96 bg-[#0066ff]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-[#00d9ff]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#ff0080]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="relative z-10 text-center max-w-5xl w-full">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-tight"
        >
          <span className="bg-gradient-to-r from-[#0066ff] via-[#00d9ff] to-[#ff0080] bg-clip-text text-transparent">
            Shape the Future
          </span>
          <br />
          <span className="text-[#e0e0e0]">
            of Gaming & Immersive Tech
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl text-[#b0b0b0] mb-12 mx-auto leading-relaxed px-4"
        >
          Join Parallax, the Game Development and AR/VR club at PESU Electronic City Campus. 
          Create, innovate, and collaborate with fellow enthusiasts in cutting-edge immersive technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-20"
        >
          <Link 
            href="/about" 
            className="group relative w-full sm:w-auto px-10 py-4 overflow-hidden rounded-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#0066ff] to-[#00d9ff] transition-all duration-300 group-hover:scale-110" />
            <span className="relative z-10 text-white font-bold">Learn More</span>
          </Link>
          
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity"
        >
        </motion.div>
      </div>
    </section>
  );
}
