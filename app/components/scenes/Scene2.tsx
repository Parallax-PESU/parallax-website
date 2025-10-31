'use client';

import StorySection from '../StorySection';
import { motion } from 'framer-motion';

const highlights = [
  {
    title: 'Core Values',
    items: ['Innovation', 'Collaboration', 'Learning', 'Impact'],
    emoji: '💎',
  },
  {
    title: 'What We Offer',
    items: ['Workshops & Training', 'Game Jams & Hackathons', 'Industry Connections'],
    emoji: '🎯',
  },
  {
    title: 'Tech Stack',
    items: ['Unity & Unreal', 'AR/VR (Meta Quest)', 'Blender & C++'],
    emoji: '🛠️',
  },
];

export default function Scene2() {
  return (
    <StorySection
      id="mission"
      index={1}
      title="Build. Learn. Innovate."
      description={
        <div className="space-y-6">
          <p className="text-lg">
            <strong className="text-[#00d9ff]">Our Mission:</strong> To empower students with the knowledge, skills, and community 
            they need to excel in game development and immersive technologies.
          </p>
          <p>
            We foster creativity, technical excellence, and innovation through collaborative projects, workshops, 
            and industry connections. From prototypes to published games, we help you bring your ideas to life.
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
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
        <div className="space-y-5 w-full min-h-[400px]">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ scale: 1.02, x: 5 }}
              className="p-6 rounded-xl bg-gradient-to-br from-[#0f1628] to-[#050a15] border border-[#0066ff]/20 hover:border-[#00d9ff]/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="text-5xl">{highlight.emoji}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#00d9ff] mb-3">{highlight.title}</h3>
                  <ul className="space-y-2">
                    {highlight.items.map((item, i) => (
                      <li key={i} className="text-sm text-[#b0b0b0] flex items-center gap-2">
                        <span className="text-[#00d9ff]">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="p-6 bg-gradient-to-br from-[#0066ff]/10 to-[#050a15] rounded-xl border border-[#0066ff]/30 text-center hover:border-[#0066ff]/50 transition-all duration-300"
            >
              <div className="text-4xl font-bold text-[#00d9ff] mb-2">15+</div>
              <div className="text-sm text-[#b0b0b0]">Active Projects</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="p-6 bg-gradient-to-br from-[#00d9ff]/10 to-[#050a15] rounded-xl border border-[#00d9ff]/30 text-center hover:border-[#00d9ff]/50 transition-all duration-300"
            >
              <div className="text-4xl font-bold text-[#00d9ff] mb-2">5+</div>
              <div className="text-sm text-[#b0b0b0]">Published Games</div>
            </motion.div>
          </div>
        </div>
      }
      imagePosition="left"
    />
  );
}
