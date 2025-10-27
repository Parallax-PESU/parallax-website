import Navbar from '../components/Navbar';

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
      <main className="min-h-screen py-24 sm:py-32 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-24 sm:mb-32 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-[#0066ff] to-[#00d9ff] bg-clip-text text-transparent">
                Events Calendar
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-[#b0b0b0] max-w-3xl mx-auto leading-relaxed px-4">
              Join us for workshops, game jams, demos, and industry talks. 
              Discover amazing events and connect with fellow game developers!
            </p>
          </div>

          {/* Upcoming Events */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#00d9ff] mb-4">Upcoming Events</h2>
              <p className="text-lg text-[#b0b0b0]">Don't miss out on these exciting opportunities</p>
            </div>
            <div className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="group p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#0f1628] to-[#050a15] border border-[#0066ff]/20 hover:border-[#00d9ff]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#0066ff]/20 hover:-translate-y-1"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-5">
                        <span className="text-4xl">{event.icon}</span>
                        <span className="px-4 py-1.5 text-sm rounded-full bg-[#0066ff]/20 text-[#00d9ff] font-semibold border border-[#0066ff]/30">
                          {event.category}
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#e0e0e0] mb-5 group-hover:text-[#00d9ff] transition-colors duration-300">
                        {event.title}
                      </h3>
                      <div className="space-y-3 text-[#b0b0b0]">
                        <p className="flex items-center gap-3 text-base sm:text-lg">
                          <span className="text-[#00d9ff] text-xl">📅</span> {event.date}
                        </p>
                        <p className="flex items-center gap-3 text-base sm:text-lg">
                          <span className="text-[#00d9ff] text-xl">⏰</span> {event.time}
                        </p>
                        <p className="flex items-center gap-3 text-base sm:text-lg">
                          <span className="text-[#00d9ff] text-xl">📍</span> {event.location}
                        </p>
                      </div>
                    </div>
                    <button className="px-8 py-3.5 bg-gradient-to-r from-[#0066ff] to-[#00d9ff] text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-[#0066ff]/50 transition-all duration-300 transform hover:scale-105 whitespace-nowrap text-lg">
                      Register Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Google Calendar Embed */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#00d9ff] mb-4">Full Calendar</h2>
              <p className="text-lg text-[#b0b0b0]">View all our events in one place</p>
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

          {/* Call to Action */}
          <div className="p-12 sm:p-16 rounded-2xl bg-gradient-to-r from-[#0066ff]/10 to-[#00d9ff]/10 border border-[#0066ff]/30 text-center">
            <div className="text-6xl mb-8">🎉</div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Don't Miss Out!</h2>
            <p className="text-[#b0b0b0] text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Mark your calendars and join us for amazing events. Whether you're interested in game development, 
              AR/VR, or just want to connect with fellow enthusiasts, we have something for everyone!
            </p>
            <a href="/contact" className="inline-block px-10 py-4 bg-gradient-to-r from-[#0066ff] to-[#00d9ff] text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-[#0066ff]/50 transition-all duration-300 transform hover:scale-105 text-lg">
              Subscribe to Updates
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
