import Navbar from '../components/Navbar';

export default function About() {
  const values = [
    {
      title: 'Innovation',
      description: 'We push boundaries and explore cutting-edge technologies in gaming and immersive experiences.',
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and fostering a supportive community of creators.',
    },
    {
      title: 'Learning',
      description: 'Continuous growth through workshops, mentorship, and hands-on project experience.',
    },
    {
      title: 'Impact',
      description: 'We aim to create meaningful experiences and contribute to the gaming industry.',
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen py-24 sm:py-32 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="mb-24 sm:mb-32 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-[#0066ff] to-[#00d9ff] bg-clip-text text-transparent">
                About Parallax
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-[#b0b0b0] max-w-4xl mx-auto leading-relaxed px-4">
              Parallax is the premier Game Development and AR/VR club at PESU Electronic City Campus. 
              Founded in 2024, we've built a thriving community of passionate developers, designers, and creators 
              who are pushing the boundaries of immersive technology and game development.
            </p>
          </div>

          {/* Mission & Vision Section */}
          <div className="grid lg:grid-cols-2 gap-10 mb-28">
            <div className="p-10 sm:p-12 rounded-2xl bg-gradient-to-br from-[#0f1628] to-[#050a15] border border-[#0066ff]/20 hover:border-[#00d9ff]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#0066ff]/20">
              <div className="text-4xl mb-6">🎯</div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#00d9ff] mb-6">Our Mission</h2>
              <p className="text-[#b0b0b0] text-base sm:text-lg leading-relaxed">
                To empower students with the knowledge, skills, and community they need to excel in game development 
                and immersive technologies. We foster creativity, technical excellence, and innovation through 
                collaborative projects, workshops, and industry connections.
              </p>
            </div>
            <div className="p-10 sm:p-12 rounded-2xl bg-gradient-to-br from-[#0f1628] to-[#050a15] border border-[#00d9ff]/20 hover:border-[#0066ff]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#00d9ff]/20">
              <div className="text-4xl mb-6">🚀</div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#00d9ff] mb-6">Our Vision</h2>
              <p className="text-[#b0b0b0] text-base sm:text-lg leading-relaxed">
                To establish Parallax as the leading hub for game development and AR/VR innovation in India, 
                creating world-class talent and groundbreaking projects that make a real impact in the gaming 
                and tech industries.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-28">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-[#0066ff] to-[#00d9ff] bg-clip-text text-transparent">
                  Our Core Values
                </span>
              </h2>
              <p className="text-lg text-[#b0b0b0] max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#0f1628] to-[#050a15] border border-[#0066ff]/20 hover:border-[#00d9ff]/50 transition-all duration-500 hover:shadow-xl hover:shadow-[#0066ff]/20 hover:-translate-y-1"
                >
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#00d9ff] mb-4">{value.title}</h3>
                  <p className="text-[#b0b0b0] text-base sm:text-lg leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-28">
            <div className="p-10 rounded-2xl bg-gradient-to-br from-[#0f1628] via-[#0066ff]/5 to-[#050a15] border border-[#0066ff]/30 text-center hover:border-[#0066ff]/60 transition-all duration-500 hover:shadow-2xl hover:shadow-[#0066ff]/20 hover:-translate-y-2">
              <div className="text-6xl mb-6">📚</div>
              <h3 className="text-2xl font-bold text-[#e0e0e0] mb-4">Workshops & Training</h3>
              <p className="text-[#b0b0b0] leading-relaxed">Learn from industry experts and mentors through regular workshops and training sessions.</p>
            </div>
            <div className="p-10 rounded-2xl bg-gradient-to-br from-[#0f1628] via-[#00d9ff]/5 to-[#050a15] border border-[#00d9ff]/30 text-center hover:border-[#00d9ff]/60 transition-all duration-500 hover:shadow-2xl hover:shadow-[#00d9ff]/20 hover:-translate-y-2">
              <div className="text-6xl mb-6">🎮</div>
              <h3 className="text-2xl font-bold text-[#e0e0e0] mb-4">Game Jams & Hackathons</h3>
              <p className="text-[#b0b0b0] leading-relaxed">Participate in exciting game jams and hackathons to showcase your skills and creativity.</p>
            </div>
            <div className="p-10 rounded-2xl bg-gradient-to-br from-[#0f1628] via-[#ff0080]/5 to-[#050a15] border border-[#ff0080]/30 text-center hover:border-[#ff0080]/60 transition-all duration-500 hover:shadow-2xl hover:shadow-[#ff0080]/20 hover:-translate-y-2">
              <div className="text-6xl mb-6">🤝</div>
              <h3 className="text-2xl font-bold text-[#e0e0e0] mb-4">Industry Connections</h3>
              <p className="text-[#b0b0b0] leading-relaxed">Network with gaming studios, AR/VR companies, and industry professionals.</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center p-12 sm:p-16 rounded-2xl bg-gradient-to-r from-[#0066ff]/10 to-[#00d9ff]/10 border border-[#0066ff]/30">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Join?</h2>
            <p className="text-base sm:text-lg text-[#b0b0b0] mb-10 max-w-2xl mx-auto">
              Join our vibrant community and start your journey in game development and immersive technologies!
            </p>
            <a href="/contact" className="inline-block px-10 py-4 bg-gradient-to-r from-[#0066ff] to-[#00d9ff] text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-[#0066ff]/50 transition-all duration-300 transform hover:scale-105 text-lg">
              Join Parallax Today
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
