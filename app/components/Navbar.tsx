import Link from 'next/link';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Calendar of Events', path: '/calendar' },
  { name: 'Team', path: '/team' },
  { name: 'Resources', path: '/resources' },
  { name: 'Contact Us', path: '/contact' },
];

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-6 justify-center">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link href={item.path} className="hover:underline">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
