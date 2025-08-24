import Navbar from '../components/Navbar';

export default function Team() {
  return (
    <>
      <Navbar />
      <main className="bg-bg text-text min-h-screen flex flex-col items-center justify-center">
        <section className="max-w-2xl p-8 rounded-xl shadow-xl bg-[#181F2A]">
          <h1 className="text-4xl font-bold mb-4 text-neon">Our Team</h1>
          <p className="text-secondary mb-6">
            Meet the passionate members driving Parallax forward!
          </p>
          {/* Add team member cards here */}
        </section>
      </main>
    </>
  );
}
