import Image from "next/image";
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to Parallax Club</h1>
        <p className="mb-8">Explore our club, events, team, resources, and more!</p>
      </main>
    </>
  );
}
