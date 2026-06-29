import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { path: '/', label: 'Vision' },
  { path: '/mission', label: 'Mission' },
  { path: '/strategic-values', label: 'Strategic Values' },
  { path: '/core-values', label: 'Core Values' },
  { path: '/management-systems', label: 'Management Systems' },
  { path: '/tenders', label: 'Government Tenders', highlight: true },
  { path: '/contact', label: 'Contact Us' },
]

export default function Navbar() {
  const location = useLocation()
  const [open, setOpen] = useState(false)

  return (
    <nav style={{
      background: 'rgba(10,26,12,0.97)',
      borderBottom: '1px solid #2d7a3a44',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backdropFilter: 'blur(10px)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 70 }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
          <div style={{
            width: 44, height: 44,
            background: 'linear-gradient(135deg, #2d7a3a, #c8a84b)',
            borderRadius: 8,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 800, fontSize: 18, color: '#fff', letterSpacing: -1,
          }}>
            SW
          </div>
          <div>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: 14, lineHeight: 1.2 }}>SYNERGYWORX</div>
            <div style={{ color: '#c8a84b', fontWeight: 600, fontSize: 12, letterSpacing: 2 }}>RAINMAKERS</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <div style={{ display: 'flex', gap: 4, alignItems: 'center', flexWrap: 'wrap' }} className="desktop-nav">
          {navLinks.map(link => {
            const active = location.pathname === link.path || (link.path === '/tenders' && location.pathname.startsWith('/tenders'))
            return (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  padding: '6px 12px',
                  borderRadius: 6,
                  textDecoration: 'none',
                  fontSize: 13,
                  fontWeight: link.highlight ? 700 : 500,
                  color: active ? '#c8a84b' : link.highlight ? '#c8a84b' : '#d1fad4',
                  background: active ? 'rgba(200,168,75,0.12)' : link.highlight ? 'rgba(200,168,75,0.08)' : 'transparent',
                  border: link.highlight ? '1px solid rgba(200,168,75,0.4)' : '1px solid transparent',
                  transition: 'all 0.2s',
                  letterSpacing: link.highlight ? 0.5 : 0,
                }}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', display: 'none', padding: 8 }}
          className="hamburger"
        >
          <div style={{ width: 22, height: 2, background: '#c8a84b', margin: '4px 0', borderRadius: 2 }} />
          <div style={{ width: 22, height: 2, background: '#c8a84b', margin: '4px 0', borderRadius: 2 }} />
          <div style={{ width: 22, height: 2, background: '#c8a84b', margin: '4px 0', borderRadius: 2 }} />
        </button>
      </div>

      {open && (
        <div style={{ background: '#0d200f', padding: '12px 24px 20px' }}>
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              style={{
                display: 'block', padding: '10px 0',
                textDecoration: 'none', fontSize: 14, fontWeight: 600,
                color: link.highlight ? '#c8a84b' : '#d1fad4',
                borderBottom: '1px solid #2d7a3a22',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
