'use client';

import StorySection from '../StorySection';
import { motion } from 'framer-motion';

const highlights = [
  {
    title: 'Workshops & Training',
    description: 'Learn from industry experts and mentors through regular workshops and training sessions.',
    emoji: '📚',
    color: 'from-[#0066ff]/5 via-[#0066ff]/10',
    borderColor: 'border-[#0066ff]/30 hover:border-[#0066ff]/60',
    shadowColor: 'hover:shadow-[#0066ff]/20',
  },
  {
    title: 'Game Jams & Hackathons',
    description: 'Participate in exciting game jams and hackathons to showcase your skills and creativity.',
    emoji: '🎮',
    color: 'from-[#00d9ff]/5 via-[#00d9ff]/10',
    borderColor: 'border-[#00d9ff]/30 hover:border-[#00d9ff]/60',
    shadowColor: 'hover:shadow-[#00d9ff]/20',
  },
  {
    title: 'Industry Connections',
    description: 'Network with gaming studios, AR/VR companies, and industry professionals.',
    emoji: '🤝',
    color: 'from-[#ff0080]/5 via-[#ff0080]/10',
    borderColor: 'border-[#ff0080]/30 hover:border-[#ff0080]/60',
    shadowColor: 'hover:shadow-[#ff0080]/20',
  },
];

export default function Scene8() {
  return (
    <StorySection
      id="highlights"
      index={6}
      title="What We Offer"
      description={
        <div className="space-y-6">
          <p>
            At Parallax, we provide a comprehensive ecosystem for aspiring game developers and AR/VR enthusiasts. 
            From hands-on learning to industry exposure, we&apos;ve got everything you need to succeed.
          </p>
          <ul className="space-y-3 text-[#b0b0b0]">
            <li className="flex items-start gap-3">
              <span className="text-[#00d9ff] text-xl">✨</span>
              <span>Regular workshops with industry experts</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#00d9ff] text-xl">🏆</span>
              <span>Competitive events and showcases</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#00d9ff] text-xl">🌐</span>
              <span>Professional networking opportunities</span>
            </li>
          </ul>
        </div>
      }
      imageContent={
        <div className="grid grid-cols-1 gap-4 w-full">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ scale: 1.03, x: 5 }}
              className={`p-6 rounded-xl bg-gradient-to-br ${highlight.color} to-[#050a15] border ${highlight.borderColor} ${highlight.shadowColor} hover:shadow-xl transition-all duration-300`}
            >
              <div className="flex items-start gap-4">
                <div className="text-5xl">{highlight.emoji}</div>
                <div>
                  <h3 className="text-xl font-bold text-[#e0e0e0] mb-2">{highlight.title}</h3>
                  <p className="text-sm text-[#b0b0b0] leading-relaxed">{highlight.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      }
      imagePosition="right"
    />
  );
}
