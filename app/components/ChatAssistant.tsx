'use client';

import { useState, useRef, useEffect } from 'react';

// ── Types ────────────────────────────────────────────────────────────────────
interface Message {
  from: 'bot' | 'user';
  text: string;
}

interface Option {
  label: string;
  next: string;
}

interface Node {
  text: string;
  options?: Option[];
  link?: string;
}

// ── Conversation flow ────────────────────────────────────────────────────────
const flow: Record<string, Node> = {
  start: {
    text: "Hello! I'm the Abishag Care Guide. I'm here to help you find the right service for your loved one. What best describes your situation?",
    options: [
      { label: 'I need daily care support at home', next: 'daily_care' },
      { label: 'My loved one has a specific condition', next: 'condition' },
      { label: 'Looking for medical/clinical services', next: 'medical' },
      { label: 'End-of-life or comfort care', next: 'end_of_life' },
      { label: 'I need help with logistics & support', next: 'logistics' },
    ],
  },
  daily_care: {
    text: 'Great. For day-to-day home care, what kind of support is needed most?',
    options: [
      { label: 'Companionship, meals, hygiene (Caregiver)', next: 'rec_caregiver' },
      { label: 'Medication & wound care (Nurse)', next: 'rec_nursing' },
      { label: 'Specialist therapy (Physio / OT / Speech)', next: 'rec_allied' },
      { label: 'Elderly-focused comprehensive care', next: 'rec_geriatric' },
    ],
  },
  condition: {
    text: 'Which condition are you managing?',
    options: [
      { label: 'Dementia / Alzheimer\'s', next: 'rec_dementia' },
      { label: 'Serious / terminal illness', next: 'rec_palliative' },
      { label: 'Post-surgery / acute recovery', next: 'rec_nursing' },
      { label: 'Mental health concerns', next: 'rec_mental' },
      { label: 'General elderly / frailty', next: 'rec_geriatric' },
    ],
  },
  medical: {
    text: 'Which medical service are you looking for?',
    options: [
      { label: 'Lab tests at home', next: 'rec_lab' },
      { label: 'Medication delivery', next: 'rec_pharmacy' },
      { label: 'Medical equipment setup', next: 'rec_equipment' },
      { label: 'Home ICU setup', next: 'rec_icu' },
      { label: 'Dietician / nutrition advice', next: 'rec_dietician' },
    ],
  },
  end_of_life: {
    text: 'We understand this is a difficult time. What kind of support are you looking for?',
    options: [
      { label: 'Comfort & dignity care (Hospice)', next: 'rec_hospice' },
      { label: 'Pain & symptom relief (Palliative)', next: 'rec_palliative' },
      { label: 'Emotional & mental health support', next: 'rec_mental' },
    ],
  },
  logistics: {
    text: 'How can we help with coordination and support?',
    options: [
      { label: 'Scheduling multiple services', next: 'rec_coordination' },
      { label: 'Quick on-demand nurse visit', next: 'rec_nursevisit' },
      { label: 'Not sure — show me all services', next: 'rec_all' },
    ],
  },

  // ── Recommendations ──────────────────────────────────────────────────────
  rec_caregiver: {
    text: '✦ We recommend: Caregiver Services\n\nOur trained caregivers assist with daily activities, personal hygiene, meal prep, and companionship — helping your loved one stay comfortable at home.',
    link: '/services',
    options: [{ label: 'View all services', next: 'rec_all' }, { label: 'Start over', next: 'start' }],
  },
  rec_nursing: {
    text: '✦ We recommend: Nursing Services\n\nLicensed nurses provide wound care, medication management, health monitoring, and post-operative support directly at home.',
    link: '/services',
    options: [{ label: 'View all services', next: 'rec_all' }, { label: 'Start over', next: 'start' }],
  },
  rec_allied: {
    text: '✦ We recommend: Allied Health Visit\n\nOur allied health team — physiotherapists, occupational therapists, and speech therapists — provide specialist rehabilitation at home.',
    link: '/services',
    options: [{ label: 'View all services', next: 'rec_all' }, { label: 'Start over', next: 'start' }],
  },
  rec_geriatric: {
    text: '✦ We recommend: Geriatric Care\n\nComprehensive, personalised care for the elderly covering chronic disease management, wellness monitoring, and fall prevention.',
    link: '/services',
    options: [{ label: 'View all services', next: 'rec_all' }, { label: 'Start over', next: 'start' }],
  },
  rec_dementia: {
    text: '✦ We recommend: Dementia Care\n\nOur dementia specialists create safe, structured environments with memory activities and behavioural support to improve quality of life.',
    link: '/services',
    options: [{ label: 'View all services', next: 'rec_all' }, { label: 'Start over', next: 'start' }],
  },
  rec_palliative: {
    text: '✦ We recommend: Palliative Care\n\nFocused on comfort and quality of life, our palliative team manages pain, symptoms, and emotional needs alongside any ongoing treatment.',
    link: '/services',
    options: [{ label: 'View all services', next: 'rec_all' }, { label: 'Start over', next: 'start' }],
  },
  rec_mental: {
    text: '✦ We recommend: Mental Health Counseling\n\nProfessional counsellors provide individual therapy, grief support, and stress management for seniors and their families.',
    link: '/services',
    options: [{ label: 'View all services', next: 'rec_all' }, { label: 'Start over', next: 'start' }],
  },
  rec_hospice: {
    text: '✦ We recommend: Hospice Care\n\nCompassionate end-of-life care focused on comfort, dignity, spiritual support, and family guidance during the most difficult times.',
    link: '/services',
    options: [{ label: 'View all services', next: 'rec_all' }, { label: 'Start over', next: 'start' }],
  },
  rec_lab: {
    text: '✦ We recommend: Lab Sample Collection\n\nWe collect blood samples, urine tests, and more at home — results delivered directly to you, no hospital visit needed.',
    link: '/services',
    options: [{ label: 'View all services', next: 'rec_all' }, { label: 'Start over', next: 'start' }],
  },
  rec_pharmacy: {
    text: '✦ We recommend: Pharmacy Delivery\n\nTimely delivery of prescribed medications and medical supplies directly to your doorstep, with refill reminders.',
    link: '/services',
    options: [{ label: 'View all services', next: 'rec_all' }, { label: 'Start over', next: 'start' }],
  },
  rec_equipment: {
    text: '✦ We recommend: Medical Equipment Setup\n\nProfessional setup and training for home medical equipment — oxygen systems, hospital beds, wheelchairs, and monitoring devices.',
    link: '/services',
    options: [{ label: 'View all services', next: 'rec_all' }, { label: 'Start over', next: 'start' }],
  },
  rec_icu: {
    text: '✦ We recommend: ICU Setup at Home\n\nFor critically ill patients — we replicate hospital-grade ICU care at home with ventilator support, cardiac monitoring, and 24/7 specialist nursing.',
    link: '/services',
    options: [{ label: 'View all services', next: 'rec_all' }, { label: 'Start over', next: 'start' }],
  },
  rec_dietician: {
    text: '✦ We recommend: Dietician Consultation\n\nCertified dieticians create personalised meal plans and nutritional strategies tailored to your loved one\'s health conditions.',
    link: '/services',
    options: [{ label: 'View all services', next: 'rec_all' }, { label: 'Start over', next: 'start' }],
  },
  rec_coordination: {
    text: '✦ We recommend: Care Coordination\n\nOur care coordinators manage all your services — scheduling, doctor communication, family updates, and progress tracking — in one place.',
    link: '/services',
    options: [{ label: 'View all services', next: 'rec_all' }, { label: 'Start over', next: 'start' }],
  },
  rec_nursevisit: {
    text: '✦ We recommend: Nurse Visit (On-demand)\n\nBook an on-call nurse visit for urgent health checks, medication, or monitoring — scheduled or on-demand.',
    link: '/services',
    options: [{ label: 'View all services', next: 'rec_all' }, { label: 'Start over', next: 'start' }],
  },
  rec_all: {
    text: 'You can explore our full range of 15 services on the Services page. Our team can also help you put together a personalised care plan.',
    link: '/services',
    options: [{ label: 'Start over', next: 'start' }],
  },
};

// ── Component ────────────────────────────────────────────────────────────────
export default function ChatAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentNode, setCurrentNode] = useState('start');
  const [showOptions, setShowOptions] = useState(true);
  const [pulse, setPulse] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Stop pulsing after 5 s
  useEffect(() => {
    const t = setTimeout(() => setPulse(false), 5000);
    return () => clearTimeout(t);
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const openChat = () => {
    if (!open && messages.length === 0) {
      const node = flow['start'];
      setMessages([{ from: 'bot', text: node.text }]);
    }
    setOpen(true);
    setPulse(false);
  };

  const handleOption = (option: Option) => {
    const userMsg: Message = { from: 'user', text: option.label };
    const nextNode = flow[option.next];
    const botMsg: Message = { from: 'bot', text: nextNode.text };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setCurrentNode(option.next);
    setShowOptions(true);
  };

  const node = flow[currentNode];

  return (
    <>
      {/* ── Floating button ── */}
      <button
        onClick={openChat}
        aria-label="Open care guide chat"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 9999,
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #6AB04C, #3D7A28)',
          border: 'none',
          cursor: 'pointer',
          boxShadow: pulse
            ? '0 0 0 0 rgba(106,176,76,0.7)'
            : '0 6px 28px rgba(61,26,10,0.35)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'transform 0.2s, box-shadow 0.3s',
          animation: pulse ? 'chatPulse 1.6s ease-in-out infinite' : 'none',
          flexShrink: 0,
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
        }}
      >
        {open ? (
          // Close icon
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          // Chat icon
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>

      {/* ── Chat panel ── */}
      {open && (
        <div
          style={{
            position: 'fixed',
            bottom: '88px',
            right: '10px',
            zIndex: 9998,
            width: 'min(360px, calc(100vw - 20px))',
            maxHeight: 'min(540px, calc(100vh - 110px))',
            background: '#ffffff',
            borderRadius: '20px',
            boxShadow: '0 20px 60px rgba(61,26,10,0.22)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            animation: 'chatSlideUp 0.3s ease-out',
          }}
        >
          {/* Header */}
          <div
            style={{
              background: 'linear-gradient(135deg, #3D1A0A 0%, #6B3020 55%, #4A8A30 100%)',
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6AB04C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.05rem', fontWeight: 700, color: '#ffffff' }}>
                Abishag Care Guide
              </div>
              <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: '0.7rem', color: '#6AB04C', fontWeight: 600 }}>
                Online — here to help
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              style={{ marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.6)', padding: '4px' }}
              aria-label="Close chat"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              background: '#F9F7F4',
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  justifyContent: msg.from === 'user' ? 'flex-end' : 'flex-start',
                }}
              >
                <div
                  style={{
                    maxWidth: '82%',
                    padding: '10px 14px',
                    borderRadius: msg.from === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                    background: msg.from === 'user' ? '#6AB04C' : '#ffffff',
                    color: msg.from === 'user' ? '#ffffff' : '#3D1A0A',
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: '0.85rem',
                    lineHeight: 1.6,
                    boxShadow: '0 2px 8px rgba(61,26,10,0.08)',
                    whiteSpace: 'pre-line',
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Options */}
            {showOptions && node.options && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '4px' }}>
                {node.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleOption(opt)}
                    style={{
                      fontFamily: "'Nunito', sans-serif",
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      color: '#3D1A0A',
                      background: '#ffffff',
                      border: '2px solid #DDD5CC',
                      borderRadius: '12px',
                      padding: '9px 14px',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'border-color 0.2s, background 0.2s, color 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = '#6AB04C';
                      el.style.background = '#EAF5E0';
                      el.style.color = '#2D5A1A';
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = '#DDD5CC';
                      el.style.background = '#ffffff';
                      el.style.color = '#3D1A0A';
                    }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}

            {/* Service link */}
            {node.link && (
              <a
                href={node.link}
                style={{
                  display: 'inline-block',
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 800,
                  fontSize: '0.82rem',
                  color: '#ffffff',
                  background: '#3D1A0A',
                  padding: '9px 18px',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  marginTop: '4px',
                  transition: 'background 0.2s',
                  alignSelf: 'flex-start',
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = '#6AB04C')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = '#3D1A0A')}
              >
                View Services Page →
              </a>
            )}

            <div ref={bottomRef} />
          </div>
        </div>
      )}

      {/* ── Keyframes ── */}
      <style>{`
        @keyframes chatPulse {
          0%   { box-shadow: 0 0 0 0 rgba(106,176,76,0.7); }
          70%  { box-shadow: 0 0 0 14px rgba(106,176,76,0); }
          100% { box-shadow: 0 0 0 0 rgba(106,176,76,0); }
        }
        @keyframes chatSlideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </>
  );
}
