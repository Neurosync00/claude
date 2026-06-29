import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = e => {
    e.preventDefault()
    setSent(true)
  }

  const inputStyle = {
    width: '100%',
    background: 'rgba(45,122,58,0.08)',
    border: '1px solid rgba(45,122,58,0.3)',
    borderRadius: 8,
    padding: '12px 16px',
    color: '#fff',
    fontSize: 14,
    outline: 'none',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
    transition: 'border-color 0.2s',
  }

  return (
    <div style={{ background: 'linear-gradient(180deg, #0a1a0c 0%, #071508 100%)', minHeight: '100vh' }}>
      {/* Header */}
      <section style={{
        background: 'linear-gradient(160deg, #0d2510 0%, #0a1a0c 100%)',
        padding: '80px 24px 60px',
        borderBottom: '1px solid #2d7a3a22',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: 11, letterSpacing: 3, color: '#c8a84b', fontWeight: 700, marginBottom: 16 }}>PAGE 6 · CONTACT US</div>
          <h1 style={{ fontSize: 'clamp(32px, 4vw, 54px)', fontWeight: 900, color: '#fff', margin: '0 0 20px', lineHeight: 1.1 }}>
            Get In Touch
          </h1>
          <p style={{ fontSize: 18, color: '#a0cba4', maxWidth: 560, lineHeight: 1.7, margin: '0 auto' }}>
            Partner with Africa's leading circular economy infrastructure developer. Reach out to discuss projects, investments, or municipal partnerships.
          </p>
        </div>
      </section>

      <section style={{ padding: '60px 24px 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 48 }}>
          {/* Contact info */}
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 32, marginTop: 0 }}>Contact Details</h2>

            <div style={{ marginBottom: 32 }}>
              <div style={{ fontSize: 11, color: '#c8a84b', fontWeight: 700, letterSpacing: 1, marginBottom: 8 }}>COMPANY</div>
              <div style={{ fontSize: 15, color: '#d1fad4', fontWeight: 600 }}>Synergyworx Rainmakers (Pty) Ltd</div>
              <div style={{ fontSize: 13, color: '#7aaa80', marginTop: 4 }}>Reg. No. 2026/437822/07</div>
              <div style={{ fontSize: 13, color: '#7aaa80' }}>A Subsidiary of Synergyworx International Holdings (SWIH)</div>
            </div>

            <div style={{ marginBottom: 32 }}>
              <div style={{ fontSize: 11, color: '#c8a84b', fontWeight: 700, letterSpacing: 1, marginBottom: 8 }}>LOCATION</div>
              <div style={{ fontSize: 14, color: '#a0cba4', lineHeight: 1.7 }}>Johannesburg, Gauteng<br />South Africa</div>
            </div>

            <div style={{ marginBottom: 32 }}>
              <div style={{ fontSize: 11, color: '#c8a84b', fontWeight: 700, letterSpacing: 1, marginBottom: 8 }}>AREAS OF OPERATION</div>
              <div style={{ fontSize: 14, color: '#a0cba4', lineHeight: 1.7 }}>Primary: South Africa (City of Johannesburg, Ekurhuleni, eThekwini, Cape Town)<br />Expansion: Africa-wide</div>
            </div>

            <div>
              <div style={{ fontSize: 11, color: '#c8a84b', fontWeight: 700, letterSpacing: 1, marginBottom: 14 }}>ENQUIRY TYPES</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {['W2E Projects', 'W2F Projects', 'Investment', 'PPP Partnerships', 'GEC Programme', 'Municipal Contracts'].map(tag => (
                  <span key={tag} style={{
                    background: 'rgba(45,122,58,0.12)',
                    border: '1px solid rgba(45,122,58,0.25)',
                    borderRadius: 20,
                    padding: '5px 12px',
                    fontSize: 12,
                    color: '#a0cba4',
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 28, marginTop: 0 }}>Send a Message</h2>
            {sent ? (
              <div style={{
                background: 'rgba(45,122,58,0.15)',
                border: '1px solid rgba(45,122,58,0.4)',
                borderRadius: 14,
                padding: '40px 32px',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>✅</div>
                <h3 style={{ color: '#4caf50', margin: '0 0 12px' }}>Message Sent!</h3>
                <p style={{ color: '#a0cba4', margin: 0 }}>Thank you for reaching out. The Synergyworx Rainmakers team will be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label style={{ fontSize: 12, color: '#7aaa80', display: 'block', marginBottom: 6, fontWeight: 600 }}>Full Name *</label>
                    <input name="name" required value={form.name} onChange={handle} placeholder="Your name" style={inputStyle} />
                  </div>
                  <div>
                    <label style={{ fontSize: 12, color: '#7aaa80', display: 'block', marginBottom: 6, fontWeight: 600 }}>Email Address *</label>
                    <input name="email" type="email" required value={form.email} onChange={handle} placeholder="your@email.com" style={inputStyle} />
                  </div>
                </div>
                <div>
                  <label style={{ fontSize: 12, color: '#7aaa80', display: 'block', marginBottom: 6, fontWeight: 600 }}>Organisation / Company</label>
                  <input name="company" value={form.company} onChange={handle} placeholder="Your organisation" style={inputStyle} />
                </div>
                <div>
                  <label style={{ fontSize: 12, color: '#7aaa80', display: 'block', marginBottom: 6, fontWeight: 600 }}>Subject *</label>
                  <select name="subject" required value={form.subject} onChange={handle} style={{ ...inputStyle }}>
                    <option value="" style={{ background: '#0d2510' }}>Select enquiry type</option>
                    <option value="w2e" style={{ background: '#0d2510' }}>W2E Project Partnership</option>
                    <option value="w2f" style={{ background: '#0d2510' }}>W2F Project Partnership</option>
                    <option value="investment" style={{ background: '#0d2510' }}>Investment & Finance</option>
                    <option value="ppp" style={{ background: '#0d2510' }}>PPP / Municipal Partnership</option>
                    <option value="gec" style={{ background: '#0d2510' }}>GEC Programme</option>
                    <option value="other" style={{ background: '#0d2510' }}>General Enquiry</option>
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: 12, color: '#7aaa80', display: 'block', marginBottom: 6, fontWeight: 600 }}>Message *</label>
                  <textarea name="message" required rows={5} value={form.message} onChange={handle} placeholder="Tell us about your project or enquiry..." style={{ ...inputStyle, resize: 'vertical' }} />
                </div>
                <button type="submit" style={{
                  padding: '14px 32px',
                  background: 'linear-gradient(135deg, #2d7a3a, #1a4d25)',
                  color: '#fff',
                  border: '1px solid #4caf5044',
                  borderRadius: 8,
                  fontWeight: 700,
                  fontSize: 15,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}>
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* National Programme Integration */}
      <section style={{ padding: '0 24px 80px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{
            background: 'rgba(45,122,58,0.07)',
            border: '1px solid rgba(45,122,58,0.2)',
            borderRadius: 16,
            padding: '40px 48px',
          }}>
            <div style={{ fontSize: 11, letterSpacing: 3, color: '#c8a84b', fontWeight: 700, marginBottom: 16 }}>NATIONAL PROGRAMME INTEGRATION</div>
            <h3 style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 20, marginTop: 0 }}>SW-RW Integrates Directly With</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
              {[
                { name: 'EPWP', full: 'Expanded Public Works Programme' },
                { name: 'CWP', full: 'Community Work Programme' },
                { name: 'GEC', full: 'Green Environmental Comrades' },
                { name: 'DFIs', full: 'Development Finance Institutions' },
              ].map(p => (
                <div key={p.name} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <div style={{ width: 36, height: 36, background: 'rgba(200,168,75,0.15)', border: '1px solid rgba(200,168,75,0.3)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: '#c8a84b', flexShrink: 0 }}>{p.name}</div>
                  <div style={{ fontSize: 13, color: '#7aaa80', lineHeight: 1.4 }}>{p.full}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
