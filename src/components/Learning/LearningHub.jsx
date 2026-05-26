import React, { useState, useMemo } from 'react';
import { curriculum } from '../../../modules/learning/content_a2z';
import { useApp } from '../../context/AppContext';
import LessonViewer from './LessonViewer';

export default function LearningHub() {
  const { appState } = useApp();
  const [activeLessonId, setActiveLessonId] = useState(null);

  // Group curriculum by category
  const categories = useMemo(() => {
    const map = new Map();
    curriculum.forEach(lesson => {
      // Filter by difficulty if needed
      if (appState.activeDifficulty !== 'all' && 
          lesson.difficulty.toLowerCase() !== appState.activeDifficulty.toLowerCase()) {
        return;
      }
      if (!map.has(lesson.category)) {
        map.set(lesson.category, []);
      }
      map.get(lesson.category).push(lesson);
    });
    return Array.from(map.entries()).map(([name, lessons]) => ({ name, lessons }));
  }, [appState.activeDifficulty]);

  const activeLesson = useMemo(() => 
    curriculum.find(l => l.id === activeLessonId), 
  [activeLessonId]);

  return (
    <div className="learning-layout" style={{ display: 'flex', height: '100%' }}>
      {/* Sidebar: Curriculum List */}
      <div className="curriculum-list" style={{ width: '350px', overflowY: 'auto', borderRight: '1px solid var(--border-glass)', padding: '20px' }}>
        <h2 style={{ color: 'var(--text-main)', marginBottom: '20px', fontSize: '1.2rem' }}>A-Z DSA Roadmap</h2>
        
        {categories.map(category => (
          <div key={category.name} style={{ marginBottom: '24px' }}>
            <h3 style={{ color: 'var(--accent-cyan)', fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '12px', letterSpacing: '1px' }}>
              {category.name}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {category.lessons.map(lesson => {
                const isCompleted = appState.completedLessons.includes(lesson.id);
                const isActive = activeLessonId === lesson.id;
                
                return (
                  <div 
                    key={lesson.id}
                    onClick={() => setActiveLessonId(lesson.id)}
                    style={{
                      padding: '12px',
                      background: isActive ? 'rgba(0, 229, 255, 0.1)' : 'var(--bg-card)',
                      border: `1px solid ${isActive ? 'var(--accent-cyan)' : 'var(--border-glass)'}`,
                      borderRadius: '8px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      transition: 'all 0.2s'
                    }}
                  >
                    <div style={{
                      width: '24px', height: '24px', borderRadius: '50%',
                      background: isCompleted ? 'rgba(0, 230, 118, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                      color: isCompleted ? 'var(--diff-easy)' : 'var(--text-muted)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.8rem', border: `1px solid ${isCompleted ? 'var(--diff-easy)' : 'var(--border-glass)'}`,
                      flexShrink: 0
                    }}>
                      {isCompleted ? '✓' : ''}
                    </div>
                    <div>
                      <div style={{ color: isActive ? 'var(--accent-cyan)' : 'var(--text-main)', fontWeight: '600', fontSize: '0.95rem', marginBottom: '4px' }}>
                        {lesson.title}
                      </div>
                      <div style={{ display: 'flex', gap: '8px', fontSize: '0.75rem' }}>
                        <span style={{ 
                          color: lesson.difficulty === 'Easy' ? 'var(--diff-easy)' : 
                                 lesson.difficulty === 'Medium' ? 'var(--diff-medium)' : 'var(--diff-hard)'
                        }}>
                          {lesson.difficulty}
                        </span>
                        <span style={{ color: 'var(--text-muted)' }}>• {lesson.readTime || '5 mins'}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Main Area: Lesson Viewer */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '30px' }}>
        {activeLesson ? (
          <LessonViewer lesson={activeLesson} />
        ) : (
          <div style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
            Select a topic from the roadmap to begin learning.
          </div>
        )}
      </div>
    </div>
  );
}
