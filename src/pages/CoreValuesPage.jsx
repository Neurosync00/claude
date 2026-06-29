const coreValues = [
  {
    number: '01',
    title: 'Circular Transformation',
    tagline: 'Waste is Value. Waste is Energy. Waste is Opportunity.',
    desc: 'We believe waste is not waste — it is value, energy, and opportunity. Every tonne of discarded material represents an untapped resource that can power homes, fuel industry, generate digital currency, and create livelihoods.',
    icon: '♻️',
    color: '#2d7a3a',
  },
  {
    number: '02',
    title: 'Inclusive Ownership',
    tagline: 'Shared Equity. Shared Prosperity.',
    desc: 'We ensure shared equity, shared prosperity, and community participation in all systems. Through GEC Trusts and tokenised ownership models, every stakeholder — from waste picker to investor — holds a meaningful stake in the platform.',
    icon: '🤲',
    color: '#c8a84b',
  },
  {
    number: '03',
    title: 'Delivery Excellence',
    tagline: 'Bankable. Turnkey. Disciplined.',
    desc: 'We deliver bankable, turnkey infrastructure through disciplined PFDM execution. From concept to commissioning, our commitment is to on-time, investment-grade project delivery that removes risk for municipalities and maximises returns for investors.',
    icon: '🎯',
    color: '#2d7a3a',
  },
  {
    number: '04',
    title: 'Sustainability First',
    tagline: 'Environmental Regeneration in Every Project.',
    desc: 'We prioritise environmental regeneration and climate responsibility in every project. Our systems reduce landfill dependency, lower greenhouse gas emissions, generate carbon credits, and directly support South Africa\'s net-zero climate commitments.',
    icon: '🌿',
    color: '#4caf50',
  },
  {
    number: '05',
    title: 'Transparency & Trust',
    tagline: 'Blockchain-Verified Integrity.',
    desc: 'We use blockchain systems to ensure traceability, accountability, and integrity across all transactions. Every token, every tonne of waste, and every carbon credit is tracked, verified, and auditable — building institutional trust at scale.',
    icon: '🔐',
    color: '#c8a84b',
  },
  {
    number: '06',
    title: 'Innovation & Intelligence',
    tagline: 'AI · Digital Twins · Smart Systems.',
    desc: 'We embed AI, digital twins, and smart systems into all operational layers. From drone-based illegal dumping detection to real-time route optimisation and predictive maintenance, intelligence drives every decision in our ecosystem.',
    icon: '🤖',
    color: '#2d7a3a',
  },
  {
    number: '07',
    title: 'Human Dignity',
    tagline: 'Formalising Informal Workers into Economic Actors.',
    desc: 'We formalise informal workers into recognised economic actors. The Green Environmental Comrades (GEC) programme transforms vulnerable, unregulated waste pickers into trained, digitally enabled micro-entrepreneurs with equity stakes in the platform.',
    icon: '👷',
    color: '#3a8a48',
  },
  {
    number: '08',
    title: 'Partnership-Driven Growth',
    tagline: 'Government · Investors · Communities · Industry.',
    desc: 'We co-create value with governments, investors, communities, and industry. Our PPP concession model, DFI engagement, and community ownership structures ensure that every project is a genuine multi-stakeholder partnership built for long-term resilience.',
    icon: '🤝',
    color: '#c8a84b',
  },
]

export default function CoreValuesPage() {
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
          position: 'absolute', top: -80, left: '50%', transform: 'translateX(-50%)',
          width: 600, height: 400,
          background: 'radial-gradient(ellipse, rgba(45,122,58,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', textAlign: 'center' }}>
          <div style={{ fontSize: 11, letterSpacing: 3, color: '#c8a84b', fontWeight: 700, marginBottom: 16 }}>PAGE 4 · CORE VALUES</div>
          <h1 style={{ fontSize: 'clamp(32px, 4vw, 54px)', fontWeight: 900, color: '#fff', margin: '0 0 20px', lineHeight: 1.1 }}>
            Our Core Values
          </h1>
          <p style={{ fontSize: 18, color: '#a0cba4', maxWidth: 640, lineHeight: 1.7, margin: '0 auto' }}>
            The company principles that guide every decision, partnership, and project at Synergyworx Rainmakers — values that ensure our platform creates lasting, equitable impact.
          </p>
        </div>
      </section>

      {/* Core Values Grid */}
      <section style={{ padding: '70px 24px 80px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24 }}>
            {coreValues.map(val => (
              <div key={val.number} style={{
                background: 'rgba(45,122,58,0.06)',
                border: `1px solid ${val.color}22`,
                borderLeft: `4px solid ${val.color}`,
                borderRadius: 14,
                padding: 32,
                position: 'relative',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                  <div style={{
                    width: 54, height: 54,
                    background: `${val.color}18`,
                    border: `1px solid ${val.color}33`,
                    borderRadius: 12,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 28,
                  }}>{val.icon}</div>
                  <div style={{
                    fontSize: 42, fontWeight: 900, color: val.color,
                    opacity: 0.2, lineHeight: 1,
                  }}>{val.number}</div>
                </div>
                <h3 style={{ margin: '0 0 8px', fontSize: 18, fontWeight: 700, color: '#fff' }}>{val.title}</h3>
                <div style={{ fontSize: 11, color: val.color, fontWeight: 600, letterSpacing: 0.8, marginBottom: 14 }}>{val.tagline}</div>
                <p style={{ fontSize: 14, color: '#7aaa80', lineHeight: 1.7, margin: 0 }}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Positioning quote */}
      <section style={{ padding: '0 24px 80px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(45,122,58,0.1) 0%, rgba(200,168,75,0.08) 100%)',
            border: '1px solid rgba(200,168,75,0.2)',
            borderRadius: 20,
            padding: '48px 56px',
            textAlign: 'center',
            position: 'relative',
          }}>
            <div style={{ fontSize: 11, letterSpacing: 3, color: '#c8a84b', fontWeight: 700, marginBottom: 20 }}>POSITIONING STATEMENT</div>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: '#a0cba4', margin: '0 0 24px', fontStyle: 'italic' }}>
              "SW-RW, a subsidiary of Synergyworx International Holdings, is a turnkey PFDM-enabled infrastructure developer delivering Waste-to-Energy and Waste-to-Fuel EPC projects that transform waste systems into inclusive, digital, and investable circular economies powered by GEC human capital ecosystems."
            </p>
            <div style={{ fontSize: 13, color: '#c8a84b', fontWeight: 600 }}>— Synergyworx Rainmakers (Pty) Ltd</div>
          </div>
        </div>
      </section>
    </div>
  )
}
