import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Calendar() {
  const upcomingEvents = [
    {
      date: 'Nov 15, 2024',
      title: 'Game Dev Workshop: Unity Basics',
      time: '6:00 PM - 8:00 PM',
      location: 'Lab Block, Room 201',
      category: 'Workshop',
      icon: '📚',
    },
    {
      date: 'Nov 22, 2024',
      title: 'AR/VR Showcase Demo',
      time: '4:00 PM - 6:00 PM',
      location: 'Main Auditorium',
      category: 'Demo',
      icon: '🥽',
    },
    {
      date: 'Dec 1-3, 2024',
      title: 'Winter Game Jam 2024',
      time: 'Full Day Event',
      location: 'Club Room & Online',
      category: 'Hackathon',
      icon: '🎮',
    },
    {
      date: 'Dec 10, 2024',
      title: 'Industry Talk: Career in Game Dev',
      time: '5:00 PM - 7:00 PM',
      location: 'Seminar Hall',
      category: 'Talk',
      icon: '🎤',
    },
    {
      date: 'Jan 5, 2025',
      title: 'Unreal Engine Masterclass',
      time: '6:00 PM - 9:00 PM',
      location: 'Lab Block, Room 201',
      category: 'Workshop',
      icon: '📚',
    },
    {
      date: 'Jan 15, 2025',
      title: 'VR Multiplayer Game Showcase',
      time: '4:00 PM - 6:00 PM',
      location: 'Main Auditorium',
      category: 'Exhibition',
      icon: '🎮',
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen flex justify-center snap-y snap-mandatory overflow-y-scroll scroll-smooth">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col py-8">
          {/* Header */}
          <section className="min-h-screen w-full flex flex-col justify-center text-center space-y-6 sm:space-y-8 lg:space-y-10 snap-start snap-always">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 sm:mb-10">
              <span className="bg-gradient-to-r from-[#0066ff] to-[#00d9ff] bg-clip-text text-transparent">
                Events Calendar
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-[#b0b0b0] mx-auto leading-relaxed px-4">
              Join us for workshops, game jams, demos, and industry talks. 
              Discover amazing events and connect with fellow game developers!
            </p>
          </section>

          {/* Upcoming Events */}
          <section className="min-h-screen w-full flex items-center snap-start snap-always py-16 sm:py-20 lg:py-24">
            <div className="w-full section-stack">
            <div className="text-center space-y-4 sm:space-y-6">
              <h2 className="text-4xl sm:text-5xl font-bold text-[#00d9ff] mb-5">Upcoming Events</h2>
              <p className="text-lg sm:text-xl text-[#b0b0b0]">Don&apos;t miss out on these exciting opportunities</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="group flex flex-col p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0f1628] to-[#050a15] border border-[#0066ff]/20 hover:border-[#00d9ff]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#0066ff]/20 hover:-translate-y-2"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-5xl">{event.icon}</span>
                    <span className="px-3 py-1 text-xs rounded-full bg-[#0066ff]/20 text-[#00d9ff] font-semibold border border-[#0066ff]/30">
                      {event.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-[#e0e0e0] mb-4 group-hover:text-[#00d9ff] transition-colors duration-300 line-clamp-2">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-3 text-[#b0b0b0] mb-6 flex-grow">
                    <p className="flex items-center gap-2 text-sm sm:text-base">
                      <span className="text-[#00d9ff] text-lg">📅</span> {event.date}
                    </p>
                    <p className="flex items-center gap-2 text-sm sm:text-base">
                      <span className="text-[#00d9ff] text-lg">⏰</span> {event.time}
                    </p>
                    <p className="flex items-center gap-2 text-sm sm:text-base">
                      <span className="text-[#00d9ff] text-lg">📍</span> {event.location}
                    </p>
                  </div>
                  
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-[#0066ff] to-[#00d9ff] text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-[#0066ff]/50 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
                    Register Now
                  </button>
                </div>
              ))}
            </div>
            </div>
          </section>

          {/* Google Calendar Embed */}
          <section className="min-h-screen w-full flex items-center snap-start snap-always py-16 sm:py-20 lg:py-24">
            <div className="w-full section-stack">
            <div className="text-center space-y-4 sm:space-y-6">
              <h2 className="text-4xl sm:text-5xl font-bold text-[#00d9ff] mb-5">Full Calendar</h2>
              <p className="text-lg sm:text-xl text-[#b0b0b0]">View all our events in one place</p>
            </div>
            <div className="rounded-2xl overflow-hidden border-2 border-[#0066ff]/30 bg-[#0f1628] p-6 sm:p-8 hover:border-[#00d9ff]/50 transition-all duration-500">
              <iframe
                src="https://calendar.google.com/calendar/embed?src=parallax%40pes.edu&ctz=Asia%2FKolkata"
                style={{ border: 0 }}
                width="100%"
                height="500"
                frameBorder="0"
                scrolling="no"
                title="Parallax Events Calendar"
                className="rounded-lg"
              />
            </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="min-h-screen w-full flex items-center justify-center snap-start snap-always py-16 sm:py-20 lg:py-24">
            <div className="p-12 sm:p-16 rounded-2xl bg-gradient-to-r from-[#0066ff]/10 to-[#00d9ff]/10 border border-[#0066ff]/30 text-center max-w-4xl w-full">
            <div className="text-6xl mb-8">🎉</div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Don&apos;t Miss Out!</h2>
            <p className="text-[#b0b0b0] text-base sm:text-lg mb-10 mx-auto leading-relaxed">
              Mark your calendars and join us for amazing events. Whether you&apos;re interested in game development, 
              AR/VR, or just want to connect with fellow enthusiasts, we have something for everyone!
            </p>
            </div>
          </section>
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </>
  );
}
