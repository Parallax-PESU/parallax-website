'use client';

import { motion } from 'framer-motion';

interface StatCardProps {
  number: string;
  label: string;
  index: number;
}

export default function StatCard({ number, label, index }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#0066ff]/20 to-[#00d9ff]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
      
      <div className="relative p-8 rounded-2xl bg-gradient-to-br from-[#0f1628]/80 to-[#050a15]/80 border border-[#0066ff]/30 backdrop-blur-sm group-hover:border-[#00d9ff]/50 transition-all duration-300">
        <div className="text-center">
          <motion.div
            className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-[#0066ff] to-[#00d9ff] bg-clip-text text-transparent mb-3"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            {number}
          </motion.div>
          <p className="text-[#b0b0b0] font-semibold text-sm sm:text-base uppercase tracking-wide">
            {label}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
