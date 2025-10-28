'use client';

import { type CSSProperties, useEffect, useMemo, useState } from 'react';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const letters = useMemo(() => 'PARALLAX'.split(''), []);
  const [letterIndex, setLetterIndex] = useState(0);
  const [hasFinished, setHasFinished] = useState(false);
  const particles = useMemo(
    () =>
      Array.from({ length: 28 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 3,
        duration: 4 + Math.random() * 4,
        size: 2 + Math.random() * 3,
      })),
    [],
  );

  useEffect(() => {
    if (letterIndex < letters.length) {
      const timer = setTimeout(() => {
        setLetterIndex((prev) => prev + 1);
      }, 140);
      return () => clearTimeout(timer);
    }
  }, [letterIndex, letters.length]);

  useEffect(() => {
    if (letterIndex === letters.length && !hasFinished) {
      const finishTimer = setTimeout(() => setHasFinished(true), 360);
      const completeTimer = setTimeout(() => onComplete(), 1600);
      return () => {
        clearTimeout(finishTimer);
        clearTimeout(completeTimer);
      };
    }
  }, [letterIndex, letters.length, hasFinished, onComplete]);

  const progress = Math.min(letterIndex / letters.length, 1);

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {/* Ambient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0b1530_0%,transparent_70%)] opacity-90" />
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#00d9ff]/20 shadow-[0_0_120px_rgba(0,102,255,0.25)] animate-orbit-slow" />
        <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#0045ff]/25 via-transparent to-[#00d9ff]/15 blur-3xl animate-pulse-soft" />
        <div className="absolute left-1/2 top-[12%] h-32 w-[480px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#0066ff]/40 via-transparent to-[#00d9ff]/40 blur-3xl" />
        {particles.map((particle, index) => {
          const particleStyle: CSSProperties & { '--duration'?: string } = {
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animationDelay: `${particle.delay}s`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          };
          particleStyle['--duration'] = `${particle.duration}s`;

          return (
            <span
              key={`particle-${index}`}
              className="absolute rounded-full bg-[#00d9ff]/70 shadow-[0_0_14px_rgba(0,217,255,0.6)] animate-particle-float"
              style={particleStyle}
            />
          );
        })}
      </div>

      {/* Core content */}
      <div className="relative flex flex-col items-center gap-10 px-6 text-center">
        <div className="relative">
          <div
            className={`pointer-events-none absolute -inset-10 rounded-[40px] border border-[#00d9ff]/10 bg-[#041024]/40 blur-3xl transition-opacity duration-700 ${
              hasFinished ? 'opacity-100' : 'opacity-0'
            }`}
          />

          <div className="relative flex gap-2 sm:gap-4 md:gap-6">
            {letters.map((letter, index) => {
              const isVisible = index < letterIndex;
              return (
                <span
                  key={`${letter}-${index}`}
                  className={`relative text-4xl sm:text-6xl md:text-8xl xl:text-9xl font-black uppercase tracking-[0.35em] transition-all duration-500 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-50'
                  }`}
                  style={{
                    background: 'linear-gradient(135deg,#a9f6ff 0%,#00d9ff 45%,#0066ff 100%)',
                    backgroundSize: '220% 220%',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    WebkitTextStroke: isVisible ? '1px rgba(0,217,255,0.45)' : '1px rgba(0,217,255,0)',
                    filter: isVisible ? 'drop-shadow(0 0 30px rgba(0,102,255,0.45))' : 'none',
                    animation: isVisible ? `gradientShift 4s ease-in-out infinite` : 'none',
                    animationDelay: `${index * 0.12}s`,
                  }}
                >
                  {letter}
                  <span
                    className={`absolute -bottom-4 left-1/2 h-[18px] w-[140%] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-[#00d9ff]/30 to-transparent blur-lg transition-opacity duration-700 ${
                      hasFinished ? 'opacity-80' : 'opacity-0'
                    }`}
                  />
                </span>
              );
            })}
          </div>
        </div>

        {/* Smooth underline */}
        <div className="relative w-48 sm:w-64 md:w-72 h-[4px] rounded-full bg-[#061935]/80 overflow-hidden">
          <span
            className="absolute inset-0 origin-left bg-gradient-to-r from-[#003cff] via-[#00d9ff] to-[#00a3ff] transition-transform duration-700 ease-out"
            style={{ transform: `scaleX(${progress})` }}
          />
          <span
            className={`absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(0,217,255,0.6),transparent)] opacity-0 transition-opacity duration-700 ${
              hasFinished ? 'opacity-100 animate-underline-glow' : ''
            }`}
          />
          <span
            className={`absolute inset-x-0 -top-[10px] h-[18px] rounded-full bg-[radial-gradient(circle,#00d9ff,transparent_60%)] opacity-0 transition-opacity duration-500 ${
              hasFinished ? 'opacity-60' : ''
            }`}
          />
        </div>

        {/* Progress meter */}
        <div className="relative flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-[#89a2d0]/80">
          <span className="h-[1px] w-6 bg-[#0b1d3f]" />
          <span>{Math.round(progress * 100).toString().padStart(3, '0')}%</span>
          <span className="h-[1px] w-6 bg-[#0b1d3f]" />
        </div>

        {/* Scroll indicator */}
        <div
          className={`flex flex-col items-center gap-3 transition-all duration-700 ${
            hasFinished ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-[#00d9ff] text-sm font-semibold tracking-[0.35em] uppercase">Scroll to explore</p>
          <div className="flex items-center justify-center rounded-full border border-[#00d9ff]/40 bg-[#041024]/80 p-3 shadow-[0_0_18px_rgba(0,102,255,0.45)]">
            <svg className="h-6 w-6 text-[#00d9ff]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 5v14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M18 13l-6 6-6-6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes orbit-slow {
          0% {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes particle-float {
          0%,
          100% {
            opacity: 0.25;
            transform: translateY(0px) scale(1);
          }
          50% {
            opacity: 0.85;
            transform: translateY(-12px) scale(1.1);
          }
        }

        @keyframes pulse-soft {
          0%,
          100% {
            opacity: 0.4;
            transform: translate(-50%, -50%) scale(0.95);
          }
          50% {
            opacity: 0.9;
            transform: translate(-50%, -50%) scale(1.05);
          }
        }

        @keyframes underline-glow {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-orbit-slow {
          animation: orbit-slow 24s linear infinite;
        }

        .animate-particle-float {
          animation: particle-float var(--duration, 5s) ease-in-out infinite;
        }

        .animate-pulse-soft {
          animation: pulse-soft 9s ease-in-out infinite;
        }

        .animate-underline-glow {
          animation: underline-glow 2.4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
