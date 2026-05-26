import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useApp } from '../../context/AppContext';

export default function Header() {
  const { user, logout } = useAuth();
  const { appState, updateAppState } = useApp();
  
  const [langOpen, setLangOpen] = useState(false);
  const [avatarOpen, setAvatarOpen] = useState(false);
  
  const langRef = useRef(null);
  const avatarRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (langRef.current && !langRef.current.contains(event.target)) setLangOpen(false);
      if (avatarRef.current && !avatarRef.current.contains(event.target)) setAvatarOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const labelsMap = { javascript: 'JS', cpp: 'C++', java: 'Java', python: 'Py' };

  return (
    <header>
      <div className="logo">
        <span style={{ fontSize: '1.2em', color: 'var(--accent-cyan)' }}>Δ</span> dsa.flow
      </div>
      
      <div className="header-right">
        {/* Language Picker Pill */}
        <div 
          ref={langRef}
          className={`lang-selector-pill ${langOpen ? 'open' : ''}`} 
          onClick={() => setLangOpen(!langOpen)}
        >
          <span>Lang:</span>
          <span style={{ color: 'var(--accent-cyan)' }}>{labelsMap[appState.selectedLanguage] || appState.selectedLanguage}</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
          
          <div className="lang-dropdown">
            {Object.keys(labelsMap).map(lang => (
              <div 
                key={lang} 
                className={`lang-option ${appState.selectedLanguage === lang ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  updateAppState({ selectedLanguage: lang });
                  setLangOpen(false);
                }}
              >
                {labelsMap[lang]} ({lang})
              </div>
            ))}
          </div>
        </div>

        {/* User Avatar Pill */}
        <div 
          ref={avatarRef}
          className={`user-avatar-pill ${avatarOpen ? 'open' : ''}`}
          onClick={() => setAvatarOpen(!avatarOpen)}
        >
          {user && user.name ? user.name[0].toUpperCase() : 'U'}
          
          <div className="user-dropdown">
            <div className="user-info">
              <strong>{user?.name || 'User'}</strong>
              <small>{user?.email || 'user@example.com'}</small>
            </div>
            <div className="user-dd-item" onClick={logout} style={{ color: 'var(--accent-rose)', borderTop: '1px solid var(--border-glass)' }}>
              🚪 Sign Out
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
