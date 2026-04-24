'use client';

import { useEffect, useState } from 'react';
import CinematicHero from './components/CinematicHero';
import IntroAnimation from './components/IntroAnimation';
import { getReviews, addReview, type Review } from './actions';

export default function Home() {
  // ── Intro animation state ──
  const [introDone, setIntroDone] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // ── Review state ──
  const [reviews, setReviews] = useState<Review[]>([]);
  const [formName, setFormName] = useState('');
  const [formRating, setFormRating] = useState(0);
  const [formText, setFormText] = useState('');
  const [hoveredStar, setHoveredStar] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [dbStatus, setDbStatus] = useState<'connected' | 'disconnected' | 'checking'>('checking');

  useEffect(() => {
    // Fetch reviews on mount
    getReviews().then((data) => {
      if (data && 'error' in data && data.error === 'no_connection_string') {
        setDbStatus('disconnected');
        // Fallback data
        setReviews([
          { name: 'Priya Ramachandran', rating: 5, text: 'Abishag transformed my mother\'s daily life. The caregiver assigned was patient, professional, and treated her like family. We are truly grateful.', date: 'April 2026' },
          { name: 'Karthik Sundaram', rating: 5, text: 'The nursing team is exceptional. Their attention to detail with medication management gave our entire family peace of mind. Highly recommended.', date: 'March 2026' },
        ]);
      } else if (Array.isArray(data) && data.length > 0) {
        setDbStatus('connected');
        setReviews(data);
      } else {
        setDbStatus('connected'); // Even if 0 reviews, if no error, we are connected
        // Fallback data if 0
        if (Array.isArray(data) && data.length === 0) {
           setReviews([
            { name: 'Priya Ramachandran', rating: 5, text: 'Abishag transformed my mother\'s daily life. The caregiver assigned was patient, professional, and treated her like family. We are truly grateful.', date: 'April 2026' },
            { name: 'Karthik Sundaram', rating: 5, text: 'The nursing team is exceptional. Their attention to detail with medication management gave our entire family peace of mind. Highly recommended.', date: 'March 2026' },
          ]);
        }
      }
    });
  }, []);

  const handleReviewSubmit = async () => {
    if (!formName.trim() || formRating === 0 || !formText.trim() || isSubmitting) return;
    
    setIsSubmitting(true);
    try {
      const today = new Date();
      const dateStr = today.toLocaleString('en-IN', { month: 'long', year: 'numeric' });
      
      const newReview = { name: formName.trim(), rating: formRating, text: formText.trim(), date: dateStr };
      
      // Optimistic update
      setReviews((prev) => [newReview, ...prev]);
      
      // Send to database
      const result = await addReview(newReview);
      if (!result.success) {
        console.error('Failed to save review:', result.error);
        alert('Note: The review was not saved to the database. ' + result.error);
      }
      
      setFormName('');
      setFormRating(0);
      setFormText('');
      setHoveredStar(0);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setShowReviewForm(false);
      }, 3000);
    } catch (error) {
      console.error('Submission error:', error);
      alert('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    setIsMounted(true);
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    if (hasSeenIntro) {
      setIntroDone(true);
    }
    const t = setTimeout(() => setIsVisible(true), 150);
    return () => clearTimeout(t);
  }, []);

  const handleIntroComplete = () => {
    setIntroDone(true);
    sessionStorage.setItem('hasSeenIntro', 'true');
  };

  const features = [
    {
      title: 'Professional Care',
      desc: 'Our trained and experienced staff provide the highest quality care and attention to every individual.',
    },
    {
      title: 'Safe Environment',
      desc: 'A secure and comfortable facility designed specifically for the needs of our elderly residents.',
    },
    {
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
      {isMounted && !introDone && (
        <IntroAnimation onComplete={handleIntroComplete} />
      )}

      {/* ── CINEMATIC HERO ── */}
      <CinematicHero />

      {/* ── INTRO STRIP ── */}
      <section className="py-16 md:py-20" style={{ background: '#ffffff', borderBottom: '1px solid #DDD5CC' }}>
        <div
          className="max-w-4xl mx-auto px-6 text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(28px)',
            transition: 'opacity 0.9s ease, transform 0.9s ease',
          }}
        >

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
      <section className="py-16 md:py-20" style={{ background: '#F4F1ED' }}>
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
      <section className="py-16 md:py-24" style={{ background: '#F4F1ED' }}>
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
            {features.map(({ title, desc }) => (
              <div
                key={title}
                style={{
                  background: '#ffffff',
                  borderRadius: '18px',
                  borderLeft: '5px solid #6AB04C',
                  boxShadow: '0 4px 28px rgba(61,26,10,0.07)',
                  cursor: 'pointer',
                  transition: 'transform 0.35s ease, box-shadow 0.35s ease',
                }}
                className="p-8 md:p-11"
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

      {/* ── REVIEWS SECTION ── */}
      <section className="py-16 md:py-24" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <p style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#6AB04C', marginBottom: '12px' }}>
              What Families Say
            </p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 700, color: '#3D1A0A' }}>
              Reviews &amp; Testimonials
            </h2>
            {dbStatus === 'disconnected' && (
              <div style={{ marginTop: '24px', padding: '10px', background: '#FFF5F5', border: '1px solid #FED7D7', borderRadius: '8px', color: '#C53030', fontSize: '0.85rem' }}>
                Note: Database not yet connected. Reviews are currently in demonstration mode.
              </div>
            )}
          </div>

          <div className={showReviewForm ? "grid grid-cols-1 lg:grid-cols-2 gap-12 items-start" : "flex flex-col items-center max-w-3xl mx-auto"}>

            {/* ── Write a review ── */}
            {showReviewForm ? (
              <div className="p-6 md:p-9" style={{ background: '#F9F7F4', borderRadius: '22px', boxShadow: '0 4px 28px rgba(61,26,10,0.07)', border: '1px solid #EAE5DF', width: '100%', position: 'relative' }}>
                <button 
                  onClick={() => setShowReviewForm(false)}
                  style={{ position: 'absolute', top: '24px', right: '24px', background: 'none', border: 'none', fontSize: '1.2rem', color: '#8C7B6E', cursor: 'pointer' }}
                  title="Cancel"
                >
                  ✕
                </button>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.6rem', fontWeight: 700, color: '#3D1A0A', marginBottom: '6px' }}>
                Share Your Experience
              </h3>
              <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: '0.88rem', color: '#8C7B6E', marginBottom: '28px', lineHeight: 1.6 }}>
                Your feedback helps us serve families better.
              </p>

              {/* Name */}
              <label style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: '0.82rem', color: '#5C3D2A', display: 'block', marginBottom: '6px' }}>Your Name</label>
              <input
                type="text"
                placeholder="e.g. Priya Sundaram"
                value={formName}
                onChange={(e) => setFormName(e.target.value)}
                style={{ fontFamily: "'Nunito', sans-serif", fontSize: '0.92rem', width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1.5px solid #DDD5CC', outline: 'none', background: '#ffffff', color: '#3D1A0A', marginBottom: '20px', boxSizing: 'border-box', transition: 'border-color 0.2s' }}
                onFocus={(e) => (e.target.style.borderColor = '#6AB04C')}
                onBlur={(e) => (e.target.style.borderColor = '#DDD5CC')}
              />

              {/* Stars */}
              <label style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: '0.82rem', color: '#5C3D2A', display: 'block', marginBottom: '10px' }}>Your Rating</label>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setFormRating(star)}
                    onMouseEnter={() => setHoveredStar(star)}
                    onMouseLeave={() => setHoveredStar(0)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '2px', transition: 'transform 0.15s' }}
                    onMouseDown={(e) => ((e.currentTarget as HTMLElement).style.transform = 'scale(0.9)')}
                    onMouseUp={(e) => ((e.currentTarget as HTMLElement).style.transform = 'scale(1)')}
                    aria-label={`Rate ${star} star`}
                  >
                    <svg width="34" height="34" viewBox="0 0 24 24" fill={star <= (hoveredStar || formRating) ? '#F4A720' : '#DDD5CC'} style={{ transition: 'fill 0.15s' }}>
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </button>
                ))}
                {formRating > 0 && (
                  <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: '0.82rem', color: '#8C7B6E', alignSelf: 'center', marginLeft: '4px' }}>
                    {['', 'Poor', 'Fair', 'Good', 'Very Good', 'Excellent'][formRating]}
                  </span>
                )}
              </div>

              {/* Review text */}
              <label style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: '0.82rem', color: '#5C3D2A', display: 'block', marginBottom: '6px' }}>Your Review</label>
              <textarea
                placeholder="Tell us about your experience with Abishag..."
                value={formText}
                onChange={(e) => setFormText(e.target.value)}
                rows={4}
                style={{ fontFamily: "'Nunito', sans-serif", fontSize: '0.92rem', width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1.5px solid #DDD5CC', outline: 'none', background: '#ffffff', color: '#3D1A0A', resize: 'vertical', marginBottom: '24px', boxSizing: 'border-box', transition: 'border-color 0.2s' }}
                onFocus={(e) => (e.target.style.borderColor = '#6AB04C')}
                onBlur={(e) => (e.target.style.borderColor = '#DDD5CC')}
              />

              {/* Submit */}
              <button
                onClick={handleReviewSubmit}
                disabled={!formName.trim() || formRating === 0 || !formText.trim() || isSubmitting}
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 800,
                  fontSize: '0.93rem',
                  color: '#ffffff',
                  background: (!formName.trim() || formRating === 0 || !formText.trim() || isSubmitting) ? '#C5B9B0' : '#6AB04C',
                  padding: '13px 36px',
                  borderRadius: '10px',
                  border: 'none',
                  cursor: (!formName.trim() || formRating === 0 || !formText.trim() || isSubmitting) ? 'not-allowed' : 'pointer',
                  transition: 'background 0.25s, transform 0.2s',
                  letterSpacing: '0.04em',
                  width: '100%',
                  boxShadow: (!formName.trim() || formRating === 0 || !formText.trim() || isSubmitting) ? 'none' : '0 4px 18px rgba(106,176,76,0.35)',
                }}
                onMouseEnter={(e) => { if (formName.trim() && formRating > 0 && formText.trim() && !isSubmitting) (e.currentTarget as HTMLElement).style.background = '#3D7A28'; }}
                onMouseLeave={(e) => { if (formName.trim() && formRating > 0 && formText.trim() && !isSubmitting) (e.currentTarget as HTMLElement).style.background = '#6AB04C'; }}
              >
                {isSubmitting ? 'Submitting...' : submitted ? 'Review Submitted!' : 'Submit Review'}
              </button>
              {submitted && (
                <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: '0.82rem', color: '#6AB04C', marginTop: '10px', fontWeight: 700 }}>
                  Thank you! Your review has been added below.
                </p>
              )}
            </div>
            ) : (
              <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
                <button
                  onClick={() => setShowReviewForm(true)}
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: 800,
                    fontSize: '0.93rem',
                    color: '#ffffff',
                    background: '#6AB04C',
                    padding: '12px 28px',
                    borderRadius: '10px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'background 0.25s, transform 0.2s',
                    letterSpacing: '0.04em',
                    boxShadow: '0 4px 18px rgba(106,176,76,0.35)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#3D7A28')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = '#6AB04C')}
                >
                  + Add Review
                </button>
              </div>
            )}

            {/* ── Submitted reviews ── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxHeight: '560px', overflowY: 'auto', paddingRight: '4px', width: '100%' }}>
              {reviews.length === 0 && (
                <div style={{ textAlign: 'center', padding: '40px', background: '#F9F7F4', borderRadius: '16px', border: '1px solid #EAE5DF' }}>
                  <p style={{ fontFamily: "'Nunito', sans-serif", color: '#8C7B6E', fontSize: '0.95rem' }}>No reviews yet. Be the first to share your experience!</p>
                </div>
              )}
              {reviews.map((rev, i) => (
                <div
                  key={i}
                  className="p-6 md:p-7"
                  style={{ background: '#F9F7F4', borderRadius: '16px', boxShadow: '0 4px 18px rgba(61,26,10,0.07)', border: '1px solid #EAE5DF', animation: i === 0 ? 'fadeInUp 0.5s ease-out both' : 'none' }}
                >
                  {/* Stars */}
                  <div style={{ display: 'flex', gap: '3px', marginBottom: '12px' }}>
                    {[1, 2, 3, 4, 5].map((s) => (
                      <svg key={s} width="18" height="18" viewBox="0 0 24 24" fill={s <= rev.rating ? '#F4A720' : '#DDD5CC'}>
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  {/* Text */}
                  <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: '0.92rem', color: '#5C3D2A', lineHeight: 1.75, marginBottom: '18px', fontStyle: 'italic' }}>
                    &ldquo;{rev.text}&rdquo;
                  </p>
                  {/* Author */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'linear-gradient(135deg, #6AB04C, #3D1A0A)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span style={{ color: '#fff', fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: '0.95rem' }}>
                        {rev.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: '0.88rem', color: '#3D1A0A' }}>{rev.name}</div>
                      <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: '0.75rem', color: '#8C7B6E' }}>{rev.date}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-16 md:py-24"
        style={{
          background: 'linear-gradient(135deg, #3D1A0A 0%, #6B3020 48%, #4A8A30 100%)',
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
