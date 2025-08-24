import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-neon text-bg shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-8">
        <span className="font-extrabold text-2xl tracking-wide">Parallax</span>
        <div className="space-x-6">
          <Link href="/" className="hover:text-accent font-semibold transition">Home</Link>
          <Link href="/about" className="hover:text-accent font-semibold transition">About</Link>
          <Link href="/calendar" className="hover:text-accent font-semibold transition">Calendar</Link>
          <Link href="/team" className="hover:text-accent font-semibold transition">Team</Link>
          <Link href="/resources" className="hover:text-accent font-semibold transition">Resources</Link>
          <Link href="/contact" className="hover:text-accent font-semibold transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
