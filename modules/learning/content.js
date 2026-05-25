// Curriculum and Quiz Questions for dsa.flow (DSA Specialist Upgrade)

export const curriculum = [
  {
    id: "big-o",
    title: "1. Big O Notation",
    category: "Fundamentals",
    summary: "Understand how to analyze and compare algorithm efficiency using time and space complexities.",
    readTime: "5 mins",
    complexity: {
      worstTime: "O(1) to O(2^N)",
      bestTime: "N/A",
      space: "N/A"
    },
    details: `
      <h2>Introduction to Big O Notation</h2>
      <p>Big O notation is a mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity. In computer science, it is used to classify algorithms according to how their run time or space requirements grow as the input size (usually denoted as <strong>N</strong>) grows.</p>
      
      <h3>Real-World Analogy</h3>
      <p>Imagine you have a file on a USB drive and you need to send it to a friend living across town:</p>
      <ul>
        <li><strong>O(1) - Constant Time:</strong> Flying or driving to your friend's house. No matter how large the file on the USB is, the travel time remains the same.</li>
        <li><strong>O(N) - Linear Time:</strong> Transferring the file over the internet. The time scales directly with the file size.</li>
      </ul>

      <h3>Common Complexities Chart</h3>
      <table class="complexity-table">
        <thead>
          <tr>
            <th>Complexity</th>
            <th>Name</th>
            <th>Efficiency Status</th>
            <th>Example Operation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><span class="complexity-badge complexity-green">O(1)</span></td>
            <td>Constant Time</td>
            <td>Excellent</td>
            <td>Accessing an array element by index.</td>
          </tr>
          <tr>
            <td><span class="complexity-badge complexity-green">O(log N)</span></td>
            <td>Logarithmic Time</td>
            <td>Excellent</td>
            <td>Searching in a sorted array using Binary Search.</td>
          </tr>
          <tr>
            <td><span class="complexity-badge complexity-green">O(N)</span></td>
            <td>Linear Time</td>
            <td>Good</td>
            <td>Finding the minimum element in an unsorted array.</td>
          </tr>
          <tr>
            <td><span class="complexity-badge complexity-yellow">O(N log N)</span></td>
            <td>Linearithmic Time</td>
            <td>Fair</td>
            <td>Sorting items using Merge Sort or Quick Sort.</td>
          </tr>
          <tr>
            <td><span class="complexity-badge complexity-red">O(N²)</span></td>
            <td>Quadratic Time</td>
            <td>Poor</td>
            <td>Comparing all elements in nested loops (Bubble Sort).</td>
          </tr>
          <tr>
            <td><span class="complexity-badge complexity-red">O(2^N)</span></td>
            <td>Exponential Time</td>
            <td>Very Bad</td>
            <td>Solving the Towers of Hanoi or finding all subsets.</td>
          </tr>
        </tbody>
      </table>
    `,
    code: {
      javascript: `// O(1) - Constant Time
function getFirstElement(arr) {
    return arr[0];
}

// O(N) - Linear Time
function findValue(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}`,
      cpp: `// O(1) - Constant Time
int getFirstElement(const vector<int>& arr) {
    return arr[0];
}

// O(N) - Linear Time
int findValue(const vector<int>& arr, int target) {
    for (int i = 0; i < arr.size(); i++) {
        if (arr[i] == target) return i;
    }
    return -1;
}`,
      java: `// O(1) - Constant Time
public int getFirstElement(int[] arr) {
    return arr[0];
}

// O(N) - Linear Time
public int findValue(int[] arr, int target) {
    for (int i = 0; i < arr.length; i++) {
        if (arr[i] == target) return i;
    }
    return -1;
}`,
      python: `# O(1) - Constant Time
def get_first_element(arr):
    return arr[0]

# O(N) - Linear Time
def find_value(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1`
    }
  },
  {
    id: "arrays",
    title: "2. Arrays & Strings",
    category: "Data Structures",
    summary: "The most basic and fundamental linear data structures that store elements in contiguous memory locations.",
    readTime: "6 mins",
    complexity: {
      worstTime: "Access: O(1) | Search: O(N)",
      bestTime: "Insert: O(N) | Delete: O(N)",
      space: "O(N)"
    },
    details: `
      <h2>Arrays and Strings</h2>
      <p>An <strong>Array</strong> is a collection of elements of the same type stored in contiguous memory locations. Because memory is contiguous, the computer can calculate the address of any element instantly using its index, resulting in constant-time access.</p>
      
      <h3>Placement Tip: Two Pointers Pattern</h3>
      <p>Often in interview questions (like reversing an array, finding a sum in a sorted array), you initialize two index pointers—one at the beginning and one at the end—and move them toward the center. This avoids nested loops and drops time complexity from O(N²) to O(N).</p>
    `,
    code: {
      javascript: `// Insert element at a specific index in an array
function insertAt(arr, size, index, element) {
    // Shift elements to the right to make room
    for (let i = size; i > index; i--) {
        arr[i] = arr[i - 1];
    }
    arr[index] = element;
    return arr;
}`,
      cpp: `// Insert element at a specific index in an array
void insertAt(int arr[], int size, int index, int element) {
    // Shift elements to the right
    for (int i = size; i > index; i--) {
        arr[i] = arr[i - 1];
    }
    arr[index] = element;
}`,
      java: `// Insert element at a specific index in an array
public static void insertAt(int[] arr, int size, int index, int element) {
    // Shift elements to the right
    for (int i = size; i > index; i--) {
        arr[i] = arr[i - 1];
    }
    arr[index] = element;
}`,
      python: `# Insert element at a specific index in an array
def insert_at(arr, size, index, element):
    # Python list insert is built-in, but custom shifting algorithm is:
    # Append placeholder
    arr.append(0)
    for i in range(size, index, -1):
        arr[i] = arr[i - 1]
    arr[index] = element
    return arr`
    }
  },
  {
    id: "stack-queue",
    title: "3. Stacks & Queues",
    category: "Data Structures",
    summary: "Linear structures restricting access to endpoints (LIFO for Stack, FIFO for Queue).",
    readTime: "7 mins",
    complexity: {
      worstTime: "Push/Pop: O(1) | Enqueue/Dequeue: O(1)",
      bestTime: "Search: O(N)",
      space: "O(N)"
    },
    details: `
      <h2>Stacks & Queues</h2>
      <p>These are container adapters offering constrained access rules.</p>
      <ul>
        <li><strong>Stack (Last In, First Out)</strong>: Used for recursion call stacks, undo/redo mechanisms, and parentheses matching.</li>
        <li><strong>Queue (First In, First Out)</strong>: Used for CPU scheduling, message buffers, and Breadth-First Search (BFS) graph traversals.</li>
      </ul>
    `,
    code: {
      javascript: `// Stack implementation using an Array
class Stack {
    constructor() {
        this.items = [];
    }
    push(val) { this.items.push(val); }
    pop() { return this.items.pop(); }
    peek() { return this.items[this.items.length - 1]; }
}`,
      cpp: `#include <stack>
// C++ standard library stack usage
std::stack<int> s;
s.push(10);        // Push element
s.pop();           // Remove top element
int val = s.top(); // Get top element`,
      java: `import java.util.Stack;
// Java Stack usage
Stack<Integer> stack = new Stack<>();
stack.push(10);
int popped = stack.pop();
int top = stack.peek();`,
      python: `# Python stack using list
stack = []
stack.append(10)  # push
popped = stack.pop() # pop
top = stack[-1]    # peek`
    }
  },
  {
    id: "linked-list",
    title: "4. Linked Lists",
    category: "Data Structures",
    summary: "Nodes scattered in memory, connected sequentially by pointers, offering O(1) head insertion.",
    readTime: "8 mins",
    complexity: {
      worstTime: "Insert (Head): O(1) | Search: O(N)",
      bestTime: "Delete (Head): O(1)",
      space: "O(N)"
    },
    details: `
      <h2>Singly Linked Lists</h2>
      <p>A Linked List consists of separate Node structures. Each node contains a value and a pointer (or reference) to the next node. They occupy non-contiguous memory, making resizing trivial compared to arrays.</p>
      
      <h3>Placement Tip: Fast & Slow Pointers</h3>
      <p>To detect a loop in a linked list (Floyd's Cycle-Finding Algorithm) or find the middle element, use two pointers moving at different speeds (one step vs two steps). If they meet, a cycle exists.</p>
    `,
    code: {
      javascript: `class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() { this.head = null; }
    insertAtHead(val) {
        let newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
    }
}`,
      cpp: `struct Node {
    int value;
    Node* next;
    Node(int val) : value(val), next(nullptr) {}
};

class LinkedList {
public:
    Node* head = nullptr;
    void insertAtHead(int val) {
        Node* newNode = new Node(val);
        newNode->next = head;
        head = newNode;
    }
};`,
      java: `class Node {
    int value;
    Node next;
    Node(int val) {
        this.value = val;
        this.next = null;
    }
}

class LinkedList {
    Node head = null;
    void insertAtHead(int val) {
        Node newNode = new Node(val);
        newNode.next = head;
        head = newNode;
    }
}`,
      python: `class Node:
    def __init__(self, val):
        self.value = val
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
        
    def insert_at_head(self, val):
        new_node = Node(val)
        new_node.next = self.head
        self.head = new_node`
    }
  },
  {
    id: "trees-bst",
    title: "5. Trees & BSTs",
    category: "Data Structures",
    summary: "Hierarchical data structures. Learn Binary Search Trees for O(log N) lookup speeds.",
    readTime: "9 mins",
    complexity: {
      worstTime: "Search: O(N) (unbalanced) | O(log N) (balanced)",
      bestTime: "Insert/Delete: O(log N)",
      space: "O(N)"
    },
    details: `
      <h2>Binary Search Tree (BST)</h2>
      <p>A BST is a node-based binary tree data structure which has the following properties:</p>
      <ul>
        <li>The left subtree of a node contains only nodes with keys lesser than the node's key.</li>
        <li>The right subtree of a node contains only nodes with keys greater than the node's key.</li>
        <li>The left and right subtree must each also be a binary search tree.</li>
      </ul>
    `,
    code: {
      javascript: `class TreeNode {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

function insert(root, val) {
    if (!root) return new TreeNode(val);
    if (val < root.value) {
        root.left = insert(root.left, val);
    } else {
        root.right = insert(root.right, val);
    }
    return root;
}`,
      cpp: `struct TreeNode {
    int value;
    TreeNode* left = nullptr;
    TreeNode* right = nullptr;
    TreeNode(int val) : value(val) {}
};

TreeNode* insert(TreeNode* root, int val) {
    if (!root) return new TreeNode(val);
    if (val < root->value) {
        root->left = insert(root->left, val);
    } else {
        root->right = insert(root->right, val);
    }
    return root;
}`,
      java: `class TreeNode {
    int value;
    TreeNode left, right;
    TreeNode(int val) {
        value = val;
        left = right = null;
    }
}

class BST {
    public TreeNode insert(TreeNode root, int val) {
        if (root == null) return new TreeNode(val);
        if (val < root.value) {
            root.left = insert(root.left, val);
        } else {
            root.right = insert(root.right, val);
        }
        return root;
    }
}`,
      python: `class TreeNode:
    def __init__(self, val):
        self.value = val
        self.left = None
        self.right = None

def insert(root, val):
    if not root:
        return TreeNode(val)
    if val < root.value:
        root.left = insert(root.left, val)
    else:
        root.right = insert(root.right, val)
    return root`
    }
  },
  {
    id: "sorting-algos",
    title: "6. Sorting Algorithms",
    category: "Algorithms",
    summary: "Reorder lists efficiently. Deep dive into Quick Sort and Merge Sort.",
    readTime: "10 mins",
    complexity: {
      worstTime: "Bubble/Selection: O(N²) | Merge: O(N log N)",
      bestTime: "Quick Sort: O(N log N) (avg) | Space: O(N) (Merge)",
      space: "Merge: O(N) | Quick: O(log N)"
    },
    details: `
      <h2>Dividing and Conquer: Merge & Quick Sorts</h2>
      <p>Advanced sorting algorithms achieve <strong>O(N log N)</strong> runtime using recurrence. They partition the dataset, sort them independently, and recursively merge or partition them. Knowing these is a baseline requirement for coding interviews.</p>
    `,
    code: {
      javascript: `// Quick Sort Partition
function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i+1], arr[high]] = [arr[high], arr[i+1]];
    return i + 1;
}`,
      cpp: `// Quick Sort Partition
int partition(vector<int>& arr, int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }
    swap(arr[i + 1], arr[high]);
    return i + 1;
}`,
      java: `// Quick Sort Partition
public static int partition(int[] arr, int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    int temp = arr[i+1];
    arr[i+1] = arr[high];
    arr[high] = temp;
    return i + 1;
}`,
      python: `# Quick Sort Partition
def partition(arr, low, high):
    pivot = arr[high]
    i = low - 1
    for j in range(low, high):
        if arr[j] < pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    arr[i+1], arr[high] = arr[high], arr[i+1]
    return i + 1`
    }
  },
  {
    id: "recursion-backtracking",
    title: "7. Recursion & Backtracking",
    category: "Algorithms",
    summary: "Build state spaces dynamically and prune paths that violate constraints.",
    readTime: "10 mins",
    complexity: {
      worstTime: "Permutations: O(N!) | N-Queens: O(N!)",
      bestTime: "N/A",
      space: "O(N) (call stack)"
    },
    details: `
      <h2>Recursion & Backtracking Specialist Concepts</h2>
      <p><strong>Backtracking</strong> is a systematic search methodology that builds solutions incrementally and abandons paths (backtracks) once it discovers they cannot lead to a valid configuration.</p>
      
      <h3>Standard Interview Pattern</h3>
      <p>Useful for solving puzzles like Sudoku, N-Queens, generating subsets, or generating string permutations. An explicit recursive step modifies a state container, branches deeper, and then resets (undoes) the state container modification before returning.</p>
    `,
    code: {
      javascript: `// Generate all permutations of an array
function permute(arr) {
    let result = [];
    function backtrack(start) {
        if (start === arr.length) {
            result.push([...arr]);
            return;
        }
        for (let i = start; i < arr.length; i++) {
            [arr[start], arr[i]] = [arr[i], arr[start]]; // Swap
            backtrack(start + 1);
            [arr[start], arr[i]] = [arr[i], arr[start]]; // Backtrack
        }
    }
    backtrack(0);
    return result;
}`,
      cpp: `#include <vector>
#include <algorithm>
using namespace std;

// Generate all permutations
void backtrack(int start, vector<int>& arr, vector<vector<int>>& result) {
    if (start == arr.size()) {
        result.push_back(arr);
        return;
    }
    for (int i = start; i < arr.size(); i++) {
        swap(arr[start], arr[i]);
        backtrack(start + 1, arr, result);
        swap(arr[start], arr[i]); // Backtrack
    }
}`,
      java: `import java.util.*;

class Backtracking {
    public List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        backtrack(0, nums, result);
        return result;
    }
    private void backtrack(int start, int[] nums, List<List<Integer>> result) {
        if (start == nums.length) {
            List<Integer> list = new ArrayList<>();
            for (int n : nums) list.add(n);
            result.add(list);
            return;
        }
        for (int i = start; i < nums.length; i++) {
            swap(nums, start, i);
            backtrack(start + 1, nums, result);
            swap(nums, start, i); // Backtrack
        }
    }
    private void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
}`,
      python: `# Generate all permutations of a list
def permute(nums):
    result = []
    def backtrack(start):
        if start == len(nums):
            result.append(nums[:])
            return
        for i in range(start, len(nums)):
            nums[start], nums[i] = nums[i], nums[start] # Swap
            backtrack(start + 1)
            nums[start], nums[i] = nums[i], nums[start] # Backtrack
    backtrack(0)
    return result`
    }
  },
  {
    id: "graphs",
    title: "8. Graph Algorithms",
    category: "Algorithms",
    summary: "Graph representations and traversals (BFS, DFS, and Dijkstra's Shortest Path).",
    readTime: "12 mins",
    complexity: {
      worstTime: "BFS/DFS: O(V + E) | Dijkstra: O(E log V)",
      bestTime: "N/A",
      space: "O(V) (visited structures)"
    },
    details: `
      <h2>Graph Traversals (BFS / DFS)</h2>
      <p>A <strong>Graph</strong> is a network of vertices (nodes) linked by edges. Graphs are represented using adjacency matrices or adjacency lists.</p>
      <ul>
        <li><strong>Depth-First Search (DFS)</strong>: Traverses as deep as possible down a branch before backtracking. Uses a <strong>Stack</strong> (or recursion).</li>
        <li><strong>Breadth-First Search (BFS)</strong>: Explores all neighbor vertices level by level. Uses a <strong>Queue</strong>.</li>
      </ul>
      
      <h3>Dijkstra's Algorithm</h3>
      <p>Dijkstra's algorithm finds the shortest path from a source node to all other nodes in a weighted graph with positive weights. It relies on a min-priority queue (or heap) to continuously extract the node with the minimum distance.</p>
    `,
    code: {
      javascript: `// BFS implementation on an Adjacency List
function bfs(adjList, startNode) {
    let visited = new Set();
    let queue = [startNode];
    visited.add(startNode);
    
    while (queue.length > 0) {
        let node = queue.shift(); // Dequeue
        console.log(node);
        
        for (let neighbor of adjList[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor); // Enqueue
            }
        }
    }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <queue>
#include <unordered_set>
using namespace std;

// BFS implementation
void bfs(const vector<vector<int>>& adjList, int start) {
    vector<bool> visited(adjList.size(), false);
    queue<int> q;
    
    visited[start] = true;
    q.push(start);
    
    while (!q.empty()) {
        int node = q.front();
        q.pop();
        cout << node << " ";
        
        for (int neighbor : adjList[node]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                q.push(neighbor);
            }
        }
    }
}`,
      java: `import java.util.*;

class GraphBFS {
    public void bfs(List<List<Integer>> adjList, int start) {
        boolean[] visited = new boolean[adjList.size()];
        Queue<Integer> queue = new LinkedList<>();
        
        visited[start] = true;
        queue.add(start);
        
        while (!queue.isEmpty()) {
            int node = queue.poll();
            System.out.print(node + " ");
            
            for (int neighbor : adjList.get(node)) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.add(neighbor);
                }
            }
        }
    }
}`,
      python: `from collections import deque

# BFS implementation
def bfs(adj_list, start):
    visited = set([start])
    queue = deque([start])
    
    while queue:
        node = queue.popleft()
        print(node, end=" ")
        
        for neighbor in adj_list[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)`
    }
  },
  {
    id: "dp",
    title: "9. Dynamic Programming",
    category: "Algorithms",
    summary: "Optimize recursive computations using memoization (top-down) and tabulation (bottom-up).",
    readTime: "12 mins",
    complexity: {
      worstTime: "Knapsack: O(N * W) | LCS: O(N * M)",
      bestTime: "Fibonacci: O(N) | Space: O(N) or O(1)",
      space: "Knapsack: O(N * W)"
    },
    details: `
      <h2>Dynamic Programming (DP) Fundamentals</h2>
      <p>Dynamic Programming is an optimization over plain recursion. The idea is to simply store the results of subproblems, so that we do not have to re-compute them when needed later. This simple optimization reduces time complexities from exponential (e.g. O(2^N)) to polynomial (e.g. O(N)).</p>
      
      <h3>Overlapping Subproblems & Optimal Substructure</h3>
      <p>A problem can be solved with DP if it exhibits:</p>
      <ol>
        <li><strong>Overlapping Subproblems:</strong> Solutions to same subproblems are needed multiple times (e.g., computing Fib(3) multiple times in recursion tree).</li>
        <li><strong>Optimal Substructure:</strong> Optimal solution of the global problem can be constructed from optimal solutions of its subproblems.</li>
      </ol>
    `,
    code: {
      javascript: `// 0/1 Knapsack Tabulation Approach
function knapsack(W, weights, values, n) {
    let dp = Array(n + 1).fill().map(() => Array(W + 1).fill(0));
    
    for (let i = 1; i <= n; i++) {
        for (let w = 1; w <= W; w++) {
            if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(
                    values[i - 1] + dp[i - 1][w - weights[i - 1]],
                    dp[i - 1][w]
                );
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }
    return dp[n][W];
}`,
      cpp: `#include <vector>
#include <algorithm>
using namespace std;

// 0/1 Knapsack Tabulation
int knapsack(int W, const vector<int>& weights, const vector<int>& values, int n) {
    vector<vector<int>> dp(n + 1, vector<int>(W + 1, 0));
    
    for (int i = 1; i <= n; i++) {
        for (int w = 1; w <= W; w++) {
            if (weights[i - 1] <= w) {
                dp[i][w] = max(values[i - 1] + dp[i - 1][w - weights[i - 1]], dp[i - 1][w]);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }
    return dp[n][W];
}`,
      java: `class DP {
    // 0/1 Knapsack Tabulation
    public int knapsack(int W, int[] weights, int[] values, int n) {
        int[][] dp = new int[n + 1][W + 1];
        
        for (int i = 1; i <= n; i++) {
            for (int w = 1; w <= W; w++) {
                if (weights[i - 1] <= w) {
                    dp[i][w] = Math.max(values[i - 1] + dp[i - 1][w - weights[i - 1]], dp[i - 1][w]);
                } else {
                    dp[i][w] = dp[i - 1][w];
                }
            }
        }
        return dp[n][W];
    }
}`,
      python: `# 0/1 Knapsack Tabulation
def knapsack(W, weights, values, n):
    dp = [[0 for _ in range(W + 1)] for _ in range(n + 1)]
    
    for i in range(1, n + 1):
        for w in range(1, W + 1):
            if weights[i - 1] <= w:
                dp[i][w] = max(
                    values[i - 1] + dp[i - 1][w - weights[i - 1]],
                    dp[i - 1][w]
                )
            else:
                dp[i][w] = dp[i - 1][w]
    return dp[n][W]`
    }
  }
];

export const quizQuestions = [
  {
    question: "Which data structure follows the Last-In, First-Out (LIFO) model?",
    options: [
      "Queue",
      "Stack",
      "Singly Linked List",
      "Binary Search Tree"
    ],
    answer: 1,
    explanation: "A **Stack** operates on LIFO (Last-In, First-Out). Elements are added ('pushed') and removed ('popped') from the same end, matching how plates are stacked."
  },
  {
    question: "What is the worst-case search complexity of an unbalanced Binary Search Tree (BST)?",
    options: [
      "O(1)",
      "O(log N)",
      "O(N)",
      "O(N log N)"
    ],
    answer: 2,
    explanation: "If a BST is unbalanced (degraded to a single chain), searching requires traversal of every node in the worst case, giving a complexity of **O(N)**."
  },
  {
    question: "Which of the following sorting algorithms has a guaranteed worst-case time complexity of O(N log N)?",
    options: [
      "Bubble Sort",
      "Quick Sort",
      "Selection Sort",
      "Merge Sort"
    ],
    answer: 3,
    explanation: "**Merge Sort** guarantees **O(N log N)** time complexity under all conditions (best, average, worst) because it always divides the array in half and performs linear merges."
  },
  {
    question: "If you need to access elements at arbitrary indices instantly, which data structure is most suitable?",
    options: [
      "Linked List",
      "Stack",
      "Array",
      "Queue"
    ],
    answer: 2,
    explanation: "An **Array** stores elements in contiguous memory slots, allowing **O(1) constant time index access**. Linked Lists require starting from the head and traversing sequentially."
  },
  {
    question: "What does the Big O notation simplify for an algorithm taking 5N² + 10N + 3 operations?",
    options: [
      "O(N²)",
      "O(5N²)",
      "O(N)",
      "O(N³)"
    ],
    answer: 0,
    explanation: "Under Big O notation, we **drop constant factors** (5) and **lower-order terms** (10N + 3) since they become negligible as N grows large. Thus, the complexity is **O(N²)**."
  },
  {
    question: "Which shortest path algorithm is most suitable for a weighted graph with positive edge weights?",
    options: [
      "Kruskal's Algorithm",
      "Dijkstra's Algorithm",
      "Bellman-Ford Algorithm",
      "Floyd-Warshall Algorithm"
    ],
    answer: 1,
    explanation: "**Dijkstra's Algorithm** finds single-source shortest paths in O(E log V) on graphs with positive weights. Kruskal's is for Minimum Spanning Trees, Bellman-Ford handles negative weights, and Floyd-Warshall is all-pairs."
  },
  {
    question: "What is the key difference between Dynamic Programming (DP) and Divide-and-Conquer?",
    options: [
      "DP uses recursive calls, while Divide-and-Conquer never does.",
      "DP works on overlapping subproblems by caching results, while Divide-and-Conquer works on independent subproblems.",
      "Divide-and-Conquer has higher space complexity in all cases.",
      "DP only works on sorted input data structures."
    ],
    answer: 1,
    explanation: "**Dynamic Programming** optimizes recursive calculations by storing solutions to **overlapping subproblems** (memoization/tabulation). Divide-and-Conquer splits problems into independent subproblems (like Merge Sort) and doesn't reuse results."
  }
];
