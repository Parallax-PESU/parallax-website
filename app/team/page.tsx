import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Team() {
  const leaders = [
    {
      name: 'A',
      role: 'President',
      expertise: 'Game Design & Leadership',
      image: '👨‍💼',
    },
    {
      name: 'B',
      role: 'Vice President',
      expertise: 'AR/VR Development',
      image: '👩‍💼',
    },
    {
      name: 'C',
      role: 'Tech Lead',
      expertise: 'Engine Development',
      image: '👨‍💻',
    },
    {
      name: 'D',
      role: 'Design Lead',
      expertise: 'UI/UX & Art',
      image: '👩‍🎨',
    },
  ];

  const members = [
    { name: 'A', role: 'Game Developer' },
    { name: 'B', role: '3D Artist' },
    { name: 'C', role: 'AR Developer' },
    { name: 'D', role: 'Gameplay Programmer' },
    { name: 'E', role: 'Graphics Engineer' },
    { name: 'F', role: 'Sound Designer' },
    { name: 'G', role: 'VR Developer' },
    { name: 'H', role: 'UI Designer' },
  ];

  return (
    <>
      <Navbar />
      <main className="flex justify-center snap-y snap-mandatory overflow-y-scroll scroll-smooth">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <section className="min-h-screen w-full flex items-center snap-start snap-always py-16 sm:py-20 lg:py-24">
            <div className="w-full text-center space-y-6 sm:space-y-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                <span className="bg-gradient-to-r from-[#0066ff] to-[#00d9ff] bg-clip-text text-transparent">
                  Meet Our Team
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-[#b0b0b0] mx-auto leading-relaxed">
                Our passionate team of developers, designers, and creators working together to push the boundaries 
                of game development and immersive technology.
              </p>
            </div>
          </section>

          {/* Leadership */}
          <section className="min-h-screen w-full flex items-center snap-start snap-always py-16 sm:py-20 lg:py-24">
            <div className="w-full space-y-12 sm:space-y-16">
            <div className="text-center mb-16 sm:mb-20">
              <h2 className="text-4xl sm:text-5xl font-bold text-[#00d9ff] mb-5">Leadership Team</h2>
              <p className="text-lg sm:text-xl text-[#b0b0b0]">Steering Parallax towards excellence</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
              {leaders.map((leader, index) => (
                <div
                  key={index}
                  className="group p-10 lg:p-12 rounded-2xl bg-gradient-to-br from-[#0f1628] to-[#050a15] border border-[#0066ff]/20 hover:border-[#00d9ff]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#0066ff]/20 text-center hover:-translate-y-2"
                >
                  <div className="text-7xl lg:text-8xl mb-8 group-hover:scale-110 transition-transform duration-500">
                    {leader.image}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#e0e0e0] mb-4">{leader.name}</h3>
                  <p className="text-[#00d9ff] font-semibold mb-3 text-base sm:text-lg">{leader.role}</p>
                  <p className="text-sm sm:text-base text-[#b0b0b0]">{leader.expertise}</p>
                </div>
              ))}
            </div>
            </div>
          </section>

          {/* Core Team Members */}
          <section className="min-h-screen w-full flex items-center snap-start snap-always py-16 sm:py-20 lg:py-24">
            <div className="w-full space-y-12 sm:space-y-16">
            <div className="text-center mb-16 sm:mb-20">
              <h2 className="text-4xl sm:text-5xl font-bold text-[#00d9ff] mb-5">Core Team Members</h2>
              <p className="text-lg sm:text-xl text-[#b0b0b0]">The backbone of our community</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 lg:gap-8">
              {members.map((member, index) => (
                <div
                  key={index}
                  className="p-6 sm:p-8 rounded-xl bg-gradient-to-br from-[#0f1628] to-[#050a15] border border-[#0066ff]/20 hover:border-[#00d9ff]/50 transition-all duration-300 text-center hover:shadow-xl hover:shadow-[#0066ff]/20 hover:-translate-y-1"
                >
                  <div className="text-5xl mb-4">👾</div>
                  <h3 className="text-base sm:text-lg font-bold text-[#e0e0e0] mb-2">{member.name}</h3>
                  <p className="text-xs sm:text-sm text-[#00d9ff]">{member.role}</p>
                </div>
              ))}
            </div>
            </div>
          </section>

          {/* Join Section */}
          <section className="min-h-screen w-full flex items-center snap-start snap-always py-16 sm:py-20 lg:py-24">
            <div className="w-full">
            <div className="p-12 sm:p-14 lg:p-16 rounded-2xl bg-gradient-to-r from-[#0066ff]/10 to-[#00d9ff]/10 border border-[#0066ff]/30 text-center">
              <div className="text-7xl mb-10">🚀</div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-8">Join Our Team</h2>
              <p className="text-lg sm:text-xl text-[#b0b0b0] mb-10  mx-auto leading-relaxed">
                We&apos;re always looking for passionate individuals to join our team. Whether you&apos;re a developer, 
                designer, artist, or enthusiast, there&apos;s a place for you in Parallax!
              </p>
              <a href="/contact" className="inline-block px-10 py-4 bg-gradient-to-r from-[#0066ff] to-[#00d9ff] text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-[#0066ff]/50 transition-all duration-300 transform hover:scale-105 text-lg">
                Apply Now
              </a>
            </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
