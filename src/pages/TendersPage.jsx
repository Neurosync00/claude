import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const tabs = [
  { id: 'technical', label: 'COJ Technical Info' },
  { id: 'finance', label: 'COJ Finance' },
  { id: 'socio', label: 'COJ Socio-Economic' },
  { id: 'position', label: 'Final Positioning' },
]

function TechnicalTab() {
  const items = [
    { n: '1', aspect: 'Project Name', detail: 'Alternative Waste Treatment Technology (AWTT) PPP Project', focus: 'Primary implementation site at Robinson Deep Landfill' },
    { n: '2', aspect: 'Project Sponsor', detail: 'City of Johannesburg (CoJ), supported by DBSA', focus: 'Robinson Deep selected as the preferred project location' },
    { n: '3', aspect: 'Main Objective', detail: 'Divert waste from landfill, recover recyclables, generate renewable energy, and extend landfill life', focus: 'Robinson Deep becomes the City\'s flagship waste diversion and energy recovery hub' },
    { n: '4', aspect: 'Waste Challenge', detail: 'Johannesburg generates approximately 1.6 million tonnes of municipal solid waste annually, with landfill airspace rapidly depleting', focus: 'Robinson Deep landfill projected to reach capacity around June 2024 if no intervention' },
    { n: '5', aspect: 'Target Waste Diversion', detail: 'Divert at least 500,000 tonnes per annum from landfill', focus: 'Waste received and processed at Robinson Deep facilities' },
    { n: '6', aspect: 'Proposed Facilities', detail: 'Dirty Materials Recovery Facility (dMRF) and Waste-to-Energy (WtE) Plant', focus: 'Both facilities planned at Robinson Deep' },
    { n: '7', aspect: 'Technology Selected', detail: 'Mass-burn Waste-to-Energy technology with recycling recovery via dMRF', focus: 'Preferred technical option following feasibility assessment' },
    { n: '8', aspect: 'Site Selection', detail: 'Four site alternatives assessed', focus: 'Portion 2 of Farm Robinson Deep 81 IR selected due to size, geotechnical suitability, and infrastructure access' },
    { n: '9', aspect: 'Ownership Structure', detail: 'Assets owned by City of Johannesburg', focus: 'Robinson Deep facilities remain public assets' },
    { n: '10', aspect: 'Operating Model', detail: 'Private sector designs, builds, finances, operates and maintains facilities under a PPP concession', focus: '25-year concession period at Robinson Deep' },
    { n: '11', aspect: 'Feedstock Supply', detail: 'Municipal waste supplied by Pikitup', focus: 'Robinson Deep receives sufficient waste volumes to supply the WtE plant' },
    { n: '12', aspect: 'Energy Offtake', detail: 'Electricity sold to City Power under a Power Purchase Agreement', focus: 'Grid connection planned from Robinson Deep to Wemmer Substation' },
    { n: '13', aspect: 'Grid Connection', detail: '88kV connection via underground cable', focus: 'Connection to Wemmer Substation confirmed as technically viable' },
    { n: '17', aspect: 'Estimated CAPEX', detail: 'Approximately R5.2 billion', focus: 'Includes construction of dMRF, WtE plant, buildings, equipment and infrastructure' },
    { n: '18', aspect: 'Operational Capacity', detail: 'Base case assumes 500,000 tpa diversion and 335,000 tpa WtE processing capacity', focus: 'Entire WtE facility located at Robinson Deep' },
    { n: '19', aspect: 'Implementation Timeline', detail: 'Construction: May 2024 – April 2027; Operations: May 2027 – April 2052', focus: 'Robinson Deep facilities expected to operate for 25 years' },
    { n: '20', aspect: 'Preferred Delivery Option', detail: 'Public-Private Partnership (PPP)', focus: 'Offers best value for money after risk adjustment' },
    { n: '23', aspect: 'Strategic Importance', detail: "Central response to Johannesburg's looming landfill capacity crisis", focus: "Robinson Deep serves as the City's principal long-term waste treatment and energy facility" },
  ]
  return (
    <div>
      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#fff', marginBottom: 8, marginTop: 0 }}>COJ Technical Information</h2>
      <p style={{ color: '#7aaa80', fontSize: 14, marginBottom: 32, lineHeight: 1.6 }}>
        Project overview of the City of Johannesburg Alternative Waste Treatment Technology (AWTT) PPP Project at Robinson Deep — the flagship waste diversion and energy recovery initiative for Johannesburg.
      </p>

      {/* Key takeaways cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, marginBottom: 40 }}>
        {[
          { val: 'R5.2B', label: 'Estimated CAPEX', icon: '💰' },
          { val: '500K tpa', label: 'Waste Diversion Target', icon: '♻️' },
          { val: '25 Years', label: 'Concession Period', icon: '📅' },
          { val: '88MW+', label: 'Energy Output', icon: '⚡' },
          { val: '88kV', label: 'Grid Connection', icon: '🔌' },
          { val: '943,433 m³', label: 'Remaining Landfill Airspace', icon: '📊' },
        ].map(k => (
          <div key={k.label} style={{
            background: 'rgba(45,122,58,0.08)',
            border: '1px solid rgba(45,122,58,0.2)',
            borderRadius: 10,
            padding: '20px 18px',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: 24, marginBottom: 6 }}>{k.icon}</div>
            <div style={{ fontSize: 22, fontWeight: 900, color: '#c8a84b', lineHeight: 1 }}>{k.val}</div>
            <div style={{ fontSize: 11, color: '#7aaa80', marginTop: 6 }}>{k.label}</div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
          <thead>
            <tr style={{ background: 'rgba(45,122,58,0.15)' }}>
              <th style={{ padding: '12px 16px', textAlign: 'left', color: '#c8a84b', fontWeight: 700, fontSize: 11, letterSpacing: 1, borderBottom: '1px solid rgba(45,122,58,0.3)', width: 30 }}>#</th>
              <th style={{ padding: '12px 16px', textAlign: 'left', color: '#c8a84b', fontWeight: 700, fontSize: 11, letterSpacing: 1, borderBottom: '1px solid rgba(45,122,58,0.3)', width: 160 }}>ASPECT</th>
              <th style={{ padding: '12px 16px', textAlign: 'left', color: '#c8a84b', fontWeight: 700, fontSize: 11, letterSpacing: 1, borderBottom: '1px solid rgba(45,122,58,0.3)' }}>SUMMARY</th>
              <th style={{ padding: '12px 16px', textAlign: 'left', color: '#c8a84b', fontWeight: 700, fontSize: 11, letterSpacing: 1, borderBottom: '1px solid rgba(45,122,58,0.3)' }}>ROBINSON DEEP FOCUS</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => (
              <tr key={item.n} style={{ background: i % 2 === 0 ? 'rgba(45,122,58,0.03)' : 'transparent', borderBottom: '1px solid rgba(45,122,58,0.08)' }}>
                <td style={{ padding: '12px 16px', color: '#3d6b42', fontWeight: 700 }}>{item.n}</td>
                <td style={{ padding: '12px 16px', color: '#fff', fontWeight: 600, lineHeight: 1.4 }}>{item.aspect}</td>
                <td style={{ padding: '12px 16px', color: '#7aaa80', lineHeight: 1.5 }}>{item.detail}</td>
                <td style={{ padding: '12px 16px', color: '#a0cba4', lineHeight: 1.5 }}>{item.focus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function FinanceTab() {
  return (
    <div>
      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#fff', marginBottom: 8, marginTop: 0 }}>COJ Finance</h2>
      <p style={{ color: '#7aaa80', fontSize: 14, marginBottom: 40, lineHeight: 1.6 }}>
        Evidence of Synergyworx Rainmakers' financial capability and eligibility for the COJ AWTT PPP Project — demonstrating access to blended finance, investment-grade governance structures, and the PFDM model required to deliver a R5.2 billion infrastructure project.
      </p>

      {/* PFDM Financial Model */}
      <div style={{
        background: 'rgba(200,168,75,0.07)',
        border: '1px solid rgba(200,168,75,0.2)',
        borderRadius: 14,
        padding: 32,
        marginBottom: 32,
      }}>
        <div style={{ fontSize: 11, color: '#c8a84b', fontWeight: 700, letterSpacing: 1, marginBottom: 12 }}>PFDM FINANCIAL ARCHITECTURE</div>
        <h3 style={{ margin: '0 0 16px', fontSize: 18, fontWeight: 700, color: '#fff' }}>Project Finance Development Management Model</h3>
        <p style={{ fontSize: 14, color: '#a0cba4', lineHeight: 1.7, marginBottom: 20 }}>
          SW-RW's proprietary PFDM model is specifically designed to remove development risk and structure bankable infrastructure projects. This model integrates every phase of project development — from feasibility through construction to 25-year operations — ensuring that every project is structured to meet institutional investor and DFI requirements.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
          {[
            { icon: '📋', label: 'Bankable Feasibility Studies', desc: 'Full technical and financial feasibility packaged for DFI submission' },
            { icon: '🏛️', label: 'SPV Governance', desc: 'Investment-grade Special Purpose Vehicles per project' },
            { icon: '📊', label: 'Financial Modelling', desc: 'Predictable returns through diversified revenue streams' },
            { icon: '🤝', label: 'DFI Engagement', desc: 'Direct relationships with DBSA and development finance institutions' },
          ].map(f => (
            <div key={f.label} style={{ background: 'rgba(45,122,58,0.1)', border: '1px solid rgba(45,122,58,0.2)', borderRadius: 10, padding: 20 }}>
              <div style={{ fontSize: 24, marginBottom: 10 }}>{f.icon}</div>
              <div style={{ fontWeight: 600, fontSize: 13, color: '#fff', marginBottom: 6 }}>{f.label}</div>
              <div style={{ fontSize: 12, color: '#7aaa80' }}>{f.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Blended Finance Sources */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ fontSize: 11, color: '#c8a84b', fontWeight: 700, letterSpacing: 1, marginBottom: 20 }}>BLENDED FINANCE MOBILISATION</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
          {[
            { source: 'Development Finance Institutions (DFIs)', desc: 'Including DBSA — the same institution supporting the CoJ AWTT project — positioning SW-RW as an aligned financial partner', color: '#2d7a3a' },
            { source: 'ESG & Green Funds', desc: 'Access to Environmental, Social, and Governance-linked capital through verified carbon credit generation and circular economy credentials', color: '#c8a84b' },
            { source: 'Green Bonds', desc: 'Eligible for green bond financing given the W2E renewable energy generation, landfill diversion, and GHG reduction outcomes of the project', color: '#2d7a3a' },
            { source: 'Private Equity', desc: 'Strategic private investor participation structured through investment-grade SPVs with ring-fenced project revenue streams', color: '#c8a84b' },
            { source: 'Power Purchase Agreements', desc: 'Long-term electricity offtake agreements with City Power provide bankable, predictable revenue underpinning project finance structures', color: '#2d7a3a' },
            { source: 'Carbon Credits', desc: 'Verified Emission Reduction (VER) credits from landfill diversion and W2E operations provide an additional ESG-linked revenue stream', color: '#4a9a58' },
          ].map(s => (
            <div key={s.source} style={{
              background: 'rgba(45,122,58,0.06)',
              border: `1px solid ${s.color}22`,
              borderLeft: `3px solid ${s.color}`,
              borderRadius: 10,
              padding: 20,
            }}>
              <div style={{ fontWeight: 700, fontSize: 13, color: '#fff', marginBottom: 8 }}>{s.source}</div>
              <p style={{ fontSize: 13, color: '#7aaa80', lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Financial Eligibility */}
      <div style={{
        background: 'rgba(45,122,58,0.07)',
        border: '1px solid rgba(45,122,58,0.2)',
        borderRadius: 14,
        padding: 32,
        marginBottom: 32,
      }}>
        <div style={{ fontSize: 11, color: '#c8a84b', fontWeight: 700, letterSpacing: 1, marginBottom: 12 }}>FINANCIAL ELIGIBILITY INDICATORS</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {[
            { check: '✅', point: 'SPV Structure per Project', desc: 'Each project is ring-fenced within an independently governed SPV, protecting parent company and investor assets' },
            { check: '✅', point: 'SWIH Holding Company Backing', desc: 'SW-RW operates as a division of Synergyworx International Holdings, providing institutional stability and corporate governance' },
            { check: '✅', point: 'Registered South African Entity', desc: 'Reg. No. 2026/437822/07 — fully compliant South African company registration, eligible for CoJ procurement' },
            { check: '✅', point: 'Revenue Diversification', desc: 'Multiple revenue streams (PPAs, gate fees, carbon credits, token system, RDF offtake) reduce financial risk exposure' },
            { check: '✅', point: 'PPP-Aligned Financial Model', desc: 'PFDM model specifically structured for PPP concession delivery — the preferred procurement option identified by CoJ' },
            { check: '✅', point: 'Blended Finance Capability', desc: 'Track record of identifying and structuring DFI, ESG, and green bond financing for circular economy infrastructure' },
          ].map(item => (
            <div key={item.point} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <span style={{ fontSize: 18, flexShrink: 0 }}>{item.check}</span>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 4 }}>{item.point}</div>
                <div style={{ fontSize: 12, color: '#7aaa80', lineHeight: 1.5 }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Scale */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(200,168,75,0.1) 0%, rgba(45,122,58,0.1) 100%)',
        border: '1px solid rgba(200,168,75,0.2)',
        borderRadius: 14,
        padding: 32,
        textAlign: 'center',
      }}>
        <div style={{ fontSize: 11, color: '#c8a84b', fontWeight: 700, letterSpacing: 1, marginBottom: 12 }}>PROJECT FINANCIAL SCALE</div>
        <div style={{ fontSize: 48, fontWeight: 900, color: '#c8a84b', lineHeight: 1, marginBottom: 8 }}>R5.2 Billion</div>
        <div style={{ fontSize: 14, color: '#a0cba4', marginBottom: 24 }}>Estimated Total Capital Expenditure — Construction of dMRF, WtE Plant, Buildings, Equipment and Infrastructure</div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 24, fontWeight: 900, color: '#fff' }}>25 Years</div>
            <div style={{ fontSize: 12, color: '#7aaa80' }}>Revenue-Generating Concession</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 24, fontWeight: 900, color: '#fff' }}>500K tpa</div>
            <div style={{ fontSize: 12, color: '#7aaa80' }}>Waste Processing Revenue Base</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 24, fontWeight: 900, color: '#fff' }}>Multi-Stream</div>
            <div style={{ fontSize: 12, color: '#7aaa80' }}>PPAs + Gate Fees + Carbon + Tokens</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SocioTab() {
  return (
    <div>
      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#fff', marginBottom: 8, marginTop: 0 }}>COJ Socio-Economic Impact</h2>
      <p style={{ color: '#7aaa80', fontSize: 14, marginBottom: 40, lineHeight: 1.6 }}>
        How the Robinson Deep AWTT Project driven by Synergyworx Rainmakers will transform Johannesburg's economy, create employment, uplift communities, and build a greener city for future generations.
      </p>

      {/* Impact headline metrics */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 16, marginBottom: 40 }}>
        {[
          { val: '2M+', label: 'National Direct Jobs Target', color: '#2d7a3a' },
          { val: '30K', label: 'Waste Pickers Formalised (GEC)', color: '#c8a84b' },
          { val: '1,500+', label: 'GEC-Owned Enterprises', color: '#2d7a3a' },
          { val: '15K', label: 'SMEs Created', color: '#c8a84b' },
          { val: '15M', label: 'Digital Platform Users', color: '#2d7a3a' },
          { val: '50-70%', label: 'Landfill Diversion', color: '#c8a84b' },
        ].map(m => (
          <div key={m.label} style={{
            background: `${m.color}12`,
            border: `1px solid ${m.color}22`,
            borderTop: `3px solid ${m.color}`,
            borderRadius: 10,
            padding: '20px 16px',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: 28, fontWeight: 900, color: m.color, lineHeight: 1, marginBottom: 8 }}>{m.val}</div>
            <div style={{ fontSize: 11, color: '#7aaa80', lineHeight: 1.4 }}>{m.label}</div>
          </div>
        ))}
      </div>

      {/* GEC Programme */}
      <div style={{ background: 'rgba(45,122,58,0.07)', border: '1px solid rgba(45,122,58,0.2)', borderRadius: 14, padding: 32, marginBottom: 32 }}>
        <div style={{ fontSize: 11, color: '#c8a84b', fontWeight: 700, letterSpacing: 1, marginBottom: 12 }}>GREEN ENVIRONMENTAL COMRADES (GEC)</div>
        <h3 style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 16, marginTop: 0 }}>Formalising Informal Workers into Economic Actors</h3>
        <p style={{ fontSize: 14, color: '#a0cba4', lineHeight: 1.7, marginBottom: 24 }}>
          The SW-RW GEC model pioneers a fundamentally new approach to waste management: transforming vulnerable, unregulated informal waste pickers (IWPs) into structured, trained, digitally enabled Green Environmental Comrades with real equity participation in the platform.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
          {[
            { from: 'Informal Waste Picker', to: 'Green Environmental Comrade', change: 'Structured, trained, insured worker with SETA certification' },
            { from: 'No Income Security', to: 'Stipend → Income → Ownership', change: 'Progressive transition from stipend to enterprise ownership' },
            { from: 'Manual Sorting', to: 'Tech-Enabled Operations', change: 'Digital tools, IoT devices, and mobile platform integration' },
            { from: 'No Asset Base', to: 'Equity in GEC Trust', change: 'Tokenised ownership stake in the broader platform' },
          ].map(t => (
            <div key={t.from} style={{ background: 'rgba(45,122,58,0.1)', border: '1px solid rgba(45,122,58,0.2)', borderRadius: 10, padding: 20 }}>
              <div style={{ fontSize: 11, color: '#5a8a60', marginBottom: 6 }}>FROM: <span style={{ color: '#7aaa80' }}>{t.from}</span></div>
              <div style={{ fontSize: 11, color: '#4caf50', marginBottom: 8 }}>TO: <span style={{ color: '#d1fad4', fontWeight: 600 }}>{t.to}</span></div>
              <div style={{ fontSize: 12, color: '#5a8a60', lineHeight: 1.5 }}>{t.change}</div>
            </div>
          ))}
        </div>
      </div>

      {/* National programme alignment */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ fontSize: 11, color: '#c8a84b', fontWeight: 700, letterSpacing: 1, marginBottom: 20 }}>NATIONAL PROGRAMME INTEGRATION</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
          {[
            { prog: 'Expanded Public Works Programme (EPWP)', desc: 'Direct integration provides a structured pipeline for EPWP beneficiaries, transitioning government-funded workers into permanent GEC roles within the circular economy.' },
            { prog: 'Community Work Programme (CWP)', desc: 'CWP participants are upskilled through SETA-accredited GEC training, creating pathways into enterprise ownership and the digital waste economy.' },
            { prog: 'South Africa Net-Zero Strategy', desc: 'The Robinson Deep AWTT project directly contributes to SA\'s NDC commitments by reducing landfill methane emissions and generating clean renewable energy.' },
          ].map(p => (
            <div key={p.prog} style={{ background: 'rgba(45,122,58,0.06)', border: '1px solid rgba(45,122,58,0.15)', borderRadius: 10, padding: 24 }}>
              <div style={{ fontWeight: 700, fontSize: 13, color: '#fff', marginBottom: 10 }}>{p.prog}</div>
              <p style={{ fontSize: 13, color: '#7aaa80', lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Economic spin-off sectors */}
      <div style={{ background: 'rgba(45,122,58,0.06)', border: '1px solid rgba(45,122,58,0.15)', borderRadius: 14, padding: 32, marginBottom: 32 }}>
        <div style={{ fontSize: 11, color: '#c8a84b', fontWeight: 700, letterSpacing: 1, marginBottom: 20 }}>ECONOMIC BENEFITS FOR JOHANNESBURG</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
          {[
            { icon: '💡', title: 'Energy Security', desc: 'Renewable electricity generated at Robinson Deep sold to City Power via PPA, reducing Johannesburg\'s dependence on Eskom and coal-based power' },
            { icon: '♻️', title: 'Recycling Economy', desc: 'Stimulates formal recycling markets across Johannesburg, creating upstream and downstream SME opportunities in material recovery' },
            { icon: '🏙️', title: 'Smart City Infrastructure', desc: 'AI, drone, and IoT deployment creates Johannesburg\'s first intelligent waste management grid, reducing illegal dumping and operational costs' },
            { icon: '🏦', title: 'Township Fintech', desc: 'Waste Token System drives financial inclusion in township economies — utility payments, retail, and microfinance powered by circular economy tokens' },
            { icon: '🌍', title: 'Carbon Economy', desc: 'Verified carbon credits from landfill diversion and W2E operations attract ESG-linked international investment into Johannesburg' },
            { icon: '🏭', title: 'Landfill Cost Reduction', desc: 'Extending Robinson Deep\'s operational life and diverting 500K tpa avoids the enormous cost of developing new landfill sites for the City' },
          ].map(b => (
            <div key={b.title} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <div style={{ fontSize: 28, flexShrink: 0 }}>{b.icon}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 13, color: '#fff', marginBottom: 6 }}>{b.title}</div>
                <p style={{ fontSize: 12, color: '#7aaa80', lineHeight: 1.6, margin: 0 }}>{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Environmental impact */}
      <div style={{ background: 'rgba(200,168,75,0.07)', border: '1px solid rgba(200,168,75,0.15)', borderRadius: 14, padding: 32 }}>
        <div style={{ fontSize: 11, color: '#c8a84b', fontWeight: 700, letterSpacing: 1, marginBottom: 20 }}>ENVIRONMENTAL IMPACT</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
          {[
            { metric: 'Reduced', label: 'Methane emissions from landfill decomposition' },
            { metric: 'Extended', label: 'Robinson Deep landfill operational life beyond 2024 crisis point' },
            { metric: 'Diverted', label: '500,000 tonnes per annum from landfill disposal' },
            { metric: 'Generated', label: 'Verified carbon credits for international ESG markets' },
          ].map(e => (
            <div key={e.label} style={{ textAlign: 'center', padding: 20 }}>
              <div style={{ fontSize: 20, fontWeight: 900, color: '#4caf50', marginBottom: 8 }}>{e.metric}</div>
              <div style={{ fontSize: 12, color: '#7aaa80', lineHeight: 1.5 }}>{e.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function PositioningTab() {
  return (
    <div>
      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#fff', marginBottom: 8, marginTop: 0 }}>Final Positioning Statement — COJ Project</h2>
      <p style={{ color: '#7aaa80', fontSize: 14, marginBottom: 40, lineHeight: 1.6 }}>
        Synergyworx Rainmakers' definitive strategic case for the City of Johannesburg AWTT PPP Project — why SW-RW is uniquely positioned as the only bidder that converts waste into a multi-sector economic system.
      </p>

      {/* Main positioning statement */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(45,122,58,0.12) 0%, rgba(200,168,75,0.08) 100%)',
        border: '1px solid rgba(200,168,75,0.25)',
        borderRadius: 20,
        padding: '48px 56px',
        marginBottom: 40,
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: -20, left: 24, fontSize: 120, color: '#2d7a3a', opacity: 0.08, lineHeight: 1, pointerEvents: 'none' }}>"</div>
        <div style={{ fontSize: 11, color: '#c8a84b', fontWeight: 700, letterSpacing: 1, marginBottom: 20 }}>STRATEGIC DIFFERENTIATOR</div>
        <p style={{ fontSize: 18, lineHeight: 1.8, color: '#a0cba4', margin: '0 0 20px', fontStyle: 'italic', position: 'relative', zIndex: 1 }}>
          "SW-RW is the only bidder that converts waste into a multi-sector economic system — integrating infrastructure, fintech, and social economy while embedding ownership through GEC Trusts, linking directly to EPWP and CWP at scale, and creating a city-wide economic operating system, not merely a project."
        </p>
        <div style={{ fontSize: 13, color: '#c8a84b', fontWeight: 700 }}>— Synergyworx Rainmakers (Pty) Ltd</div>
      </div>

      {/* Why SW-RW wins */}
      <div style={{ marginBottom: 40 }}>
        <div style={{ fontSize: 11, color: '#c8a84b', fontWeight: 700, letterSpacing: 1, marginBottom: 20 }}>WHY SYNERGYWORX RAINMAKERS WINS THIS TENDER</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 20 }}>
          {[
            {
              title: 'Multi-Sector Economic System',
              desc: 'SW-RW doesn\'t deliver a waste plant — it delivers a complete Municipal Circular Intelligence Economy. Waste becomes energy, fuel, digital currency, jobs, SMEs, and smart city intelligence simultaneously.',
              icon: '🏙️',
            },
            {
              title: 'Infrastructure + Fintech + Social Economy',
              desc: 'No competitor integrates a blockchain Waste Token System, GEC community ownership, and 88MW+ W2E infrastructure in a single concession model. SW-RW is the complete solution.',
              icon: '🔗',
            },
            {
              title: 'GEC Ownership Embedded',
              desc: 'Community ownership through GEC Trusts is built into the governance architecture — satisfying Broad-Based Black Economic Empowerment (BBBEE) and transformation requirements at the deepest structural level.',
              icon: '🤝',
            },
            {
              title: 'EPWP + CWP at Scale',
              desc: 'Direct integration with national social employment programmes means SW-RW doesn\'t just comply with labour requirements — it becomes the implementation mechanism for government social policy.',
              icon: '🏛️',
            },
            {
              title: 'Robinson Deep as City Flagship',
              desc: 'SW-RW\'s model transforms Robinson Deep from a conventional landfill facing closure into Johannesburg\'s circular economy and clean energy flagship — a 25-year asset that solves the landfill crisis permanently.',
              icon: '🌿',
            },
            {
              title: 'Bankable PPP Delivery',
              desc: 'The PFDM model structures the entire concession for investment-grade PPP delivery, aligning with CoJ\'s preferred procurement model and the DBSA development finance framework supporting the project.',
              icon: '💹',
            },
          ].map(w => (
            <div key={w.title} style={{
              background: 'rgba(45,122,58,0.06)',
              border: '1px solid rgba(45,122,58,0.15)',
              borderRadius: 12,
              padding: 28,
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 44, height: 44, background: 'rgba(45,122,58,0.15)', border: '1px solid rgba(45,122,58,0.3)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>{w.icon}</div>
                <h3 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: '#fff' }}>{w.title}</h3>
              </div>
              <p style={{ margin: 0, fontSize: 13, color: '#7aaa80', lineHeight: 1.7 }}>{w.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Robinson Deep conclusion */}
      <div style={{
        background: 'rgba(45,122,58,0.08)',
        border: '1px solid rgba(45,122,58,0.25)',
        borderRadius: 16,
        padding: 40,
        marginBottom: 32,
      }}>
        <div style={{ fontSize: 11, color: '#c8a84b', fontWeight: 700, letterSpacing: 1, marginBottom: 16 }}>OVERALL CONCLUSION — ROBINSON DEEP</div>
        <h3 style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 16, marginTop: 0 }}>
          The City of Johannesburg's Flagship Waste Diversion Initiative
        </h3>
        <p style={{ fontSize: 15, color: '#a0cba4', lineHeight: 1.8, marginBottom: 20 }}>
          The Robinson Deep AWTT Project is the City of Johannesburg's flagship waste diversion initiative. Under Synergyworx Rainmakers' PFDM model, the project will transform Robinson Deep from a conventional landfill — projected to have reached capacity by June 2024 without intervention — into an integrated recycling and waste-to-energy facility, processing up to <strong style={{ color: '#fff' }}>500,000 tonnes of waste annually</strong>, generating renewable electricity, extending landfill life, and providing a permanent long-term solution to Johannesburg's landfill airspace crisis.
        </p>
        <p style={{ fontSize: 15, color: '#a0cba4', lineHeight: 1.8, margin: 0 }}>
          Robinson Deep will serve as Johannesburg's — and South Africa's — proof of concept for the Municipal Circular Intelligence Economy: a model replicable across every metro in the country and across Africa, positioning the City of Johannesburg as a global leader in circular economy infrastructure delivery.
        </p>
      </div>

      {/* WEOS statement */}
      <div style={{
        background: 'linear-gradient(135deg, #0d2510 0%, #071a08 100%)',
        border: '1px solid rgba(45,122,58,0.3)',
        borderRadius: 16,
        padding: 40,
        textAlign: 'center',
      }}>
        <div style={{ fontSize: 11, color: '#c8a84b', fontWeight: 700, letterSpacing: 1, marginBottom: 20 }}>FINAL STATEMENT</div>
        <h3 style={{ fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 20, marginTop: 0 }}>
          SW-RW Delivers a Next-Generation<br />Municipal Circular Intelligence Economy Platform
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12, marginBottom: 32 }}>
          {[
            'Waste → Energy (W2E)',
            'Waste → Fuel (W2F / RDF)',
            'Waste → Digital Currency (W2T)',
            'Waste → Jobs, SMEs & Ownership',
            'Waste → Smart City Intelligence',
          ].map(s => (
            <div key={s} style={{
              background: 'rgba(45,122,58,0.12)',
              border: '1px solid rgba(45,122,58,0.2)',
              borderRadius: 8,
              padding: '12px 16px',
              fontSize: 13,
              color: '#d1fad4',
              fontWeight: 600,
            }}>{s}</div>
          ))}
        </div>
        <p style={{ fontSize: 15, color: '#7aaa80', maxWidth: 700, margin: '0 auto', lineHeight: 1.7 }}>
          SW-RW, a subsidiary of Synergyworx International Holdings, is a turnkey PFDM-enabled infrastructure developer delivering Waste-to-Energy and Waste-to-Fuel EPC projects that transform waste systems into inclusive, digital, and investable circular economies powered by GEC human capital ecosystems.
        </p>
      </div>
    </div>
  )
}

export default function TendersPage() {
  const { tab } = useParams()
  const navigate = useNavigate()
  const [active, setActive] = useState(tab || 'technical')

  const switchTab = id => {
    setActive(id)
    navigate(`/tenders/${id}`, { replace: true })
  }

  const content = {
    technical: <TechnicalTab />,
    finance: <FinanceTab />,
    socio: <SocioTab />,
    position: <PositioningTab />,
  }

  return (
    <div style={{ background: 'linear-gradient(180deg, #0a1a0c 0%, #071508 100%)', minHeight: '100vh' }}>
      {/* Header */}
      <section style={{
        background: 'linear-gradient(160deg, #0d2510 0%, #0a1a0c 100%)',
        padding: '70px 24px 0',
        borderBottom: '1px solid #2d7a3a22',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ fontSize: 11, letterSpacing: 3, color: '#c8a84b', fontWeight: 700, marginBottom: 12 }}>GOVERNMENT TENDERS</div>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900, color: '#fff', margin: '0 0 8px', lineHeight: 1.1 }}>
            City of Johannesburg — AWTT PPP Project
          </h1>
          <p style={{ fontSize: 15, color: '#7aaa80', marginBottom: 36, margin: '0 0 36px' }}>
            Alternative Waste Treatment Technology · Robinson Deep Landfill · Public-Private Partnership
          </p>
          {/* Sub-tabs */}
          <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
            {tabs.map(t => (
              <button
                key={t.id}
                onClick={() => switchTab(t.id)}
                style={{
                  padding: '10px 20px',
                  background: active === t.id ? 'rgba(45,122,58,0.25)' : 'transparent',
                  border: 'none',
                  borderBottom: active === t.id ? '2px solid #4caf50' : '2px solid transparent',
                  color: active === t.id ? '#fff' : '#7aaa80',
                  fontSize: 13,
                  fontWeight: active === t.id ? 700 : 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  fontFamily: 'inherit',
                  borderRadius: '6px 6px 0 0',
                }}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab content */}
      <section style={{ padding: '48px 24px 80px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          {content[active] || <TechnicalTab />}
        </div>
      </section>
    </div>
  )
}
