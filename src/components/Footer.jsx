import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{
      background: '#060f07',
      borderTop: '1px solid #2d7a3a33',
      padding: '48px 24px 24px',
      color: '#7aaa80',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 40, marginBottom: 40 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{
                width: 40, height: 40,
                background: 'linear-gradient(135deg, #2d7a3a, #c8a84b)',
                borderRadius: 8,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 800, fontSize: 16, color: '#fff',
              }}>SW</div>
              <div>
                <div style={{ color: '#fff', fontWeight: 700, fontSize: 13 }}>SYNERGYWORX</div>
                <div style={{ color: '#c8a84b', fontWeight: 600, fontSize: 11, letterSpacing: 2 }}>RAINMAKERS</div>
              </div>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.7, color: '#7aaa80' }}>
              A Division of Synergyworx International Holdings (SWIH)<br />
              Reg. No. 2026/437822/07
            </p>
            <p style={{ fontSize: 13, marginTop: 10, color: '#5a8a60' }}>
              Transforming waste into energy, finance, and opportunity across Africa.
            </p>
          </div>

          <div>
            <h4 style={{ color: '#c8a84b', fontWeight: 700, fontSize: 13, letterSpacing: 1, marginBottom: 16, marginTop: 0 }}>NAVIGATION</h4>
            {[
              ['/','Vision'],
              ['/mission','Mission'],
              ['/strategic-values','Strategic Values'],
              ['/core-values','Core Values'],
              ['/management-systems','Management Systems'],
              ['/tenders','Government Tenders'],
              ['/contact','Contact Us'],
            ].map(([path, label]) => (
              <Link key={path} to={path} style={{ display: 'block', color: '#7aaa80', textDecoration: 'none', fontSize: 13, marginBottom: 8, transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color='#c8a84b'}
                onMouseLeave={e => e.target.style.color='#7aaa80'}
              >{label}</Link>
            ))}
          </div>

          <div>
            <h4 style={{ color: '#c8a84b', fontWeight: 700, fontSize: 13, letterSpacing: 1, marginBottom: 16, marginTop: 0 }}>SERVICES</h4>
            {['Waste-to-Energy (W2E)', 'Waste-to-Fuel (W2F)', 'Waste-to-Token (W2T)', 'GEC Ecosystem', 'PPP Structuring', 'Digital Platform'].map(s => (
              <div key={s} style={{ color: '#7aaa80', fontSize: 13, marginBottom: 8 }}>{s}</div>
            ))}
          </div>

          <div>
            <h4 style={{ color: '#c8a84b', fontWeight: 700, fontSize: 13, letterSpacing: 1, marginBottom: 16, marginTop: 0 }}>CONTACT</h4>
            <div style={{ fontSize: 13, lineHeight: 1.9, color: '#7aaa80' }}>
              <div>Johannesburg, South Africa</div>
              <div>Synergyworx International Holdings</div>
              <div style={{ marginTop: 12 }}>Primary Markets: South Africa</div>
              <div>Expansion: Africa-wide</div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #2d7a3a22', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 12, color: '#3d6b42', margin: 0 }}>
            © 2026 Synergyworx Rainmakers (Pty) Ltd. All rights reserved. A subsidiary of Synergyworx International Holdings.
          </p>
          <div style={{ display: 'flex', gap: 8 }}>
            <span style={{ fontSize: 11, color: '#2d5e32', background: '#1a3d1e', padding: '4px 10px', borderRadius: 20 }}>W2E</span>
            <span style={{ fontSize: 11, color: '#2d5e32', background: '#1a3d1e', padding: '4px 10px', borderRadius: 20 }}>W2F</span>
            <span style={{ fontSize: 11, color: '#2d5e32', background: '#1a3d1e', padding: '4px 10px', borderRadius: 20 }}>GEC</span>
            <span style={{ fontSize: 11, color: '#2d5e32', background: '#1a3d1e', padding: '4px 10px', borderRadius: 20 }}>PPP</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
