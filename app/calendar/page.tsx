import Navbar from '../components/Navbar';

export default function Calendar() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">Calendar of Events</h1>
        <p>Stay tuned for our upcoming events!</p>
      </main>
    </>
  );
}
