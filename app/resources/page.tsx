import Navbar from '../components/Navbar';

export default function Resources() {
  return (
    <>
      <Navbar />
      <main className="bg-bg text-text min-h-screen flex flex-col items-center justify-center">
        <section className="max-w-2xl p-8 rounded-xl shadow-xl bg-[#181F2A]">
          <h1 className="text-4xl font-bold mb-4 text-neon">Resources</h1>
          <p className="text-secondary mb-6">
            Find tutorials, guides, and tools for AR/VR and Game Development.
          </p>
          {/* Add resource links or cards here */}
        </section>
      </main>
    </>
  );
}
