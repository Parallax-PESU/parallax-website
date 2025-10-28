import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Resources() {
  const resources = [
    {
      category: 'Game Engines',
      icon: '⚙️',
      items: [
        { name: 'Unity', description: 'Most popular game engine for 2D and 3D games', link: 'https://unity.com' },
        { name: 'Unreal Engine', description: 'Industry-leading engine for high-end graphics', link: 'https://unrealengine.com' },
        { name: 'Godot', description: 'Free, open-source game engine', link: 'https://godotengine.org' },
      ],
    },
    {
      category: 'Learning Platforms',
      icon: '📚',
      items: [
        { name: 'Udemy', description: 'Video courses on game development and AR/VR', link: 'https://udemy.com' },
        { name: 'Coursera', description: 'University-level game development courses', link: 'https://coursera.org' },
        { name: 'YouTube Gaming Channels', description: 'Free tutorials from industry experts', link: 'https://youtube.com' },
      ],
    },
    {
      category: 'AR/VR Development',
      icon: '🥽',
      items: [
        { name: 'ARKit', description: 'Apple\'s framework for AR development', link: 'https://developer.apple.com/arkit' },
        { name: 'ARCore', description: 'Google\'s platform for building AR experiences', link: 'https://developers.google.com/ar' },
        { name: 'Meta Quest SDK', description: 'Tools for VR development on Meta Quest', link: 'https://developer.oculus.com' },
      ],
    },
    {
      category: 'Art & Design',
      icon: '🎨',
      items: [
        { name: 'Blender', description: 'Free 3D modeling and animation software', link: 'https://blender.org' },
        { name: 'Aseprite', description: 'Pixel art animation software', link: 'https://aseprite.org' },
        { name: 'Figma', description: 'Design tool for UI/UX creation', link: 'https://figma.com' },
      ],
    },
    {
      category: 'Programming Resources',
      icon: '💻',
      items: [
        { name: 'C# Documentation', description: 'Official C# language documentation', link: 'https://docs.microsoft.com/en-us/dotnet/csharp' },
        { name: 'GitHub', description: 'Version control and project hosting', link: 'https://github.com' },
        { name: 'Stack Overflow', description: 'Q&A community for programmers', link: 'https://stackoverflow.com' },
      ],
    },
    {
      category: 'Audio & Sound',
      icon: '🎵',
      items: [
        { name: 'FMOD', description: 'Professional audio engine for games', link: 'https://fmod.com' },
        { name: 'Audacity', description: 'Free audio editing software', link: 'https://audacityteam.org' },
        { name: 'Freesound', description: 'Community of sound designers sharing samples', link: 'https://freesound.org' },
      ],
    },
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
                  Learning Resources
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-[#b0b0b0] mx-auto leading-relaxed">
                Explore curated resources to help you learn game development, AR/VR, and immersive technologies. 
                All links below are free or have free tiers.
              </p>
            </div>
          </section>

          {/* Resources Grid */}
          <section className="min-h-screen w-full flex items-center snap-start snap-always py-16 sm:py-20 lg:py-24">
            <div className="w-full grid md:grid-cols-2 gap-10">
            {resources.map((resourceGroup, index) => (
              <div
                key={index}
                className="p-10 sm:p-12 rounded-2xl bg-gradient-to-br from-[#0f1628] to-[#050a15] border border-[#0066ff]/20 hover:border-[#00d9ff]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#0066ff]/20"
              >
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-5xl">{resourceGroup.icon}</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#00d9ff]">{resourceGroup.category}</h2>
                </div>
                <div className="space-y-5">
                  {resourceGroup.items.map((item, itemIndex) => (
                    <a
                      key={itemIndex}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-6 rounded-xl bg-[#0a0f1f]/50 border border-[#0066ff]/10 hover:border-[#00d9ff]/40 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg hover:shadow-[#0066ff]/10"
                    >
                      <h3 className="text-lg sm:text-xl font-bold text-[#e0e0e0] group-hover:text-[#00d9ff] transition-colors duration-300 mb-2">
                        {item.name} →
                      </h3>
                      <p className="text-sm sm:text-base text-[#b0b0b0]">{item.description}</p>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          </section>

          {/* Quick Tips Section */}
          <section className="min-h-screen w-full flex items-center snap-start snap-always py-16 sm:py-20 lg:py-24">
            <div className="w-full section-stack">
              <div className="p-12 sm:p-16 rounded-2xl bg-gradient-to-r from-[#0066ff]/10 to-[#00d9ff]/10 border border-[#0066ff]/30">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#00d9ff] mb-12 text-center">Getting Started Tips</h2>
            <div className="grid md:grid-cols-3 gap-10">
              <div className="p-8 rounded-xl bg-[#0a0f1f]/50 border border-[#0066ff]/20 hover:border-[#00d9ff]/50 transition-all duration-300 hover:-translate-y-1">
                <div className="text-5xl mb-4">1️⃣</div>
                <h3 className="text-xl font-bold text-[#e0e0e0] mb-3">Start with Basics</h3>
                <p className="text-[#b0b0b0] leading-relaxed">Begin with fundamentals - learn about game loops, physics, and basic programming concepts.</p>
              </div>
              <div className="p-8 rounded-xl bg-[#0a0f1f]/50 border border-[#0066ff]/20 hover:border-[#00d9ff]/50 transition-all duration-300 hover:-translate-y-1">
                <div className="text-5xl mb-4">2️⃣</div>
                <h3 className="text-xl font-bold text-[#e0e0e0] mb-3">Join Our Community</h3>
                <p className="text-[#b0b0b0] leading-relaxed">Connect with fellow members, share projects, and learn from each other in our Parallax community.</p>
              </div>
              <div className="p-8 rounded-xl bg-[#0a0f1f]/50 border border-[#0066ff]/20 hover:border-[#00d9ff]/50 transition-all duration-300 hover:-translate-y-1">
                <div className="text-5xl mb-4">3️⃣</div>
                <h3 className="text-xl font-bold text-[#e0e0e0] mb-3">Build & Ship</h3>
                <p className="text-[#b0b0b0] leading-relaxed">Create your first game or AR experience. The best way to learn is by doing!</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="text-6xl mb-6">💡</div>
            <p className="text-lg sm:text-xl text-[#b0b0b0] mb-8 mx-auto">
              Have a resource to share? Want to learn more? Connect with our community!
            </p>
          </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
