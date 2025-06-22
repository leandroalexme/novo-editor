
const fs = require('fs');
const path = require('path');

function listPolotnoStructure() {
  const polotnoPath = './node_modules/polotno';
  
  if (!fs.existsSync(polotnoPath)) {
    console.log('Pasta polotno não encontrada em node_modules');
    return;
  }
  
  console.log('📁 ESTRUTURA DO POLOTNO SDK:\n');
  listDirectory(polotnoPath, '', 0);
}

function listDirectory(dirPath, prefix, depth) {
  if (depth > 3) return; // Limitar profundidade
  
  const items = fs.readdirSync(dirPath);
  
  items.forEach((item, index) => {
    const itemPath = path.join(dirPath, item);
    const stats = fs.statSync(itemPath);
    const isLast = index === items.length - 1;
    const symbol = isLast ? '└──' : '├──';
    
    console.log(`${prefix}${symbol} ${item}`);
    
    if (stats.isDirectory() && !item.startsWith('.')) {
      const newPrefix = prefix + (isLast ? '    ' : '│   ');
      listDirectory(itemPath, newPrefix, depth + 1);
    }
  });
}

// Executar listagem
listPolotnoStructure();
