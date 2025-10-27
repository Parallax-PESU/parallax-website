'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Calendar', href: '/calendar' },
    { name: 'Team', href: '/team' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#050a15]/80 backdrop-blur-lg border-b border-[#0066ff]/30 shadow-lg">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-[#0066ff] to-[#00d9ff] rounded-lg flex items-center justify-center font-bold text-white group-hover:shadow-lg transition-all duration-300 glow">
              ◆
            </div>
            <span className="font-extrabold text-2xl bg-gradient-to-r from-[#0066ff] to-[#00d9ff] bg-clip-text text-transparent">
              Parallax
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[#e0e0e0] font-semibold hover:text-[#00d9ff] transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0066ff] to-[#00d9ff] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/contact" className="px-6 py-2.5 bg-gradient-to-r from-[#0066ff] to-[#00d9ff] text-white font-bold rounded-lg hover:shadow-lg hover:shadow-[#0066ff]/50 transition-all duration-300 transform hover:scale-105">
              Join Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col space-y-1 w-8 h-8 justify-center items-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={`w-6 h-0.5 bg-[#00d9ff] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-[#00d9ff] transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-[#00d9ff] transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-[#0066ff]/30 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-[#e0e0e0] hover:text-[#00d9ff] hover:bg-[#0f1628] rounded-lg transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/contact" className="block px-4 py-2 bg-gradient-to-r from-[#0066ff] to-[#00d9ff] text-white font-bold rounded-lg text-center mt-4">
              Join Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
