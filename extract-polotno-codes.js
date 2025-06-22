
const fs = require('fs');
const path = require('path');

// Função para copiar arquivos de forma organizada
function extractPolotnoFiles() {
  const polotnoPath = './node_modules/polotno';
  const outputPath = './polotno-extracted';
  
  // Criar pasta de destino
  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, { recursive: true });
  }
  
  // Estruturas importantes para extrair
  const importantPaths = [
    'model',
    'canvas', 
    'toolbar',
    'side-panel',
    'config',
    'utils',
    'react-canvas',
    'react-toolbar'
  ];
  
  importantPaths.forEach(folder => {
    const sourcePath = path.join(polotnoPath, folder);
    const destPath = path.join(outputPath, folder);
    
    if (fs.existsSync(sourcePath)) {
      console.log(`Extraindo: ${folder}`);
      copyRecursive(sourcePath, destPath);
    }
  });
  
  console.log('Extração concluída!');
}

function copyRecursive(src, dest) {
  if (fs.existsSync(src)) {
    fs.mkdirSync(dest, { recursive: true });
    
    fs.readdirSync(src).forEach(file => {
      const srcPath = path.join(src, file);
      const destPath = path.join(dest, file);
      
      if (fs.statSync(srcPath).isDirectory()) {
        copyRecursive(srcPath, destPath);
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    });
  }
}

// Executar extração
extractPolotnoFiles();
