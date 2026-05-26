import React, { useEffect, useRef } from 'react';
import { initSorting, setDelay as setSortingSpeed } from '../../../modules/visualizers/sorting';
import { initDS as initStructures } from '../../../modules/visualizers/structures';
import { initBST, setBSTDelay as setBSTSpeed } from '../../../modules/visualizers/bst';
import { initGraph, setGraphDelay as setGraphSpeed } from '../../../modules/visualizers/graph';

export default function Visualizer() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    
    // Initialize the default visualizer (sorting)
    initSorting();

    const select = document.getElementById('visualizer-select');
    const speedSlider = document.getElementById('speed-slider');
    const title = document.getElementById('visualizer-title');
    
    if (select) {
      select.addEventListener('change', (e) => {
        const val = e.target.value;
        const opt = e.target.options[e.target.selectedIndex].text;
        if(title) title.textContent = opt;

        // Reset containers
        document.getElementById('array-container').innerHTML = '';
        document.getElementById('array-container').style.display = 'none';
        document.getElementById('struct-container').innerHTML = '';
        document.getElementById('struct-container').style.display = 'none';
        document.getElementById('tree-nodes').innerHTML = '';
        document.getElementById('tree-svg').innerHTML = '';
        document.getElementById('graph-nodes').innerHTML = '';
        document.getElementById('graph-svg').innerHTML = '';
        document.getElementById('ds-controls-group').style.display = 'none';
        
        // Hide btn-generate if not applicable
        const btnGen = document.getElementById('btn-generate');
        if (btnGen) btnGen.style.display = (val.startsWith('ds-') || val.startsWith('graph-')) ? 'none' : 'block';

        if (val.startsWith('sort-')) {
          document.getElementById('array-container').style.display = 'flex';
          initSorting();
        } else if (val === 'ds-stack' || val === 'ds-queue' || val === 'ds-linkedlist') {
          document.getElementById('struct-container').style.display = 'flex';
          document.getElementById('ds-controls-group').style.display = 'flex';
          initStructures();
        } else if (val === 'ds-bst') {
          document.getElementById('ds-controls-group').style.display = 'flex';
          initBST();
        } else if (val.startsWith('graph-')) {
          initGraph();
        }
      });
    }

    if (speedSlider) {
      speedSlider.addEventListener('input', (e) => {
        const val = parseInt(e.target.value);
        document.getElementById('speed-label').textContent = val + 'ms';
        setSortingSpeed(val);
        // structures.js does not export a delay setter
        setBSTSpeed(val);
        setGraphSpeed(val);
      });
    }

    return () => {
      // Cleanup logic if needed, but since it's a singleton app it's fine.
    };
  }, []);

  return (
    <div className="tab-pane active" id="visualizer" style={{ height: '100%', overflowY: 'auto' }}>
      <div className="visualizer-workspace">
        <div className="canvas-container">
          <div className="canvas-header">
            <h2 id="visualizer-title">Bubble Sort</h2>
            <select className="algorithm-selector" id="visualizer-select">
              <optgroup label="Sorting">
                <option value="sort-bubble" defaultValue>Bubble Sort</option>
                <option value="sort-selection">Selection Sort</option>
                <option value="sort-insertion">Insertion Sort</option>
                <option value="sort-merge">Merge Sort</option>
                <option value="sort-quick">Quick Sort</option>
              </optgroup>
              <optgroup label="Data Structures">
                <option value="ds-stack">Stack (LIFO)</option>
                <option value="ds-queue">Queue (FIFO)</option>
                <option value="ds-linkedlist">Singly Linked List</option>
                <option value="ds-bst">Binary Search Tree</option>
              </optgroup>
              <optgroup label="Graph Algorithms">
                <option value="graph-dijkstra">Dijkstra's Shortest Path</option>
              </optgroup>
            </select>
          </div>
          <div className="visualization-viewport" id="viewport">
            <div className="array-container" id="array-container"></div>
            <div className="struct-container" id="struct-container" style={{ display: 'none' }}></div>
            <svg className="tree-svg-container" id="tree-svg"></svg>
            <div className="tree-nodes-container" id="tree-nodes"></div>
            <svg className="graph-svg-container" id="graph-svg"></svg>
            <div className="graph-nodes-container" id="graph-nodes"></div>
          </div>
          <div className="card controls-card">
            <div className="input-group" id="ds-controls-group" style={{ display: 'none', marginBottom: 0 }}>
              <input type="number" className="text-input" id="ds-input-val" placeholder="Value 0-99" min="0" max="99" style={{ width: '110px' }} />
              <button className="btn btn-primary" id="ds-btn-insert">Insert/Push</button>
              <button className="btn btn-secondary" id="ds-btn-remove">Remove/Pop</button>
              <button className="btn btn-secondary" id="ds-btn-search" style={{ display: 'none' }}>Search</button>
            </div>
            <button className="btn btn-secondary" id="btn-generate">New Array</button>
            <button className="btn btn-primary btn-icon" id="btn-play-pause" title="Play">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            </button>
            <button className="btn btn-secondary btn-icon" id="btn-step" title="Step">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="5 4 15 12 5 20 5 4"/><line x1="19" y1="5" x2="19" y2="19"/></svg>
            </button>
            <div className="speed-control">
              <span>Speed:</span>
              <input type="range" id="speed-slider" min="50" max="1200" defaultValue="500" />
              <span id="speed-label">500ms</span>
            </div>
          </div>
        </div>
        <div className="visualizer-sidebar">
          <div className="card" style={{ padding: '20px' }}>
            <h3 style={{ marginBottom: '12px' }}>Complexity</h3>
            <div className="badge-group" style={{ marginBottom: '16px' }}>
              <span className="info-badge">Worst: <strong id="stat-worst-time">O(N²)</strong></span>
              <span className="info-badge">Best: <strong id="stat-best-time">O(N)</strong></span>
              <span className="info-badge">Space: <strong id="stat-space">O(1)</strong></span>
            </div>
            <p id="algorithm-description" style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}></p>
          </div>
          <div className="card" style={{ flexGrow: 1, padding: '20px', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ marginBottom: '12px' }}>Pseudocode Trace</h3>
            <div style={{ flexGrow: 1, overflowY: 'auto', background: 'var(--code-bg)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-glass)', padding: '12px' }} id="pseudocode-container"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
