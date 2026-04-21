'use client';

import CinematicHero from './components/CinematicHero';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 150);
    return () => clearTimeout(t);
  }, []);

  const features = [
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
      emoji: '🌿',
      title: 'Holistic Wellness',
      desc: 'We focus on physical health, mental wellbeing, and social engagement for a better quality of life.',
    },
  ];

  return (
    <div style={{ background: '#fdfaf6' }}>
      {/* ── CINEMATIC HERO ── */}
      <CinematicHero />

      {/* ── INTRO STRIP ── */}
      <section style={{ background: '#ffffff', padding: '72px 0', borderBottom: '1px solid #e8e4dc' }}>
        <div
          className="max-w-4xl mx-auto px-6 text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(28px)',
            transition: 'opacity 0.9s ease, transform 0.9s ease',
          }}
        >
          <p
            style={{
              fontFamily: "'Lato', sans-serif",
              fontWeight: 600,
              fontSize: '0.75rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#5A9E22',
              marginBottom: '14px',
            }}
          >
            Abundance of Life
          </p>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem,5vw,3.4rem)',
              fontWeight: 700,
              color: '#4A2111',
              lineHeight: 1.13,
              marginBottom: '18px',
            }}
          >
            Welcome to <span style={{ color: '#5A9E22' }}>Abhishag</span>
          </h1>
          <p
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: '1.1rem',
              color: '#4a4a6a',
              lineHeight: 1.8,
              maxWidth: '640px',
              margin: '0 auto 36px',
              fontWeight: 400,
            }}
          >
            Providing compassionate, professional daycare and home health services for elderly individuals. We focus on health, wellness, and creating a nurturing environment for our seniors.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="/services"
              style={{
                fontFamily: "'Lato', sans-serif",
                fontWeight: 700,
                fontSize: '0.95rem',
                color: '#ffffff',
                background: '#5A9E22',
                padding: '14px 32px',
                borderRadius: '10px',
                textDecoration: 'none',
                letterSpacing: '0.03em',
                transition: 'background 0.25s, transform 0.25s, box-shadow 0.25s',
                display: 'inline-block',
                boxShadow: '0 4px 18px rgba(90,158,34,0.3)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget;
                el.style.background = '#4A2111';
                el.style.transform = 'translateY(-2px)';
                el.style.boxShadow = '0 8px 24px rgba(74,33,17,0.25)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget;
                el.style.background = '#5A9E22';
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = '0 4px 18px rgba(90,158,34,0.3)';
              }}
            >
              Our Services
            </a>
            <a
              href="/about"
              style={{
                fontFamily: "'Lato', sans-serif",
                fontWeight: 700,
                fontSize: '0.95rem',
                color: '#4A2111',
                background: 'transparent',
                padding: '13px 32px',
                borderRadius: '10px',
                textDecoration: 'none',
                letterSpacing: '0.03em',
                border: '2px solid #4A2111',
                transition: 'background 0.25s, color 0.25s, transform 0.25s',
                display: 'inline-block',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget;
                el.style.background = '#4A2111';
                el.style.color = '#ffffff';
                el.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget;
                el.style.background = 'transparent';
                el.style.color = '#4A2111';
                el.style.transform = 'translateY(0)';
              }}
            >
              About Us
            </a>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section style={{ background: '#fdfaf6', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p
              style={{
                fontFamily: "'Lato', sans-serif",
                fontWeight: 600,
                fontSize: '0.72rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: '#5A9E22',
                marginBottom: '10px',
              }}
            >
              Trusted by Families Across Chennai
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.8rem,4vw,2.8rem)',
                fontWeight: 700,
                color: '#4A2111',
              }}
            >
              Why Choose Abhishag?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map(({ emoji, title, desc }) => (
              <div
                key={title}
                style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  padding: '40px 32px',
                  borderLeft: '5px solid #5A9E22',
                  boxShadow: '0 4px 24px rgba(74,33,17,0.06)',
                  cursor: 'pointer',
                  transition: 'transform 0.35s ease, box-shadow 0.35s ease',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget;
                  el.style.transform = 'translateY(-6px)';
                  el.style.boxShadow = '0 16px 40px rgba(74,33,17,0.13)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget;
                  el.style.transform = 'translateY(0)';
                  el.style.boxShadow = '0 4px 24px rgba(74,33,17,0.06)';
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '18px' }}>{emoji}</div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    color: '#4A2111',
                    marginBottom: '12px',
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    color: '#4a4a6a',
                    fontSize: '0.95rem',
                    lineHeight: 1.75,
                  }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          background: 'linear-gradient(135deg, #4A2111 0%, #7a3920 50%, #5A9E22 100%)',
          padding: '88px 0',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative blobs */}
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.1 }}>
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        </div>
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.8rem,4vw,2.8rem)',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '16px',
              lineHeight: 1.2,
            }}
          >
            Ready to Join Our Community?
          </h2>
          <p
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: '1.1rem',
              color: 'rgba(255,255,255,0.82)',
              marginBottom: '40px',
              fontWeight: 300,
            }}
          >
            Contact us today to learn more about our services and schedule a home visit.
          </p>
          <a
            href="/about"
            style={{
              fontFamily: "'Lato', sans-serif",
              fontWeight: 700,
              fontSize: '1rem',
              color: '#4A2111',
              background: '#ffffff',
              padding: '16px 40px',
              borderRadius: '12px',
              textDecoration: 'none',
              letterSpacing: '0.03em',
              transition: 'transform 0.25s, box-shadow 0.25s',
              display: 'inline-block',
              boxShadow: '0 6px 24px rgba(0,0,0,0.15)',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget;
              el.style.transform = 'translateY(-3px) scale(1.04)';
              el.style.boxShadow = '0 12px 32px rgba(0,0,0,0.22)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget;
              el.style.transform = 'translateY(0) scale(1)';
              el.style.boxShadow = '0 6px 24px rgba(0,0,0,0.15)';
            }}
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
