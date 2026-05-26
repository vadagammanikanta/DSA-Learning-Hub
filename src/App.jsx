import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/Layout/Navbar';
import WebIDE from './components/IDE/WebIDE';
import LearningHub from './components/Learning/LearningHub';
import Arena from './components/Arena/Arena';
import './index.css';

// Placeholder components for phases 2 and 3
const Visualizer = () => <div className="tab-pane active" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', color: 'white' }}><h2>Visualizer (Coming Soon)</h2></div>;

function AppLayout() {
  const { user, loading } = useAuth();

  if (loading) return <div style={{ color: 'white', padding: '20px' }}>Loading...</div>;

  return (
    <div className="layout-container" style={{ display: 'flex', height: '100vh', width: '100vw', background: 'var(--bg-main)' }}>
      <Navbar />
      <div className="main-content" style={{ flex: 1, position: 'relative' }}>
        <Routes>
          <Route path="/" element={<LearningHub />} />
          <Route path="/arena" element={<Arena />} />
          <Route path="/ide" element={<WebIDE />} />
          <Route path="/visualizer" element={<Visualizer />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppProvider>
        <BrowserRouter>
          <AppLayout />
        </BrowserRouter>
      </AppProvider>
    </AuthProvider>
  );
}

export default App;
