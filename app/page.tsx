'use client';

import { useEffect, useState } from 'react';
import CinematicHero from './components/CinematicHero';
import IntroAnimation from './components/IntroAnimation';

export default function Home() {
  // ── Intro animation state ──
  const [introDone, setIntroDone] = useState(false);

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
      desc: 'A secure and comfortable facility designed specifically for the needs of our elderly residents.',
    },
    {
      emoji: '🌟',
      title: 'Holistic Wellness',
      desc: 'We focus on physical health, mental wellbeing, and social engagement for a better quality of life.',
    },
  ];

  const previewServices = [
    {
      id: 1,
      title: 'Caregiver Services',
      desc: 'Professional caregiver support for daily living activities, companionship, and personal care.',
      icon: '🏥',
      image: '/images/Abishag_img/1. Caregiver Services.png',
    },
    {
      id: 2,
      title: 'Nursing Services',
      desc: 'Skilled nursing care at home including wound care, medication management, and post-operative support.',
      icon: '❤️',
      image: '/images/Abishag_img/11. Care Coordination.png',
    },
    {
      id: 3,
      title: 'Hospice Care',
      desc: 'Compassionate end-of-life care focused on comfort, dignity, and emotional support.',
      icon: '🕊️',
      image: '/images/Abishag_img/9. Medical Equipment Setup.png',
    },
    {
      id: 4,
      title: 'Dementia Care',
      desc: 'Specialized memory and cognitive care for patients with dementia or Alzheimer\'s.',
      icon: '🧠',
      image: '/images/Abishag_img/13. Pharmacy Delivery.png',
    },
    {
      id: 5,
      title: 'Allied Health Visit',
      desc: 'Home visits by allied health professionals including physiotherapists and occupational therapists.',
      icon: '🧘',
      image: '/images/Abishag_img/12. Lab Sample Collection.png',
    },
    {
      id: 6,
      title: 'Nurse Visit (On-demand)',
      desc: 'On-call and scheduled nurse visits for health monitoring, medication administration, and emergency assessments.',
      icon: '🚐',
      image: '/images/Abishag_img/3. Hospice Care.png',
    },
  ];

  return (
    <div style={{ background: '#F4F1ED' }}>

      {/* ── INTRO ANIMATION ── */}
      {!introDone && (
        <IntroAnimation onComplete={() => setIntroDone(true)} />
      )}

      {/* ── CINEMATIC HERO ── */}
      <CinematicHero />

      {/* ── INTRO STRIP ── */}
      <section style={{ background: '#ffffff', padding: '80px 0', borderBottom: '1px solid #DDD5CC' }}>
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
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 700,
              fontSize: '0.72rem',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: '#6AB04C',
              marginBottom: '14px',
            }}
          >
            Abundance of Life
          </p>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
              fontWeight: 700,
              color: '#3D1A0A',
              lineHeight: 1.12,
              marginBottom: '20px',
            }}
          >
            Welcome to{' '}
            <span style={{ color: '#6AB04C' }}>Abishag</span>
          </h1>
          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: '1.05rem',
              color: '#5C3D2A',
              lineHeight: 1.85,
              maxWidth: '640px',
              margin: '0 auto 40px',
              fontWeight: 400,
            }}
          >
            Providing compassionate, professional daycare and home health services for elderly individuals.
            We focus on health, wellness, and creating a nurturing environment for our seniors.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="/services"
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 700,
                fontSize: '0.95rem',
                color: '#ffffff',
                background: '#6AB04C',
                padding: '14px 34px',
                borderRadius: '10px',
                textDecoration: 'none',
                letterSpacing: '0.04em',
                transition: 'background 0.25s, transform 0.25s, box-shadow 0.25s',
                display: 'inline-block',
                boxShadow: '0 4px 20px rgba(106,176,76,0.35)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget;
                el.style.background = '#3D1A0A';
                el.style.transform = 'translateY(-2px)';
                el.style.boxShadow = '0 8px 26px rgba(61,26,10,0.3)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget;
                el.style.background = '#6AB04C';
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = '0 4px 20px rgba(106,176,76,0.35)';
              }}
            >
              Our Services
            </a>
            <a
              href="/about"
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 700,
                fontSize: '0.95rem',
                color: '#3D1A0A',
                background: 'transparent',
                padding: '13px 34px',
                borderRadius: '10px',
                textDecoration: 'none',
                letterSpacing: '0.04em',
                border: '2px solid #3D1A0A',
                transition: 'background 0.25s, color 0.25s, transform 0.25s',
                display: 'inline-block',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget;
                el.style.background = '#3D1A0A';
                el.style.color = '#ffffff';
                el.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget;
                el.style.background = 'transparent';
                el.style.color = '#3D1A0A';
                el.style.transform = 'translateY(0)';
              }}
            >
              About Us
            </a>
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section style={{ background: '#F4F1ED', padding: '80px 0 60px' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 700,
                fontSize: '0.7rem',
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: '#6AB04C',
                marginBottom: '12px',
              }}
            >
              What We Offer
            </p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(1.9rem, 4vw, 3rem)',
                fontWeight: 700,
                color: '#3D1A0A',
              }}
            >
              Our Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {previewServices.map((svc, index) => (
              <a
                key={svc.id}
                href="/services"
                style={{
                  background: '#ffffff',
                  borderRadius: '18px',
                  overflow: 'hidden',
                  borderTop: '5px solid #6AB04C',
                  boxShadow: '0 4px 22px rgba(61,26,10,0.07)',
                  cursor: 'pointer',
                  transition: 'transform 0.35s ease, box-shadow 0.35s ease',
                  display: 'block',
                  textDecoration: 'none',
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget;
                  el.style.transform = 'translateY(-7px)';
                  el.style.boxShadow = '0 18px 44px rgba(61,26,10,0.13)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget;
                  el.style.transform = 'translateY(0)';
                  el.style.boxShadow = '0 4px 22px rgba(61,26,10,0.07)';
                }}
              >
                {/* Card Image */}
                <div style={{ height: '190px', overflow: 'hidden' }}>
                  <img
                    src={svc.image}
                    alt={svc.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.07)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                </div>
                {/* Card Body */}
                <div style={{ padding: '28px 26px' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '10px' }}>{svc.icon}</div>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '1.3rem',
                      fontWeight: 700,
                      color: '#3D1A0A',
                      marginBottom: '10px',
                    }}
                  >
                    {svc.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Nunito', sans-serif",
                      color: '#5C3D2A',
                      fontSize: '0.9rem',
                      lineHeight: 1.8,
                    }}
                  >
                    {svc.desc}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center" style={{ marginTop: '52px' }}>
            <a
              href="/services"
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 800,
                fontSize: '0.97rem',
                color: '#ffffff',
                background: '#3D1A0A',
                padding: '16px 48px',
                borderRadius: '12px',
                textDecoration: 'none',
                letterSpacing: '0.04em',
                transition: 'background 0.25s, transform 0.25s, box-shadow 0.25s',
                display: 'inline-block',
                boxShadow: '0 6px 26px rgba(61,26,10,0.25)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget;
                el.style.background = '#6AB04C';
                el.style.transform = 'translateY(-3px) scale(1.04)';
                el.style.boxShadow = '0 14px 34px rgba(106,176,76,0.35)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget;
                el.style.background = '#3D1A0A';
                el.style.transform = 'translateY(0) scale(1)';
                el.style.boxShadow = '0 6px 26px rgba(61,26,10,0.25)';
              }}
            >
              View All Services →
            </a>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section style={{ background: '#F4F1ED', padding: '88px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 700,
                fontSize: '0.7rem',
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: '#4ABED6',
                marginBottom: '12px',
              }}
            >
              Trusted by Families Across Chennai
            </p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(1.9rem, 4vw, 3rem)',
                fontWeight: 700,
                color: '#3D1A0A',
              }}
            >
              Why Choose Abishag?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map(({ emoji, title, desc }) => (
              <div
                key={title}
                style={{
                  background: '#ffffff',
                  borderRadius: '18px',
                  padding: '44px 32px',
                  borderLeft: '5px solid #6AB04C',
                  boxShadow: '0 4px 28px rgba(61,26,10,0.07)',
                  cursor: 'pointer',
                  transition: 'transform 0.35s ease, box-shadow 0.35s ease',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget;
                  el.style.transform = 'translateY(-7px)';
                  el.style.boxShadow = '0 18px 44px rgba(61,26,10,0.13)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget;
                  el.style.transform = 'translateY(0)';
                  el.style.boxShadow = '0 4px 28px rgba(61,26,10,0.07)';
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '18px' }}>{emoji}</div>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '1.45rem',
                    fontWeight: 700,
                    color: '#3D1A0A',
                    marginBottom: '12px',
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    color: '#5C3D2A',
                    fontSize: '0.95rem',
                    lineHeight: 1.8,
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
          background: 'linear-gradient(135deg, #3D1A0A 0%, #6B3020 48%, #4A8A30 100%)',
          padding: '96px 0',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.09 }}>
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        </div>
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '18px',
              lineHeight: 1.18,
            }}
          >
            Ready to Join Our Community?
          </h2>
          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: '1.08rem',
              color: 'rgba(255,255,255,0.82)',
              marginBottom: '44px',
              fontWeight: 300,
            }}
          >
            Contact us today to learn more about our services and schedule a visit.
          </p>
          <a
            href="/about"
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 800,
              fontSize: '0.97rem',
              color: '#3D1A0A',
              background: '#ffffff',
              padding: '16px 42px',
              borderRadius: '12px',
              textDecoration: 'none',
              letterSpacing: '0.04em',
              transition: 'transform 0.25s, box-shadow 0.25s',
              display: 'inline-block',
              boxShadow: '0 6px 26px rgba(0,0,0,0.17)',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget;
              el.style.transform = 'translateY(-3px) scale(1.04)';
              el.style.boxShadow = '0 14px 34px rgba(0,0,0,0.24)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget;
              el.style.transform = 'translateY(0) scale(1)';
              el.style.boxShadow = '0 6px 26px rgba(0,0,0,0.17)';
            }}
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
