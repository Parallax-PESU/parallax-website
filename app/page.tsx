'use client';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px',
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prev) => new Set(prev).add(entry.target.id));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

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

  const values = [
    {
      icon: '💡',
      title: 'Innovation',
      description: 'We push boundaries and explore cutting-edge technologies in gaming and immersive experiences.',
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and fostering a supportive community of creators.',
    },
    {
      icon: '📚',
      title: 'Learning',
      description: 'Continuous growth through workshops, mentorship, and hands-on project experience.',
    },
    {
      icon: '🌟',
      title: 'Impact',
      description: 'We aim to create meaningful experiences and contribute to the gaming industry.',
    },
  ];

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

  const resources = [
    {
      category: 'Game Engines',
      icon: '⚙️',
      items: ['Unity', 'Unreal Engine', 'Godot'],
    },
    {
      category: 'Learning Platforms',
      icon: '📚',
      items: ['Udemy', 'Coursera', 'YouTube'],
    },
    {
      category: 'AR/VR Development',
      icon: '🥽',
      items: ['ARKit', 'ARCore', 'Meta Quest SDK'],
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen flex justify-center snap-y snap-mandatory overflow-y-scroll scroll-smooth">
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Loading Animation Section - First Snap Point */}
        <section 
          id="loading"
          className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden snap-start snap-always"
        >
          <LoadingScreen onComplete={handleLoadingComplete} />
        </section>

        {/* Hero Section */}
        <section 
          id="hero"
          ref={(el) => { sectionRefs.current['hero'] = el; }}
          className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 overflow-hidden snap-start snap-always"
        >
          {/* Animated background elements with parallax */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div 
              className="absolute top-20 left-10 w-96 h-96 bg-[#0066ff]/10 rounded-full blur-3xl animate-pulse parallax-slow" 
              style={{ transform: `translate(${scrollY * 0.3}px, ${scrollY * 0.2}px)` }}
            />
            <div 
              className="absolute bottom-20 right-10 w-96 h-96 bg-[#00d9ff]/10 rounded-full blur-3xl animate-pulse parallax-medium" 
              style={{ animationDelay: '1s', transform: `translate(${-scrollY * 0.2}px, ${scrollY * 0.3}px)` }} 
            />
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#ff0080]/5 rounded-full blur-3xl animate-pulse parallax-fast" 
              style={{ animationDelay: '2s', transform: `scale(${1 + scrollY * 0.0005})` }} 
            />
          </div>

          <div className="relative z-10 text-center max-w-5xl w-full">
            <div className="mb-10 story-zoom-anim">
              <span className="inline-block px-5 py-2.5 rounded-full border border-[#0066ff]/50 bg-[#0066ff]/10 text-[#00d9ff] font-semibold text-sm tracking-wide">
                ✨ Welcome to Parallax Club
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-[#0066ff] via-[#00d9ff] to-[#ff0080] bg-clip-text text-transparent story-reveal-anim text-glow-anim">
                Shape the Future
              </span>
              <br />
              <span className="text-[#e0e0e0] story-fade-in delay-300">
                of Gaming & Immersive Tech
              </span>
            </h1>

            <p className="text-base items-center sm:text-lg md:text-xl text-[#b0b0b0] mb-12 w-full mx-auto leading-relaxed px-4 story-fade-in delay-500">
              Join Parallax, the Game Development and AR/VR club at PESU Electronic City Campus. 
              Create, innovate, and collaborate with fellow enthusiasts in cutting-edge immersive technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-20 story-zoom-anim delay-700">
              <Link href="/about" className="w-full sm:w-auto px-10 py-4 border-2 border-[#0066ff] text-[#00d9ff] font-bold rounded-lg hover:bg-[#0066ff]/10 transition-all duration-300 text-center hover:scale-110 hover:shadow-xl hover:shadow-[#0066ff]/50">
                Learn More
              </Link>
            </div>

            {/* Scroll indicator */}
            <div className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity story-fade-in delay-800">
              <span className="text-xs text-[#b0b0b0] uppercase tracking-wider">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-[#0066ff]/50 rounded-full flex items-start justify-center p-2">
                <div className="w-1.5 h-3 bg-[#00d9ff] rounded-full animate-bounce" />
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer & Impact Section */}
        <section 
          id="features"
          ref={(el) => { sectionRefs.current['features'] = el; }}
          className="min-h-screen w-full px-4 sm:px-6 lg:px-8 py-28 sm:py-32 lg:py-36 relative flex items-center snap-start snap-always"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0066ff]/5 via-transparent to-[#00d9ff]/5" />
          
          <div className="w-full relative z-10 py-10 section-stack">
            <div className={`text-center space-y-4 sm:space-y-5 ${visibleSections.has('features') ? 'story-zoom-anim' : 'story-hidden'}`}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                <span className="bg-gradient-to-r from-[#0066ff] to-[#00d9ff] bg-clip-text text-transparent text-glow-anim">
                  What We Offer
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-[#b0b0b0] mx-auto">
                Building a thriving community of game developers and innovators
              </p>
            </div>
            <div className="section-stack">
              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 gap-y-12 lg:gap-8 mx-auto">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`group p-8 lg:p-10 rounded-2xl bg-gradient-to-br from-[#0f1628] to-[#050a15] border border-[#0066ff]/20 hover:border-[#00d9ff]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#0066ff]/20 hover:-translate-y-2 text-center card-float-anim ${
                      visibleSections.has('features') 
                        ? index === 0 ? 'story-slide-left-anim' : index === 2 ? 'story-slide-right-anim' : 'story-zoom-anim'
                        : 'story-hidden'
                    }`}
                    style={{ animationDelay: `${index * 0.2}s` }}
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
                    className={`text-center p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-[#0f1628]/80 to-[#050a15]/80 border border-[#0066ff]/30 backdrop-blur-sm hover:border-[#00d9ff]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#0066ff]/20 ${
                      visibleSections.has('features') ? 'story-zoom-anim' : 'story-hidden'
                    }`}
                    style={{ animationDelay: `${0.6 + index * 0.15}s` }}
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
          </div>
        </section>

        {/* About Section - Mission & Vision */}
        <section 
          id="about"
          ref={(el) => { sectionRefs.current['about'] = el; }}
          className="min-h-screen w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative flex items-center snap-start snap-always"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div 
              className="absolute top-1/4 right-10 w-96 h-96 bg-[#0066ff]/5 rounded-full blur-3xl parallax-medium"
              style={{ transform: `translate(${scrollY * 0.05}px, ${scrollY * 0.08}px)` }}
            />
          </div>
          
          <div className="w-full relative z-10 section-stack">
            <div className={`text-center space-y-4 sm:space-y-5 ${visibleSections.has('about') ? 'story-zoom-anim' : 'story-hidden'}`}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                <span className="bg-gradient-to-r from-[#ff0080] to-[#0066ff] bg-clip-text text-transparent text-glow-anim">
                  About Parallax
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-[#b0b0b0] mx-auto leading-relaxed">
                Founded in 2024, we&apos;ve built a thriving community of passionate developers, designers, and creators 
                who are pushing the boundaries of immersive technology and game development.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 w-full">
              <div className={`p-12 lg:p-14 rounded-2xl bg-gradient-to-br from-[#0f1628] to-[#050a15] border border-[#0066ff]/20 hover:border-[#00d9ff]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#0066ff]/20 hover:scale-105 ${
                visibleSections.has('about') ? 'story-slide-left-anim' : 'story-hidden'
              }`}>
                <div className="text-5xl mb-8">🎯</div>
                <h3 className="text-3xl sm:text-4xl font-bold text-[#00d9ff] mb-6">Our Mission</h3>
                <p className="text-[#b0b0b0] text-base sm:text-lg leading-relaxed">
                  To empower students with the knowledge, skills, and community they need to excel in game development 
                  and immersive technologies. We foster creativity, technical excellence, and innovation through 
                  collaborative projects, workshops, and industry connections.
                </p>
              </div>
              <div className={`p-12 lg:p-14 rounded-2xl bg-gradient-to-br from-[#0f1628] to-[#050a15] border border-[#00d9ff]/20 hover:border-[#0066ff]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#00d9ff]/20 hover:scale-105 ${
                visibleSections.has('about') ? 'story-slide-right-anim' : 'story-hidden'
              }`}>
                <div className="text-5xl mb-8">🚀</div>
                <h3 className="text-3xl sm:text-4xl font-bold text-[#00d9ff] mb-6">Our Vision</h3>
                <p className="text-[#b0b0b0] text-base sm:text-lg leading-relaxed">
                  To establish Parallax as the leading hub for game development and AR/VR innovation in India, 
                  creating world-class talent and groundbreaking projects that make a real impact in the gaming 
                  and tech industries.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section 
          id="values"
          ref={(el) => { sectionRefs.current['values'] = el; }}
          className="min-h-screen w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative flex items-center snap-start snap-always"
        >
          <div className="absolute inset-0 bg-gradient-to-l from-[#00d9ff]/5 via-transparent to-[#ff0080]/5" />
          
          <div className="w-full relative z-10 section-stack">
            <div className={`text-center space-y-4 sm:space-y-5 ${visibleSections.has('values') ? 'story-zoom-anim' : 'story-hidden'}`}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                <span className="bg-gradient-to-r from-[#0066ff] to-[#00d9ff] bg-clip-text text-transparent text-glow-anim">
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
                  className={`p-10 lg:p-12 rounded-2xl bg-gradient-to-br from-[#0f1628] to-[#050a15] border border-[#0066ff]/20 hover:border-[#00d9ff]/50 transition-all duration-500 hover:shadow-xl hover:shadow-[#0066ff]/20 hover:-translate-y-2 hover:scale-105 card-float-anim ${
                    visibleSections.has('values') 
                      ? index % 2 === 0 ? 'story-slide-left-anim' : 'story-slide-right-anim'
                      : 'story-hidden'
                  }`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="text-5xl mb-6">{value.icon}</div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#00d9ff] mb-5">{value.title}</h3>
                  <p className="text-[#b0b0b0] text-base sm:text-lg leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section - Leadership */}
        <section 
          id="team"
          ref={(el) => { sectionRefs.current['team'] = el; }}
          className="min-h-screen w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative flex items-center snap-start snap-always"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div 
              className="absolute bottom-1/4 left-10 w-96 h-96 bg-[#ff0080]/5 rounded-full blur-3xl parallax-slow"
              style={{ transform: `translate(${scrollY * 0.08}px, ${scrollY * 0.1}px)` }}
            />
          </div>
          
          <div className="w-full relative z-10 section-stack">
            <div className={`text-center space-y-4 sm:space-y-5 ${visibleSections.has('team') ? 'story-zoom-anim' : 'story-hidden'}`}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                <span className="bg-gradient-to-r from-[#ff0080] via-[#0066ff] to-[#00d9ff] bg-clip-text text-transparent text-glow-anim">
                  Meet Our Team
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-[#b0b0b0] mx-auto">
                Passionate leaders driving innovation and excellence
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
              {leaders.map((leader, index) => (
                <div
                  key={index}
                  className={`group p-10 lg:p-12 rounded-2xl bg-gradient-to-br from-[#0f1628] to-[#050a15] border border-[#0066ff]/20 hover:border-[#00d9ff]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#0066ff]/20 text-center hover:-translate-y-2 hover:scale-110 card-float-anim ${
                    visibleSections.has('team') ? 'story-zoom-anim' : 'story-hidden'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="text-7xl lg:text-8xl mb-8 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
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

        {/* Resources Section */}
        <section 
          id="resources"
          ref={(el) => { sectionRefs.current['resources'] = el; }}
          className="min-h-screen w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative flex items-center snap-start snap-always"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0066ff]/5 via-transparent to-[#00d9ff]/5" />
          
          <div className="w-full relative z-10 section-stack">
            <div className={`text-center space-y-4 sm:space-y-5 ${visibleSections.has('resources') ? 'story-zoom-anim' : 'story-hidden'}`}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                <span className="bg-gradient-to-r from-[#0066ff] to-[#00d9ff] bg-clip-text text-transparent text-glow-anim">
                  Learning Resources
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-[#b0b0b0] mx-auto">
                Curated tools and platforms to kickstart your journey
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-10 lg:gap-12">
              {resources.map((resourceGroup, index) => (
                <div
                  key={index}
                  className={`p-10 sm:p-12 rounded-2xl bg-gradient-to-br from-[#0f1628] to-[#050a15] border border-[#0066ff]/20 hover:border-[#00d9ff]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#0066ff]/20 hover:-translate-y-2 hover:scale-105 card-float-anim ${
                    visibleSections.has('resources') ? 'story-fade-in' : 'story-hidden'
                  }`}
                  style={{ animationDelay: `${index * 0.25}s` }}
                >
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-5xl">{resourceGroup.icon}</span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#00d9ff]">{resourceGroup.category}</h3>
                  </div>
                  <div className="space-y-4">
                    {resourceGroup.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="p-4 rounded-xl bg-[#0a0f1f]/50 border border-[#0066ff]/10 hover:border-[#00d9ff]/40 transition-all duration-300 hover:-translate-y-1 hover:scale-105"
                      >
                        <p className="text-base sm:text-lg text-[#e0e0e0] font-semibold">{item}</p>
                      </div>
                    ))}
                  </div>
                  <Link 
                    href="/resources"
                    className="inline-block mt-6 text-[#00d9ff] hover:text-[#0066ff] font-semibold transition-colors duration-300 hover:translate-x-2"
                  >
                    View All Resources →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section 
          id="contact"
          ref={(el) => { sectionRefs.current['contact'] = el; }}
          className="min-h-screen w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative flex items-center snap-start snap-always"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div 
              className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#0066ff]/5 rounded-full blur-3xl parallax-medium"
              style={{ transform: `translate(${scrollY * 0.04}px, ${scrollY * 0.06}px)` }}
            />
            <div 
              className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-[#00d9ff]/5 rounded-full blur-3xl parallax-slow"
              style={{ transform: `translate(${-scrollY * 0.05}px, ${scrollY * 0.08}px)` }}
            />
          </div>
          
          <div className="w-full relative z-10 section-stack">
            <div className={`text-center space-y-4 sm:space-y-5 ${visibleSections.has('contact') ? 'story-zoom-anim' : 'story-hidden'}`}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                <span className="bg-gradient-to-r from-[#ff0080] via-[#0066ff] to-[#00d9ff] bg-clip-text text-transparent text-glow-anim">
                  Get In Touch
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-[#b0b0b0] mx-auto">
                Have questions? Want to join Parallax? Or interested in collaborating?
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 lg:gap-10 mx-auto">
              <div className={`p-8 rounded-2xl bg-gradient-to-br from-[#0f1628] to-[#050a15] border border-[#0066ff]/20 hover:border-[#00d9ff]/50 transition-all duration-500 hover:shadow-xl hover:shadow-[#0066ff]/20 text-center hover:-translate-y-2 hover:scale-110 card-float-anim ${
                visibleSections.has('contact') ? 'story-slide-left-anim' : 'story-hidden'
              }`}>
                <div className="text-6xl mb-6">📧</div>
                <h3 className="text-xl font-bold text-[#00d9ff] mb-3">Email</h3>
                <p className="text-[#b0b0b0]">parallax@pes.edu</p>
              </div>
              <div className={`p-8 rounded-2xl bg-gradient-to-br from-[#0f1628] to-[#050a15] border border-[#0066ff]/20 hover:border-[#00d9ff]/50 transition-all duration-500 hover:shadow-xl hover:shadow-[#0066ff]/20 text-center hover:-translate-y-2 hover:scale-110 card-float-anim ${
                visibleSections.has('contact') ? 'story-zoom-anim' : 'story-hidden'
              }`} style={{ animationDelay: '0.2s' }}>
                <div className="text-6xl mb-6">📍</div>
                <h3 className="text-xl font-bold text-[#00d9ff] mb-3">Location</h3>
                <p className="text-[#b0b0b0]">PESU Electronic City Campus</p>
              </div>
              <div className={`p-8 rounded-2xl bg-gradient-to-br from-[#0f1628] to-[#050a15] border border-[#0066ff]/20 hover:border-[#00d9ff]/50 transition-all duration-500 hover:shadow-xl hover:shadow-[#0066ff]/20 text-center hover:-translate-y-2 hover:scale-110 card-float-anim ${
                visibleSections.has('contact') ? 'story-slide-right-anim' : 'story-hidden'
              }`} style={{ animationDelay: '0.3s' }}>
                <div className="text-6xl mb-6">🕐</div>
                <h3 className="text-xl font-bold text-[#00d9ff] mb-3">Meeting Time</h3>
                <p className="text-[#b0b0b0]">Fridays, 6:00 PM</p>
              </div>
            </div>

            <div className={`text-center ${visibleSections.has('contact') ? 'story-zoom-anim delay-500' : 'story-hidden'}`}>
              <Link 
                href="/contact"
                className="inline-block px-10 py-4 lg:px-12 lg:py-5 bg-gradient-to-r from-[#0066ff] to-[#00d9ff] text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-[#0066ff]/50 transition-all duration-300 transform hover:scale-110 text-base lg:text-lg"
              >
                Send Us a Message
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section 
          id="cta"
          ref={(el) => { sectionRefs.current['cta'] = el; }}
          className="min-h-screen w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative flex items-center justify-center snap-start snap-always"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0066ff]/5 rounded-full blur-3xl animate-pulse parallax-slow"
              style={{ transform: `scale(${1 + scrollY * 0.0003})` }}
            />
            <div 
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ff0080]/5 rounded-full blur-3xl animate-pulse parallax-medium"
              style={{ animationDelay: '1s', transform: `translate(${scrollY * 0.06}px, ${scrollY * 0.04}px)` }}
            />
            <div 
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00d9ff]/5 rounded-full blur-3xl animate-pulse parallax-fast"
              style={{ animationDelay: '2s', transform: `translate(${-scrollY * 0.05}px, ${scrollY * 0.07}px)` }}
            />
          </div>
          
          <div className="max-w-4xl text-center relative z-10">
            <div className={`mb-8 ${visibleSections.has('cta') ? 'story-zoom-anim' : 'story-hidden'}`}>
              <span className="text-6xl sm:text-7xl lg:text-8xl">🚀</span>
            </div>
            <h2 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight ${visibleSections.has('cta') ? 'story-fade-in delay-100' : 'story-hidden'}`}>
              <span className="bg-gradient-to-r from-[#ff0080] via-[#0066ff] to-[#00d9ff] bg-clip-text text-transparent text-glow-anim">
                Ready to Level Up?
              </span>
            </h2>
            <p className={`text-base sm:text-lg md:text-xl lg:text-2xl text-[#b0b0b0] mb-12 max-w-3xl mx-auto leading-relaxed px-4 ${visibleSections.has('cta') ? 'story-fade-in delay-300' : 'story-hidden'}`}>
              Whether you&apos;re a beginner or an experienced developer, there&apos;s a place for you in Parallax.
              Join our community and start your journey in game development and immersive technologies.
            </p>
            <Link 
              href="/contact" 
              className={`inline-block px-10 py-4 lg:px-12 lg:py-5 bg-gradient-to-r from-[#ff0080] to-[#0066ff] text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-[#ff0080]/50 transition-all duration-300 transform hover:scale-110 hover:rotate-2 text-base lg:text-lg ${visibleSections.has('cta') ? 'story-zoom-anim delay-500' : 'story-hidden'}`}
            >
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
