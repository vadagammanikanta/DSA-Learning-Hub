import React from 'react';

const PLATFORMS = [
  {
    id: 'leetcode', cls: 'lc', logo: '🟡', name: 'LeetCode',
    tagline: 'The gold standard for FAANG interview prep',
    link: 'https://leetcode.com',
    tips: [
      'Start with "Top 150 Interview Questions" — do Easy before Medium.',
      'Focus on patterns: Two Pointer, Sliding Window, BFS/DFS, DP.',
      'Use the "Discuss" tab after each problem to see optimal solutions.',
      'Aim for 3–5 problems/day. Consistency > cramming.',
      'Use tags to practice by topic (Arrays, Trees, DP separately).',
      'Timed mock contests build real interview pressure simulation.',
    ]
  },
  {
    id: 'hackerrank', cls: 'hr', logo: '🟢', name: 'HackerRank',
    tagline: 'Best for structured certifications & company assessments',
    link: 'https://hackerrank.com',
    tips: [
      'Complete the "30 Days of Code" challenge for a quick warm-up.',
      'Earn certificates in Problem Solving & Data Structures to add to resume.',
      'Most OA (Online Assessments) use HackerRank — get comfortable with the editor.',
      'Use "Interview Preparation Kit" — exactly what companies test.',
      'Practice SQL and regex here too — they test non-coding DS skills.',
      'Read problem constraints carefully — they reveal the expected time complexity.',
    ]
  },
  {
    id: 'codeforces', cls: 'cf', logo: '🔵', name: 'Codeforces',
    tagline: 'For competitive programming & rating systems',
    link: 'https://codeforces.com',
    tips: [
      'Participate in Div. 2 and Div. 3 contests — they run every week.',
      'Solve A & B problems of every contest to build speed.',
      'Your rating (Specialist = 1400+) proves algorithmic maturity.',
      'Use the "problemset" filter by rating to solve just-above-your-level problems.',
      'Editorial reading is NOT cheating — understanding patterns is the goal.',
      'Track your submissions in a spreadsheet for pattern recognition.',
    ]
  },
  {
    id: 'codechef', cls: 'cc', logo: '🍴', name: 'CodeChef',
    tagline: 'Great for beginners and monthly competitions',
    link: 'https://codechef.com',
    tips: [
      'Start with "Beginner" problems in the Practice section.',
      'Participate in Long Challenges (10 days) to learn without time pressure.',
      'Lunchtime & Cook-Off contests are short (2.5h) — good for interview simulation.',
      'CodeChef Learn has curated DSA courses aligned with placements.',
      'Your star rating matters for some companies during campus placements.',
      '3★ (1400+ rating) is a solid placement-ready benchmark.',
    ]
  }
];

export default function Platforms() {
  return (
    <div className="tab-pane active" id="platforms" style={{ height: '100%', overflowY: 'auto', padding: '40px' }}>
      <div className="section-header" style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '8px' }}>🌐 Platform Strategy Guides</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>How to ace DSA on every competitive platform</p>
      </div>
      
      <div id="platforms-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px' }}>
        {PLATFORMS.map(p => (
          <div key={p.id} className={`platform-card ${p.cls}`} style={{
            background: 'var(--bg-card)', 
            border: '1px solid var(--border-glass)',
            borderRadius: '16px',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ fontSize: '2.5rem' }}>{p.logo}</div>
              <div>
                <h3 style={{ fontSize: '1.4rem', margin: 0 }}>{p.name}</h3>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '4px' }}>{p.tagline}</div>
              </div>
            </div>
            <ul style={{ paddingLeft: '20px', fontSize: '0.9rem', color: 'var(--text-main)', lineHeight: 1.6, flexGrow: 1, margin: 0 }}>
              {p.tips.map((tip, i) => (
                <li key={i} style={{ marginBottom: '8px' }}>{tip}</li>
              ))}
            </ul>
            <a href={p.link} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ textAlign: 'center', display: 'block', padding: '10px' }}>
              Visit {p.name} ↗
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
