'use client';

import { useEffect, useState } from 'react';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1000; // 1.5 seconds
    const steps = 60;
    const increment = 100 / steps;
    const interval = duration / steps;

    const timer = setInterval(() => {
      setProgress(prev => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => onComplete(), 300);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[#0a0f1f]">
      {/* Simple animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-[#0066ff]/10 via-transparent to-transparent" />
      </div>

      {/* Loading content */}
      <div className="relative flex flex-col items-center gap-8 px-6">
        {/* Animated logo/icon */}
        <div className="relative">
          <div className="w-20 h-20 rounded-full border-4 border-[#0066ff]/20 border-t-[#00d9ff] animate-spin" />
          <div className="absolute inset-0 w-20 h-20 rounded-full bg-gradient-to-tr from-[#0066ff]/20 to-transparent blur-xl animate-pulse" />
        </div>

        {/* Loading text */}
        <div className="text-center space-y-3">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-[#0066ff] via-[#00d9ff] to-[#0066ff] bg-clip-text text-transparent animate-pulse">
            Loading Experience
          </h2>
          
          {/* Progress bar */}
          <div className="w-64 h-1.5 bg-[#0066ff]/20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#0066ff] to-[#00d9ff] rounded-full transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          {/* Percentage */}
          <p className="text-sm text-[#00d9ff] font-mono">
            {Math.round(progress)}%
          </p>
        </div>
      </div>
    </div>
  );
}
