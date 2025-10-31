'use client';

import StorySection from '../StorySection';
import { motion } from 'framer-motion';

const values = [
  {
    title: 'Innovation',
    description: 'We push boundaries and explore cutting-edge technologies in gaming and immersive experiences.',
    emoji: '💡',
  },
  {
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and fostering a supportive community of creators.',
    emoji: '🤝',
  },
  {
    title: 'Learning',
    description: 'Continuous growth through workshops, mentorship, and hands-on project experience.',
    emoji: '📚',
  },
  {
    title: 'Impact',
    description: 'We aim to create meaningful experiences and contribute to the gaming industry.',
    emoji: '🌟',
  },
];

export default function Scene7() {
  return (
    <StorySection
      id="values"
      index={5}
      title="Our Core Values"
      description={
        <div className="space-y-6">
          <p>
            The principles that guide everything we do at Parallax. From fostering innovation to building 
            a collaborative community, our values shape how we learn, create, and make an impact.
          </p>
          <p className="text-[#00d9ff]">
            Join us in building the future of game development and immersive technologies!
          </p>
        </div>
      }
      imageContent={
        <div className="grid grid-cols-2 gap-4 w-full">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 rounded-xl bg-gradient-to-br from-[#0f1628] to-[#050a15] border border-[#0066ff]/20 hover:border-[#00d9ff]/50 transition-all duration-300"
            >
              <div className="text-4xl mb-3">{value.emoji}</div>
              <h3 className="text-xl font-bold text-[#00d9ff] mb-2">{value.title}</h3>
              <p className="text-sm text-[#b0b0b0] leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      }
      imagePosition="left"
    />
  );
}
