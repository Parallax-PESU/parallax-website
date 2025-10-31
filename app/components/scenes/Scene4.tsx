'use client';

import StorySection from '../StorySection';
import { motion } from 'framer-motion';

const technologies = [
  { name: 'Unity', icon: '🎮', color: '#0066ff' },
  { name: 'Unreal', icon: '⚙️', color: '#00d9ff' },
  { name: 'AR/VR', icon: '🥽', color: '#ff0080' },
  { name: 'Blender', icon: '🎨', color: '#0066ff' },
  { name: 'C#/C++', icon: '💻', color: '#00d9ff' },
  { name: 'Meta Quest', icon: '🚀', color: '#ff0080' },
];

export default function Scene4() {
  return (
    <StorySection
      id="innovation"
      index={3}
      title="Build. Create. Ship."
      description={
        <div className="space-y-6">
          <p>
            From prototypes to published projects, we help you bring your ideas to life. Work with industry-standard 
            tools and frameworks used by top game studios worldwide.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-[#0f1628]/50 rounded-lg border border-[#0066ff]/20">
              <span className="text-2xl">�️</span>
              <div>
                <h4 className="text-sm font-semibold text-[#e0e0e0]">Learn by Building</h4>
                <p className="text-xs text-[#b0b0b0]">Hands-on experience with real projects</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-[#0f1628]/50 rounded-lg border border-[#00d9ff]/20">
              <span className="text-2xl">👥</span>
              <div>
                <h4 className="text-sm font-semibold text-[#e0e0e0]">Team Collaboration</h4>
                <p className="text-xs text-[#b0b0b0]">Work alongside talented developers & designers</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-[#0f1628]/50 rounded-lg border border-[#ff0080]/20">
              <span className="text-2xl">🏆</span>
              <div>
                <h4 className="text-sm font-semibold text-[#e0e0e0]">Showcase Your Work</h4>
                <p className="text-xs text-[#b0b0b0]">Publish games and build your portfolio</p>
              </div>
            </div>
          </div>
        </div>
      }
      imageContent={
        <div className="space-y-4 w-full">
          {/* Tech Stack */}
          <div className="bg-gradient-to-br from-[#0f1628] to-[#050a15] rounded-xl border border-[#0066ff]/30 p-6 hover:border-[#00d9ff]/50 transition-all duration-500">
            <h3 className="text-lg font-bold text-[#00d9ff] mb-4 text-center">Tech Stack</h3>
            <motion.div
              className="grid grid-cols-3 gap-3"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {technologies.map((tech, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col items-center gap-1"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  <span className="text-4xl">{tech.icon}</span>
                  <span className="text-xs text-[#b0b0b0] text-center">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Project Stats */}
          <div className="grid grid-cols-2 gap-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="p-4 bg-gradient-to-br from-[#0066ff]/10 to-[#050a15] rounded-xl border border-[#0066ff]/30 text-center"
            >
              <div className="text-3xl font-bold text-[#00d9ff] mb-1">15+</div>
              <div className="text-xs text-[#b0b0b0]">Active Projects</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="p-4 bg-gradient-to-br from-[#00d9ff]/10 to-[#050a15] rounded-xl border border-[#00d9ff]/30 text-center"
            >
              <div className="text-3xl font-bold text-[#00d9ff] mb-1">5+</div>
              <div className="text-xs text-[#b0b0b0]">Published Games</div>
            </motion.div>
          </div>
        </div>
      }
      imagePosition="left"
    />
  );
}
