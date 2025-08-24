import Navbar from './components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-bg text-text min-h-screen flex flex-col items-center justify-center">
        <section className="max-w-2xl text-center p-8 rounded-xl shadow-xl bg-[#181F2A]">
          <h1 className="text-5xl font-extrabold mb-6 text-neon drop-shadow-lg">Parallax Club</h1>
          <p className="text-lg mb-8 text-secondary">
            Welcome to Parallax, the AR/VR and GameDev club of PESU Electronic City Campus.<br />
            Explore immersive tech, build games, and join a vibrant community!
          </p>
          <a href="/contact" className="bg-accent text-bg px-6 py-3 rounded-full font-bold text-lg hover:bg-neon hover:text-accent transition">
            Join Us
          </a>
        </section>
      </main>
    </>
  );
}
