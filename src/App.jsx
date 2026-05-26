import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import Header from './components/Layout/Header';
import Navbar from './components/Layout/Navbar';
import WebIDE from './components/IDE/WebIDE';
import LearningHub from './components/Learning/LearningHub';
import Arena from './components/Arena/Arena';
import Visualizer from './components/Visualizer/Visualizer';
import MockQuiz from './components/Quiz/MockQuiz';
import Platforms from './components/Platforms/Platforms';
import './index.css';


function AppLayout() {
  const { user, loading } = useAuth();

  if (loading) return <div style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center', color: 'white' }}>Loading...</div>;

  return (
    <div className="app-container">
      <Header />
      <Navbar />
      <div className="main-content" style={{ position: 'relative', overflowY: 'auto' }}>
        <Routes>
          <Route path="/" element={<LearningHub />} />
          <Route path="/arena" element={<Arena />} />
          <Route path="/ide" element={<WebIDE />} />
          <Route path="/visualizer" element={<Visualizer />} />
          <Route path="/platforms" element={<Platforms />} />
          <Route path="/quiz" element={<MockQuiz />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppProvider>
        <Router>
          <AppLayout />
        </Router>
      </AppProvider>
    </AuthProvider>
  );
}

export default App;
