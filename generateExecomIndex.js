// generateExecomIndex.js
const fs = require('fs');
const path = require('path');

const execomDir = path.join(__dirname, 'src', 'assets', 'Execom');
const outputFile = path.join(execomDir, 'index.js');

const supported = /\.(png|jpe?g|svg|webp|gif)$/i;

const files = fs.readdirSync(execomDir).filter(f => supported.test(f));

const imports = [];
const exportsLines= [];

files.forEach(file => {
  const varName = path.parse(file).name.replace(/[^a-zA-Z0-9]/g, '_');
  imports.push(`import ${varName} from './${file}';`);
  exportsLines.push(`  "${varName}": ${varName}`);
});

const content = `${imports.join('\n')}

const images = {
${exportsLines.join(',\n')}
};

export default images;
`;

fs.writeFileSync(outputFile, content);
console.log('✅ src/assets/Execom/index.js generated!');
