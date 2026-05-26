import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useApp } from '../../context/AppContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  const { appState, updateAppState, resetProgress } = useApp();
  
  const [langOpen, setLangOpen] = useState(false);
  const [avatarOpen, setAvatarOpen] = useState(false);
  
  const langRef = useRef(null);
  const avatarRef = useRef(null);

  // Close dropdowns on outside click
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
    <aside>
      <div className="nav-menu">
        <div className="nav-section-title">Menu</div>
        <NavLink to="/" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
          Learning Hub
        </NavLink>
        <NavLink to="/arena" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
          Coding Arena
        </NavLink>
        <NavLink to="/ide" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
          Online IDE
        </NavLink>
        <NavLink to="/visualizer" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
          Visualizers
        </NavLink>
        <NavLink to="/platforms" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          Platforms
        </NavLink>
        <NavLink to="/quiz" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
          Mock Quiz
        </NavLink>
      </div>

      <div className="sidebar-footer" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        
        {/* Trial Timer Widget (Dummy for now) */}
        <div className="trial-timer-pill" style={{ justifyContent: 'center' }}>
          <span>Trial Active — 23:59:59</span>
        </div>

        {/* Overall Progress */}
        <div style={{ background: 'var(--bg-input)', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-glass)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '6px' }}>
            <span style={{ color: 'var(--text-secondary)' }}>Progress</span>
            <span style={{ color: 'var(--accent-cyan)', fontWeight: 'bold' }}>{appState.completedLessons.length}</span>
          </div>
          <div style={{ height: '4px', background: 'var(--border-glass)', borderRadius: '2px', overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${Math.min(100, (appState.completedLessons.length / 100) * 100)}%`, background: 'var(--accent-cyan)' }}></div>
          </div>
          <button onClick={resetProgress} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', fontSize: '0.7rem', width: '100%', marginTop: '8px', cursor: 'pointer', textDecoration: 'underline' }}>
            Reset Progress
          </button>
        </div>

      </div>
    </aside>
  );
}
