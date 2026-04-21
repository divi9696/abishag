'use client';

import { useState, useEffect } from 'react';

const services = [
  {
    id: 1,
    title: "Daily Care & Activities",
    description: "Comprehensive daily care routines including meals, personal hygiene, and recreational activities designed to maintain engagement and wellness.",
    icon: "🏥",
    details: "Morning exercises, meal preparation, afternoon games, and social activities",
  },
  {
    id: 2,
    title: "Health Monitoring",
    description: "Regular health check-ups, medication management, and vital signs monitoring by trained healthcare professionals.",
    icon: "❤️",
    details: "Blood pressure monitoring, medication schedules, health assessments, emergency support",
  },
  {
    id: 3,
    title: "Nutrition & Meal Services",
    description: "Specially prepared meals considering dietary requirements, nutritional needs, and food preferences of our seniors.",
    icon: "🍽️",
    details: "Balanced meals, dietary accommodations, hydration monitoring, special diets",
  },
  {
    id: 4,
    title: "Social & Recreational Programs",
    description: "Engaging activities, games, cultural programs, and entertainment to promote social interaction and mental stimulation.",
    icon: "🎭",
    details: "Games, music therapy, movie nights, social gatherings, and cultural events",
  },
  {
    id: 5,
    title: "Physical & Wellness Activities",
    description: "Gentle exercises, yoga, and wellness programs designed to maintain mobility and improve overall health.",
    icon: "🧘",
    details: "Yoga sessions, stretching, walking programs, mobility exercises, wellness workshops",
  },
  {
    id: 6,
    title: "Transportation Services",
    description: "Safe and comfortable transportation for medical appointments and other necessary outings.",
    icon: "🚐",
    details: "Doctor visits, shopping trips, recreational outings, hospital appointments",
  },
];

const highlights = [
  {
    title: "Flexible Scheduling",
    desc: "We offer flexible enrollment options including full-day, half-day, and customized schedules to meet the unique needs of each family.",
    points: ["Full-day programs", "Half-day programs", "Customized schedules", "Weekend services available"],
  },
  {
    title: "Qualified Staff",
    desc: "Our team consists of trained healthcare professionals and caregivers committed to providing excellent care and support.",
    points: ["Certified caregivers", "Healthcare professionals", "Regular training programs", "Background-verified staff"],
  },
];

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ background: '#fdfaf6', minHeight: '100vh' }}>

      {/* ── Page Header ── */}
      <section
        style={{
          background: 'linear-gradient(135deg, #4A2111 0%, #7a3920 55%, #5A9E22 100%)',
          padding: '72px 0 56px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.08 }}>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p
            style={{
              fontFamily: "'Lato', sans-serif",
              fontWeight: 600,
              fontSize: '0.7rem',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: '#a8e063',
              marginBottom: '12px',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease',
            }}
          >
            What We Offer
          </p>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.12,
              marginBottom: '16px',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s',
            }}
          >
            Our Services
          </h1>
          <p
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: '1.1rem',
              color: 'rgba(255,255,255,0.78)',
              fontWeight: 300,
              maxWidth: '560px',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s',
            }}
          >
            Comprehensive care services designed to enhance the quality of life for our elderly residents
          </p>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ padding: '72px 16px' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              onClick={() => setExpandedCard(expandedCard === service.id ? null : service.id)}
              style={{
                background: '#ffffff',
                borderRadius: '16px',
                padding: '36px 28px',
                borderTop: '5px solid #5A9E22',
                boxShadow: expandedCard === service.id
                  ? '0 20px 48px rgba(74,33,17,0.15)'
                  : '0 4px 20px rgba(74,33,17,0.07)',
                cursor: 'pointer',
                transition: 'transform 0.35s ease, box-shadow 0.35s ease',
                opacity: isVisible ? 1 : 0,
                animation: isVisible ? `fadeInUp 0.6s ease-out ${index * 0.08}s both` : 'none',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget;
                el.style.transform = 'translateY(-6px)';
                el.style.boxShadow = '0 20px 48px rgba(74,33,17,0.15)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget;
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = expandedCard === service.id
                  ? '0 20px 48px rgba(74,33,17,0.15)'
                  : '0 4px 20px rgba(74,33,17,0.07)';
              }}
            >
              <div style={{ fontSize: '2.8rem', marginBottom: '16px' }}>{service.icon}</div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#4A2111',
                  marginBottom: '12px',
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Lato', sans-serif",
                  color: '#4a4a6a',
                  fontSize: '0.93rem',
                  lineHeight: 1.75,
                  marginBottom: '16px',
                }}
              >
                {service.description}
              </p>

              {/* Expandable Details */}
              <div
                style={{
                  maxHeight: expandedCard === service.id ? '120px' : '0',
                  opacity: expandedCard === service.id ? 1 : 0,
                  overflow: 'hidden',
                  transition: 'max-height 0.35s ease, opacity 0.35s ease',
                }}
              >
                <div style={{ paddingTop: '14px', borderTop: '1px solid #e8f5d8' }}>
                  <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.85rem', color: '#4a4a6a', lineHeight: 1.7 }}>
                    <strong style={{ color: '#5A9E22' }}>What&apos;s Included:</strong><br />
                    {service.details}
                  </p>
                </div>
              </div>

              <div
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  color: '#5A9E22',
                  letterSpacing: '0.03em',
                  marginTop: '12px',
                  transition: 'transform 0.2s',
                }}
              >
                {expandedCard === service.id ? '▲ Less details' : '▶ More details'}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Service Highlights ── */}
      <section style={{ background: '#ffffff', padding: '72px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.8rem,4vw,2.8rem)',
                fontWeight: 700,
                color: '#4A2111',
              }}
            >
              Service Highlights
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {highlights.map(({ title, desc, points }) => (
              <div
                key={title}
                style={{
                  background: '#fdfaf6',
                  borderRadius: '16px',
                  padding: '36px 32px',
                  borderLeft: '5px solid #4A2111',
                  boxShadow: '0 4px 20px rgba(74,33,17,0.07)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget;
                  el.style.transform = 'translateY(-4px)';
                  el.style.boxShadow = '0 16px 40px rgba(74,33,17,0.13)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget;
                  el.style.transform = 'translateY(0)';
                  el.style.boxShadow = '0 4px 20px rgba(74,33,17,0.07)';
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    color: '#4A2111',
                    marginBottom: '12px',
                  }}
                >
                  {title}
                </h3>
                <p style={{ fontFamily: "'Lato', sans-serif", color: '#4a4a6a', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: '18px' }}>
                  {desc}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {points.map(pt => (
                    <li key={pt} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: "'Lato', sans-serif", color: '#4a4a6a', fontSize: '0.93rem' }}>
                      <span style={{ color: '#5A9E22', fontWeight: 700, fontSize: '1.1rem' }}>✓</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          background: 'linear-gradient(135deg, #2D2873 0%, #4A2111 100%)',
          padding: '80px 0',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.09 }}>
          <div className="absolute top-0 right-0 w-80 h-80 bg-white rounded-full filter blur-3xl animate-pulse" />
        </div>
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.8rem,4vw,2.8rem)',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '16px',
            }}
          >
            Interested in Our Services?
          </h2>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', marginBottom: '36px', fontWeight: 300 }}>
            Contact us today to discuss which services best fit your loved one&apos;s needs.
          </p>
          <a
            href="/about"
            style={{
              fontFamily: "'Lato', sans-serif",
              fontWeight: 700,
              fontSize: '0.95rem',
              color: '#4A2111',
              background: '#ffffff',
              padding: '15px 38px',
              borderRadius: '10px',
              textDecoration: 'none',
              letterSpacing: '0.03em',
              display: 'inline-block',
              boxShadow: '0 6px 24px rgba(0,0,0,0.18)',
              transition: 'transform 0.25s, box-shadow 0.25s',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget;
              el.style.transform = 'translateY(-3px) scale(1.05)';
              el.style.boxShadow = '0 12px 32px rgba(0,0,0,0.25)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget;
              el.style.transform = 'translateY(0) scale(1)';
              el.style.boxShadow = '0 6px 24px rgba(0,0,0,0.18)';
            }}
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
