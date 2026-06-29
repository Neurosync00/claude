import { Link } from 'react-router-dom'

const stats = [
  { value: '2M+', label: 'Direct Jobs Targeted' },
  { value: '88MW+', label: 'W2E Campus Output' },
  { value: '15M', label: 'Platform Users Goal' },
  { value: '50-70%', label: 'Waste Diversion Target' },
]

export default function VisionPage() {
  return (
    <div>
      {/* Hero */}
      <section style={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(160deg, #0a1a0c 0%, #0d2510 40%, #071508 100%)',
      }}>
        {/* Decorative circles */}
        <div style={{
          position: 'absolute', top: -100, right: -100,
          width: 600, height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(45,122,58,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: -150, left: -100,
          width: 500, height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(200,168,75,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        {/* Grid lines */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `
            linear-gradient(rgba(45,122,58,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(45,122,58,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 24px', position: 'relative', zIndex: 1, width: '100%', boxSizing: 'border-box' }}>
          <div style={{ maxWidth: 780 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(45,122,58,0.15)', border: '1px solid rgba(45,122,58,0.3)', borderRadius: 24, padding: '6px 16px', marginBottom: 32 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#4caf50', animation: 'pulse 2s infinite' }} />
              <span style={{ color: '#4caf50', fontSize: 12, fontWeight: 600, letterSpacing: 1.5 }}>SYNERGYWORX RAINMAKERS · SW-RW</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(36px, 5vw, 64px)',
              fontWeight: 900,
              lineHeight: 1.1,
              margin: '0 0 24px',
              color: '#fff',
            }}>
              Transforming Waste Into
              <span style={{
                display: 'block',
                background: 'linear-gradient(90deg, #2d7a3a, #4caf50, #c8a84b)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Energy, Finance & Opportunity
              </span>
            </h1>

            <p style={{ fontSize: 18, lineHeight: 1.7, color: '#a0cba4', marginBottom: 40, maxWidth: 640 }}>
              A leading African and global turnkey development platform that transforms waste into energy, finance, and opportunity through fully integrated Waste-to-Energy (W2E) and Waste-to-Fuel (W2F) systems — anchored in inclusive human capital development, digital innovation, and sustainable infrastructure.
            </p>

            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link to="/mission" style={{
                padding: '14px 32px',
                background: 'linear-gradient(135deg, #2d7a3a, #1a4d25)',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 15,
                border: '1px solid #4caf5044',
                transition: 'all 0.2s',
              }}>
                Explore Our Mission →
              </Link>
              <Link to="/tenders" style={{
                padding: '14px 32px',
                background: 'rgba(200,168,75,0.12)',
                color: '#c8a84b',
                textDecoration: 'none',
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 15,
                border: '1px solid rgba(200,168,75,0.4)',
                transition: 'all 0.2s',
              }}>
                COJ PPP Tender
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ background: '#060f07', borderTop: '1px solid #2d7a3a22', borderBottom: '1px solid #2d7a3a22' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 24, textAlign: 'center' }}>
          {stats.map(s => (
            <div key={s.value}>
              <div style={{ fontSize: 36, fontWeight: 900, color: '#c8a84b', lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: 12, color: '#7aaa80', marginTop: 6, letterSpacing: 0.5 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Vision statement */}
      <section style={{ background: 'linear-gradient(180deg, #0a1a0c 0%, #071508 100%)', padding: '80px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: 11, letterSpacing: 3, color: '#c8a84b', fontWeight: 700, marginBottom: 20 }}>OUR VISION</div>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 700, color: '#fff', lineHeight: 1.4, margin: '0 0 32px' }}>
            The Municipal Circular Intelligence Economy
          </h2>
          <div style={{
            background: 'rgba(45,122,58,0.08)',
            border: '1px solid rgba(45,122,58,0.2)',
            borderRadius: 16,
            padding: '40px 48px',
            position: 'relative',
          }}>
            <div style={{ fontSize: 60, color: '#2d7a3a', position: 'absolute', top: 20, left: 32, lineHeight: 1, opacity: 0.4 }}>"</div>
            <p style={{ fontSize: 18, lineHeight: 1.8, color: '#a0cba4', fontStyle: 'italic', position: 'relative', zIndex: 1, margin: 0 }}>
              To become a leading African and global turnkey development platform that transforms waste into energy, finance, and opportunity through fully integrated Waste-to-Energy (W2E) and Waste-to-Fuel (W2F) using Engineering, Procurement, and Construction (EPC) — a turnkey project delivery model — anchored in inclusive human capital development, digital innovation, and sustainable infrastructure under the Synergyworx International Holdings' Project Finance Development Management (PFDM) model.
            </p>
          </div>
        </div>
      </section>

      {/* Platform pillars */}
      <section style={{ padding: '80px 24px', background: '#071508' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ fontSize: 11, letterSpacing: 3, color: '#c8a84b', fontWeight: 700, marginBottom: 12 }}>THE PLATFORM</div>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, color: '#fff', margin: 0 }}>
              Waste as a Multi-Sector Economic System
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {[
              { icon: '⚡', label: 'Waste → Energy', desc: 'Municipal solid waste converted to electricity and baseload power via mass-burn W2E technology', color: '#2d7a3a' },
              { icon: '⛽', label: 'Waste → Fuel', desc: 'Refuse-Derived Fuel (RDF), biofuels, and industrial feedstock for cement and manufacturing markets', color: '#1a5e2a' },
              { icon: '🪙', label: 'Waste → Token', desc: 'Blockchain-based Waste Token System enabling digital currency for waste pickers, households, and SMEs', color: '#c8a84b' },
              { icon: '👷', label: 'Waste → Jobs', desc: 'Formalising up to 30,000 informal waste pickers into Green Environmental Comrades (GECs) with equity', color: '#3a8a48' },
              { icon: '🤖', label: 'Waste → Intelligence', desc: 'AI, IoT, drones and digital twin technology for real-time smart city waste management', color: '#2d7a3a' },
              { icon: '🌍', label: 'Waste → Climate', desc: 'Verified carbon credits, reduced GHG emissions, and support for South Africa\'s net-zero transition', color: '#1a5e2a' },
            ].map(p => (
              <div key={p.label} style={{
                background: 'rgba(45,122,58,0.06)',
                border: '1px solid rgba(45,122,58,0.15)',
                borderRadius: 12,
                padding: 28,
                transition: 'all 0.2s',
              }}>
                <div style={{ fontSize: 32, marginBottom: 16 }}>{p.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 16, color: '#fff', marginBottom: 10 }}>{p.label}</div>
                <p style={{ fontSize: 14, color: '#7aaa80', lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }`}</style>
    </div>
  )
}
