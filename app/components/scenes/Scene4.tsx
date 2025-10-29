'use client';

import StorySection from '../StorySection';
import { motion } from 'framer-motion';

export default function Scene4() {
  return (
    <StorySection
      index={3}
      title="Where Innovation Meets Creativity"
      description={
        <div className="space-y-6">
          <p>
            We believe in learning by doing. Our members work on real-world projects using cutting-edge technologies 
            like Unity, Unreal Engine, ARKit, ARCore, and Meta Quest SDK.
          </p>
          <ul className="space-y-3 text-[#b0b0b0]">
            <li className="flex items-start gap-3">
              <span className="text-[#00d9ff] text-xl">💡</span>
              <span>Hands-on workshops and mentorship programs</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#00d9ff] text-xl">🏆</span>
              <span>Participate in hackathons and game jams</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#00d9ff] text-xl">🤝</span>
              <span>Collaborate with industry professionals</span>
            </li>
          </ul>
        </div>
      }
      imageContent={
        <div className="aspect-video bg-gradient-to-br from-[#0f1628] to-[#050a15] rounded-2xl border border-[#0066ff]/30 p-8 flex items-center justify-center overflow-hidden group-hover:border-[#00d9ff]/50 transition-all duration-500">
          <motion.div
            className="grid grid-cols-3 gap-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {['⚙️', '🎮', '🥽', '🎨', '💻', '🚀'].map((icon, i) => (
              <motion.div
                key={i}
                className="text-5xl"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.3, rotate: 15 }}
              >
                {icon}
              </motion.div>
            ))}
          </motion.div>
        </div>
      }
      imagePosition="left"
    />
  );
}
