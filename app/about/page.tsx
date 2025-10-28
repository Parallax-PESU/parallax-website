import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
      <main className="min-h-screen flex justify-center snap-y snap-mandatory overflow-y-scroll scroll-smooth">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col py-8">
          {/* Hero Section */}
          <section className="min-h-screen w-full flex flex-col justify-center text-center space-y-6 sm:space-y-8 lg:space-y-10 snap-start snap-always">
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
          <section className="min-h-screen w-full flex items-center snap-start snap-always py-16 sm:py-20 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 w-full">
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
          <section className="min-h-screen w-full flex items-center snap-start snap-always py-16 sm:py-20 lg:py-24">
            <div className="w-full section-stack">
            <div className="text-center space-y-4 sm:space-y-6">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
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
            </div>
          </section>

          {/* Highlights Section */}
          <section className="min-h-screen w-full flex items-center snap-start snap-always py-16 sm:py-20 lg:py-24">
            <div className="grid md:grid-cols-3 gap-8 lg:gap-10 w-full">
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
          <section className="min-h-screen w-full flex items-center justify-center snap-start snap-always py-16 sm:py-20 lg:py-24">
            <div className="text-center p-12 sm:p-14 lg:p-16 rounded-2xl bg-gradient-to-r from-[#0066ff]/10 to-[#00d9ff]/10 border border-[#0066ff]/30 max-w-4xl w-full">
              <h2 className="text-4xl sm:text-5xl font-bold mb-8">Ready to Learn More?</h2>
              <p className="text-lg sm:text-xl text-[#b0b0b0] mb-10  mx-auto leading-relaxed">
                Explore our community and discover the opportunities in game development and immersive technologies!
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

