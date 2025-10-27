import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Link from 'next/link';

export default function Home() {
  const features = [
    {
      icon: '🎮',
      title: 'Game Development',
      description: 'Learn game design, mechanics, and development using modern engines like Unity and Unreal.',
    },
    {
      icon: '🥽',
      title: 'AR/VR Innovation',
      description: 'Explore augmented and virtual reality technologies to create immersive experiences.',
    },
    {
      icon: '🤝',
      title: 'Community',
      description: 'Join a vibrant community of passionate developers and creators at PESU.',
    },
    {
      icon: '🏆',
      title: 'Competitions',
      description: 'Participate in hackathons, game jams, and showcase your skills to industry experts.',
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <div className="flex flex-col items-center gap-16 sm:gap-20 lg:gap-24">
        {/* Hero Section */}
        <section className="relative min-h-[75vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-96 h-96 bg-[#0066ff]/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00d9ff]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#ff0080]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          </div>

          <div className="relative z-10 text-center max-w-5xl w-full">
            <div className="mb-10">
              <span className="inline-block px-5 py-2.5 rounded-full border border-[#0066ff]/50 bg-[#0066ff]/10 text-[#00d9ff] font-semibold text-sm tracking-wide">
                ✨ Welcome to Parallax Club
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-[#0066ff] via-[#00d9ff] to-[#ff0080] bg-clip-text text-transparent">
                Shape the Future
              </span>
              <br />
              <span className="text-[#e0e0e0]">
                of Gaming & Immersive Tech
              </span>
            </h1>

            <p className="text-base items-center sm:text-lg md:text-xl text-[#b0b0b0] mb-12 w-full mx-auto leading-relaxed px-4">
              Join Parallax, the Game Development and AR/VR club at PESU Electronic City Campus. 
              Create, innovate, and collaborate with fellow enthusiasts in cutting-edge immersive technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-20">
              <Link href="/contact" className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-[#0066ff] to-[#00d9ff] text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-[#0066ff]/50 transition-all duration-300 transform hover:scale-105 text-center">
                Join Us Today
              </Link>
              <Link href="/about" className="w-full sm:w-auto px-10 py-4 border-2 border-[#0066ff] text-[#00d9ff] font-bold rounded-lg hover:bg-[#0066ff]/10 transition-all duration-300 text-center">
                Learn More
              </Link>
            </div>

            {/* Scroll indicator */}
            <div className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
              <span className="text-xs text-[#b0b0b0] uppercase tracking-wider">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-[#0066ff]/50 rounded-full flex items-start justify-center p-2">
                <div className="w-1.5 h-3 bg-[#00d9ff] rounded-full animate-bounce" />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 sm:mb-20 lg:mb-24">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-[#0066ff] to-[#00d9ff] bg-clip-text text-transparent">
                  What We Offer
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-[#b0b0b0] w-full mx-auto">
                Discover the amazing opportunities and resources available to our members
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto place-items-center">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group p-10 lg:p-12 rounded-2xl bg-gradient-to-br from-[#0f1628] to-[#050a15] border border-[#0066ff]/20 hover:border-[#00d9ff]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#0066ff]/20 hover:-translate-y-2 text-center"
                >
                  <div className="text-6xl lg:text-7xl mb-6 group-hover:scale-110 transition-transform duration-500">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#e0e0e0] mb-4 group-hover:text-[#00d9ff] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-[#b0b0b0] leading-relaxed text-base lg:text-lg max-w-md mx-auto">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0066ff]/10 via-transparent to-[#00d9ff]/10" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
              <div className="text-center p-8 lg:p-10 rounded-xl bg-gradient-to-br from-[#0f1628]/50 to-[#050a15]/50 border border-[#0066ff]/20 backdrop-blur-sm">
                <div className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#0066ff] to-[#00d9ff] bg-clip-text text-transparent mb-4">500+</div>
                <p className="text-[#b0b0b0] font-medium text-sm sm:text-base lg:text-lg">Active Members</p>
              </div>
              <div className="text-center p-8 lg:p-10 rounded-xl bg-gradient-to-br from-[#0f1628]/50 to-[#050a15]/50 border border-[#0066ff]/20 backdrop-blur-sm">
                <div className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#0066ff] to-[#00d9ff] bg-clip-text text-transparent mb-4">50+</div>
                <p className="text-[#b0b0b0] font-medium text-sm sm:text-base lg:text-lg">Events Per Year</p>
              </div>
              <div className="text-center p-8 lg:p-10 rounded-xl bg-gradient-to-br from-[#0f1628]/50 to-[#050a15]/50 border border-[#0066ff]/20 backdrop-blur-sm">
                <div className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#0066ff] to-[#00d9ff] bg-clip-text text-transparent mb-4">15+</div>
                <p className="text-[#b0b0b0] font-medium text-sm sm:text-base lg:text-lg">Projects Shipped</p>
              </div>
              <div className="text-center p-8 lg:p-10 rounded-xl bg-gradient-to-br from-[#0f1628]/50 to-[#050a15]/50 border border-[#0066ff]/20 backdrop-blur-sm">
                <div className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#0066ff] to-[#00d9ff] bg-clip-text text-transparent mb-4">2024</div>
                <p className="text-[#b0b0b0] font-medium text-sm sm:text-base lg:text-lg">Founded</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0066ff]/5 rounded-full blur-3xl" />
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-[#ff0080] to-[#0066ff] bg-clip-text text-transparent">
                Ready to Level Up?
              </span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-[#b0b0b0] mb-12 max-w-3xl mx-auto leading-relaxed">
              Whether you&apos;re a beginner or an experienced developer, there&apos;s a place for you in Parallax.
              Join our community and start your journey in game development and immersive technologies.
            </p>
            <Link href="/contact" className="inline-block px-12 py-5 bg-gradient-to-r from-[#ff0080] to-[#0066ff] text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-[#ff0080]/50 transition-all duration-300 transform hover:scale-105 text-lg">
              Get Started Now
            </Link>
          </div>
        </section>
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </>
  );
}
