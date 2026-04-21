'use client';

import { useState, useEffect } from 'react';

const teamMembers = [
  { id: 1, name: "Team Member 1", role: "Senior Caregiver", description: "Dedicated professional with extensive experience in elderly care.", icon: "👩‍⚕️" },
  { id: 2, name: "Team Member 2", role: "Healthcare Coordinator", description: "Ensures quality healthcare delivery and wellness programs.", icon: "👨‍⚕️" },
  { id: 3, name: "Team Member 3", role: "Activities Organizer", description: "Creates engaging recreational and therapeutic activities.", icon: "👨‍🎓" },
];

const coreValues = [
  { id: 1, title: "Compassion", icon: "🤝", description: "We care for our residents with empathy and genuine concern for their wellbeing.", color: "#5A9E22" },
  { id: 2, title: "Excellence", icon: "⭐", description: "We maintain high standards in all aspects of our care delivery.", color: "#4AAED6" },
  { id: 3, title: "Respect", icon: "🙏", description: "We honor the dignity and autonomy of every individual in our care.", color: "#4A2111" },
  { id: 4, title: "Growth", icon: "🌱", description: "We foster continuous improvement and personal development.", color: "#2D2873" },
];

const whyUs = [
  { title: "Professional & Trained Staff", desc: "All team members are trained, certified, and dedicated to providing exceptional care." },
  { title: "Personalized Care Plans", desc: "We develop individualized care plans tailored to each resident's specific needs and preferences." },
  { title: "Safe & Comfortable Facility", desc: "Our center is equipped with modern amenities and safety features designed for elderly care." },
  { title: "Family-Centric Approach", desc: "We maintain open communication with families and involve them in care decisions." },
];

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeValue, setActiveValue] = useState<number | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ background: '#fdfaf6', minHeight: '100vh' }}>

      {/* ── Page Header ── */}
      <section
        style={{
          background: 'linear-gradient(135deg, #2D2873 0%, #4A2111 55%, #7a3920 100%)',
          padding: '72px 0 56px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.08 }}>
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl animate-pulse" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p style={{
            fontFamily: "'Lato', sans-serif", fontWeight: 600, fontSize: '0.7rem',
            letterSpacing: '0.28em', textTransform: 'uppercase', color: '#a8e063',
            marginBottom: '12px',
            opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}>
            Our Story
          </p>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', fontWeight: 700,
            color: '#ffffff', lineHeight: 1.12, marginBottom: '16px',
            opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s',
          }}>
            About Abhishag
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", fontSize: '1.1rem',
            color: 'rgba(255,255,255,0.78)', fontWeight: 300, maxWidth: '560px',
            opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s',
          }}>
            Our mission, vision, and commitment to excellence in elderly care
          </p>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ padding: '80px 16px' }}>
        <div className="text-center mb-14">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 700, color: '#4A2111' }}>
            Our Story
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateX(0)' : 'translateX(-24px)', transition: 'opacity 0.9s ease, transform 0.9s ease' }}>
            {[
              "Abhishag was founded with a simple yet powerful mission: to provide compassionate, professional care for elderly individuals while preserving their dignity and independence.",
              "We believe that aging is a natural part of life, and every senior deserves to live with respect, comfort, and access to quality healthcare services.",
              "Our team works tirelessly to create an environment where our residents can thrive, maintain meaningful relationships, and enjoy their daily lives to the fullest.",
            ].map((text, i) => (
              <p key={i} style={{ fontFamily: "'Lato', sans-serif", fontSize: '1rem', color: '#4a4a6a', lineHeight: 1.85, marginBottom: '18px', fontWeight: 400 }}>
                {text}
              </p>
            ))}
          </div>
          <div
            style={{
              background: 'linear-gradient(135deg, #e8f5d8 0%, #f5ede8 100%)',
              borderRadius: '20px', padding: '44px 36px',
              borderLeft: '5px solid #5A9E22',
              boxShadow: '0 8px 32px rgba(74,33,17,0.1)',
              opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateX(0)' : 'translateX(24px)',
              transition: 'opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s',
            }}
          >
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', fontWeight: 700, color: '#4A2111', marginBottom: '14px' }}>Our Tagline</h3>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', fontWeight: 700, color: '#5A9E22', fontStyle: 'italic', marginBottom: '18px', lineHeight: 1.25 }}>
              &quot;Abundance of Life&quot;
            </p>
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.95rem', color: '#4a4a6a', lineHeight: 1.8 }}>
              This reflects our core belief that every day is an opportunity to help our seniors experience joy, wellness, and meaningful connections with their community.
            </p>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section style={{ background: '#ffffff', padding: '72px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { title: "Our Mission", text: "To provide exceptional, compassionate daycare services that enhance the quality of life for elderly individuals through professional care, engaging activities, and a supportive community.", accent: '#5A9E22' },
              { title: "Our Vision", text: "To be the most trusted and respected elderly daycare center in the community, known for our commitment to excellence, innovation in care delivery, and genuine love for our residents.", accent: '#2D2873' },
            ].map(({ title, text, accent }) => (
              <div
                key={title}
                style={{
                  background: '#fdfaf6', borderRadius: '16px', padding: '40px 32px',
                  borderLeft: `5px solid ${accent}`,
                  boxShadow: '0 4px 20px rgba(74,33,17,0.07)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 18px 42px rgba(74,33,17,0.13)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(74,33,17,0.07)'; }}
              >
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, color: '#4A2111', marginBottom: '14px' }}>{title}</h3>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.97rem', color: '#4a4a6a', lineHeight: 1.85 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ padding: '80px 16px' }}>
        <div className="text-center mb-14">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 700, color: '#4A2111' }}>Our Core Values</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValues.map((value, index) => (
            <div
              key={value.id}
              onClick={() => setActiveValue(activeValue === value.id ? null : value.id)}
              style={{
                background: activeValue === value.id ? '#fdf8f2' : '#ffffff',
                borderRadius: '16px', padding: '36px 24px', textAlign: 'center',
                borderTop: `5px solid ${value.color}`,
                boxShadow: activeValue === value.id ? '0 16px 40px rgba(74,33,17,0.14)' : '0 4px 20px rgba(74,33,17,0.07)',
                cursor: 'pointer',
                animation: isVisible ? `fadeInUp 0.6s ease-out ${index * 0.08}s both` : 'none',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; }}
            >
              <div style={{ fontSize: '2.8rem', marginBottom: '14px' }}>{value.icon}</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', fontWeight: 700, color: '#4A2111', marginBottom: '10px' }}>{value.title}</h3>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.87rem', color: '#4a4a6a', lineHeight: 1.7, opacity: activeValue === value.id ? 1 : 0.75 }}>
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Team ── */}
      <section style={{ background: '#ffffff', padding: '72px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 700, color: '#4A2111' }}>Our Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                style={{
                  background: '#fdfaf6', borderRadius: '16px', padding: '40px 28px',
                  textAlign: 'center', borderTop: '5px solid #5A9E22',
                  boxShadow: '0 4px 20px rgba(74,33,17,0.07)',
                  animation: isVisible ? `fadeInUp 0.6s ease-out ${index * 0.1}s both` : 'none',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 18px 42px rgba(74,33,17,0.13)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(74,33,17,0.07)'; }}
              >
                <div style={{ width: '88px', height: '88px', background: 'linear-gradient(135deg, #5A9E22, #4A2111)', borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 6px 20px rgba(90,158,34,0.3)' }}>
                  <span style={{ fontSize: '2.8rem' }}>{member.icon}</span>
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.15rem', fontWeight: 700, color: '#4A2111', marginBottom: '6px' }}>{member.name}</h3>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.85rem', fontWeight: 700, color: '#5A9E22', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '12px' }}>{member.role}</p>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.9rem', color: '#4a4a6a', lineHeight: 1.7 }}>{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ padding: '80px 16px' }}>
        <div className="text-center mb-14">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 700, color: '#4A2111' }}>Why Choose Abhishag?</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {whyUs.map(({ title, desc }, index) => (
            <div
              key={index}
              style={{
                background: '#ffffff', borderRadius: '14px', padding: '28px 32px',
                borderLeft: '5px solid #5A9E22',
                boxShadow: '0 4px 16px rgba(74,33,17,0.06)',
                display: 'flex', alignItems: 'flex-start', gap: '20px',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateX(6px)'; e.currentTarget.style.boxShadow = '0 10px 32px rgba(74,33,17,0.12)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateX(0)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(74,33,17,0.06)'; }}
            >
              <span style={{ fontSize: '1.5rem', color: '#5A9E22', flexShrink: 0, marginTop: '2px' }}>✓</span>
              <div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', fontWeight: 700, color: '#4A2111', marginBottom: '6px' }}>{title}</h3>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.93rem', color: '#4a4a6a', lineHeight: 1.75 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section style={{ background: 'linear-gradient(135deg, #4A2111 0%, #2D2873 100%)', padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.08 }}>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-white rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        </div>
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 700, color: '#ffffff', marginBottom: '16px' }}>
            Get in Touch With Us
          </h2>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', marginBottom: '36px', fontWeight: 300 }}>
            We&apos;d love to hear from you and answer any questions about our services.
          </p>
          <a
            href="mailto:contact@abhishag.com"
            style={{
              fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: '0.95rem',
              color: '#4A2111', background: '#ffffff',
              padding: '15px 38px', borderRadius: '10px', textDecoration: 'none',
              letterSpacing: '0.03em', display: 'inline-block',
              boxShadow: '0 6px 24px rgba(0,0,0,0.18)',
              transition: 'transform 0.25s, box-shadow 0.25s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)'; e.currentTarget.style.boxShadow = '0 14px 32px rgba(0,0,0,0.25)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,0,0,0.18)'; }}
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
}
