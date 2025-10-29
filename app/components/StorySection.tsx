'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface StorySectionProps {
  title: string;
  description: string | ReactNode;
  imageContent: ReactNode;
  imagePosition?: 'left' | 'right';
  index: number;
  backgroundColor?: string;
}

export default function StorySection({
  title,
  description,
  imageContent,
  imagePosition = 'left',
  backgroundColor = 'transparent',
}: StorySectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Parallax effects with MUCH smoother and gentler ranges
  // ADJUST THESE VALUES for smoothness:
  // - Smaller numbers (20-40) = smoother, less movement
  // - Larger numbers (80-100) = more dramatic, might feel jerky
  const imageY = useTransform(scrollYProgress, [0, 1], [30, -30]); // Reduced from [80, -80]
  const textY = useTransform(scrollYProgress, [0, 1], [15, -15]); // Reduced from [40, -40]
  
  // Smoother opacity transitions - more gradual fade
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0.5]);
  
  // Gentler scale effect
  const scale = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.96, 1, 1, 0.98]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      style={{ 
        opacity,
        backgroundColor,
      }}
      className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 relative overflow-hidden snap-start snap-always"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0f1f]/50 to-transparent pointer-events-none" />
      
      <motion.div
        style={{ scale }}
        className="max-w-7xl w-full relative z-10"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
            imagePosition === 'right' ? 'lg:grid-flow-dense' : ''
          }`}
        >
          {/* Image/Visual Content */}
          <motion.div
            variants={itemVariants}
            style={{ y: imageY }}
            className={`relative group ${imagePosition === 'right' ? 'lg:col-start-2' : ''}`}
          >
            <div className="relative overflow-hidden rounded-2xl">
              {imageContent}
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            variants={itemVariants}
            style={{ y: textY }}
            className={`space-y-6 ${imagePosition === 'right' ? 'lg:col-start-1 lg:row-start-1' : ''}`}
          >
            <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              
              <motion.h2
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              >
                <span className="bg-gradient-to-r from-[#0066ff] via-[#00d9ff] to-[#ff0080] bg-clip-text text-transparent">
                  {title}
                </span>
              </motion.h2>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-lg sm:text-xl text-[#b0b0b0] leading-relaxed"
            >
              {description}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
