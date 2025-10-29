'use client';

import StorySection from '../StorySection';
import { motion } from 'framer-motion';

export default function Scene2() {
  return (
    <StorySection
      index={1}
      title="Our Mission"
      description={
        <div className="space-y-6">
          <p>
            To empower students with the knowledge, skills, and community they need to excel in game development 
            and immersive technologies. We foster creativity, technical excellence, and innovation through 
            collaborative projects, workshops, and industry connections.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-[#0066ff]/10 border border-[#0066ff]/30 rounded-full text-sm text-[#00d9ff]">
              🎮 Game Dev
            </span>
            <span className="px-4 py-2 bg-[#0066ff]/10 border border-[#0066ff]/30 rounded-full text-sm text-[#00d9ff]">
              🥽 AR/VR
            </span>
            <span className="px-4 py-2 bg-[#0066ff]/10 border border-[#0066ff]/30 rounded-full text-sm text-[#00d9ff]">
              🚀 Innovation
            </span>
          </div>
        </div>
      }
      imageContent={
        <div className="aspect-square bg-gradient-to-br from-[#0f1628] to-[#050a15] rounded-2xl border border-[#0066ff]/30 p-8 flex items-center justify-center overflow-hidden group-hover:border-[#00d9ff]/50 transition-all duration-500">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.3 }}
            className="text-9xl"
          >
            🎯
          </motion.div>
        </div>
      }
      imagePosition="left"
    />
  );
}
