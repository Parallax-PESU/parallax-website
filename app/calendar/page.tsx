import Navbar from '../components/Navbar';

export default function Calendar() {
  return (
    <>
      <Navbar />
      <main className="bg-bg text-text min-h-screen flex flex-col items-center justify-center">
        <section className="max-w-2xl p-8 rounded-xl shadow-xl bg-[#181F2A]">
          <h1 className="text-4xl font-bold mb-4 text-neon">Calendar of Events</h1>
          <p className="text-secondary mb-6">
            Stay tuned for our upcoming events, workshops, and hackathons!
          </p>
          <div className="rounded-lg overflow-hidden border-2 border-neon">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=parallax%40pes.edu&ctz=Asia%2FKolkata"
              style={{ border: 0 }}
              width="100%"
              height="400"
              frameBorder="0"
              scrolling="no"
              title="Parallax Events Calendar"
            />
          </div>
        </section>
      </main>
    </>
  );
}
