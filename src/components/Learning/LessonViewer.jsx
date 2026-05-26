import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';

export default function LessonViewer({ lesson }) {
  const { appState, markLessonCompleted } = useApp();
  const navigate = useNavigate();
  const contentRef = useRef(null);

  const getLanguageExtension = (lang) => {
    switch(lang) {
      case 'javascript': return 'js';
      case 'python': return 'py';
      case 'java': return 'java';
      case 'cpp': return 'cpp';
      default: return 'txt';
    }
  };

  const handleSolveWithCompiler = () => {
    const ext = getLanguageExtension(appState.selectedLanguage);
    const filename = `${lesson.title.replace(/[^a-zA-Z0-9]/g, '_')}.${ext}`;
    
    // Create or find file in VFS
    const saved = localStorage.getItem('dsaflow_vfs');
    let vfs = saved ? JSON.parse(saved) : [
      { id: 'root', type: 'folder', name: 'root', parentId: null }
    ];
    
    let file = vfs.find(n => n.name === filename && n.type === 'file');
    const initialCode = lesson.code ? (lesson.code[appState.selectedLanguage] || '') : '';
    
    if (!file) {
      const id = Date.now().toString() + Math.floor(Math.random() * 1000);
      file = {
        id,
        type: 'file',
        name: filename,
        parentId: 'root',
        content: initialCode
      };
      vfs.push(file);
      localStorage.setItem('dsaflow_vfs', JSON.stringify(vfs));
    } else if (initialCode && file.content.trim() === '') {
      file.content = initialCode;
      localStorage.setItem('dsaflow_vfs', JSON.stringify(vfs));
    }

    // Mark as completed when they start solving
    markLessonCompleted(lesson.id);

    // Notify the IDE to open this file
    window.dispatchEvent(new CustomEvent('ide_open_file', { detail: { id: file.id } }));
    
    // Navigate to IDE
    navigate('/ide');
  };

  useEffect(() => {
    // Process markdown or HTML in lesson.details
    if (contentRef.current) {
      // In original code, it was injected as HTML. If it's markdown, we'd use marked.
      contentRef.current.innerHTML = lesson.details || `<p>${lesson.summary}</p>`;
    }
  }, [lesson]);

  return (
    <div className="card" style={{ padding: '30px', maxWidth: '800px', margin: '0 auto', background: 'var(--bg-card)', borderRadius: '12px', border: '1px solid var(--border-glass)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
        <div style={{ fontSize: '2.5rem' }}>{lesson.icon}</div>
        <div>
          <h1 style={{ fontSize: '1.8rem', color: 'var(--text-main)', margin: '0 0 8px 0' }}>
            {lesson.title}
          </h1>
          <div style={{ display: 'flex', gap: '12px', fontSize: '0.9rem' }}>
            <span style={{ 
              color: lesson.difficulty === 'Easy' ? 'var(--diff-easy)' : 
                     lesson.difficulty === 'Medium' ? 'var(--diff-medium)' : 'var(--diff-hard)',
              background: 'rgba(255,255,255,0.05)',
              padding: '2px 8px',
              borderRadius: '4px'
            }}>
              {lesson.difficulty}
            </span>
            <span style={{ color: 'var(--text-muted)' }}>{lesson.category}</span>
          </div>
        </div>
      </div>

      <div style={{ padding: '20px 0', borderTop: '1px solid var(--border-glass)', borderBottom: '1px solid var(--border-glass)', marginBottom: '24px' }}>
        <div 
          ref={contentRef}
          className="lesson-markdown-content" 
          style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }} 
        />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button 
          onClick={() => markLessonCompleted(lesson.id)}
          style={{
            background: 'transparent',
            border: '1px solid var(--border-glass)',
            color: appState.completedLessons.includes(lesson.id) ? 'var(--diff-easy)' : 'var(--text-main)',
            padding: '10px 20px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: '600'
          }}
        >
          {appState.completedLessons.includes(lesson.id) ? '✅ Completed' : 'Mark as Complete'}
        </button>

        <button 
          onClick={handleSolveWithCompiler}
          style={{
            background: 'var(--accent-cyan)',
            color: '#000',
            border: 'none',
            padding: '10px 24px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          Solve with Compiler 🚀
        </button>
      </div>
    </div>
  );
}
