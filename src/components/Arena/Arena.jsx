import React, { useState, useEffect, useRef } from 'react';
import Editor from '@monaco-editor/react';
import { problems } from '../../../modules/arena/problems';
import { useApp } from '../../context/AppContext';

export default function Arena() {
  const { appState, updateAppState } = useApp();
  const [activeProblemId, setActiveProblemId] = useState(problems[0].id);
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [activeTab, setActiveTab] = useState('testcases');
  
  const activeProblem = problems.find(p => p.id === activeProblemId);
  const descRef = useRef(null);

  useEffect(() => {
    if (activeProblem) {
      setCode(activeProblem.starterCode[appState.selectedLanguage] || '');
      if (descRef.current) {
        descRef.current.innerHTML = activeProblem.content
          .replace(/^# (.*$)/gim, '<h1>$1</h1>')
          .replace(/^### (.*$)/gim, '<h3>$1</h3>')
          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          .replace(/`(.*?)`/g, '<code>$1</code>')
          .replace(/\n/g, '<br>');
      }
    }
  }, [activeProblem, appState.selectedLanguage]);

  const handleRunCode = async () => {
    setIsRunning(true);
    setActiveTab('output');
    setOutput('Running test cases...');
    
    try {
      const results = [];
      const publicCases = activeProblem.testCases.filter(tc => !tc.isHidden);
      
      for (let i = 0; i < publicCases.length; i++) {
        const tc = publicCases[i];
        const res = await fetch('/api/execute', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            language: appState.selectedLanguage,
            code: code,
            driver: activeProblem.drivers[appState.selectedLanguage],
            stdin: tc.input
          })
        });
        
        const data = await res.json();
        
        if (!data.success) {
          results.push(`Test Case ${i+1}: ❌ Error\n${data.error}`);
          continue;
        }

        const outStr = (data.output || '').trim();
        const expStr = tc.expectedOutput.trim();
        
        if (outStr === expStr) {
          results.push(`Test Case ${i+1}: ✅ Passed`);
        } else {
          results.push(`Test Case ${i+1}: ❌ Failed\nExpected: ${expStr}\nGot: ${outStr}`);
        }
      }
      
      setOutput(results.join('\n\n'));
    } catch (err) {
      setOutput(`Execution failed: ${err.message}`);
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div style={{ display: 'flex', height: '100%', overflow: 'hidden' }}>
      {/* Left: Problems List */}
      <div style={{ width: '250px', borderRight: '1px solid var(--border-glass)', background: 'var(--bg-panel)', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '16px', borderBottom: '1px solid var(--border-glass)' }}>
          <h3 style={{ margin: 0, color: 'var(--text-main)', fontSize: '1rem' }}>Problem Set</h3>
        </div>
        <div style={{ flex: 1, overflowY: 'auto' }}>
          {problems.map(p => (
            <div 
              key={p.id}
              onClick={() => setActiveProblemId(p.id)}
              style={{
                padding: '12px 16px',
                cursor: 'pointer',
                background: activeProblemId === p.id ? 'rgba(0, 229, 255, 0.1)' : 'transparent',
                borderLeft: `3px solid ${activeProblemId === p.id ? 'var(--accent-cyan)' : 'transparent'}`,
                borderBottom: '1px solid var(--border-glass)'
              }}
            >
              <div style={{ color: activeProblemId === p.id ? 'var(--accent-cyan)' : 'var(--text-main)', fontWeight: '500', fontSize: '0.9rem' }}>
                {p.title}
              </div>
              <div style={{ 
                fontSize: '0.75rem', 
                color: p.difficulty === 'Easy' ? 'var(--diff-easy)' : 
                       p.difficulty === 'Medium' ? 'var(--diff-medium)' : 'var(--diff-hard)',
                marginTop: '4px'
              }}>
                {p.difficulty}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Middle: Description */}
      <div style={{ width: '350px', borderRight: '1px solid var(--border-glass)', background: 'var(--bg-main)', overflowY: 'auto', padding: '24px' }}>
        <div ref={descRef} className="lesson-markdown-content" style={{ color: 'var(--text-secondary)' }} />
      </div>

      {/* Right: Editor & Console */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: '#1e1e1e' }}>
        <div style={{ padding: '8px 16px', borderBottom: '1px solid var(--border-glass)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--bg-panel)' }}>
          <select 
            value={appState.selectedLanguage}
            onChange={(e) => updateAppState({ selectedLanguage: e.target.value })}
            style={{ background: '#333', color: '#fff', border: '1px solid #444', padding: '4px 8px', borderRadius: '4px' }}
          >
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="cpp">C++</option>
            <option value="java">Java</option>
          </select>
          <button 
            onClick={() => setCode(activeProblem.starterCode[appState.selectedLanguage] || '')}
            style={{ background: 'transparent', border: '1px solid var(--border-glass)', color: 'var(--text-muted)', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.8rem' }}
          >
            🔄 Reset
          </button>
        </div>
        
        <div style={{ flex: 1 }}>
          <Editor
            height="100%"
            theme="vs-dark"
            language={appState.selectedLanguage === 'cpp' ? 'cpp' : appState.selectedLanguage}
            value={code}
            onChange={val => setCode(val)}
            options={{ minimap: { enabled: false }, fontSize: 14 }}
          />
        </div>

        {/* Console Area */}
        <div style={{ height: '250px', borderTop: '1px solid var(--border-glass)', display: 'flex', flexDirection: 'column', background: 'var(--bg-panel)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-glass)', padding: '0 16px' }}>
            <div style={{ display: 'flex', gap: '16px' }}>
              <button 
                onClick={() => setActiveTab('testcases')}
                style={{ padding: '12px 0', background: 'none', border: 'none', color: activeTab === 'testcases' ? 'var(--accent-cyan)' : 'var(--text-muted)', borderBottom: `2px solid ${activeTab === 'testcases' ? 'var(--accent-cyan)' : 'transparent'}`, cursor: 'pointer' }}
              >Test Cases</button>
              <button 
                onClick={() => setActiveTab('output')}
                style={{ padding: '12px 0', background: 'none', border: 'none', color: activeTab === 'output' ? 'var(--accent-cyan)' : 'var(--text-muted)', borderBottom: `2px solid ${activeTab === 'output' ? 'var(--accent-cyan)' : 'transparent'}`, cursor: 'pointer' }}
              >Output</button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <button 
                onClick={handleRunCode}
                disabled={isRunning}
                style={{ background: 'var(--accent-cyan)', color: '#000', border: 'none', padding: '6px 16px', borderRadius: '4px', fontWeight: 'bold', cursor: isRunning ? 'not-allowed' : 'pointer' }}
              >
                {isRunning ? '⏳ Running...' : '▶ Run Code'}
              </button>
            </div>
          </div>
          
          <div style={{ flex: 1, padding: '16px', overflowY: 'auto', color: 'var(--text-secondary)', fontSize: '0.9rem', fontFamily: 'var(--font-code)' }}>
            {activeTab === 'testcases' && (
              <div>
                {activeProblem?.testCases.filter(t => !t.isHidden).map((tc, idx) => (
                  <div key={idx} style={{ marginBottom: '16px', padding: '12px', background: 'rgba(255,255,255,0.03)', borderRadius: '6px' }}>
                    <div style={{ fontWeight: 'bold', color: 'var(--text-main)', marginBottom: '8px' }}>Case {idx + 1}</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Input:</div>
                    <div style={{ marginBottom: '8px', background: '#1e1e1e', padding: '6px', borderRadius: '4px' }}>{tc.input}</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Expected Output:</div>
                    <div style={{ background: '#1e1e1e', padding: '6px', borderRadius: '4px' }}>{tc.expectedOutput}</div>
                  </div>
                ))}
              </div>
            )}
            
            {activeTab === 'output' && (
              <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{output || 'Run code to see results.'}</pre>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
