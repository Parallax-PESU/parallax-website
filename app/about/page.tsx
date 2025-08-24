import Navbar from '../components/Navbar';

export default function About() {
  return (
    <>
      <Navbar />
      <main className="bg-bg text-text min-h-screen flex flex-col items-center justify-center">
        <section className="max-w-2xl p-8 rounded-xl shadow-xl bg-[#181F2A]">
          <h1 className="text-4xl font-bold mb-4 text-neon">About Us</h1>
          <p className="text-secondary text-lg">
            Parallax is the AR/VR and Game Development club at PESU Electronic City Campus.<br />
            We foster creativity, innovation, and technical skills through workshops, hackathons, and collaborative projects.<br />
            Our mission is to empower students to explore immersive technologies and game creation.
          </p>
        </section>
      </main>
    </>
  );
}
