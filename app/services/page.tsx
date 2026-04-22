'use client';

import { useState, useEffect } from 'react';

const services = [
  {
    id: 1,
    title: "Caregiver Services",
    description: "Professional caregiver support for daily living activities, companionship, and personal care to help seniors live comfortably at home.",
    icon: "🏥",
    image: "/images/Abishag_img/1. Caregiver Services.png",
    details: "Personal hygiene assistance, companionship, daily routine support, and household help",
  },
  {
    id: 2,
    title: "Nursing Services",
    description: "Skilled nursing care at home including wound care, medication management, and post-operative support by licensed nurses.",
    icon: "❤️",
    image: "/images/Abishag_img/11. Care Coordination.png",
    details: "Wound care, medication schedules, health assessments, IV therapy, and emergency support",
  },
  {
    id: 3,
    title: "Hospice Care",
    description: "Compassionate end-of-life care focused on comfort, dignity, and emotional support for patients and their families.",
    icon: "🕊️",
    image: "/images/Abishag_img/9. Medical Equipment Setup.png",
    details: "Pain management, emotional counseling, family support, spiritual care, and comfort measures",
  },
  {
    id: 4,
    title: "Dementia Care",
    description: "Specialized memory and cognitive care for patients with dementia or Alzheimer's, providing a safe and structured environment.",
    icon: "🧠",
    image: "/images/Abishag_img/13. Pharmacy Delivery.png",
    details: "Memory activities, behavioral support, safe environment, caregiver guidance, and daily routines",
  },
  {
    id: 5,
    title: "Allied Health Visit",
    description: "Home visits by allied health professionals including physiotherapists, occupational therapists, and speech therapists.",
    icon: "🧘",
    image: "/images/Abishag_img/12. Lab Sample Collection.png",
    details: "Physiotherapy, occupational therapy, speech therapy, rehabilitation, and functional assessments",
  },
  {
    id: 6,
    title: "Nurse Visit (On-demand)",
    description: "On-call and scheduled nurse visits for health monitoring, medication administration, and emergency assessments.",
    icon: "🚐",
    image: "/images/Abishag_img/3. Hospice Care.png",
    details: "Vital signs monitoring, on-demand visits, medication checks, and urgent health assessments",
  },
  {
    id: 7,
    title: "Geriatric Care",
    description: "Comprehensive care tailored for the elderly, addressing complex health needs and promoting a higher quality of life.",
    icon: "👴",
    image: "/images/Abishag_img/10. ICU Setup at Home.png",
    details: "Geriatric assessments, chronic disease management, fall prevention, and wellness monitoring",
  },
  {
    id: 8,
    title: "Palliative Care",
    description: "Relief-focused care for those with serious illnesses, prioritizing comfort, pain management, and quality of life.",
    icon: "💙",
    image: "/images/Abishag_img/15. Dietician Consultation.png",
    details: "Pain relief, symptom management, emotional support, care coordination, and family counseling",
  },
  {
    id: 9,
    title: "Medical Equipment Setup",
    description: "Professional setup and management of home medical equipment for patients requiring assisted care at home.",
    icon: "🔧",
    image: "/images/Abishag_img/8. Palliative Care.png",
    details: "Oxygen setup, hospital beds, wheelchairs, monitoring devices, and equipment training",
  },
  {
    id: 10,
    title: "ICU Setup at Home",
    description: "Advanced home ICU setup for critically ill patients who require hospital-level care in the comfort of their home.",
    icon: "🏨",
    image: "/images/Abishag_img/7. Geriatric Care.png",
    details: "Ventilator support, cardiac monitoring, critical care nursing, and 24/7 medical supervision",
  },
  {
    id: 11,
    title: "Care Coordination",
    description: "End-to-end coordination of care services, ensuring seamless communication between caregivers, doctors, and family.",
    icon: "📋",
    image: "/images/Abishag_img/6. Nurse Visit (On-demand).png",
    details: "Care planning, doctor coordination, family communication, service scheduling, and progress tracking",
  },
  {
    id: 12,
    title: "Lab Sample Collection",
    description: "Convenient home-based lab sample collection for diagnostic tests, eliminating the need for hospital visits.",
    icon: "🧪",
    image: "/images/Abishag_img/5. Allied Health Visit.png",
    details: "Blood tests, urine analysis, swab collections, sample transport, and result delivery",
  },
  {
    id: 13,
    title: "Pharmacy Delivery",
    description: "Timely delivery of prescribed medications and medical supplies directly to your doorstep.",
    icon: "💊",
    image: "/images/Abishag_img/4. Dementia Care.png",
    details: "Prescription fulfillment, medication packaging, delivery scheduling, and refill reminders",
  },
  {
    id: 15,
    title: "Dietician Consultation",
    description: "Personalized dietary counseling and meal planning by certified dieticians for optimal nutrition and health.",
    icon: "🥗",
    image: "/images/Abishag_img/2. Nursing Services.png",
    details: "Nutritional assessments, diet plans, therapeutic nutrition, and ongoing dietary support",
  },
  {
    id: 16,
    title: "Mental Health Counseling",
    description: "Professional mental health support for seniors and families dealing with anxiety, depression, grief, or isolation.",
    icon: "🧩",
    image: "/images/Abishag_img/16. Mental Health Counseling.png",
    details: "Individual counseling, family therapy, grief support, stress management, and behavioral health",
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
    <div style={{ background: '#F4F1ED', minHeight: '100vh' }}>

      {/* ── Page Header ── */}
      <section
        style={{
          background: 'linear-gradient(135deg, #3D1A0A 0%, #6B3020 55%, #4A8A30 100%)',
          padding: '76px 0 60px',
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
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 700,
              fontSize: '0.7rem',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: '#6AB04C',
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
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.1,
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
              fontFamily: "'Nunito', sans-serif",
              fontSize: '1.05rem',
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ padding: '76px 16px' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              onClick={() => setExpandedCard(expandedCard === service.id ? null : service.id)}
              style={{
                background: '#ffffff',
                borderRadius: '18px',
                padding: '38px 28px',
                borderTop: '5px solid #6AB04C',
                boxShadow: expandedCard === service.id
                  ? '0 22px 52px rgba(61,26,10,0.15)'
                  : '0 4px 22px rgba(61,26,10,0.07)',
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
                el.style.boxShadow = '0 22px 52px rgba(61,26,10,0.15)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget;
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = expandedCard === service.id
                  ? '0 22px 52px rgba(61,26,10,0.15)'
                  : '0 4px 22px rgba(61,26,10,0.07)';
              }}
            >
              {/* Service Image */}
              <div style={{ borderRadius: '10px', overflow: 'hidden', marginBottom: '20px', height: '180px', position: 'relative' }}>
                <img
                  src={service.image}
                  alt={service.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.06)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </div>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  color: '#3D1A0A',
                  marginBottom: '12px',
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  color: '#5C3D2A',
                  fontSize: '0.93rem',
                  lineHeight: 1.8,
                  marginBottom: '16px',
                }}
              >
                {service.description}
              </p>

              {/* Expandable Details */}
              <div
                style={{
                  maxHeight: expandedCard === service.id ? '130px' : '0',
                  opacity: expandedCard === service.id ? 1 : 0,
                  overflow: 'hidden',
                  transition: 'max-height 0.35s ease, opacity 0.35s ease',
                }}
              >
                <div style={{ paddingTop: '14px', borderTop: '1px solid #EAF5E0' }}>
                  <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: '0.85rem', color: '#5C3D2A', lineHeight: 1.75 }}>
                    <strong style={{ color: '#6AB04C' }}>What&apos;s Included:</strong><br />
                    {service.details}
                  </p>
                </div>
              </div>

              <div
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  color: '#6AB04C',
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
      <section style={{ background: '#ffffff', padding: '76px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(1.9rem, 4vw, 3rem)',
                fontWeight: 700,
                color: '#3D1A0A',
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
                  background: '#F4F1ED',
                  borderRadius: '18px',
                  padding: '40px 34px',
                  borderLeft: '5px solid #3D1A0A',
                  boxShadow: '0 4px 22px rgba(61,26,10,0.07)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget;
                  el.style.transform = 'translateY(-4px)';
                  el.style.boxShadow = '0 18px 44px rgba(61,26,10,0.13)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget;
                  el.style.transform = 'translateY(0)';
                  el.style.boxShadow = '0 4px 22px rgba(61,26,10,0.07)';
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: '#3D1A0A',
                    marginBottom: '12px',
                  }}
                >
                  {title}
                </h3>
                <p style={{ fontFamily: "'Nunito', sans-serif", color: '#5C3D2A', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '18px' }}>
                  {desc}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {points.map(pt => (
                    <li key={pt} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: "'Nunito', sans-serif", color: '#5C3D2A', fontSize: '0.93rem' }}>
                      <span style={{ color: '#6AB04C', fontWeight: 700, fontSize: '1.1rem' }}>✓</span>
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
          background: 'linear-gradient(135deg, #2D2873 0%, #3D1A0A 100%)',
          padding: '84px 0',
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
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '18px',
            }}
          >
            Interested in Our Services?
          </h2>
          <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', marginBottom: '40px', fontWeight: 300 }}>
            Contact us today to discuss which services best fit your loved one&apos;s needs.
          </p>
          <a
            href="/about"
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 800,
              fontSize: '0.95rem',
              color: '#3D1A0A',
              background: '#ffffff',
              padding: '16px 40px',
              borderRadius: '10px',
              textDecoration: 'none',
              letterSpacing: '0.04em',
              display: 'inline-block',
              boxShadow: '0 6px 26px rgba(0,0,0,0.18)',
              transition: 'transform 0.25s, box-shadow 0.25s',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget;
              el.style.transform = 'translateY(-3px) scale(1.05)';
              el.style.boxShadow = '0 14px 36px rgba(0,0,0,0.25)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget;
              el.style.transform = 'translateY(0) scale(1)';
              el.style.boxShadow = '0 6px 26px rgba(0,0,0,0.18)';
            }}
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
