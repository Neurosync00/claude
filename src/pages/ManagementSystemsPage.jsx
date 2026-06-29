const businessUnits = [
  {
    id: '3.1',
    title: 'Waste-to-Energy (W2E)',
    icon: '⚡',
    desc: 'Municipal solid waste converted to electricity through mass-burn technology with grid integration supporting municipal and IPP models.',
    streams: ['Power Purchase Agreements (PPAs)', 'Carbon credits', 'Waste gate fees'],
    color: '#2d7a3a',
  },
  {
    id: '3.2',
    title: 'Waste-to-Fuel (W2F)',
    icon: '⛽',
    desc: 'Refuse-Derived Fuel (RDF) and industrial fuel production for cement and manufacturing sectors, with partner plant integration.',
    streams: ['Immediate offtake markets', 'Reduces landfill dependency', 'Industrial feedstock supply'],
    color: '#1a5e2a',
  },
  {
    id: '3.3',
    title: 'Waste-to-Token (W2T)',
    icon: '🪙',
    desc: 'Waste converted into digital value units (tokens) earned by waste pickers, households, schools, and SMEs across the ecosystem.',
    streams: ['Retail purchases', 'Electricity & water payments', 'Municipal rates & transport'],
    color: '#c8a84b',
  },
  {
    id: '3.4',
    title: 'Digital Economy Platform',
    icon: '🤖',
    desc: 'The "Brain" of the system — a blockchain/token engine with AI analytics for waste flows, behaviour tracking, and carbon monitoring.',
    streams: ['Smart contracts (municipal + PPP compliance)', 'Mobile platform (15M users target)', 'Real-time AI analytics'],
    color: '#3a8a48',
  },
  {
    id: '3.5',
    title: 'GEC Commercial Layer',
    icon: '🤝',
    desc: 'Pioneering Inclusive Waste-to-Energy Ecosystem formalising informal waste pickers into structured, trained, digitally enabled Green Environmental Comrades.',
    streams: ['Retail marketplace integration', 'Fintech (wallets, microfinance, insurance)', 'SME trading platform'],
    color: '#4a9a58',
  },
]

const groupStructure = [
  { level: 0, label: 'SWIH (Holding Company)', color: '#c8a84b' },
  { level: 1, label: 'SW-RW Division — W2E, W2F & Circular Economy Platform', color: '#2d7a3a' },
  { level: 2, label: 'SW-RW Infrastructure Holdings (SPVs per Metro)', color: '#1a5e2a' },
  { level: 2, label: 'SW-RW Operations Company', color: '#1a5e2a' },
  { level: 2, label: 'SW-RW Digital Economy Platform', color: '#1a5e2a' },
  { level: 2, label: 'SW-RW GEC Trust (Community Ownership)', color: '#2d5e32' },
  { level: 2, label: 'SW-RW Enterprise Development Fund', color: '#2d5e32' },
]

const spinoffs = [
  { cat: 'Energy Economy', items: ['Municipal energy security', 'Embedded generation markets'] },
  { cat: 'Industrial Economy', items: ['Fuel for cement, mining, manufacturing'] },
  { cat: 'Retail Economy', items: ['Township + urban integration', 'Token-driven consumption'] },
  { cat: 'Fintech Economy', items: ['Digital wallets', 'Micro-lending', 'Insurance products'] },
  { cat: 'Carbon Economy', items: ['Carbon credits trading', 'ESG-linked financing'] },
  { cat: 'Smart City Economy', items: ['AI + drones for illegal dumping detection', 'Route optimisation', 'Infrastructure monitoring'] },
]

export default function ManagementSystemsPage() {
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
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
          <div style={{ fontSize: 11, letterSpacing: 3, color: '#c8a84b', fontWeight: 700, marginBottom: 16 }}>PAGE 5 · MANAGEMENT SYSTEMS</div>
          <h1 style={{ fontSize: 'clamp(32px, 4vw, 54px)', fontWeight: 900, color: '#fff', margin: '0 0 20px', lineHeight: 1.1 }}>
            Management Systems
          </h1>
          <p style={{ fontSize: 18, color: '#a0cba4', maxWidth: 700, lineHeight: 1.7, margin: 0 }}>
            SW-RW is not just a waste company — it is a <strong style={{ color: '#fff' }}>Waste Economic Operating System (WEOS)</strong> that uses waste as the anchor asset class to unlock energy systems, fuel systems, digital financial systems, employment ecosystems, and smart city intelligence.
          </p>
        </div>
      </section>

      {/* PFDM Model */}
      <section style={{ padding: '60px 24px', background: '#060f07' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: 11, letterSpacing: 3, color: '#c8a84b', fontWeight: 700, marginBottom: 16 }}>PFDM MODEL</div>
          <h2 style={{ fontSize: 28, fontWeight: 700, color: '#fff', marginBottom: 20 }}>Project Finance Development Management</h2>
          <p style={{ fontSize: 15, color: '#a0cba4', lineHeight: 1.7, marginBottom: 40 }}>
            The PFDM model is SW-RW's proprietary integrated delivery framework — a single end-to-end system covering land, feasibility, design, finance, construction, and operations under one platform.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 16 }}>
            {['Land Acquisition', 'Feasibility Study', 'Design & Engineering', 'Finance Structuring', 'EPC Construction', 'Operations & Maintenance'].map((step, i) => (
              <div key={step} style={{
                background: 'rgba(45,122,58,0.08)',
                border: '1px solid rgba(45,122,58,0.2)',
                borderRadius: 10,
                padding: '20px 16px',
              }}>
                <div style={{ fontSize: 11, color: '#c8a84b', fontWeight: 700, marginBottom: 8 }}>PHASE {i + 1}</div>
                <div style={{ fontSize: 13, color: '#d1fad4', fontWeight: 600 }}>{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Group Structure */}
      <section style={{ padding: '60px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div style={{ fontSize: 11, letterSpacing: 3, color: '#c8a84b', fontWeight: 700, marginBottom: 12 }}>GROUP STRUCTURE</div>
            <h2 style={{ fontSize: 28, fontWeight: 700, color: '#fff', margin: 0 }}>Corporate Architecture</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {groupStructure.map((item, i) => (
              <div key={i} style={{
                marginLeft: item.level * 32,
                background: item.level === 0 ? 'rgba(200,168,75,0.12)' : item.level === 1 ? 'rgba(45,122,58,0.1)' : 'rgba(45,122,58,0.05)',
                border: `1px solid ${item.color}33`,
                borderLeft: `3px solid ${item.color}`,
                borderRadius: 8,
                padding: '12px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: 12,
              }}>
                {item.level > 0 && <span style={{ color: item.color, fontSize: 14 }}>{'└'}</span>}
                <span style={{ fontSize: 14, fontWeight: item.level === 0 ? 700 : 500, color: item.level === 0 ? '#c8a84b' : '#d1fad4' }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Units */}
      <section style={{ padding: '0 24px 60px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div style={{ fontSize: 11, letterSpacing: 3, color: '#c8a84b', fontWeight: 700, marginBottom: 12 }}>CORE ENGINE</div>
            <h2 style={{ fontSize: 28, fontWeight: 700, color: '#fff', margin: 0 }}>SW-RW Business Units</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {businessUnits.map(unit => (
              <div key={unit.id} style={{
                background: 'rgba(45,122,58,0.06)',
                border: `1px solid ${unit.color}22`,
                borderTop: `3px solid ${unit.color}`,
                borderRadius: 12,
                padding: 28,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                  <div style={{ fontSize: 11, color: unit.color, fontWeight: 700, letterSpacing: 1, opacity: 0.7 }}>{unit.id}</div>
                  <div style={{ fontSize: 26 }}>{unit.icon}</div>
                  <h3 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: '#fff' }}>{unit.title}</h3>
                </div>
                <p style={{ fontSize: 13, color: '#7aaa80', lineHeight: 1.6, marginBottom: 16 }}>{unit.desc}</p>
                <div style={{ fontSize: 11, color: unit.color, fontWeight: 700, letterSpacing: 1, marginBottom: 10 }}>REVENUE / VALUE STREAMS</div>
                {unit.streams.map(s => (
                  <div key={s} style={{ fontSize: 12, color: '#5aaa68', marginBottom: 6, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ color: unit.color }}>▸</span> {s}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section style={{ padding: '60px 24px', background: '#060f07' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div style={{ fontSize: 11, letterSpacing: 3, color: '#c8a84b', fontWeight: 700, marginBottom: 12 }}>TECHNOLOGY SYSTEMS</div>
            <h2 style={{ fontSize: 28, fontWeight: 700, color: '#fff', margin: 0 }}>Digital Infrastructure</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
            {[
              { icon: '🔗', tech: 'Blockchain', desc: 'Waste Token System (WTS)' },
              { icon: '🤖', tech: 'Artificial Intelligence', desc: 'Waste flow & behaviour analytics' },
              { icon: '📡', tech: 'IoT Sensors', desc: 'Real-time waste tracking' },
              { icon: '🚁', tech: 'Drone Systems', desc: 'Dumping detection & route optimisation' },
              { icon: '🖥️', tech: 'Digital Twin', desc: 'Virtual replica of physical operations' },
              { icon: '📱', tech: 'Mobile Platform', desc: '15M users target in South Africa' },
            ].map(t => (
              <div key={t.tech} style={{
                background: 'rgba(45,122,58,0.07)',
                border: '1px solid rgba(45,122,58,0.15)',
                borderRadius: 10,
                padding: '24px 20px',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{t.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 13, color: '#fff', marginBottom: 6 }}>{t.tech}</div>
                <div style={{ fontSize: 12, color: '#5aaa68' }}>{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Targets */}
      <section style={{ padding: '60px 24px 80px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div style={{ fontSize: 11, letterSpacing: 3, color: '#c8a84b', fontWeight: 700, marginBottom: 12 }}>IMPACT TARGETS</div>
            <h2 style={{ fontSize: 28, fontWeight: 700, color: '#fff', margin: 0 }}>National Scale Objectives</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 20 }}>
            {[
              { metric: '2,000,000', label: 'Direct Jobs' },
              { metric: '15,000', label: 'Enterprises Created' },
              { metric: '15,000,000', label: 'Platform Users' },
              { metric: '50–70%', label: 'Waste Diversion' },
              { metric: 'Multi-GW', label: 'Energy Output' },
            ].map(m => (
              <div key={m.label} style={{
                background: 'rgba(200,168,75,0.06)',
                border: '1px solid rgba(200,168,75,0.15)',
                borderRadius: 12,
                padding: '28px 20px',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: 28, fontWeight: 900, color: '#c8a84b', lineHeight: 1, marginBottom: 8 }}>{m.metric}</div>
                <div style={{ fontSize: 12, color: '#7aaa80' }}>{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Economic Spin-offs */}
      <section style={{ padding: '0 24px 80px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div style={{ fontSize: 11, letterSpacing: 3, color: '#c8a84b', fontWeight: 700, marginBottom: 12 }}>ECONOMIC SPIN-OFFS</div>
            <h2 style={{ fontSize: 28, fontWeight: 700, color: '#fff', margin: 0 }}>Multi-Sector Value Creation</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {spinoffs.map(s => (
              <div key={s.cat} style={{
                background: 'rgba(45,122,58,0.06)',
                border: '1px solid rgba(45,122,58,0.12)',
                borderRadius: 10,
                padding: 24,
              }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: '#c8a84b', letterSpacing: 1, marginBottom: 14 }}>{s.cat.toUpperCase()}</div>
                {s.items.map(item => (
                  <div key={item} style={{ fontSize: 13, color: '#7aaa80', marginBottom: 6, paddingLeft: 12, borderLeft: '2px solid #2d7a3a44' }}>{item}</div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
