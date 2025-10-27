import Navbar from '../components/Navbar';

export default function Team() {
  const leaders = [
    {
      name: 'Aditya Sharma',
      role: 'President',
      expertise: 'Game Design & Leadership',
      image: '👨‍💼',
    },
    {
      name: 'Priya Patel',
      role: 'Vice President',
      expertise: 'AR/VR Development',
      image: '👩‍💼',
    },
    {
      name: 'Rahul Singh',
      role: 'Tech Lead',
      expertise: 'Engine Development',
      image: '👨‍💻',
    },
    {
      name: 'Neha Verma',
      role: 'Design Lead',
      expertise: 'UI/UX & Art',
      image: '👩‍🎨',
    },
  ];

  const members = [
    { name: 'Arjun Kapoor', role: 'Game Developer' },
    { name: 'Sakshi Singh', role: '3D Artist' },
    { name: 'Dev Patel', role: 'AR Developer' },
    { name: 'Isha Khan', role: 'Gameplay Programmer' },
    { name: 'Vikram Mehta', role: 'Graphics Engineer' },
    { name: 'Anjali Desai', role: 'Sound Designer' },
    { name: 'Nikhil Gupta', role: 'VR Developer' },
    { name: 'Pooja Iyer', role: 'UI Designer' },
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
                Meet Our Team
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-[#b0b0b0] max-w-3xl mx-auto leading-relaxed px-4">
              Our passionate team of developers, designers, and creators working together to push the boundaries 
              of game development and immersive technology.
            </p>
          </div>

          {/* Leadership */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#00d9ff] mb-4">Leadership Team</h2>
              <p className="text-lg text-[#b0b0b0]">Steering Parallax towards excellence</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {leaders.map((leader, index) => (
                <div
                  key={index}
                  className="group p-10 rounded-2xl bg-gradient-to-br from-[#0f1628] to-[#050a15] border border-[#0066ff]/20 hover:border-[#00d9ff]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#0066ff]/20 text-center hover:-translate-y-2"
                >
                  <div className="text-7xl mb-6 group-hover:scale-125 transition-transform duration-500">
                    {leader.image}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#e0e0e0] mb-3">{leader.name}</h3>
                  <p className="text-[#00d9ff] font-semibold mb-3 text-base sm:text-lg">{leader.role}</p>
                  <p className="text-sm text-[#b0b0b0]">{leader.expertise}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Team Members */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#00d9ff] mb-4">Core Team Members</h2>
              <p className="text-lg text-[#b0b0b0]">The backbone of our community</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
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

          {/* Join Section */}
          <div className="p-12 sm:p-16 rounded-2xl bg-gradient-to-r from-[#0066ff]/10 to-[#00d9ff]/10 border border-[#0066ff]/30 text-center">
            <div className="text-6xl mb-8">🚀</div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Join Our Team</h2>
            <p className="text-[#b0b0b0] text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              We're always looking for passionate individuals to join our team. Whether you're a developer, 
              designer, artist, or enthusiast, there's a place for you in Parallax!
            </p>
            <a href="/contact" className="inline-block px-10 py-4 bg-gradient-to-r from-[#0066ff] to-[#00d9ff] text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-[#0066ff]/50 transition-all duration-300 transform hover:scale-105 text-lg">
              Apply Now
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
