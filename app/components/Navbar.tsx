'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import logo from '../assets/logo.svg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Calendar', href: '/calendar' },
    { name: 'Team', href: '/team' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' },
  ];

  const getScale = (index: number) => {
    if (hoveredIndex === null) return 1;
    if (hoveredIndex === index) return 1.2;
    const distance = Math.abs(hoveredIndex - index);
    if (distance === 1) return 1.1;
    return 1;
  };

  return (
    <>
      {/* Logo Toggle Button - Always Visible */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 left-6 z-[60] group cursor-pointer backdrop-blur-md p-3 rounded-lg hover:bg-[#0066ff]/10 transition-all duration-300"
      >
        <div className="w-12 h-12 relative hover:scale-110 transition-transform duration-300">
          <Image
            src={logo}
            alt="Parallax Logo"
            fill
            className="object-contain filter brightness-0 invert group-hover:drop-shadow-[0_0_8px_rgba(0,217,255,0.8)]"
          />
        </div>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <nav
        className={`fixed top-50 left-6 h-full w-64 backdrop-blur-lg border-r border-[#0066ff]/20 shadow-2xl z-50 transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-8">
          {/* Spacer for logo */}
          <div className="mb-20 mt-20"></div>

          {/* Navigation Items */}
          <div className="flex flex-col gap-6">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[#e0e0e0] text-xl font-semibold hover:text-[#00d9ff] transition-all duration-300 relative group py-2 pl-2"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setIsOpen(false)}
                style={{
                  transform: `scale(${getScale(index)})`,
                  transformOrigin: 'left center',
                  transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), color 0.3s ease',
                }}
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-[#0066ff] via-[#0088ff] to-[#00d9ff] group-hover:w-full max-w-4xl transition-all duration-500 ease-out shadow-[0_0_8px_rgba(0,217,255,0.5)]" />
                <span className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-[#0066ff] via-[#0088ff] to-[#00d9ff] blur-sm group-hover:w-full transition-all duration-500 ease-out opacity-50" />
              </Link>
            ))}
          </div>

        </div>
      </nav>
    </>
  );
}
