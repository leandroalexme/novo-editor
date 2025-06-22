
const fs = require('fs');
const path = require('path');

// Analisar uso atual do Polotno no projeto
function analyzeCurrentUsage() {
  console.log('🔍 ANALISANDO USO ATUAL DO POLOTNO NO PROJETO\n');
  
  const srcPath = './src';
  const imports = new Set();
  const components = new Set();
  const functions = new Set();
  
  // Analisar arquivos JavaScript/JSX
  function analyzeFile(filePath) {
    if (!filePath.endsWith('.js') && !filePath.endsWith('.jsx')) return;
    
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Encontrar imports do Polotno
      const importRegex = /import\s+{([^}]+)}\s+from\s+['"]polotno[^'"]*['"];?/g;
      const matches = content.matchAll(importRegex);
      
      for (const match of matches) {
        const importItems = match[1].split(',').map(item => item.trim());
        importItems.forEach(item => imports.add(item));
      }
      
      // Encontrar componentes Polotno usados
      const componentRegex = /<([A-Z][a-zA-Z]*)/g;
      const componentMatches = content.matchAll(componentRegex);
      
      for (const match of componentMatches) {
        components.add(match[1]);
      }
      
      // Encontrar funções/métodos usados
      const functionRegex = /\.([\w]+)\(/g;
      const functionMatches = content.matchAll(functionRegex);
      
      for (const match of functionMatches) {
        if (match[1].length > 2) { // Filtrar métodos muito curtos
          functions.add(match[1]);
        }
      }
      
      console.log(`📄 Analisado: ${path.relative('.', filePath)}`);
      
    } catch (error) {
      console.log(`❌ Erro ao analisar: ${filePath}`);
    }
  }
  
  // Percorrer todos os arquivos
  function analyzeDirectory(dir) {
    if (!fs.existsSync(dir)) return;
    
    fs.readdirSync(dir).forEach(item => {
      const itemPath = path.join(dir, item);
      const stats = fs.statSync(itemPath);
      
      if (stats.isDirectory()) {
        analyzeDirectory(itemPath);
      } else {
        analyzeFile(itemPath);
      }
    });
  }
  
  analyzeDirectory(srcPath);
  
  // Gerar relatório
  console.log('\n📊 RELATÓRIO DE USO DO POLOTNO:\n');
  
  console.log('🔗 IMPORTS ENCONTRADOS:');
  Array.from(imports).sort().forEach(imp => {
    console.log(`   - ${imp}`);
  });
  
  console.log('\n🧩 COMPONENTES USADOS:');
  Array.from(components).sort().forEach(comp => {
    console.log(`   - ${comp}`);
  });
  
  console.log('\n⚙️ FUNÇÕES/MÉTODOS USADOS:');
  Array.from(functions).sort().forEach(func => {
    console.log(`   - ${func}()`);
  });
  
  // Verificar funcionalidades específicas
  console.log('\n🎯 FUNCIONALIDADES ESPECÍFICAS EM USO:\n');
  
  const specificFeatures = {
    'Upload': ['UploadSection', 'UploadPanel', 'uploadAsset'],
    'Templates': ['TemplatesSection', 'TemplatesPanel', 'templateList'],
    'Shapes': ['ShapesSection', 'Shapes', 'addElement'],
    'Text': ['TextSection', 'TextPanel', 'textEdit'],
    'Images': ['ImagesSection', 'ImagesGrid', 'selectImage'],
    'Export': ['export', 'download', 'toBlob', 'toPNG'],
    'Resize': ['resize', 'scale', 'setSize'],
    'Save Local': ['localforage', 'saveJSON', 'loadJSON'],
    'Hotkeys': ['hotkeys', 'keydown', 'shortcuts'],
    'Clipboard': ['copy', 'paste', 'clipboard'],
    'Undo/Redo': ['undo', 'redo', 'history'],
    'Zoom/Pan': ['zoom', 'pan', 'scale', 'viewport'],
    'Selection': ['select', 'selectedElements', 'highlight'],
    'Transform': ['transform', 'rotate', 'resize', 'move'],
    'Layers': ['layer', 'zIndex', 'bringToFront', 'sendToBack']
  };
  
  Object.entries(specificFeatures).forEach(([feature, keywords]) => {
    const found = keywords.some(keyword => 
      imports.has(keyword) || 
      components.has(keyword) || 
      functions.has(keyword)
    );
    
    const status = found ? '✅' : '❌';
    console.log(`${status} ${feature}`);
  });
  
  // Salvar relatório
  const report = {
    imports: Array.from(imports).sort(),
    components: Array.from(components).sort(),
    functions: Array.from(functions).sort(),
    timestamp: new Date().toISOString()
  };
  
  fs.writeFileSync('./polotno-usage-report.json', JSON.stringify(report, null, 2));
  console.log('\n💾 Relatório salvo em: polotno-usage-report.json');
}

// Executar análise
analyzeCurrentUsage();
