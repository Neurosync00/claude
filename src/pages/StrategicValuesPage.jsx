const objectives = [
  {
    number: '01',
    title: 'Turnkey Infrastructure Delivery',
    subtitle: 'W2E & W2F EPC',
    desc: 'Deliver fully bankable W2E and W2F projects from concept to operations, integrating land acquisition, feasibility, design, financing, construction, and operations under one PFDM system to de-risk municipal and sovereign infrastructure development.',
    icon: '🏗️',
  },
  {
    number: '02',
    title: 'Project Finance & Investment Structuring',
    subtitle: 'DFIs · ESG · Green Bonds',
    desc: 'Mobilise blended finance including DFIs, ESG funds, green bonds, and private equity. Structure Special Purpose Vehicles (SPVs) for each project with investment-grade governance ensuring predictable returns through diversified circular economy revenue streams.',
    icon: '💹',
  },
  {
    number: '03',
    title: 'GEC Economic Transformation',
    subtitle: '30,000 Waste Pickers Formalised',
    desc: 'Formalise up to 30,000 waste pickers into Green Environmental Comrades (GECs), developing 1,500+ GEC-owned enterprises with equity participation and an Equity Ownership Trust, driving inclusive wealth creation through tokenised participation systems.',
    icon: '🤝',
  },
  {
    number: '04',
    title: 'Digital Circular Economy Platform',
    subtitle: 'Blockchain · AI · IoT',
    desc: 'Deploy SW-RW blockchain-based Waste Token System (WTS). Integrate AI, IoT, drones, and digital twin technology into waste infrastructure to enable real-time tracking of waste-to-value conversion across the entire ecosystem.',
    icon: '🔗',
  },
  {
    number: '05',
    title: 'W2E & W2F Expansion',
    subtitle: '88MW+ Campuses',
    desc: 'Develop scalable 88MW+ W2E campuses starting with Robinson Deep, expanding W2F solutions for RDF, biofuels, and industrial feedstock, positioning waste as a sovereign energy and fuel asset class across Africa.',
    icon: '⚡',
  },
  {
    number: '06',
    title: 'PPP Integration',
    subtitle: 'Municipal Partnerships',
    desc: 'Work directly with municipalities to structure long-term concession and service agreements while aligning with national waste, energy, climate, and industrial policies for sustainable co-governance of circular infrastructure.',
    icon: '🏛️',
  },
  {
    number: '07',
    title: 'Sustainability & Climate Impact',
    subtitle: 'Carbon Credits · Net-Zero',
    desc: 'Achieve large-scale landfill diversion and generate verified carbon credits with ESG-aligned revenue streams. Support South Africa\'s net-zero transition through systemic circular economy infrastructure and policy alignment.',
    icon: '🌿',
  },
  {
    number: '08',
    title: 'Human Capital Development',
    subtitle: 'SETA-Accredited Training',
    desc: 'Implement SETA-accredited training through the GEC Model. Build future skills in AI, logistics, drone operations, recycling, and energy systems, transitioning informal labour into certified green economy professionals.',
    icon: '🎓',
  },
]

export default function StrategicValuesPage() {
  return (
    <div style={{ background: 'linear-gradient(180deg, #0a1a0c 0%, #071508 100%)', minHeight: '100vh' }}>
      {/* Header */}
      <section style={{
        background: 'linear-gradient(160deg, #0d2510 0%, #0a1a0c 100%)',
        padding: '80px 24px 60px',
        borderBottom: '1px solid #2d7a3a22',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: 0, right: 0,
          width: 500, height: 500,
          background: 'radial-gradient(circle at top right, rgba(200,168,75,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
          <div style={{ fontSize: 11, letterSpacing: 3, color: '#c8a84b', fontWeight: 700, marginBottom: 16 }}>PAGE 3 · STRATEGIC VALUES</div>
          <h1 style={{ fontSize: 'clamp(32px, 4vw, 54px)', fontWeight: 900, color: '#fff', margin: '0 0 20px', lineHeight: 1.1 }}>
            Strategic Values
          </h1>
          <p style={{ fontSize: 18, color: '#a0cba4', maxWidth: 680, lineHeight: 1.7, margin: 0 }}>
            What Synergyworx Rainmakers stands for and how we plan to achieve our goals — eight strategic pillars that define our approach to building Africa's next-generation Municipal Circular Intelligence Economy.
          </p>
        </div>
      </section>

      {/* Positioning banner */}
      <section style={{ background: '#060f07', padding: '40px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: 16, color: '#a0cba4', lineHeight: 1.7, margin: 0 }}>
            SW-RW delivers a next-generation <strong style={{ color: '#fff' }}>Municipal Circular Intelligence Economy Platform</strong> where waste becomes energy, fuel, digital currency, jobs, SMEs, and real-time smart city intelligence — the only platform that converts waste into a multi-sector economic system.
          </p>
        </div>
      </section>

      {/* Strategic objectives grid */}
      <section style={{ padding: '60px 24px 80px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: 24 }}>
            {objectives.map(obj => (
              <div key={obj.number} style={{
                background: 'rgba(45,122,58,0.06)',
                border: '1px solid rgba(45,122,58,0.15)',
                borderRadius: 16,
                padding: 32,
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute', top: -10, right: 20,
                  fontSize: 72, fontWeight: 900, color: '#2d7a3a',
                  opacity: 0.12, lineHeight: 1, pointerEvents: 'none',
                }}>{obj.number}</div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 18, marginBottom: 20 }}>
                  <div style={{
                    width: 52, height: 52,
                    background: 'rgba(45,122,58,0.15)',
                    border: '1px solid rgba(45,122,58,0.3)',
                    borderRadius: 12,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 26, flexShrink: 0,
                  }}>{obj.icon}</div>
                  <div>
                    <h3 style={{ margin: '0 0 4px', fontSize: 16, fontWeight: 700, color: '#fff' }}>{obj.title}</h3>
                    <div style={{ fontSize: 11, color: '#c8a84b', fontWeight: 600, letterSpacing: 1 }}>{obj.subtitle}</div>
                  </div>
                </div>
                <p style={{ fontSize: 14, color: '#7aaa80', lineHeight: 1.7, margin: 0 }}>{obj.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Architecture */}
      <section style={{ padding: '60px 24px 80px', background: '#060f07' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: 11, letterSpacing: 3, color: '#c8a84b', fontWeight: 700, marginBottom: 20 }}>HOW IT WORKS</div>
          <h2 style={{ fontSize: 28, fontWeight: 700, color: '#fff', marginBottom: 40 }}>System Architecture</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center' }}>
            {[
              { label: 'WASTE INPUT', sub: 'Households · Businesses · IWPs', color: '#2d7a3a', arrow: true },
              { label: 'COLLECTION', sub: 'GEC + SMEs', color: '#1a5e2a', arrow: true },
              { label: 'SORTING + MATERIAL RECOVERY', sub: 'dMRF Dirty Materials Recovery', color: '#0d4d1a', arrow: true },
              { label: 'PROCESSING', sub: 'W2E (Electricity) · W2F (RDF Fuel) · Recycling · W2T (Tokenisation)', color: '#1a4d25', arrow: true },
              { label: 'DIGITAL PLATFORM', sub: 'AI · Blockchain · Smart Contracts', color: '#0d3d15', arrow: true },
              { label: 'ECONOMIC OUTPUTS', sub: 'Jobs · SMEs · Energy · Fuel · Digital Currency · Data Intelligence', color: '#c8a84b', textColor: '#0a1a0c', arrow: false },
            ].map(step => (
              <div key={step.label} style={{ width: '100%', maxWidth: 600 }}>
                <div style={{
                  background: step.color,
                  borderRadius: 10,
                  padding: '14px 24px',
                  textAlign: 'center',
                }}>
                  <div style={{ fontWeight: 700, fontSize: 13, color: step.textColor || '#fff', letterSpacing: 1 }}>{step.label}</div>
                  <div style={{ fontSize: 12, color: step.textColor ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.6)', marginTop: 3 }}>{step.sub}</div>
                </div>
                {step.arrow && (
                  <div style={{ textAlign: 'center', fontSize: 20, color: '#2d7a3a', lineHeight: 1, margin: '2px 0' }}>↓</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
