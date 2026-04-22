'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const SCENES = [
  {
    src: '/scene1.png',
    title: 'Compassionate Home Care',
    subtitle: 'Helping our elders walk through life with dignity',
    kenBurns: 'zoom-in-right',
    // square image — focus on center-top where subjects stand
    pos: 'center 20%',
  },
  {
    src: '/scene2.png',
    title: 'Advanced Home ICU',
    subtitle: 'Hospital-grade care in the comfort of your home',
    kenBurns: 'zoom-in-left',
    pos: 'center 25%',
  },
  {
    src: '/scene3.png',
    title: 'Physiotherapy & Rehabilitation',
    subtitle: 'Restoring movement, restoring confidence',
    kenBurns: 'zoom-in-top',
    pos: 'center 30%',
  },
  {
    src: '/scene5.png',
    title: 'Teleconsultation Services',
    subtitle: 'Expert doctors just a tap away',
    kenBurns: 'zoom-in-left',
    pos: 'center 25%',
  },
  {
    src: '/scene6.png',
    title: 'Home Lab & Diagnostics',
    subtitle: 'Precise diagnostics at your doorstep',
    kenBurns: 'zoom-in-right',
    pos: 'center 20%',
  },
  {
    src: '/scene7.png',
    title: 'Medicine Delivery',
    subtitle: 'Your prescriptions delivered, right on time',
    kenBurns: 'zoom-in-left',
    pos: 'center 30%',
  },
];

const SCENE_DURATION = 4500;
const TRANSITION_DURATION = 900;   // shorter cross-fade
const CAPTION_FADE_MS    = 350;    // fast caption fade-in/out

export default function CinematicHero() {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState<number | null>(null);
  // caption is visible from the very first render
  const [captionVisible, setCaptionVisible] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startCycle = (from: number) => {
    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      const nextIdx = (from + 1) % SCENES.length;

      // 1. Fade caption out quickly
      setCaptionVisible(false);

      // 2. Start cross-fade to next image after caption is hidden
      setTimeout(() => {
        setNext(nextIdx);
      }, CAPTION_FADE_MS + 50);

      // 3. Swap current, clear next, show caption immediately
      setTimeout(() => {
        setCurrent(nextIdx);
        setNext(null);
        // small stagger so caption appears right as the new slide settles
        setTimeout(() => setCaptionVisible(true), 80);
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
      style={{
        /* Fill everything below the 74px nav bar */
        height: 'calc(100vh - 74px)',
        minHeight: '500px',
        maxHeight: '860px',
      }}
    >
      {/* ── Scene layers ── */}
      {SCENES.map((scene, idx) => {
        const isCurrent = idx === current;
        const isNext    = idx === next;
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
              {/*
               * objectFit:'cover' fills 100% width with NO side bars.
               * objectPosition focuses on the upper-center of each square
               * image where the subjects are, so minimal cropping of faces.
               */}
              <Image
                src={scene.src}
                alt={scene.title}
                fill
                style={{
                  objectFit: 'cover',
                  objectPosition: scene.pos,
                }}
                priority={idx === 0 || idx === 1}
                sizes="100vw"
              />
            </div>
          </div>
        );
      })}

      {/* ── Gradient overlays ── */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.32) 0%, transparent 25%, transparent 50%, rgba(0,0,0,0.78) 100%)',
        }}
      />
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, rgba(0,0,0,0.38) 0%, transparent 55%)',
        }}
      />

      {/* ── Caption — shows immediately, fades fast ── */}
      <div
        className="absolute z-30 left-0 right-0 px-8 sm:px-16 lg:px-28"
        style={{
          bottom: '14%',
          transition: `opacity ${CAPTION_FADE_MS}ms ease-in-out, transform ${CAPTION_FADE_MS}ms ease-in-out`,
          opacity:   captionVisible ? 1 : 0,
          transform: captionVisible ? 'translateY(0)' : 'translateY(14px)',
          /* Caption is visible from first render with no delay */
          willChange: 'opacity, transform',
        }}
      >
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(1.8rem, 4.2vw, 3.4rem)',
            fontWeight: 700,
            color: '#ffffff',
            textShadow: '0 2px 28px rgba(0,0,0,0.72)',
            lineHeight: 1.1,
            marginBottom: '0.45rem',
            letterSpacing: '0.01em',
          }}
        >
          {SCENES[current].title}
        </h2>
        <p
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: 'clamp(0.9rem, 1.7vw, 1.15rem)',
            color: 'rgba(255,255,255,0.9)',
            fontWeight: 400,
            textShadow: '0 1px 12px rgba(0,0,0,0.6)',
            letterSpacing: '0.02em',
          }}
        >
          {SCENES[current].subtitle}
        </p>
      </div>

      {/* ── Dot indicators ── */}
      <div
        className="absolute z-30 flex items-center gap-2"
        style={{ bottom: '5%', left: '50%', transform: 'translateX(-50%)' }}
      >
        {SCENES.map((_, idx) => (
          <div
            key={idx}
            style={{
              width:  idx === current ? '28px' : '7px',
              height: '5px',
              borderRadius: '9999px',
              background: idx === current ? '#6AB04C' : 'rgba(255,255,255,0.38)',
              transition: 'all 0.4s ease',
            }}
          />
        ))}
      </div>

      {/* ── Top-left branding ── */}
      <div className="absolute top-5 left-5 sm:left-10 z-30 flex items-center gap-3">
        <div
          style={{
            width: '50px', height: '50px',
            background: 'rgba(255,255,255,0.14)',
            backdropFilter: 'blur(10px)',
            borderRadius: '13px',
            border: '1px solid rgba(255,255,255,0.22)',
            overflow: 'hidden', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
          }}
        >
          <img
            src="/logo.jpeg"
            alt="Abishag"
            style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '4px' }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.3rem', fontWeight: 700, color: '#ffffff',
              textShadow: '0 1px 10px rgba(0,0,0,0.55)', lineHeight: 1,
            }}
          >
            Abishag
          </span>
          <span
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: '0.56rem', fontWeight: 700,
              color: 'rgba(255,255,255,0.72)',
              letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: '3px',
            }}
          >
            Home Health Services
          </span>
        </div>
      </div>
    </section>
  );
}
