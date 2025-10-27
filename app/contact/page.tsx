'use client';

import Navbar from '../components/Navbar';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'parallax@pes.edu',
      link: 'mailto:parallax@pes.edu',
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'PESU Electronic City Campus, Bangalore',
      link: '#',
    },
    {
      icon: '🕐',
      label: 'Meeting Time',
      value: 'Fridays, 6:00 PM',
      link: '#',
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
                Get In Touch
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-[#b0b0b0] max-w-3xl mx-auto leading-relaxed px-4">
              Have questions? Want to join Parallax? Or interested in collaborating? 
              We'd love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 mb-32">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#00d9ff] mb-10">Contact Information</h2>
              <div className="space-y-8 mb-16">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="group flex items-start gap-6 p-8 rounded-2xl bg-gradient-to-br from-[#0f1628] to-[#050a15] border border-[#0066ff]/20 hover:border-[#00d9ff]/50 transition-all duration-500 cursor-pointer hover:shadow-xl hover:shadow-[#0066ff]/20 hover:-translate-y-1"
                  >
                    <span className="text-5xl mt-1">{info.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-[#e0e0e0] group-hover:text-[#00d9ff] transition-colors duration-300 mb-2">
                        {info.label}
                      </h3>
                      <p className="text-[#b0b0b0] text-base leading-relaxed">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#00d9ff] mb-8">Follow Us</h3>
                <div className="flex flex-wrap gap-5">
                  {[
                    { icon: '🔗', name: 'LinkedIn', link: '#' },
                    { icon: '🐦', name: 'Twitter', link: '#' },
                    { icon: '💜', name: 'Discord', link: '#' },
                    { icon: '📷', name: 'Instagram', link: '#' },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-br from-[#0f1628] to-[#050a15] border border-[#0066ff]/20 hover:border-[#00d9ff]/50 flex items-center justify-center text-3xl sm:text-4xl hover:bg-[#00d9ff]/10 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-[#0066ff]/30"
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#00d9ff] mb-10">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-7">
                <div>
                  <label htmlFor="name" className="block text-base font-semibold text-[#e0e0e0] mb-3">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl bg-[#0f1628] border border-[#0066ff]/20 focus:border-[#00d9ff]/50 text-[#e0e0e0] placeholder-[#666] focus:outline-none transition-colors duration-300 text-base"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-base font-semibold text-[#e0e0e0] mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl bg-[#0f1628] border border-[#0066ff]/20 focus:border-[#00d9ff]/50 text-[#e0e0e0] placeholder-[#666] focus:outline-none transition-colors duration-300 text-base"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-base font-semibold text-[#e0e0e0] mb-3">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl bg-[#0f1628] border border-[#0066ff]/20 focus:border-[#00d9ff]/50 text-[#e0e0e0] focus:outline-none transition-colors duration-300 text-base"
                  >
                    <option value="">Select a subject</option>
                    <option value="joining">I want to join</option>
                    <option value="collaboration">Collaboration opportunity</option>
                    <option value="event">Event inquiry</option>
                    <option value="sponsorship">Sponsorship</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-base font-semibold text-[#e0e0e0] mb-3">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-5 py-4 rounded-xl bg-[#0f1628] border border-[#0066ff]/20 focus:border-[#00d9ff]/50 text-[#e0e0e0] placeholder-[#666] focus:outline-none transition-colors duration-300 resize-none text-base"
                    placeholder="Tell us more..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-[#0066ff] to-[#00d9ff] text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-[#0066ff]/50 transition-all duration-300 transform hover:scale-105 text-lg"
                >
                  Send Message
                </button>

                {isSubmitted && (
                  <div className="p-5 rounded-xl bg-[#00d9ff]/10 border border-[#00d9ff]/50 text-[#00d9ff] text-center font-semibold text-base">
                    ✓ Thank you! We'll get back to you soon.
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="border-t border-[#0066ff]/20 pt-32">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-[#0066ff] to-[#00d9ff] bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  q: 'Do I need prior experience to join?',
                  a: 'No! We welcome beginners and experienced developers alike. Our workshops are designed for all skill levels.',
                },
                {
                  q: 'What is the club membership fee?',
                  a: 'Parallax is completely free to join. We believe in making game dev accessible to everyone.',
                },
                {
                  q: 'When do you meet?',
                  a: 'We typically meet on Fridays at 6:00 PM at the PESU Electronic City campus. Check our calendar for specific dates.',
                },
                {
                  q: 'Do you provide hardware access?',
                  a: 'Yes! We have VR headsets and gaming equipment available for members. Special arrangements can be made for AR/VR projects.',
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-gradient-to-br from-[#0f1628] to-[#050a15] border border-[#0066ff]/20 hover:border-[#00d9ff]/50 transition-all duration-500 hover:shadow-xl hover:shadow-[#0066ff]/20"
                >
                  <h3 className="text-xl font-bold text-[#00d9ff] mb-4">{faq.q}</h3>
                  <p className="text-[#b0b0b0] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
