'use client';

import { useEffect, useState, useCallback } from 'react';

interface Props {
  onComplete: () => void;
}

// Floating brand-colored particles
const PARTICLES = [
  { size: 6,  color: '#6AB04C', left: '12%', delay: '0s',    dur: '6s'  },
  { size: 4,  color: '#4ABED6', left: '25%', delay: '0.8s',  dur: '7.5s'},
  { size: 8,  color: '#6AB04C', left: '40%', delay: '1.4s',  dur: '5.5s'},
  { size: 5,  color: '#2D2873', left: '55%', delay: '0.3s',  dur: '8s'  },
  { size: 7,  color: '#6AB04C', left: '68%', delay: '1.9s',  dur: '6.5s'},
  { size: 4,  color: '#4ABED6', left: '80%', delay: '0.6s',  dur: '7s'  },
  { size: 6,  color: '#6AB04C', left: '90%', delay: '1.2s',  dur: '5s'  },
  { size: 5,  color: '#3D1A0A', left: '5%',  delay: '2.1s',  dur: '9s'  },
];

export default function IntroAnimation({ onComplete }: Props) {
  const [step, setStep]       = useState(0);
  const [leaving, setLeaving] = useState(false);

  const dismiss = useCallback(() => {
    if (leaving) return;
    setLeaving(true);
    setTimeout(onComplete, 750);
  }, [leaving, onComplete]);

  useEffect(() => {
    // Animation timeline
    const timers = [
      setTimeout(() => setStep(1), 200),   // background rings appear
      setTimeout(() => setStep(2), 600),   // logo fades + glows
      setTimeout(() => setStep(3), 1500),  // "Abishag" slides in
      setTimeout(() => setStep(4), 2300),  // "Home Health Services"
      setTimeout(() => setStep(5), 3000),  // green divider line grows
      setTimeout(() => setStep(6), 3600),  // "Abundance of Life" tagline
      setTimeout(() => setStep(7), 4200),  // 3 brand-color dots appear
      setTimeout(dismiss, 5600),           // auto exit
    ];
    return () => timers.forEach(clearTimeout);
  }, [dismiss]);

  return (
    <div
      onClick={dismiss}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        /* Deep warm dark — brand brown in very dark form */
        background: 'radial-gradient(ellipse at 50% 60%, #1C0A04 0%, #090201 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        userSelect: 'none',
        overflow: 'hidden',
        opacity: leaving ? 0 : 1,
        transition: leaving ? 'opacity 0.75s ease' : 'none',
      }}
    >

      {/* ── Floating particles ── */}
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            bottom: '-10px',
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: '50%',
            background: p.color,
            animation: `floatParticle ${p.dur} ${p.delay} ease-in infinite`,
            opacity: 0,
          }}
        />
      ))}

      {/* ── Decorative concentric rings ── */}
      {[520, 360, 210].map((size, i) => (
        <div
          key={i}
          className="intro-pulse-ring"
          style={{
            position: 'absolute',
            width: `${size}px`,
            height: `${size}px`,
            borderRadius: '50%',
            border: `1px solid rgba(106,176,76,${0.06 + i * 0.04})`,
            opacity: step >= 1 ? 1 : 0,
            transform: step >= 1 ? 'scale(1)' : 'scale(0.4)',
            transition: `opacity 1.2s ease ${i * 0.12}s, transform 1.2s cubic-bezier(0.34,1.56,0.64,1) ${i * 0.12}s`,
            animationDelay: `${i * 0.4}s`,
          }}
        />
      ))}

      {/* ── Subtle corner accent lines ── */}
      {[
        { top: '14%', left: '10%',  rotate: '0deg' },
        { top: '14%', right: '10%', rotate: '90deg' },
      ].map((pos, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            ...pos,
            width: '40px',
            height: '2px',
            background: 'linear-gradient(90deg, #6AB04C, transparent)',
            opacity: step >= 3 ? 0.5 : 0,
            transition: 'opacity 0.8s ease',
            transform: `rotate(${pos.rotate})`,
          }}
        />
      ))}

      {/* ══ Main content ══ */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0',
          position: 'relative',
          zIndex: 10,
        }}
      >

        {/* Logo */}
        <div
          className={step >= 2 ? 'intro-logo-glow' : ''}
          style={{
            width: '110px',
            height: '110px',
            opacity: step >= 2 ? 1 : 0,
            transform: step >= 2 ? 'scale(1) translateY(0)' : 'scale(0.55) translateY(20px)',
            transition: 'opacity 0.9s cubic-bezier(0.34,1.56,0.64,1), transform 0.9s cubic-bezier(0.34,1.56,0.64,1)',
            marginBottom: '28px',
          }}
        >
          <img
            src="/logo.png"
            alt="Abishag"
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </div>

        {/* "Abishag" heading */}
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(3.2rem, 8vw, 5.5rem)',
            fontWeight: 300,
            color: '#ffffff',
            letterSpacing: step >= 3 ? '0.12em' : '0.6em',
            opacity: step >= 3 ? 1 : 0,
            transform: step >= 3 ? 'translateY(0)' : 'translateY(18px)',
            transition: 'opacity 0.9s ease, letter-spacing 1.3s ease, transform 0.9s ease',
            margin: 0,
            lineHeight: 1,
            textAlign: 'center',
          }}
        >
          Abishag
        </h1>

        {/* "Home Health Services" */}
        <p
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: '0.68rem',
            fontWeight: 800,
            letterSpacing: '0.36em',
            textTransform: 'uppercase',
            color: '#6AB04C',
            opacity: step >= 4 ? 1 : 0,
            transform: step >= 4 ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
            margin: '14px 0 0 0',
            textAlign: 'center',
          }}
        >
          Home Health Services
        </p>

        {/* Brand-green divider line */}
        <div
          style={{
            height: '1.5px',
            background: 'linear-gradient(90deg, transparent 0%, #6AB04C 30%, #4ABED6 70%, transparent 100%)',
            margin: '24px auto',
            // class applied when step >= 5, otherwise 0 width
          }}
          className={step >= 5 ? 'intro-line-grow' : ''}
          data-step={step}
          // fallback: when class isn't applied yet keep it hidden via width
          {...(step < 5 ? { style: { height: '1.5px', width: '0px', margin: '24px auto', background: 'linear-gradient(90deg, transparent 0%, #6AB04C 30%, #4ABED6 70%, transparent 100%)' } } : {})}
        />

        {/* Tagline "Abundance of Life" */}
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
            fontStyle: 'italic',
            fontWeight: 400,
            color: 'rgba(255,255,255,0.5)',
            letterSpacing: '0.12em',
            opacity: step >= 6 ? 1 : 0,
            transform: step >= 6 ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
            margin: 0,
            textAlign: 'center',
          }}
        >
          Abundance of Life
        </p>

        {/* Brand-color accent dots */}
        <div
          style={{
            display: 'flex',
            gap: '10px',
            marginTop: '32px',
            opacity: step >= 7 ? 1 : 0,
            transition: 'opacity 0.6s ease',
          }}
        >
          {['#6AB04C', '#4ABED6', '#2D2873'].map((color, i) => (
            <div
              key={i}
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: color,
                opacity: step >= 7 ? 1 : 0,
                transform: step >= 7 ? 'scale(1)' : 'scale(0)',
                transition: `opacity 0.5s ease ${i * 0.15}s, transform 0.5s cubic-bezier(0.34,1.56,0.64,1) ${i * 0.15}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Skip hint */}
      <div
        style={{
          position: 'absolute',
          bottom: '28px',
          right: '36px',
          fontFamily: "'Nunito', sans-serif",
          fontSize: '0.72rem',
          color: 'rgba(255,255,255,0.28)',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          opacity: step >= 4 ? 1 : 0,
          transition: 'opacity 0.6s ease',
          pointerEvents: 'none',
        }}
      >
        Click to skip
      </div>
    </div>
  );
}
