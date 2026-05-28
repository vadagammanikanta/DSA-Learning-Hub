import React, { useState } from 'react';

export default function DsaFlowAI() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <div className="ai-page-container">
      {/* Glow Effect */}
      <div className="ai-glow-orb" />

      {/* Hero Header */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <div style={{
          fontSize: '3rem',
          marginBottom: '16px',
          display: 'inline-flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '72px',
          height: '72px',
          borderRadius: '18px',
          background: 'rgba(0, 229, 255, 0.06)',
          border: '1px solid rgba(0, 229, 255, 0.15)',
          boxShadow: '0 0 30px rgba(0, 229, 255, 0.15)',
          color: 'var(--accent-cyan)'
        }}>
          ✨
        </div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '900', margin: '14px 0', background: 'linear-gradient(135deg, var(--accent-cyan) 0%, var(--accent-purple) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
          dsa.flow AI
        </h1>
        <div style={{
          display: 'inline-block',
          background: 'rgba(124, 77, 255, 0.12)',
          border: '1px solid rgba(124, 77, 255, 0.25)',
          color: 'var(--accent-purple)',
          padding: '4px 14px',
          borderRadius: '50px',
          fontSize: '0.78rem',
          fontWeight: '700',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          marginBottom: '18px'
        }}>
          Coming Soon
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', maxWidth: '620px', margin: '0 auto', lineHeight: '1.6' }}>
          An intelligent AI-powered DSA tutor designed to help you solve, explain, and master any type of Data Structures and Algorithms question.
        </p>
      </div>

      {/* Main Glassmorphic Card */}
      <div className="card" style={{
        padding: '40px',
        background: 'linear-gradient(135deg, rgba(16, 18, 32, 0.6) 0%, rgba(24, 28, 48, 0.4) 100%)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '20px',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)',
        marginBottom: '40px'
      }}>
        <h2 style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '12px', textAlign: 'center' }}>
          Everything Related to AI for DSA is Coming Soon
        </h2>
        <p style={{ color: 'var(--text-secondary)', textAlign: 'center', fontSize: '0.95rem', maxWidth: '580px', margin: '0 auto 30px', lineHeight: '1.5' }}>
          We are building a comprehensive suite of AI tools tailored specifically to accelerate your learning and help you ace your product company placements.
        </p>

        {/* Feature Grid */}
        <div className="ai-feature-grid">
          <div className="ai-feature-card">
            <div style={{ fontSize: '1.8rem', marginBottom: '12px' }}>🧠</div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '8px', color: 'var(--text-primary)' }}>Solve Any DSA Question</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
              Paste any coding challenge description, GFG link, or custom problem. The AI generates step-by-step logic, optimal pseudo-code, and verified solution code.
            </p>
          </div>

          <div className="ai-feature-card">
            <div style={{ fontSize: '1.8rem', marginBottom: '12px' }}>⚡</div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '8px', color: 'var(--text-primary)' }}>AI-Powered Code Explainer</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
              Get detailed, line-by-line code reviews. Understand how the time and space complexity changes, and learn how to optimize your solutions.
            </p>
          </div>

          <div className="ai-feature-card">
            <div style={{ fontSize: '1.8rem', marginBottom: '12px' }}>🐛</div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '8px', color: 'var(--text-primary)' }}>Interactive Debugging Tutor</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
              Stuck on a test case? The AI explains exactly which edge cases are failing and guides you on how to patch them, without giving away the final answer.
            </p>
          </div>
        </div>

        {/* Subscribe / Notify Box */}
        <div style={{
          marginTop: '40px',
          paddingTop: '30px',
          borderTop: '1px solid var(--border-glass)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          {subscribed ? (
            <div style={{ animation: 'fadeIn 0.3s ease' }}>
              <span style={{ fontSize: '2rem', display: 'block', marginBottom: '8px' }}>🚀</span>
              <h4 style={{ color: 'var(--accent-cyan)', fontWeight: '700', fontSize: '1.1rem', margin: '4px 0' }}>You're on the early access list!</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>We'll notify you as soon as the dsa.flow AI features are ready for testing.</p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', width: '100%' }}>
              <label style={{ fontSize: '0.88rem', fontWeight: '600', color: 'var(--text-secondary)' }}>
                Want early access to our AI release? Join the waitlist:
              </label>
              <div className="ai-waitlist-form">
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  style={{
                    flexGrow: 1,
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-glass)',
                    borderRadius: '8px',
                    padding: '10px 14px',
                    color: 'white',
                    fontSize: '0.88rem',
                    outline: 'none'
                  }}
                />
                <button type="submit" className="btn btn-accent" style={{ padding: '0 20px', fontSize: '0.88rem', borderRadius: '8px' }}>
                  Get Notified
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Explanatory Banner */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(0, 229, 255, 0.05), rgba(124, 77, 255, 0.05))',
        border: '1px solid rgba(0, 229, 255, 0.15)',
        borderRadius: '12px',
        padding: '18px 24px',
        display: 'flex',
        gap: '14px',
        alignItems: 'flex-start',
        lineHeight: '1.6'
      }}>
        <span style={{ fontSize: '1.25rem', marginTop: '2px' }}>💡</span>
        <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
          <strong style={{ color: 'var(--text-primary)' }}>Why AI for DSA?</strong> Memorizing code solutions doesn't work for modern interview rounds. Our upcoming AI is trained to focus on <em style={{ color: 'var(--accent-cyan)' }}>conceptual learning</em>, guiding you to discover the patterns behind arrays, trees, graphs, and DP, rather than just copying code. Stay tuned!
        </div>
      </div>
    </div>
  );
}
