const objectives = [
  {
    icon: '🏗️',
    title: 'Turnkey Infrastructure Delivery (W2E & W2F EPC)',
    points: [
      'Deliver fully bankable W2E and W2F projects from concept to operations',
      'Integrate land acquisition, feasibility, design, financing, construction, and operations under one PFDM system',
      'De-risk municipal and sovereign infrastructure development',
    ],
  },
  {
    icon: '💰',
    title: 'Project Finance & Investment Structuring',
    points: [
      'Mobilise blended finance (DFIs, ESG funds, green bonds, private equity)',
      'Structure Special Purpose Vehicles (SPVs) for each project with investment-grade governance',
      'Ensure predictable returns through diversified circular economy revenue streams',
    ],
  },
  {
    icon: '🤝',
    title: 'GEC Economic Transformation System',
    points: [
      'Formalise up to 30,000 waste pickers into Green Environmental Comrades (GECs)',
      'Develop 1,500+ GEC-owned enterprises with equity participation',
      'Enable Equity Ownership Trust for GEC stakeholders',
      'Drive inclusive wealth creation through tokenised participation systems',
    ],
  },
  {
    icon: '🔗',
    title: 'Digital Circular Economy Platform',
    points: [
      'Deploy SW-RW blockchain-based Waste Token System (WTS)',
      'Integrate AI, IoT, drones, and digital twin into waste infrastructure',
      'Enable real-time tracking of waste-to-value conversion across the ecosystem',
    ],
  },
  {
    icon: '⚡',
    title: 'Waste-to-Energy & Waste-to-Fuel Expansion',
    points: [
      'Develop scalable 88MW+ W2E campuses starting with Robinson Deep',
      'Expand W2F solutions for RDF, biofuels, and industrial feedstock',
      'Position waste as a sovereign energy and fuel asset class',
    ],
  },
  {
    icon: '🏛️',
    title: 'Public-Private Partnership (PPP) Integration',
    points: [
      'Work directly with municipalities to structure long-term concessions',
      'Align with national waste, energy, climate, and industrial policies',
    ],
  },
  {
    icon: '🌿',
    title: 'Sustainability & Climate Impact',
    points: [
      'Achieve large-scale landfill diversion',
      'Generate verified carbon credits and ESG-aligned revenue',
      'Support South Africa\'s net-zero transition through circular systems',
    ],
  },
  {
    icon: '🎓',
    title: 'Human Capital Development & Innovation',
    points: [
      'Implement SETA-accredited training through GEC Model',
      'Build future skills in AI, logistics, drone operations, recycling, and energy systems',
      'Transition informal labour into certified green economy professionals',
    ],
  },
]

export default function MissionPage() {
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
          width: 400, height: 400,
          background: 'radial-gradient(circle at top right, rgba(45,122,58,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
          <div style={{ fontSize: 11, letterSpacing: 3, color: '#c8a84b', fontWeight: 700, marginBottom: 16 }}>PAGE 2 · MISSION & GOALS</div>
          <h1 style={{ fontSize: 'clamp(32px, 4vw, 54px)', fontWeight: 900, color: '#fff', margin: '0 0 20px', lineHeight: 1.1 }}>
            Our Mission & Goals
          </h1>
          <p style={{ fontSize: 18, color: '#a0cba4', maxWidth: 680, lineHeight: 1.7, margin: 0 }}>
            SW-RW exists to design, finance, develop, and operate end-to-end circular economy infrastructure systems that convert waste into economic value — delivering bankable, scalable, and investable infrastructure that removes development risk from clients while maximising socio-economic transformation.
          </p>
        </div>
      </section>

      {/* Mission pillars */}
      <section style={{ padding: '60px 24px', background: '#060f07' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {[
              { icon: '🔗', label: 'Integrated W2E & W2F EPC Delivery', color: '#2d7a3a' },
              { icon: '💹', label: 'PFDM Finance Model', color: '#c8a84b' },
              { icon: '♻️', label: 'GEC Formalisation at Scale', color: '#2d7a3a' },
              { icon: '📱', label: 'Digital Transformation via Blockchain & AI', color: '#c8a84b' },
              { icon: '🤝', label: 'Strategic Government Partnerships', color: '#2d7a3a' },
            ].map(p => (
              <div key={p.label} style={{
                background: 'rgba(45,122,58,0.07)',
                border: '1px solid rgba(45,122,58,0.18)',
                borderRadius: 10,
                padding: '20px 24px',
                display: 'flex',
                alignItems: 'center',
                gap: 16,
              }}>
                <span style={{ fontSize: 28 }}>{p.icon}</span>
                <span style={{ fontSize: 14, fontWeight: 600, color: '#d1fad4' }}>{p.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Objectives */}
      <section style={{ padding: '60px 24px 80px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 11, letterSpacing: 3, color: '#c8a84b', fontWeight: 700, marginBottom: 12 }}>STRATEGIC OBJECTIVES</div>
            <h2 style={{ fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 700, color: '#fff', margin: 0 }}>8 Pillars of Our Mission</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24 }}>
            {objectives.map((obj, i) => (
              <div key={i} style={{
                background: 'rgba(45,122,58,0.06)',
                border: '1px solid rgba(45,122,58,0.15)',
                borderRadius: 14,
                padding: 28,
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 18 }}>
                  <div style={{
                    width: 48, height: 48,
                    background: 'rgba(45,122,58,0.15)',
                    borderRadius: 10,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 24, flexShrink: 0,
                  }}>{obj.icon}</div>
                  <div>
                    <div style={{ fontSize: 11, color: '#c8a84b', fontWeight: 700, letterSpacing: 1, marginBottom: 4 }}>OBJECTIVE {i + 1}</div>
                    <h3 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: '#fff', lineHeight: 1.3 }}>{obj.title}</h3>
                  </div>
                </div>
                <ul style={{ margin: 0, padding: '0 0 0 16px' }}>
                  {obj.points.map((pt, j) => (
                    <li key={j} style={{ fontSize: 13, color: '#7aaa80', lineHeight: 1.6, marginBottom: 6 }}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geographic Rollout */}
      <section style={{ padding: '60px 24px 80px', background: '#060f07' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div style={{ fontSize: 11, letterSpacing: 3, color: '#c8a84b', fontWeight: 700, marginBottom: 12 }}>GEOGRAPHIC ROLLOUT</div>
            <h2 style={{ fontSize: 28, fontWeight: 700, color: '#fff', margin: 0 }}>Strategic Targeted Metros</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
            {[
              { label: 'Primary Nodes', cities: ['Johannesburg (Anchor – CoJ)', 'Ekurhuleni', 'eThekwini', 'Cape Town'], color: '#2d7a3a' },
              { label: 'Secondary Nodes', cities: ['Nelson Mandela Bay', 'Buffalo City', 'Mangaung'], color: '#c8a84b' },
              { label: 'Expansion Nodes', cities: ['Rustenburg', 'Mbombela'], color: '#4a8a50' },
              { label: 'Long Tail', cities: ['All district + local municipalities via platform model'], color: '#3a6a40' },
            ].map(tier => (
              <div key={tier.label} style={{
                background: 'rgba(45,122,58,0.06)',
                border: `1px solid ${tier.color}33`,
                borderTop: `3px solid ${tier.color}`,
                borderRadius: 12,
                padding: 24,
              }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: tier.color, letterSpacing: 1, marginBottom: 14 }}>{tier.label.toUpperCase()}</div>
                {tier.cities.map(c => (
                  <div key={c} style={{ fontSize: 13, color: '#a0cba4', marginBottom: 8, paddingLeft: 12, borderLeft: `2px solid ${tier.color}44` }}>{c}</div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
