'use client';

import { useState, useEffect } from 'react';
import { UserCheck, ClipboardCheck, ShieldCheck, HeartHandshake } from 'lucide-react';

const teamMembers = [
  { id: 1, name: "Team Member 1", role: "Senior Caregiver", description: "Dedicated professional with extensive experience in elderly care.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/></svg> },
  { id: 2, name: "Team Member 2", role: "Healthcare Coordinator", description: "Ensures quality healthcare delivery and wellness programs.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M9 14h6"/><path d="M12 11v6"/></svg> },
  { id: 3, name: "Team Member 3", role: "Activities Organizer", description: "Creates engaging recreational and therapeutic activities.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg> },
];

const coreValues = [
  { id: 1, title: "Compassion", icon: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#6AB04C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"/></svg>, description: "We care for our residents with empathy and genuine concern for their wellbeing.", color: "#6AB04C" },
  { id: 2, title: "Excellence", icon: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#4ABED6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>, description: "We maintain high standards in all aspects of our care delivery.", color: "#4ABED6" },
  { id: 3, title: "Respect", icon: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#3D1A0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>, description: "We honor the dignity and autonomy of every individual in our care.", color: "#3D1A0A" },
  { id: 4, title: "Growth", icon: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#2D2873" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"/></svg>, description: "We foster continuous improvement and personal development.", color: "#2D2873" },
];

const whyUs = [
  { title: "Professional & Trained Staff", desc: "All team members are trained, certified, and dedicated to providing exceptional care.", icon: <UserCheck size={28} color="#6AB04C" /> },
  { title: "Personalized Care Plans", desc: "We develop individualized care plans tailored to each resident's specific needs and preferences.", icon: <ClipboardCheck size={28} color="#6AB04C" /> },
  { title: "Safe & Comfortable Facility", desc: "Our center is equipped with modern amenities and safety features designed for elderly care.", icon: <ShieldCheck size={28} color="#6AB04C" /> },
  { title: "Family-Centric Approach", desc: "We maintain open communication with families and involve them in care decisions.", icon: <HeartHandshake size={28} color="#6AB04C" /> },
];

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeValue, setActiveValue] = useState<number | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ background: '#F4F1ED', minHeight: '100vh' }}>

      {/* ── Page Header ── */}
      <section
        className="py-16 md:py-20"
        style={{
          background: 'linear-gradient(135deg, #2D2873 0%, #3D1A0A 55%, #6B3020 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.08 }}>
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl animate-pulse" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p style={{
            fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: '0.7rem',
            letterSpacing: '0.28em', textTransform: 'uppercase', color: '#6AB04C',
            marginBottom: '12px',
            opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}>
            Our Story
          </p>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 700,
            color: '#ffffff', lineHeight: 1.1, marginBottom: '16px',
            opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s',
          }}>
            About Abishag
          </h1>
          <p style={{
            fontFamily: "'Nunito', sans-serif", fontSize: '1.05rem',
            color: 'rgba(255,255,255,0.78)', fontWeight: 300, maxWidth: '560px',
            opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s',
          }}>
            Our mission, vision, and commitment to excellence in elderly care
          </p>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-14">
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 700, color: '#3D1A0A' }}>
            Our Story
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateX(0)' : 'translateX(-24px)', transition: 'opacity 0.9s ease, transform 0.9s ease' }}>
            {[
              "Abishag was founded with a simple yet powerful mission: to provide compassionate, professional care for elderly individuals while preserving their dignity and independence.",
              "We believe that aging is a natural part of life, and every senior deserves to live with respect, comfort, and access to quality healthcare services.",
              "Our team works tirelessly to create an environment where our residents can thrive, maintain meaningful relationships, and enjoy their daily lives to the fullest.",
            ].map((text, i) => (
              <p key={i} style={{ fontFamily: "'Nunito', sans-serif", fontSize: '1rem', color: '#5C3D2A', lineHeight: 1.9, marginBottom: '18px', fontWeight: 400 }}>
                {text}
              </p>
            ))}
          </div>
          <div
            className="p-8 md:p-12"
            style={{
              background: 'linear-gradient(135deg, #EAF5E0 0%, #F5EDE6 100%)',
              borderRadius: '20px',
              borderLeft: '5px solid #6AB04C',
              boxShadow: '0 8px 36px rgba(61,26,10,0.1)',
              opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateX(0)' : 'translateX(24px)',
              transition: 'opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s',
            }}
          >
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', fontWeight: 700, color: '#3D1A0A', marginBottom: '16px' }}>Our Commitment</h3>
            <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: '0.95rem', color: '#5C3D2A', lineHeight: 1.85 }}>
              We believe that every day is an opportunity to help our seniors experience joy, wellness, and meaningful connections with their community through dedicated, professional support.
            </p>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="py-16 md:py-20" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { title: "Our Mission", text: "To provide exceptional, compassionate daycare services that enhance the quality of life for elderly individuals through professional care, engaging activities, and a supportive community.", accent: '#6AB04C' },
              { title: "Our Vision", text: "To be the most trusted and respected elderly daycare center in the community, known for our commitment to excellence, innovation in care delivery, and genuine love for our residents.", accent: '#2D2873' },
            ].map(({ title, text, accent }) => (
              <div
                key={title}
                className="p-8 md:p-11"
                style={{
                  background: '#F4F1ED', borderRadius: '18px',
                  borderLeft: `5px solid ${accent}`,
                  boxShadow: '0 4px 22px rgba(61,26,10,0.07)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 20px 46px rgba(61,26,10,0.13)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 22px rgba(61,26,10,0.07)'; }}
              >
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.55rem', fontWeight: 700, color: '#3D1A0A', marginBottom: '14px' }}>{title}</h3>
                <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: '0.97rem', color: '#5C3D2A', lineHeight: 1.88 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-14">
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 700, color: '#3D1A0A' }}>Our Core Values</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValues.map((value, index) => (
            <div
              key={value.id}
              onClick={() => setActiveValue(activeValue === value.id ? null : value.id)}
              className="p-6 md:p-9"
              style={{
                background: activeValue === value.id ? '#FDF8F2' : '#ffffff',
                borderRadius: '18px', textAlign: 'center',
                borderTop: `5px solid ${value.color}`,
                boxShadow: activeValue === value.id ? '0 18px 44px rgba(61,26,10,0.15)' : '0 4px 22px rgba(61,26,10,0.07)',
                cursor: 'pointer',
                animation: isVisible ? `fadeInUp 0.6s ease-out ${index * 0.08}s both` : 'none',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; }}
            >
              <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>{value.icon}</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', fontWeight: 700, color: '#3D1A0A', marginBottom: '10px' }}>{value.title}</h3>
              <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: '0.87rem', color: '#5C3D2A', lineHeight: 1.75, opacity: activeValue === value.id ? 1 : 0.75 }}>
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Team ── */}
      <section className="py-16 md:py-20" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 700, color: '#3D1A0A' }}>Our Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className="p-8 md:p-11"
                style={{
                  background: '#F4F1ED', borderRadius: '18px',
                  textAlign: 'center', borderTop: '5px solid #6AB04C',
                  boxShadow: '0 4px 22px rgba(61,26,10,0.07)',
                  animation: isVisible ? `fadeInUp 0.6s ease-out ${index * 0.1}s both` : 'none',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 20px 46px rgba(61,26,10,0.13)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 22px rgba(61,26,10,0.07)'; }}
              >
                <div style={{ width: '90px', height: '90px', background: 'linear-gradient(135deg, #6AB04C, #3D1A0A)', borderRadius: '50%', margin: '0 auto 22px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 6px 22px rgba(106,176,76,0.35)' }}>
                  {member.icon}
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', fontWeight: 700, color: '#3D1A0A', marginBottom: '6px' }}>{member.name}</h3>
                <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: '0.8rem', fontWeight: 700, color: '#6AB04C', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>{member.role}</p>
                <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: '0.9rem', color: '#5C3D2A', lineHeight: 1.75 }}>{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-14">
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 700, color: '#3D1A0A' }}>Why Choose Abishag?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyUs.map(({ title, desc, icon }, index) => (
            <div
              key={index}
              className="p-6 md:p-8"
              style={{
                background: '#ffffff', borderRadius: '16px',
                borderTop: '5px solid #6AB04C',
                boxShadow: '0 4px 18px rgba(61,26,10,0.06)',
                display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer',
                height: '100%',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 12px 36px rgba(61,26,10,0.12)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 18px rgba(61,26,10,0.06)'; }}
            >
              <div style={{ background: '#EAF5E0', padding: '14px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '4px' }}>
                {icon}
              </div>
              <div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.3rem', fontWeight: 700, color: '#3D1A0A', marginBottom: '8px', lineHeight: 1.2 }}>{title}</h3>
                <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: '0.95rem', color: '#5C3D2A', lineHeight: 1.7 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section className="py-16 md:py-24" style={{ background: 'linear-gradient(135deg, #3D1A0A 0%, #2D2873 100%)', position: 'relative', overflow: 'hidden' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.08 }}>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-white rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        </div>
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#ffffff', marginBottom: '18px' }}>
            Get in Touch With Us
          </h2>
          <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', marginBottom: '40px', fontWeight: 300 }}>
            We&apos;d love to hear from you and answer any questions about our services.
          </p>
          <a
            href="mailto:contact@abishag.com"
            style={{
              fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: '0.95rem',
              color: '#3D1A0A', background: '#ffffff',
              padding: '16px 40px', borderRadius: '10px', textDecoration: 'none',
              letterSpacing: '0.04em', display: 'inline-block',
              boxShadow: '0 6px 26px rgba(0,0,0,0.18)',
              transition: 'transform 0.25s, box-shadow 0.25s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)'; e.currentTarget.style.boxShadow = '0 16px 36px rgba(0,0,0,0.25)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.boxShadow = '0 6px 26px rgba(0,0,0,0.18)'; }}
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
}
