'use client';

import CinematicHero from './components/CinematicHero';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-white">

      {/* ── CINEMATIC HERO (full-width, above the fold) ── */}
      <CinematicHero />

      {/* ── INTRO STRIP ── */}
      <section className="bg-white py-14 border-b border-gray-100">
        <div
          className="max-w-4xl mx-auto px-6 text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.9s ease, transform 0.9s ease',
          }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4" style={{ lineHeight: 1.15 }}>
            Welcome to{' '}
            <span className="text-green-700">Abhishag</span>
          </h1>
          <p className="text-xl text-gray-600 mb-2 font-medium">
            Home Health Services — <em>Abundance of Life</em>
          </p>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">
            Providing compassionate, professional daycare and home health services for elderly
            individuals. We focus on health, wellness, and creating a nurturing environment for our seniors.
          </p>
          <div className="flex justify-center gap-4 mt-8 flex-wrap">
            <button className="bg-green-700 text-white px-8 py-3 rounded-lg hover:bg-green-800 hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 font-semibold">
              Learn More
            </button>
            <button className="border-2 border-green-700 text-green-700 px-8 py-3 rounded-lg hover:bg-green-50 hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 font-semibold">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* ── FEATURES SECTION ── */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-3 text-center">
            Why Choose Abhishag?
          </h2>
          <p className="text-center text-gray-500 mb-12 text-lg">
            Trusted by hundreds of families across Chennai
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                emoji: '👨‍⚕️',
                title: 'Professional Care',
                desc: 'Our trained and experienced staff provide the highest quality care and attention to every individual.',
              },
              {
                emoji: '🏠',
                title: 'Safe Environment',
                desc: 'A secure and comfortable home-care setup designed specifically for the needs of our elderly residents.',
              },
              {
                emoji: '🌟',
                title: 'Holistic Wellness',
                desc: 'We focus on physical health, mental wellbeing, and social engagement for a better quality of life.',
              },
            ].map(({ emoji, title, desc }) => (
              <div
                key={title}
                className="group p-8 bg-white rounded-xl border border-gray-100 border-l-4 border-l-green-700 hover:shadow-2xl hover:scale-105 hover:bg-green-50 transition-all duration-500 cursor-pointer"
              >
                <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">
                  {emoji}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                  {title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-800 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-20 relative overflow-hidden">
        {/* Animated blobs */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-4">Ready to Join Our Community?</h2>
          <p className="text-xl mb-10 text-white/85">
            Contact us today to learn more about our services and schedule a home visit.
          </p>
          <button className="bg-white text-green-800 px-10 py-4 rounded-xl hover:bg-gray-100 hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 font-bold text-lg">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
}
