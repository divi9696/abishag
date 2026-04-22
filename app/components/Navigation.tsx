'use client';

import Link from 'next/link';

export default function Navigation() {
  return (
    <nav
      style={{
        background: '#ffffff',
        borderBottom: '1.5px solid #DDD5CC',
        boxShadow: '0 2px 14px rgba(61,26,10,0.08)',
        /* ── Fix 2: sticky so nav stays visible on scroll ── */
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Fix 2: reduced height from 74px → 58px ── */}
        <div className="flex justify-between items-center" style={{ height: '58px' }}>
          {/* Logo — using new logo.png */}
          <Link href="/" className="flex items-center gap-2 group py-1">
            <div
              className="transition-transform duration-300 group-hover:scale-105"
              style={{ height: '46px', width: '46px', flexShrink: 0 }}
            >
              {/* ── Fix 3: updated to logo.png ── */}
              <img
                src="/logo-transparent.png"
                alt="Abishag Logo"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: '#3D1A0A',
                  lineHeight: 1,
                  letterSpacing: '-0.01em',
                }}
              >
                Abishag
              </span>
              <span
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: '0.54rem',
                  fontWeight: 700,
                  color: '#6AB04C',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  marginTop: '2px',
                }}
              >
                Home Health Services
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex gap-8 items-center">
            {[
              { href: '/', label: 'Home' },
              { href: '/services', label: 'Services' },
              { href: '/about', label: 'About Us' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 600,
                  fontSize: '0.93rem',
                  color: '#5C3D2A',
                  letterSpacing: '0.02em',
                  textDecoration: 'none',
                  padding: '5px 0',
                  borderBottom: '2px solid transparent',
                  transition: 'color 0.2s, border-color 0.2s',
                }}
                onMouseEnter={e => {
                  (e.target as HTMLElement).style.color = '#3D1A0A';
                  (e.target as HTMLElement).style.borderBottomColor = '#6AB04C';
                }}
                onMouseLeave={e => {
                  (e.target as HTMLElement).style.color = '#5C3D2A';
                  (e.target as HTMLElement).style.borderBottomColor = 'transparent';
                }}
              >
                {label}
              </Link>
            ))}
            <a
              href="/about"
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 800,
                fontSize: '0.85rem',
                color: '#ffffff',
                background: '#6AB04C',
                letterSpacing: '0.04em',
                textDecoration: 'none',
                padding: '8px 20px',
                borderRadius: '8px',
                transition: 'background 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => {
                (e.target as HTMLElement).style.background = '#3D1A0A';
                (e.target as HTMLElement).style.transform = 'scale(1.05)';
              }}
              onMouseLeave={e => {
                (e.target as HTMLElement).style.background = '#6AB04C';
                (e.target as HTMLElement).style.transform = 'scale(1)';
              }}
            >
              Contact Us
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button style={{ color: '#3D1A0A' }}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
