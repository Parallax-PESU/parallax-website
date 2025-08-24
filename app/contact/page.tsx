import Navbar from '../components/Navbar';

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="bg-bg text-text min-h-screen flex flex-col items-center justify-center">
        <section className="max-w-2xl p-8 rounded-xl shadow-xl bg-[#181F2A]">
          <h1 className="text-4xl font-bold mb-4 text-neon">Contact Us</h1>
          <p className="text-secondary mb-6">
            Reach out to us for collaborations, queries, or to join the club!
          </p>
          {/* Add contact form or email/social links here */}
        </section>
      </main>
    </>
  );
}
