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
      <main className="min-h-screen">
        <div className="w-full mx-auto px-8 sm:px-6 lg:px-8 flex flex-col gap-16 sm:gap-20 lg:gap-24">
          {/* Hero Section */}
          <section className="text-center space-y-6 sm:space-y-8 lg:space-y-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 sm:mb-10">
              <span className="bg-gradient-to-r from-[#0066ff] to-[#00d9ff] bg-clip-text text-transparent">
                About Parallax
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-[#b0b0b0] w-full mx-auto leading-relaxed px-4">
              Parallax is the premier Game Development and AR/VR club at PESU Electronic City Campus. 
              Founded in 2024, we&apos;ve built a thriving community of passionate developers, designers, and creators 
              who are pushing the boundaries of immersive technology and game development.
            </p>
          </section>

          {/* Mission & Vision Section */}
          <section className="space-y-12 sm:space-y-14 lg:space-y-16">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
              <div className="p-12 lg:p-14 rounded-2xl bg-gradient-to-br from-[#0f1628] to-[#050a15] border border-[#0066ff]/20 hover:border-[#00d9ff]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#0066ff]/20">
                <div className="text-5xl mb-8">🎯</div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#00d9ff] mb-6">Our Mission</h2>
                <p className="text-[#b0b0b0] text-base sm:text-lg leading-relaxed">
                To empower students with the knowledge, skills, and community they need to excel in game development 
                and immersive technologies. We foster creativity, technical excellence, and innovation through 
                  collaborative projects, workshops, and industry connections.
                </p>
              </div>
              <div className="p-12 lg:p-14 rounded-2xl bg-gradient-to-br from-[#0f1628] to-[#050a15] border border-[#00d9ff]/20 hover:border-[#0066ff]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#00d9ff]/20">
                <div className="text-5xl mb-8">🚀</div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#00d9ff] mb-6">Our Vision</h2>
                <p className="text-[#b0b0b0] text-base sm:text-lg leading-relaxed">
                To establish Parallax as the leading hub for game development and AR/VR innovation in India, 
                creating world-class talent and groundbreaking projects that make a real impact in the gaming 
                  and tech industries.
                </p>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="space-y-12 sm:space-y-14 lg:space-y-16">
            <div className="text-center space-y-4 sm:space-y-6">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-[#0066ff] to-[#00d9ff] bg-clip-text text-transparent">
                  Our Core Values
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-[#b0b0b0] mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-10 lg:gap-12 mx-auto">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="p-10 lg:p-12 rounded-2xl bg-gradient-to-br from-[#0f1628] to-[#050a15] border border-[#0066ff]/20 hover:border-[#00d9ff]/50 transition-all duration-500 hover:shadow-xl hover:shadow-[#0066ff]/20 hover:-translate-y-1"
                >
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#00d9ff] mb-5">{value.title}</h3>
                  <p className="text-[#b0b0b0] text-base sm:text-lg leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Highlights Section */}
          <section className="space-y-10 sm:space-y-12 lg:space-y-14">
            <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
              <div className="p-10 lg:p-12 rounded-2xl bg-gradient-to-br from-[#0f1628] via-[#0066ff]/5 to-[#050a15] border border-[#0066ff]/30 text-center hover:border-[#0066ff]/60 transition-all duration-500 hover:shadow-2xl hover:shadow-[#0066ff]/20 hover:-translate-y-2">
                <div className="text-6xl lg:text-7xl mb-8">📚</div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#e0e0e0] mb-5">Workshops & Training</h3>
                <p className="text-[#b0b0b0] text-base sm:text-lg leading-relaxed">Learn from industry experts and mentors through regular workshops and training sessions.</p>
              </div>
              <div className="p-10 lg:p-12 rounded-2xl bg-gradient-to-br from-[#0f1628] via-[#00d9ff]/5 to-[#050a15] border border-[#00d9ff]/30 text-center hover:border-[#00d9ff]/60 transition-all duration-500 hover:shadow-2xl hover:shadow-[#00d9ff]/20 hover:-translate-y-2">
                <div className="text-6xl lg:text-7xl mb-8">🎮</div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#e0e0e0] mb-5">Game Jams & Hackathons</h3>
                <p className="text-[#b0b0b0] text-base sm:text-lg leading-relaxed">Participate in exciting game jams and hackathons to showcase your skills and creativity.</p>
              </div>
              <div className="p-10 lg:p-12 rounded-2xl bg-gradient-to-br from-[#0f1628] via-[#ff0080]/5 to-[#050a15] border border-[#ff0080]/30 text-center hover:border-[#ff0080]/60 transition-all duration-500 hover:shadow-2xl hover:shadow-[#ff0080]/20 hover:-translate-y-2">
                <div className="text-6xl lg:text-7xl mb-8">🤝</div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#e0e0e0] mb-5">Industry Connections</h3>
                <p className="text-[#b0b0b0] text-base sm:text-lg leading-relaxed">Network with gaming studios, AR/VR companies, and industry professionals.</p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="space-y-8 sm:space-y-10 lg:space-y-12">
            <div className="text-center p-12 sm:p-14 lg:p-16 rounded-2xl bg-gradient-to-r from-[#0066ff]/10 to-[#00d9ff]/10 border border-[#0066ff]/30">
              <h2 className="text-4xl sm:text-5xl font-bold mb-8">Ready to Join?</h2>
              <p className="text-lg sm:text-xl text-[#b0b0b0] mb-10  mx-auto leading-relaxed">
                Join our vibrant community and start your journey in game development and immersive technologies!
              </p>
              <a href="/contact" className="inline-block px-10 py-4 bg-gradient-to-r from-[#0066ff] to-[#00d9ff] text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-[#0066ff]/50 transition-all duration-300 transform hover:scale-105 text-lg">
                Join Parallax Today
              </a>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#0066ff]/20 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-[#050a15]/50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#b0b0b0] text-sm sm:text-base">
            © 2024 Parallax Club - PESU Electronic City Campus. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
