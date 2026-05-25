const fs = require('fs');

try {
  const raw = fs.readFileSync('a2z_clean.json', 'utf8');
  let data = JSON.parse(raw);
  
  let curriculum = [];
  let roadmapPhases = [];
  
  data.forEach((step, stepIndex) => {
    // Step 1 -> Phase 1
    const phaseLabel = `Step ${stepIndex + 1} — ${step.category_name}`;
    const phaseNodes = [];
    
    if (step.subcategories) {
      step.subcategories.forEach((subcat) => {
        if (subcat.problems) {
          subcat.problems.forEach((prob, probIndex) => {
            const id = `a2z-s${stepIndex+1}-c${subcat.subcategory_id}-p${probIndex+1}`;
            phaseNodes.push(id);
            
            // Generate clean details without "Striver"
            const name = prob.problem_name.replace(/striver/ig, 'Elite').trim();
            const difficulty = prob.difficulty === 'Easy' ? 'Beginner' : (prob.difficulty === 'Medium' ? 'Intermediate' : 'Advanced');
            
            let icon = '📝';
            let iconColor = 'emerald';
            
            if (name.includes('Pattern')) { icon = '⭐'; iconColor = 'amber'; }
            if (difficulty === 'Intermediate') { iconColor = 'amber'; }
            if (difficulty === 'Advanced') { iconColor = 'rose'; }
            
            curriculum.push({
              id: id,
              title: name,
              category: step.category_name.replace(/striver/ig, 'Elite'),
              difficulty: difficulty,
              icon: icon,
              iconColor: iconColor,
              summary: `Master the logic for ${name}.`,
              readTime: "5 mins",
              details: `<h2>${name}</h2>
<p>This is a crucial problem in the Elite A-Z DSA Roadmap.</p>
<div style="display:flex; gap:12px; margin-top:16px;">
  <button class="btn-ask-ai" data-problem="${name}" style="background:var(--accent-purple); border:none; padding:8px 16px; border-radius:6px; color:#fff; cursor:pointer; display:flex; align-items:center; gap:8px;">Ask AI to Explain 🤖</button>
  ${prob.leetcode ? `<a href="${prob.leetcode}" target="_blank" style="background:#2c2c2c; border:1px solid var(--border-glass); padding:8px 16px; border-radius:6px; color:#fff; text-decoration:none; display:flex; align-items:center; gap:8px;">Solve on LeetCode 🚀</a>` : `<a href="https://leetcode.com/problemset/all/?search=${encodeURIComponent(name)}" target="_blank" style="background:#2c2c2c; border:1px solid var(--border-glass); padding:8px 16px; border-radius:6px; color:#fff; text-decoration:none; display:flex; align-items:center; gap:8px;">Search on LeetCode 🚀</a>`}
</div>`
            });
          });
        }
      });
    }
    
    if (phaseNodes.length > 0) {
      roadmapPhases.push({
        label: phaseLabel.replace(/striver/ig, 'Elite'),
        nodes: phaseNodes
      });
    }
  });

  const fileContent = `// ═══════════════════════════════════════════════════════════════════
//  dsa.flow — Elite A-Z DSA Roadmap (18 Steps)
// ═══════════════════════════════════════════════════════════════════

export const curriculum = ${JSON.stringify(curriculum, null, 2)};

export const roadmapPhases = ${JSON.stringify(roadmapPhases, null, 2)};
`;

  fs.writeFileSync('modules/learning/content_a2z.js', fileContent);
  console.log('Successfully generated modules/learning/content_a2z.js with ' + curriculum.length + ' problems.');
} catch (e) {
  console.error("Error generating curriculum:", e.message);
}
