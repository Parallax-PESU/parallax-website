'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ParallaxHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // SMOOTHER transforms for hero section
  // ADJUST THESE for smoothness:
  // - opacity [0, 0.5] = fades slower (smoother)
  // - opacity [0, 0.8] = fades faster (more dramatic)
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]); // Gentler fade
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.92]); // Smaller scale change
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]); // Reduced from 150 to 100

  const letters = 'PARALLAX'.split('');

  return (
    <section
      ref={sectionRef}
      id="parallax-hero"
      className="min-h-screen w-full flex items-center justify-center overflow-hidden sticky top-0 snap-start snap-always"
    >
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute inset-0 bg-gradient-radial from-[#0066ff]/10 via-transparent to-transparent"
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
      </div>

      <motion.div
        style={{ opacity, scale, y }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* Animated PARALLAX text */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 px-4">
          {letters.map((letter, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{
                scale: 1.2,
                rotateY: 360,
                transition: { duration: 0.6 },
              }}
              className="relative group cursor-pointer"
            >
              <motion.h1
                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase"
                style={{
                  background: 'linear-gradient(135deg, #0066ff 0%, #00d9ff 50%, #ff0080 100%)',
                  backgroundSize: '200% 200%',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 0 80px rgba(0, 102, 255, 0.5)',
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: index * 0.2,
                }}
              >
                {letter}
              </motion.h1>

              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'radial-gradient(circle, #00d9ff 0%, transparent 70%)',
                }}
              />

              {/* Reflection effect */}
              <motion.div
                className="absolute top-full left-0 right-0 h-full overflow-hidden opacity-30"
                style={{
                  background: 'linear-gradient(135deg, #0066ff 0%, #00d9ff 50%, #ff0080 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  transform: 'scaleY(-1)',
                  maskImage: 'linear-gradient(to bottom, black 0%, transparent 60%)',
                }}
              >
                <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase">
                  {letter}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8 text-lg sm:text-xl md:text-2xl text-[#00d9ff] font-semibold tracking-[0.3em] uppercase text-center px-4"
        >
          Game Dev & AR/VR Club
        </motion.p>

        {/* Animated line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="mt-6 h-1 w-64 bg-gradient-to-r from-transparent via-[#00d9ff] to-transparent"
        />

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 flex flex-col items-center gap-2"
        >
          
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
