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
      icon: '📢',
      title: 'Community',
      description: 'Join a vibrant community of passionate developers and creators at PESU.',
    },
    {
      icon: '🏆',
      title: 'Competitions',
      description: 'Participate in hackathons, game jams, and showcase your skills to industry experts.',
    },
  ];

  const stats = [
    { number: '100+', label: 'Active Members' },
    { number: '2+', label: 'Events Per Year' },
    { number: '5+', label: 'Projects Shipped' },
    { number: '2021', label: 'Founded' },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen flex justify-center snap-y snap-mandatory overflow-y-scroll scroll-smooth">
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
        {/* Hero Section */}
        <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 overflow-hidden snap-start snap-always">
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

        {/* What We Offer & Impact Section */}
        <section className="min-h-screen w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative flex items-center snap-start snap-always">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0066ff]/5 via-transparent to-[#00d9ff]/5" />
          
          <div className="w-full relative z-10 py-10">
            <div className="text-center mb-10 sm:mb-16 lg:mb-20 ">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-[#0066ff] to-[#00d9ff] bg-clip-text text-transparent">
                  What We Offer
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-[#b0b0b0] mx-auto">
                Building a thriving community of game developers and innovators
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mx-auto mb-16 sm:mb-20 lg:mb-24">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group p-8 lg:p-10 rounded-2xl bg-gradient-to-br from-[#0f1628] to-[#050a15] border border-[#0066ff]/20 hover:border-[#00d9ff]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#0066ff]/20 hover:-translate-y-2 text-center"
                >
                  <div className="text-5xl lg:text-6xl mb-5 group-hover:scale-110 transition-transform duration-500">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-[#e0e0e0] mb-3 group-hover:text-[#00d9ff] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-[#b0b0b0] leading-relaxed text-sm lg:text-base">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-[#0f1628]/80 to-[#050a15]/80 border border-[#0066ff]/30 backdrop-blur-sm hover:border-[#00d9ff]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#0066ff]/20"
                >
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#0066ff] to-[#00d9ff] bg-clip-text text-transparent mb-3">
                    {stat.number}
                  </div>
                  <p className="text-[#b0b0b0] font-semibold text-xs sm:text-sm lg:text-base">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="min-h-screen w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative flex items-center justify-center snap-start snap-always">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0066ff]/5 rounded-full blur-3xl" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ff0080]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00d9ff]/5 rounded-full blur-3xl" />
          </div>
          
          <div className="max-w-4xl text-center relative z-10">
            <div className="mb-8">
              <span className="text-6xl sm:text-7xl lg:text-8xl">🚀</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-[#ff0080] via-[#0066ff] to-[#00d9ff] bg-clip-text text-transparent">
                Ready to Level Up?
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#b0b0b0] mb-12 max-w-3xl mx-auto leading-relaxed px-4">
              Whether you&apos;re a beginner or an experienced developer, there&apos;s a place for you in Parallax.
              Join our community and start your journey in game development and immersive technologies.
            </p>
            <Link href="/contact" className="inline-block px-10 py-4 lg:px-12 lg:py-5 bg-gradient-to-r from-[#ff0080] to-[#0066ff] text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-[#ff0080]/50 transition-all duration-300 transform hover:scale-105 text-base lg:text-lg">
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
