'use client';

import StorySection from '../StorySection';
import { motion } from 'framer-motion';

export default function Scene5() {
  return (
    <StorySection
      id="impact"
      index={3}
      title="Creating Real Impact"
      description={
        <div className="space-y-6">
          <p>
            Our vision is to establish Parallax as the leading hub for game development and AR/VR innovation in India, 
            creating world-class talent and groundbreaking projects that make a real impact in the gaming and tech industries.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="p-4 bg-[#0f1628]/50 rounded-xl border border-[#0066ff]/20">
              <div className="text-3xl font-bold text-[#00d9ff] mb-1">5+</div>
              <div className="text-sm text-[#b0b0b0]">Projects Launched</div>
            </div>
            <div className="p-4 bg-[#0f1628]/50 rounded-xl border border-[#0066ff]/20">
              <div className="text-3xl font-bold text-[#00d9ff] mb-1">2+</div>
              <div className="text-sm text-[#b0b0b0]">Major Events</div>
            </div>
          </div>
        </div>
      }
      imageContent={
        <div className="aspect-square bg-gradient-to-br from-[#0f1628] to-[#050a15] rounded-2xl border border-[#0066ff]/30 p-8 flex items-center justify-center overflow-hidden group-hover:border-[#00d9ff]/50 transition-all duration-500">
          <motion.div
            whileHover={{ scale: 1.1, rotate: -5 }}
            transition={{ duration: 0.3 }}
            className="text-9xl"
          >
            🌟
          </motion.div>
        </div>
      }
      imagePosition="right"
    />
  );
}
