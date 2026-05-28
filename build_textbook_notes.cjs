const fs = require('fs');

const textbookNotes = {
  "Linked List": `
    <div style="margin-top: 24px; padding: 20px; border: 1px solid var(--border-glass); border-radius: 12px; background: rgba(124, 77, 255, 0.05);">
      <h3 style="color: var(--accent-purple); margin-top: 0;">📚 Textbook Reference (Barnett & Del Tongo)</h3>
      <p>Linked lists are a series of nodes, each having at least a single pointer to the next node. They dynamically resize, incurring no copy penalty like an array.</p>
      <ul>
        <li><strong>Insertion:</strong> O(1) (at head/tail)</li>
        <li><strong>Deletion:</strong> O(n)</li>
        <li><strong>Searching:</strong> O(n)</li>
      </ul>
      <h4>Pseudocode: Singly Linked List Traversal</h4>
      <pre style="background: #111; padding: 12px; border-radius: 6px; font-family: monospace; color: #ffca28; margin: 8px 0; border: 1px solid rgba(255,255,255,0.03);"><code>1) algorithm Traverse(head)
2)   Pre: head is the head node in the list
3)   Post: the items in the list have been traversed
4)   n <- head
5)   while n != null
6)     yield n.Value
7)     n <- n.Next
8)   end while
9) end Traverse</code></pre>
    </div>
  `,
  "Binary Search Tree": `
    <div style="margin-top: 24px; padding: 20px; border: 1px solid var(--border-glass); border-radius: 12px; background: rgba(124, 77, 255, 0.05);">
      <h3 style="color: var(--accent-purple); margin-top: 0;">📚 Textbook Reference (Barnett & Del Tongo)</h3>
      <p>A Binary Search Tree (BST) starts with a root node value x, where the left subtree contains nodes with values < x and the right subtree contains nodes with values >= x.</p>
      <ul>
        <li><strong>Insertion/Searching/Deletion:</strong> O(log n) on average, O(n) worst case.</li>
      </ul>
      <h4>Pseudocode: BST Search</h4>
      <pre style="background: #111; padding: 12px; border-radius: 6px; font-family: monospace; color: #ffca28; margin: 8px 0; border: 1px solid rgba(255,255,255,0.03);"><code>1) algorithm Contains(root, value)
2)   Pre: root is the root node of the tree, value is what we would like to locate
3)   Post: value is either located or not
4)   if root = null return false
5)   if root.Value = value return true
6)   else if value < root.Value
7)     return Contains(root.Left, value)
8)   else
9)     return Contains(root.Right, value)
10) end Contains</code></pre>
    </div>
  `,
  "Heap": `
    <div style="margin-top: 24px; padding: 20px; border: 1px solid var(--border-glass); border-radius: 12px; background: rgba(124, 77, 255, 0.05);">
      <h3 style="color: var(--accent-purple); margin-top: 0;">📚 Textbook Reference (Barnett & Del Tongo)</h3>
      <p>A heap is a simple tree data structure that employs a min-heap or max-heap strategy. In a min-heap, each parent node has a value <= its children. Heaps are usually implemented as arrays.</p>
      <ul>
        <li><strong>Insertion/Deletion:</strong> O(log n)</li>
        <li><strong>Array Parent Index:</strong> (index - 1) / 2</li>
        <li><strong>Array Left Child Index:</strong> 2 * index + 1</li>
      </ul>
    </div>
  `,
  "AVL": `
    <div style="margin-top: 24px; padding: 20px; border: 1px solid var(--border-glass); border-radius: 12px; background: rgba(124, 77, 255, 0.05);">
      <h3 style="color: var(--accent-purple); margin-top: 0;">📚 Textbook Reference (Barnett & Del Tongo)</h3>
      <p>An AVL tree is a self-balancing binary search tree. The difference between the height of the left and right subtrees cannot be more than one. By applying this balance condition, we ensure that the worst-case running time of common operations is O(log n).</p>
      <h4>Pseudocode: Left Rotation</h4>
      <pre style="background: #111; padding: 12px; border-radius: 6px; font-family: monospace; color: #ffca28; margin: 8px 0; border: 1px solid rgba(255,255,255,0.03);"><code>1) algorithm LeftRotation(node)
2)   RightNode <- node.Right
3)   node.Right <- RightNode.Left
4)   RightNode.Left <- node
5) end LeftRotation</code></pre>
    </div>
  `,
  "Sorting": `
    <div style="margin-top: 24px; padding: 20px; border: 1px solid var(--border-glass); border-radius: 12px; background: rgba(124, 77, 255, 0.05);">
      <h3 style="color: var(--accent-purple); margin-top: 0;">📚 Textbook Reference (Barnett & Del Tongo)</h3>
      <p>Sorting algorithms organize data structures in ascending or descending order. The textbook covers Bubble, Merge, Quick, Insertion, Shell, and Radix Sort.</p>
      <ul>
        <li><strong>Quick Sort:</strong> O(n log n) average complexity. Uses a pivot to partition the list into lesser and greater sublists recursively.</li>
        <li><strong>Merge Sort:</strong> O(n log n) space-time complexity. Based on splitting a list, sorting halves, and merging back.</li>
      </ul>
    </div>
  `,
  "Strings": `
    <div style="margin-top: 24px; padding: 20px; border: 1px solid var(--border-glass); border-radius: 12px; background: rgba(124, 77, 255, 0.05);">
      <h3 style="color: var(--accent-purple); margin-top: 0;">📚 Textbook Reference (Barnett & Del Tongo)</h3>
      <p>Strings are common data types (essentially character arrays). The textbook highlights algorithms like reversing words, detecting palindromes, and counting words.</p>
      <h4>Pseudocode: Detect Palindrome</h4>
      <pre style="background: #111; padding: 12px; border-radius: 6px; font-family: monospace; color: #ffca28; margin: 8px 0; border: 1px solid rgba(255,255,255,0.03);"><code>1) algorithm IsPalindrome(value)
2)   word <- value.Strip().ToUpperCase()
3)   left <- 0
4)   right <- word.Length - 1
5)   while word[left] == word[right] and left < right
6)     left <- left + 1
7)     right <- right - 1
8)   end while
9)   return word[left] == word[right]
10) end IsPalindrome</code></pre>
    </div>
  `
};

fs.writeFileSync('textbook_notes.json', JSON.stringify(textbookNotes, null, 2));
console.log('textbook_notes.json created successfully.');
