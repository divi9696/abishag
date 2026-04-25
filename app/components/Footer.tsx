'use client';

const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const XIcon = ({ size = 20 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z" />
  </svg>
);

export default function Footer() {
  return (
    <footer style={{ background: '#200D05', color: '#EDE8E2' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
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
              Compassionate home health services for your loved ones.
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

          {/* Social Media */}
          <div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', fontWeight: 700, color: '#ffffff', marginBottom: '18px' }}>
              Follow Us
            </h3>
            <div style={{ display: 'flex', gap: '20px' }}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'rgba(237,232,226,0.62)',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(237,232,226,0.05)',
                  textDecoration: 'none'
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.color = '#6AB04C';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(106, 176, 76, 0.1)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.color = 'rgba(237,232,226,0.62)';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(237,232,226,0.05)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                }}
              >
                <InstagramIcon size={20} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'rgba(237,232,226,0.62)',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(237,232,226,0.05)',
                  textDecoration: 'none'
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.color = '#6AB04C';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(106, 176, 76, 0.1)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.color = 'rgba(237,232,226,0.62)';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(237,232,226,0.05)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                }}
              >
                <XIcon size={18} />
              </a>
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
