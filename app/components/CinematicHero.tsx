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
const TRANSITION_DURATION = 1200;

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
      className="relative w-full"
      style={{
        /*
         * All scene images are 1024×1024 (square).
         * To show the full image without cropping we use a 1:1
         * padded-box trick — but that would be too tall on desktop.
         * Instead we cap at 680px and use objectFit:'contain' so the
         * entire square image is always visible, with the brand-brown
         * colour filling any side bars (like a letterbox in portrait).
         */
        height: 'clamp(420px, 65vw, 680px)',
        background: '#1C0A04',  /* deep brand-brown fills any letterbox gaps */
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Scene layers */}
      {SCENES.map((scene, idx) => {
        const isCurrent = idx === current;
        const isNext = idx === next;
        if (!isCurrent && !isNext) return null;
        return (
          <div
            key={idx}
            className="absolute inset-0 flex items-center justify-center"
            style={{
              zIndex: isNext ? 2 : 1,
              opacity: isNext ? 1 : 1,
              transition: isNext
                ? `opacity ${TRANSITION_DURATION}ms ease-in-out`
                : undefined,
            }}
          >
            {/*
             * Ken-Burns wrapper — slightly zoom the image without
             * aggressive translation so corners don't get clipped.
             */}
            <div
              className={`ken-burns-${scene.kenBurns}`}
              style={{
                position: 'absolute',
                inset: 0,
                animationDuration: `${SCENE_DURATION + TRANSITION_DURATION}ms`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image
                src={scene.src}
                alt={scene.title}
                fill
                style={{
                  /*
                   * 'contain' ensures the complete 1024×1024 square image
                   * is always fully visible. Any remaining space is covered
                   * by the section's #1C0A04 background.
                   */
                  objectFit: 'contain',
                  objectPosition: 'center center',
                }}
                priority={idx === 0 || idx === 1}
                sizes="100vw"
              />
            </div>
          </div>
        );
      })}

      {/* Gradient overlays — soften top/bottom edges to blend with brown bg */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(28,10,4,0.55) 0%, transparent 22%, transparent 65%, rgba(28,10,4,0.85) 100%)',
        }}
      />
      {/* Left vignette for caption readability */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, rgba(28,10,4,0.45) 0%, transparent 55%)',
        }}
      />

      {/* Caption */}
      <div
        className="absolute z-30 left-0 right-0 px-8 sm:px-16 lg:px-28"
        style={{
          bottom: '13%',
          transition: `opacity ${TRANSITION_DURATION * 0.5}ms ease-in-out, transform ${TRANSITION_DURATION * 0.5}ms ease-in-out`,
          opacity: captionVisible ? 1 : 0,
          transform: captionVisible ? 'translateY(0)' : 'translateY(18px)',
        }}
      >
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(1.7rem, 4vw, 3.2rem)',
            fontWeight: 700,
            color: '#ffffff',
            textShadow: '0 2px 28px rgba(0,0,0,0.75)',
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
            fontSize: 'clamp(0.88rem, 1.6vw, 1.1rem)',
            color: 'rgba(255,255,255,0.88)',
            fontWeight: 400,
            textShadow: '0 1px 12px rgba(0,0,0,0.6)',
            letterSpacing: '0.02em',
          }}
        >
          {SCENES[current].subtitle}
        </p>
      </div>

      {/* Dot indicators */}
      <div
        className="absolute z-30 flex items-center gap-2"
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
              width: idx === current ? '28px' : '7px',
              height: '5px',
              borderRadius: '9999px',
              background: idx === current ? '#6AB04C' : 'rgba(255,255,255,0.38)',
              transition: 'all 0.45s ease',
            }}
          />
        ))}
      </div>

      {/* Top-left branding */}
      <div className="absolute top-5 left-5 sm:left-10 z-30 flex items-center gap-3">
        <div
          style={{
            width: '50px',
            height: '50px',
            background: 'rgba(255,255,255,0.14)',
            backdropFilter: 'blur(10px)',
            borderRadius: '13px',
            border: '1px solid rgba(255,255,255,0.22)',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
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
              fontSize: '1.3rem',
              fontWeight: 700,
              color: '#ffffff',
              textShadow: '0 1px 10px rgba(0,0,0,0.55)',
              lineHeight: 1,
            }}
          >
            Abishag
          </span>
          <span
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: '0.56rem',
              fontWeight: 700,
              color: 'rgba(255,255,255,0.72)',
              letterSpacing: '0.2em',
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
