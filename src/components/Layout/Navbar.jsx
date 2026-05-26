import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useApp } from '../../context/AppContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  const { appState, updateAppState } = useApp();

  return (
    <nav className="sidebar">
      <div className="brand">
        <div className="brand-logo">Δ</div>
        <div className="brand-name">dsa.flow</div>
      </div>
      
      <div className="nav-menu">
        <NavLink to="/" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
          <span className="nav-icon">📖</span> Learning Hub
        </NavLink>
        <NavLink to="/arena" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
          <span className="nav-icon">⚔️</span> Arena
        </NavLink>
        <NavLink to="/ide" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
          <span className="nav-icon">💻</span> Online IDE
        </NavLink>
        <NavLink to="/visualizer" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
          <span className="nav-icon">👁️</span> Visualizers
        </NavLink>
        <NavLink to="/platforms" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
          <span className="nav-icon">🌐</span> Platforms
        </NavLink>
        <NavLink to="/quiz" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
          <span className="nav-icon">🎯</span> Mock Quiz
        </NavLink>
      </div>

      <div style={{ marginTop: 'auto', padding: '16px' }}>
        <div className="lang-pill">
          <div className="lang-pill-header">
            <span>Language</span>
            <span style={{ fontWeight: 'bold' }}>{appState.selectedLanguage}</span>
          </div>
          <div className="lang-pill-dropdown">
            {['javascript', 'cpp', 'java', 'python'].map(lang => (
              <div 
                key={lang} 
                className={`lang-option ${appState.selectedLanguage === lang ? 'active' : ''}`}
                onClick={() => updateAppState({ selectedLanguage: lang })}
              >
                {lang}
              </div>
            ))}
          </div>
        </div>

        {user && (
          <div className="avatar-pill" onClick={logout} style={{ cursor: 'pointer', marginTop: '12px' }}>
            <div className="avatar-circle">{user.name ? user.name[0].toUpperCase() : 'U'}</div>
            <div className="avatar-info">
              <div className="avatar-name" style={{ fontSize: '0.85rem' }}>{user.name || 'User'}</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Sign Out</div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
