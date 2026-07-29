const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('scratch_ref').filter(f => f.endsWith('.js'));

for (const f of files) {
  const content = fs.readFileSync(path.join('scratch_ref', f), 'utf-8');
  console.log(`\n=================== ${f} ===================`);
  
  // Extract text snippets from jsx
  const textMatches = content.match(/children:["']([^"']+)["']/g) || [];
  console.log('JSX children texts:', textMatches.slice(0, 10));

  // Extract classNames
  const classMatches = content.match(/className:["']([^"']+)["']/g) || [];
  console.log('Sample classNames:', classMatches.slice(0, 5));
}
