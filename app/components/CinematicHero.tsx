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

const SCENE_DURATION = 4000; // ms each scene
const TRANSITION_DURATION = 1200; // ms crossfade

export default function CinematicHero() {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState<number | null>(null);
  const [captionVisible, setCaptionVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startTimeRef = useRef<number>(Date.now());

  const startCycle = (from: number) => {
    if (progressRef.current) clearInterval(progressRef.current);
    if (timerRef.current) clearTimeout(timerRef.current);

    setProgress(0);
    startTimeRef.current = Date.now();

    progressRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      setProgress(Math.min((elapsed / SCENE_DURATION) * 100, 100));
    }, 50);

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
    if (!paused) {
      startCycle(current);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused]);

  const goToScene = (idx: number) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (progressRef.current) clearInterval(progressRef.current);
    setCaptionVisible(false);
    setNext(idx);
    setTimeout(() => {
      setCurrent(idx);
      setNext(null);
      setCaptionVisible(true);
      startCycle(idx);
    }, TRANSITION_DURATION);
  };

  return (
    <section className="relative w-full overflow-hidden" style={{ height: '92vh', minHeight: '600px' }}>
      {/* Cinematic letterbox bars */}
      <div className="absolute top-0 left-0 right-0 z-20 bg-black" style={{ height: '3.5%' }} />
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-black" style={{ height: '3.5%' }} />

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
              opacity: isNext ? 1 : isCurrent ? 1 : 0,
              zIndex: isNext ? 2 : 1,
              transition: isNext ? `opacity ${TRANSITION_DURATION}ms ease-in-out` : undefined,
            }}
          >
            {/* Ken Burns animated wrapper */}
            <div
              className={`w-full h-full ken-burns-${scene.kenBurns}`}
              style={{ animationDuration: `${SCENE_DURATION + TRANSITION_DURATION}ms` }}
            >
              <Image
                src={scene.src}
                alt={scene.title}
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                priority={idx === 0}
                sizes="100vw"
              />
            </div>
          </div>
        );
      })}

      {/* Cinematic gradient overlays */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, transparent 30%, transparent 55%, rgba(0,0,0,0.75) 100%)',
        }}
      />
      {/* Left dark vignette */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            'radial-gradient(ellipse at 20% 50%, transparent 40%, rgba(0,0,0,0.4) 100%)',
        }}
      />

      {/* Caption */}
      <div
        className="absolute z-30 left-0 right-0 px-8 sm:px-16 lg:px-24"
        style={{
          bottom: '12%',
          transition: `opacity ${TRANSITION_DURATION * 0.6}ms ease-in-out, transform ${TRANSITION_DURATION * 0.6}ms ease-in-out`,
          opacity: captionVisible ? 1 : 0,
          transform: captionVisible ? 'translateY(0)' : 'translateY(16px)',
        }}
      >
        {/* Scene label pill */}
        <div className="inline-flex items-center gap-2 mb-4">
          <span
            className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
            style={{ background: 'rgba(4,120,87,0.85)', color: '#fff', letterSpacing: '0.15em' }}
          >
            Scene {current + 1} of {SCENES.length}
          </span>
        </div>
        <h2
          className="font-bold text-white mb-2"
          style={{
            fontSize: 'clamp(1.8rem, 4vw, 3.2rem)',
            textShadow: '0 2px 24px rgba(0,0,0,0.6)',
            lineHeight: 1.15,
          }}
        >
          {SCENES[current].title}
        </h2>
        <p
          className="text-white/80 font-light"
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.3rem)',
            textShadow: '0 1px 10px rgba(0,0,0,0.5)',
          }}
        >
          {SCENES[current].subtitle}
        </p>
      </div>

      {/* Progress bar */}
      <div className="absolute z-30 left-8 right-8 sm:left-16 sm:right-16" style={{ bottom: '9%' }}>
        <div className="w-full h-0.5 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-green-400 rounded-full"
            style={{
              width: `${progress}%`,
              transition: 'width 0.05s linear',
            }}
          />
        </div>
      </div>

      {/* Scene dots + pause button */}
      <div className="absolute z-30 flex items-center gap-4" style={{ bottom: '5.5%', left: '50%', transform: 'translateX(-50%)' }}>
        {SCENES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToScene(idx)}
            aria-label={`Go to scene ${idx + 1}`}
            style={{
              width: idx === current ? '28px' : '8px',
              height: '8px',
              borderRadius: '9999px',
              background: idx === current ? '#4ade80' : 'rgba(255,255,255,0.4)',
              transition: 'all 0.4s ease',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
            }}
          />
        ))}
        <button
          onClick={() => setPaused(p => !p)}
          aria-label={paused ? 'Play' : 'Pause'}
          className="ml-3 flex items-center justify-center rounded-full border border-white/40 bg-black/30 hover:bg-black/50 transition-colors"
          style={{ width: '32px', height: '32px' }}
        >
          {paused ? (
            <svg width="13" height="14" viewBox="0 0 13 14" fill="white">
              <polygon points="2,1 12,7 2,13" />
            </svg>
          ) : (
            <svg width="12" height="13" viewBox="0 0 12 13" fill="white">
              <rect x="1" y="1" width="3.5" height="11" rx="1" />
              <rect x="7.5" y="1" width="3.5" height="11" rx="1" />
            </svg>
          )}
        </button>
      </div>

      {/* Top-left branding */}
      <div className="absolute top-8 left-8 sm:left-16 z-30">
        <div
          className="text-white font-light tracking-widest uppercase text-xs"
          style={{ letterSpacing: '0.25em', textShadow: '0 1px 8px rgba(0,0,0,0.5)' }}
        >
          Abhishag Home Health Services
        </div>
      </div>

      {/* CSS for Ken Burns */}
      <style>{`
        @keyframes kenBurnsZoomInRight {
          0%   { transform: scale(1.08) translate(-1%, 0%); }
          100% { transform: scale(1.18) translate(1%, -0.5%); }
        }
        @keyframes kenBurnsZoomInLeft {
          0%   { transform: scale(1.08) translate(1%, 0%); }
          100% { transform: scale(1.18) translate(-1%, 0.5%); }
        }
        @keyframes kenBurnsZoomInTop {
          0%   { transform: scale(1.08) translate(0%, 1%); }
          100% { transform: scale(1.18) translate(0%, -0.5%); }
        }
        .ken-burns-zoom-in-right {
          animation: kenBurnsZoomInRight ease-in-out forwards;
          will-change: transform;
        }
        .ken-burns-zoom-in-left {
          animation: kenBurnsZoomInLeft ease-in-out forwards;
          will-change: transform;
        }
        .ken-burns-zoom-in-top {
          animation: kenBurnsZoomInTop ease-in-out forwards;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}
