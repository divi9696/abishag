'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const SCENES = [
  {
    src: '/scene1.png',
    title: 'Compassionate Home Care',
    subtitle: 'Helping our elders walk through life with dignity',
    kenBurns: 'zoom-in-right',
  },
  {
    src: '/scene2.png',
    title: 'Advanced Home ICU',
    subtitle: 'Hospital-grade care in the comfort of your home',
    kenBurns: 'zoom-in-left',
  },
  {
    src: '/scene3.png',
    title: 'Physiotherapy & Rehabilitation',
    subtitle: 'Restoring movement, restoring confidence',
    kenBurns: 'zoom-in-top',
  },
  {
    src: '/scene4.png',
    title: 'Hospice & Palliative Care',
    subtitle: 'Surrounded by love, supported with grace',
    kenBurns: 'zoom-in-right',
  },
  {
    src: '/scene5.png',
    title: 'Teleconsultation Services',
    subtitle: 'Expert doctors just a tap away',
    kenBurns: 'zoom-in-left',
  },
  {
    src: '/scene6.png',
    title: 'Home Lab & Diagnostics',
    subtitle: 'Precise diagnostics at your doorstep',
    kenBurns: 'zoom-in-right',
  },
  {
    src: '/scene7.png',
    title: 'Medicine Delivery',
    subtitle: 'Your prescriptions delivered, right on time',
    kenBurns: 'zoom-in-left',
  },
];

const SCENE_DURATION = 4500;
const TRANSITION_DURATION = 1400;

export default function CinematicHero() {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState<number | null>(null);
  const [captionVisible, setCaptionVisible] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startCycle = (from: number) => {
    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      const nextIdx = (from + 1) % SCENES.length;
      setCaptionVisible(false);
      setNext(nextIdx);

      setTimeout(() => {
        setCurrent(nextIdx);
        setNext(null);
        setCaptionVisible(true);
        startCycle(nextIdx);
      }, TRANSITION_DURATION);
    }, SCENE_DURATION);
  };

  useEffect(() => {
    startCycle(current);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: '92vh', minHeight: '600px' }}
    >
      {/* Cinematic letterbox bars */}
      <div className="absolute top-0 left-0 right-0 z-20 bg-black" style={{ height: '3%' }} />
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-black" style={{ height: '3%' }} />

      {/* Scene layers */}
      {SCENES.map((scene, idx) => {
        const isCurrent = idx === current;
        const isNext = idx === next;
        if (!isCurrent && !isNext) return null;
        return (
          <div
            key={idx}
            className="absolute inset-0"
            style={{
              zIndex: isNext ? 2 : 1,
              opacity: isNext ? 1 : 1,
              transition: isNext
                ? `opacity ${TRANSITION_DURATION}ms ease-in-out`
                : undefined,
            }}
          >
            <div
              className={`ken-burns-${scene.kenBurns}`}
              style={{
                position: 'absolute',
                inset: 0,
                animationDuration: `${SCENE_DURATION + TRANSITION_DURATION}ms`,
              }}
            >
              <Image
                src={scene.src}
                alt={scene.title}
                fill
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
                priority={idx === 0 || idx === 1}
                sizes="100vw"
              />
            </div>
          </div>
        );
      })}

      {/* Multi-layer cinematic gradient overlays */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 28%, transparent 52%, rgba(0,0,0,0.8) 100%)',
        }}
      />
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 15% 50%, transparent 35%, rgba(0,0,0,0.35) 100%)',
        }}
      />

      {/* Caption */}
      <div
        className="absolute z-30 left-0 right-0 px-8 sm:px-16 lg:px-28"
        style={{
          bottom: '10%',
          transition: `opacity ${TRANSITION_DURATION * 0.55}ms ease-in-out, transform ${TRANSITION_DURATION * 0.55}ms ease-in-out`,
          opacity: captionVisible ? 1 : 0,
          transform: captionVisible ? 'translateY(0)' : 'translateY(18px)',
        }}
      >
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.9rem, 4.2vw, 3.4rem)',
            fontWeight: 700,
            color: '#ffffff',
            textShadow: '0 2px 28px rgba(0,0,0,0.65)',
            lineHeight: 1.12,
            marginBottom: '0.5rem',
            letterSpacing: '-0.01em',
          }}
        >
          {SCENES[current].title}
        </h2>
        <p
          style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
            color: 'rgba(255,255,255,0.82)',
            fontWeight: 300,
            textShadow: '0 1px 12px rgba(0,0,0,0.5)',
            letterSpacing: '0.01em',
          }}
        >
          {SCENES[current].subtitle}
        </p>
      </div>

      {/* Scene dots (minimal, no labels/progress/pause) */}
      <div
        className="absolute z-30 flex items-center gap-3"
        style={{
          bottom: '5%',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        {SCENES.map((_, idx) => (
          <div
            key={idx}
            style={{
              width: idx === current ? '32px' : '8px',
              height: '4px',
              borderRadius: '9999px',
              background:
                idx === current
                  ? '#6AAF2C'
                  : 'rgba(255,255,255,0.35)',
              transition: 'all 0.5s ease',
            }}
          />
        ))}
      </div>

      {/* Top-left branding with user logo */}
      <div className="absolute top-6 left-6 sm:left-12 z-30 flex items-center gap-3">
        <div
          style={{
            width: '52px',
            height: '52px',
            background: 'rgba(255,255,255,0.18)',
            backdropFilter: 'blur(10px)',
            borderRadius: '14px',
            border: '1px solid rgba(255,255,255,0.28)',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src="/logo.jpeg"
            alt="Abhishag"
            style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '4px' }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.25rem',
              fontWeight: 700,
              color: '#ffffff',
              textShadow: '0 1px 10px rgba(0,0,0,0.5)',
              lineHeight: 1,
            }}
          >
            Abhishag
          </span>
          <span
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: '0.6rem',
              fontWeight: 600,
              color: 'rgba(255,255,255,0.65)',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              marginTop: '3px',
            }}
          >
            Home Health Services
          </span>
        </div>
      </div>
    </section>
  );
}
