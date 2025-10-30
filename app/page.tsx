'use client';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import ParallaxHero from './components/ParallaxHero';
import ScrollProgress from './components/ScrollProgress';
import { Scene1, Scene2, Scene3, Scene4, Scene5, Scene6, Scene7, Scene8 } from './components/scenes';
import { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * ========================================
 * SCROLL SMOOTHNESS CONFIGURATION GUIDE
 * ========================================
 * 
 * If scrolling feels too slow/fast/jerky, adjust these values:
 * 
 * 1. CSS (globals.css):
 *    - scroll-snap-type: 
 *      • 'y mandatory' = strict snapping (can feel stiff)
 *      • 'y proximity' = loose snapping (smoother, current setting)
 *    
 *    - scroll-snap-stop:
 *      • 'always' = forces stop at each section (jerky on scroll up)
 *      • 'normal' = allows skipping sections (smoother, current setting)
 * 
 * 2. StorySection.tsx (parallax effects):
 *    - imageY: [30, -30] 
 *      • Smaller values (10-20) = minimal movement, very smooth
 *      • Larger values (50-80) = dramatic movement, can feel jerky
 *    
 *    - textY: [15, -15]
 *      • Should be half of imageY for balance
 * 
 * 3. ScrollProgress.tsx (progress bar animation):
 *    - stiffness: 60
 *      • Lower (40-50) = slower, smoother animation
 *      • Higher (80-120) = faster, snappier animation
 *    
 *    - damping: 35
 *      • Lower (20-30) = more bouncy
 *      • Higher (35-45) = less bouncy, smoother stop
 * 
 * 4. ParallaxHero.tsx (hero fade effect):
 *    - opacity: [0, 0.5]
 *      • [0, 0.3] = fades very quickly
 *      • [0, 0.7] = fades slowly (smoother)
 *    
 *    - y: [0, 100]
 *      • Lower value (50) = less vertical movement
 *      • Higher value (150) = more dramatic scroll effect
 * 
 * CURRENT SETTINGS: Optimized for smooth bi-directional scrolling
 * with gentle parallax effects and proximity-based snap behavior.
 */

export default function Home() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  const sections = ['parallax-hero', 'hero', 'mission', 'community', 'innovation', 'impact', 'values', 'highlights', 'join'];

  return (
    <>
      <Navbar />
      <ScrollProgress sections={sections} />
      
      {/* Loading Screen Overlay */}
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          onAnimationComplete={() => setLoading(false)}
          className="fixed inset-0 z-[100] bg-[#0a0f1f]"
        >
          <LoadingScreen onComplete={handleLoadingComplete} />
        </motion.div>
      )}
      
      <main className="relative snap-y snap-mandatory">
        {/* Animated PARALLAX Hero Section */}
        <ParallaxHero />

        {/* Scene 1: Hero Section */}
        <Scene1 />

        {/* Scene 2: Mission & Vision */}
        <Scene2 />

        {/* Scene 3: Community */}
        <Scene3 />

        {/* Scene 4: Innovation */}
        <Scene4 />

        {/* Scene 5: Impact */}
        <Scene5 />

        {/* Scene 7: Core Values */}
        <Scene7 />

        {/* Scene 8: What We Offer */}
        <Scene8 />

        {/* Scene 6: Join CTA */}
        <Scene6 />
      </main>
      
      <Footer />
    </>
  );
}
