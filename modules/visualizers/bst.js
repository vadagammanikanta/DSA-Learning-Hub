// BST Visualizer Module - State Machine Architecture

const bstPseudocode = {
  insert: [
    "function insert(node, val):",
    "  if node is null: return new Node(val)",
    "  if val < node.val:",
    "    node.left = insert(node.left, val)",
    "  else if val > node.val:",
    "    node.right = insert(node.right, val)",
    "  return node"
  ],
  search: [
    "function search(node, val):",
    "  if node is null: return false",
    "  if val == node.val: return true",
    "  if val < node.val:",
    "    return search(node.left, val)",
    "  else:",
    "    return search(node.right, val)"
  ],
  delete: [
    "function delete(node, val):",
    "  if node is null: return null",
    "  if val < node.val: node.left = delete(node.left, val)",
    "  else if val > node.val: node.right = delete(node.right, val)",
    "  else:",
    "    if node.left is null: return node.right",
    "    if node.right is null: return node.left",
    "    minNode = findMin(node.right)",
    "    node.val = minNode.val",
    "    node.right = delete(node.right, minNode.val)",
    "  return node"
  ]
};

class BSTNode {
  constructor(value, id) {
    this.value = value;
    this.id = id;
    this.left = null;
    this.right = null;
  }
}

let root = null;
let nextNodeId = 1;

let viewport = null;
let svgContainer = null;
let nodesContainer = null;
let states = [];
let currentStateIndex = 0;
let isPlaying = false;
let playIntervalId = null;
let delay = 600;

export function initBST(vpContainer) {
  viewport = vpContainer;
  svgContainer = document.getElementById('tree-svg');
  nodesContainer = document.getElementById('tree-nodes');
  
  isPlaying = false;
  clearInterval(playIntervalId);
  currentStateIndex = 0;
  states = [];
  
  if (!root) {
    // Initial tree
    const vals = [50, 30, 70, 20, 40, 60, 80];
    vals.forEach(v => root = _insertSilent(root, v));
  }
  
  loadBSTPseudocode('insert');
  
  // Render static initial state
  states = [cloneTreeState(null, null, null, -1)];
  renderState(states[0]);
}

function _insertSilent(node, val) {
  if (!node) return new BSTNode(val, nextNodeId++);
  if (val < node.value) node.left = _insertSilent(node.left, val);
  else if (val > node.value) node.right = _insertSilent(node.right, val);
  return node;
}

function loadBSTPseudocode(op) {
  const container = document.getElementById('pseudocode-container');
  if (!container) return;
  const lines = bstPseudocode[op];
  container.innerHTML = lines.map((line, i) => `<div class="code-line" id="code-line-${i}">${line.replace(/ /g, '&nbsp;')}</div>`).join('');
}

function highlightCodeLine(lineIdx) {
  document.querySelectorAll('.code-line').forEach(el => el.classList.remove('active'));
  if (lineIdx >= 0) {
    const el = document.getElementById(`code-line-${lineIdx}`);
    if (el) el.classList.add('active');
  }
}

// ── STATE CLONING & COORDINATE MATH ────────────────────────────────

function cloneTreeState(activeNodeId, activeEdgeTargetId, foundNodeId, lineIdx) {
  let nodesList = [];
  let edgesList = [];
  
  if (!root) {
    return { nodes: [], edges: [], activeNodeId, activeEdgeTargetId, foundNodeId, lineIdx };
  }

  // 1. Calculate in-order ranks
  let inOrderArray = [];
  function traverseInOrder(node) {
    if (!node) return;
    traverseInOrder(node.left);
    inOrderArray.push(node.id);
    traverseInOrder(node.right);
  }
  traverseInOrder(root);
  
  const N = inOrderArray.length;

  // 2. Clone structure with coords
  function cloneSubtree(node, depth, parentX, parentY) {
    if (!node) return null;
    
    const rank = inOrderArray.indexOf(node.id);
    const x = ((rank + 1) / (N + 1)) * 100;
    const y = depth * 20 + 10; // 10%, 30%, 50%...
    
    nodesList.push({ id: node.id, value: node.value, x, y });
    
    if (parentX !== null) {
      edgesList.push({ sourceX: parentX, sourceY: parentY, targetX: x, targetY: y, targetId: node.id });
    }
    
    cloneSubtree(node.left, depth + 1, x, y);
    cloneSubtree(node.right, depth + 1, x, y);
  }
  
  cloneSubtree(root, 0, null, null);
  
  return { nodes: nodesList, edges: edgesList, activeNodeId, activeEdgeTargetId, foundNodeId, lineIdx };
}

function pushState(activeNodeId, activeEdgeTargetId, foundNodeId, lineIdx) {
  states.push(cloneTreeState(activeNodeId, activeEdgeTargetId, foundNodeId, lineIdx));
}

// ── OPERATIONS (Generators) ────────────────────────────────────────

export function bstInsert(val) {
  loadBSTPseudocode('insert');
  states = [];
  currentStateIndex = 0;
  
  pushState(null, null, null, 0); // start
  
  function insertRec(node, parentId, val) {
    if (!node) {
      pushState(parentId, null, null, 1);
      const newNode = new BSTNode(val, nextNodeId++);
      // We modify root directly so cloneTreeState sees it
      return newNode; 
    }
    
    pushState(node.id, null, null, 2);
    
    if (val < node.value) {
      pushState(node.id, node.left ? node.left.id : null, null, 3);
      const returnedNode = insertRec(node.left, node.id, val);
      node.left = returnedNode;
      pushState(node.id, null, null, 3); // After return
    } else if (val > node.value) {
      pushState(node.id, node.right ? node.right.id : null, null, 4);
      const returnedNode = insertRec(node.right, node.id, val);
      node.right = returnedNode;
      pushState(node.id, null, null, 5); // After return
    }
    
    pushState(node.id, null, null, 6);
    return node;
  }
  
  root = insertRec(root, null, val);
  pushState(null, null, null, -1);
  
  renderState(states[0]);
  playBST();
}

export function bstSearch(val) {
  loadBSTPseudocode('search');
  states = [];
  currentStateIndex = 0;
  
  pushState(null, null, null, 0);
  
  function searchRec(node, val) {
    if (!node) {
      pushState(null, null, null, 1);
      return false;
    }
    
    pushState(node.id, null, null, 2);
    
    if (val === node.value) {
      pushState(node.id, null, node.id, 2);
      return true;
    }
    
    pushState(node.id, null, null, 3);
    if (val < node.value) {
      pushState(node.id, node.left ? node.left.id : null, null, 4);
      return searchRec(node.left, val);
    } else {
      pushState(node.id, node.right ? node.right.id : null, null, 6);
      return searchRec(node.right, val);
    }
  }
  
  searchRec(root, val);
  pushState(null, null, null, -1);
  
  renderState(states[0]);
  playBST();
}

export function bstDelete(val) {
  loadBSTPseudocode('delete');
  states = [];
  currentStateIndex = 0;
  
  pushState(null, null, null, 0);
  
  function deleteRec(node, parentId, val) {
    if (!node) {
      pushState(null, null, null, 1);
      return null;
    }
    
    pushState(node.id, null, null, 2);
    
    if (val < node.value) {
      pushState(node.id, node.left ? node.left.id : null, null, 2);
      node.left = deleteRec(node.left, node.id, val);
    } else if (val > node.value) {
      pushState(node.id, node.right ? node.right.id : null, null, 3);
      node.right = deleteRec(node.right, node.id, val);
    } else {
      pushState(node.id, null, node.id, 4);
      
      if (!node.left) {
        pushState(node.id, null, node.id, 5);
        return node.right;
      }
      if (!node.right) {
        pushState(node.id, null, node.id, 6);
        return node.left;
      }
      
      pushState(node.id, null, node.id, 7);
      
      // Find Min
      let minNode = node.right;
      while (minNode.left) {
        pushState(minNode.id, null, null, 7);
        minNode = minNode.left;
      }
      pushState(minNode.id, null, minNode.id, 7);
      
      node.value = minNode.value;
      pushState(node.id, null, node.id, 8);
      
      pushState(node.id, node.right ? node.right.id : null, node.id, 9);
      node.right = deleteRec(node.right, node.id, minNode.value);
    }
    
    pushState(node.id, null, null, 10);
    return node;
  }
  
  root = deleteRec(root, null, val);
  pushState(null, null, null, -1);
  
  renderState(states[0]);
  playBST();
}

// ── RENDERER ────────────────────────────────────────────────────────

function renderState(state) {
  svgContainer.innerHTML = '';
  nodesContainer.innerHTML = '';
  
  highlightCodeLine(state.lineIdx);

  // Draw Edges
  state.edges.forEach(edge => {
    let edgeClass = 'graph-edge';
    if (state.activeEdgeTargetId === edge.targetId) edgeClass += ' edge-active';
    
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", `${edge.sourceX}%`);
    line.setAttribute("y1", `${edge.sourceY}%`);
    line.setAttribute("x2", `${edge.targetX}%`);
    line.setAttribute("y2", `${edge.targetY}%`);
    line.setAttribute("class", edgeClass);
    svgContainer.appendChild(line);
  });

  // Draw Nodes
  state.nodes.forEach(node => {
    let nodeClass = 'graph-node';
    if (state.foundNodeId === node.id) nodeClass += ' node-visited'; // Green
    else if (state.activeNodeId === node.id) nodeClass += ' node-evaluating'; // Yellow
    else nodeClass += ' node-unvisited';
    
    const nodeDiv = document.createElement('div');
    nodeDiv.className = nodeClass;
    nodeDiv.style.left = `${node.x}%`;
    nodeDiv.style.top = `${node.y}%`;
    nodeDiv.innerHTML = node.value;
    
    nodesContainer.appendChild(nodeDiv);
  });
}

// ── PLAYBACK CONTROLS ───────────────────────────────────────────────

export function stepBSTForward() {
  if (currentStateIndex < states.length - 1) {
    currentStateIndex++;
    renderState(states[currentStateIndex]);
    return false; // Not finished
  }
  return true; // Finished
}

export function playBST() {
  if (isPlaying) return;
  if (currentStateIndex >= states.length - 1) currentStateIndex = 0; // Restart if at end
  
  isPlaying = true;
  const btn = document.getElementById('btn-play-pause');
  if (btn) btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>`;
  
  playIntervalId = setInterval(() => {
    const isDone = stepBSTForward();
    if (isDone) pauseBST();
  }, delay);
}

export function pauseBST() {
  isPlaying = false;
  clearInterval(playIntervalId);
  const btn = document.getElementById('btn-play-pause');
  if (btn) btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`;
}

export function isBSTPlaying() { return isPlaying; }
export function setBSTDelay(newDelay) {
  delay = newDelay;
  if (isPlaying) { pauseBST(); playBST(); }
}
