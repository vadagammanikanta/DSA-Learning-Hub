import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { curriculum, roadmapPhases } from '../../../modules/learning/content_a2z';

export default function Roadmap() {
  const { appState, updateAppState } = useApp();
  const navigate = useNavigate();

  const getDiffColor = (difficulty) => {
    if (difficulty === 'Beginner') return 'var(--accent-emerald)';
    if (difficulty === 'Intermediate') return 'var(--accent-amber)';
    return 'var(--accent-rose)';
  };

  const handleNodeClick = (lessonId) => {
    updateAppState({ activeLessonId: lessonId });
    navigate('/learn');
  };

  return (
    <section className="tab-pane active" id="roadmap" style={{ display: 'grid', gap: '20px' }}>
      <div className="roadmap-header">
        <h2>DSA Learning Roadmap</h2>
        <p style={{ color: 'var(--text-secondary)' }}>Click any node to open the lesson instantly.</p>
      </div>
      
      <div className="roadmap-flow" id="roadmap-flow">
        {roadmapPhases.map((phase, phaseIdx) => (
          <div key={phaseIdx} className="roadmap-phase">
            <div className="roadmap-phase-label">{phase.label}</div>
            
            <div className="roadmap-nodes-row">
              {phase.nodes.map(nodeId => {
                const lesson = curriculum.find(t => t.id === nodeId);
                if (!lesson) return null;
                const isCompleted = appState.completedLessons.includes(nodeId);
                const isQuiz = lesson.type === 'quiz';
                
                return (
                  <div 
                    key={nodeId}
                    className={`roadmap-node ${isQuiz ? 'quiz-node' : ''} ${isCompleted ? 'completed' : ''}`}
                    onClick={() => handleNodeClick(nodeId)}
                    style={isQuiz ? { border: '1px dashed var(--accent-rose)', background: 'rgba(244, 63, 94, 0.04)' } : {}}
                  >
                    <div className="roadmap-node-dot" style={isQuiz ? { background: 'var(--accent-rose)' } : {}}></div>
                    <div style={{ flex: 1 }}>{lesson.icon} {lesson.title}</div>
                    <div style={{ 
                      fontSize: '0.7rem', 
                      color: isQuiz ? 'var(--accent-rose)' : getDiffColor(lesson.difficulty), 
                      fontWeight: 700 
                    }}>
                      {isQuiz ? 'QUIZ' : lesson.difficulty[0]}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
