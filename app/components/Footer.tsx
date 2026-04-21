export default function Footer() {
  return (
    <footer style={{ background: '#1a0e08', color: '#e8e4dc' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div style={{ width: '52px', height: '52px', borderRadius: '12px', overflow: 'hidden', background: 'rgba(255,255,255,0.1)', flexShrink: 0 }}>
                <img src="/logo.jpeg" alt="Abhishag" style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '4px' }} />
              </div>
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', fontWeight: 700, color: '#ffffff' }}>
                  Abhishag
                </div>
                <div style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.6rem', fontWeight: 600, color: '#6AAF2C', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                  Home Health Services
                </div>
              </div>
            </div>
            <p style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(232,228,220,0.65)', fontSize: '0.9rem', lineHeight: 1.7 }}>
              Abundance of Life — Compassionate home health services for your loved ones.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: '16px' }}>
              Quick Links
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { href: '/', label: 'Home' },
                { href: '/services', label: 'Services' },
                { href: '/about', label: 'About Us' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      color: 'rgba(232,228,220,0.65)',
                      fontSize: '0.9rem',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => (e.target as HTMLElement).style.color = '#6AAF2C'}
                    onMouseLeave={e => (e.target as HTMLElement).style.color = 'rgba(232,228,220,0.65)'}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: '16px' }}>
              Contact
            </h3>
            <div style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(232,228,220,0.65)', fontSize: '0.9rem', lineHeight: 1.9 }}>
              <p>Email: contact@abhishag.com</p>
              <p>Phone: Coming Soon</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div style={{ borderTop: '1px solid rgba(232,228,220,0.12)', marginTop: '40px', paddingTop: '28px', textAlign: 'center' }}>
          <p style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(232,228,220,0.4)', fontSize: '0.82rem' }}>
            © 2026 Abhishag — Home Health Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
