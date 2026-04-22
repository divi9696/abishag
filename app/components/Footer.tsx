'use client';

export default function Footer() {
  return (
    <footer style={{ background: '#200D05', color: '#EDE8E2' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div style={{ width: '54px', height: '54px', borderRadius: '13px', overflow: 'hidden', background: '#ffffff', flexShrink: 0, boxShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>
                <img src="/logo-transparent.png" alt="Abishag" style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '4px' }} />
              </div>
              <div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', fontWeight: 700, color: '#ffffff' }}>
                  Abishag
                </div>
                <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: '0.58rem', fontWeight: 700, color: '#6AB04C', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                  Home Health Services
                </div>
              </div>
            </div>
            <p style={{ fontFamily: "'Nunito', sans-serif", color: 'rgba(237,232,226,0.6)', fontSize: '0.88rem', lineHeight: 1.75 }}>
              Abundance of Life — Compassionate home health services for your loved ones.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', fontWeight: 700, color: '#ffffff', marginBottom: '18px' }}>
              Quick Links
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { href: '/', label: 'Home' },
                { href: '/services', label: 'Services' },
                { href: '/blog', label: 'Blog' },
                { href: '/about', label: 'About Us' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    style={{
                      fontFamily: "'Nunito', sans-serif",
                      color: 'rgba(237,232,226,0.62)',
                      fontSize: '0.9rem',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => (e.target as HTMLElement).style.color = '#6AB04C'}
                    onMouseLeave={e => (e.target as HTMLElement).style.color = 'rgba(237,232,226,0.62)'}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', fontWeight: 700, color: '#ffffff', marginBottom: '18px' }}>
              Contact
            </h3>
            <div style={{ fontFamily: "'Nunito', sans-serif", color: 'rgba(237,232,226,0.62)', fontSize: '0.9rem', lineHeight: 2 }}>
              <p>Email: contact@abishag.com</p>
              <p>Phone: Coming Soon</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div style={{ borderTop: '1px solid rgba(237,232,226,0.1)', marginTop: '44px', paddingTop: '28px', textAlign: 'center' }}>
          <p style={{ fontFamily: "'Nunito', sans-serif", color: 'rgba(237,232,226,0.38)', fontSize: '0.8rem' }}>
            © 2026 Abishag — Home Health Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
