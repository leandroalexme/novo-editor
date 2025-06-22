
const fs = require('fs');
const path = require('path');

// Função para extrair arquivos específicos do Polotno
function extractCompletePolotno() {
  const polotnoPath = './node_modules/polotno';
  const outputPath = './polotno-complete-extraction';
  
  if (!fs.existsSync(polotnoPath)) {
    console.log('❌ Pasta polotno não encontrada em node_modules');
    return;
  }
  
  console.log('🚀 INICIANDO EXTRAÇÃO COMPLETA DO POLOTNO SDK\n');
  
  // Criar pasta de destino
  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, { recursive: true });
  }
  
  // Estruturas principais para extrair
  const coreStructures = {
    // Já extraídos anteriormente
    'model': 'Modelos de dados (Store, Elements, Pages)',
    'canvas': 'Canvas e Workspace principal',
    'toolbar': 'Ferramentas e controles',
    'side-panel': 'Painéis laterais',
    'utils': 'Utilitários essenciais',
    
    // NOVOS - Funcionalidades importantes que faltaram
    'react-canvas': 'Componentes React para Canvas',
    'react-toolbar': 'Componentes React da Toolbar',
    'pages-timeline': 'Timeline de páginas',
    'config': 'Configurações globais',
    'polotno-toolbar': 'Toolbar específica do Polotno',
    'workspace': 'Workspace components',
    'elements': 'Elementos específicos',
    'filters': 'Sistema de filtros',
    'animations': 'Sistema de animações',
    'export': 'Sistema de exportação',
    'import': 'Sistema de importação',
    'fonts': 'Sistema de fontes',
    'icons': 'Sistema de ícones',
    'templates': 'Sistema de templates',
    'localization': 'Sistema de tradução'
  };
  
  // Extrair estruturas principais
  Object.entries(coreStructures).forEach(([folder, description]) => {
    const sourcePath = path.join(polotnoPath, folder);
    const destPath = path.join(outputPath, folder);
    
    if (fs.existsSync(sourcePath)) {
      console.log(`📁 Extraindo: ${folder} - ${description}`);
      copyRecursive(sourcePath, destPath);
    } else {
      console.log(`⚠️  Não encontrado: ${folder}`);
    }
  });
  
  // Arquivos raiz importantes
  const rootFiles = [
    'index.js',
    'index.d.ts', 
    'package.json',
    'README.md',
    'CHANGELOG.md'
  ];
  
  console.log('\n📄 Extraindo arquivos raiz importantes:');
  rootFiles.forEach(file => {
    const sourcePath = path.join(polotnoPath, file);
    const destPath = path.join(outputPath, file);
    
    if (fs.existsSync(sourcePath)) {
      console.log(`   ✅ ${file}`);
      fs.copyFileSync(sourcePath, destPath);
    } else {
      console.log(`   ❌ ${file} - não encontrado`);
    }
  });
  
  // Funcionalidades específicas que estão sendo usadas no editor
  const specificFeatures = {
    'react-konva': 'Integração com Konva.js',
    'mobx-state-tree': 'State management',
    'blueprint': 'Componentes UI',
    'file-handling': 'Manipulação de arquivos',
    'image-processing': 'Processamento de imagens',
    'text-editing': 'Edição de texto',
    'shape-tools': 'Ferramentas de formas',
    'selection-tools': 'Ferramentas de seleção',
    'transform-tools': 'Ferramentas de transformação',
    'layer-management': 'Gerenciamento de camadas',
    'hotkeys': 'Teclas de atalho',
    'clipboard': 'Sistema de clipboard',
    'undo-redo': 'Sistema de desfazer/refazer',
    'zoom-pan': 'Zoom e pan',
    'snap-guides': 'Guias de alinhamento'
  };
  
  console.log('\n🔍 Buscando funcionalidades específicas:');
  Object.entries(specificFeatures).forEach(([feature, description]) => {
    searchForFeature(polotnoPath, outputPath, feature, description);
  });
  
  // Criar mapa detalhado do que foi extraído
  createExtractionMap(outputPath);
  
  console.log('\n✅ EXTRAÇÃO COMPLETA FINALIZADA!');
  console.log(`📂 Arquivos extraídos em: ${outputPath}`);
  console.log(`📋 Veja o mapa detalhado em: ${outputPath}/EXTRACTION_MAP.md`);
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

function searchForFeature(polotnoPath, outputPath, featureName, description) {
  const featureFiles = [];
  
  // Buscar arquivos relacionados à funcionalidade
  function searchInDirectory(dir, searchTerm) {
    if (!fs.existsSync(dir)) return;
    
    try {
      fs.readdirSync(dir).forEach(item => {
        const itemPath = path.join(dir, item);
        const stats = fs.statSync(itemPath);
        
        if (stats.isDirectory()) {
          searchInDirectory(itemPath, searchTerm);
        } else if (item.toLowerCase().includes(searchTerm.toLowerCase()) || 
                   item.includes(searchTerm.replace('-', '_'))) {
          featureFiles.push(itemPath);
        }
      });
    } catch (error) {
      // Ignorar erros de permissão
    }
  }
  
  searchInDirectory(polotnoPath, featureName);
  
  if (featureFiles.length > 0) {
    console.log(`   ✅ ${featureName} - ${description} (${featureFiles.length} arquivos)`);
    
    // Criar pasta para a funcionalidade
    const featureDir = path.join(outputPath, 'features', featureName);
    fs.mkdirSync(featureDir, { recursive: true });
    
    // Copiar arquivos encontrados
    featureFiles.forEach(file => {
      const fileName = path.basename(file);
      const destPath = path.join(featureDir, fileName);
      fs.copyFileSync(file, destPath);
    });
  } else {
    console.log(`   ❌ ${featureName} - não encontrado`);
  }
}

function createExtractionMap(outputPath) {
  const mapContent = `# MAPA COMPLETO DA EXTRAÇÃO DO POLOTNO

## 📊 RESUMO DA EXTRAÇÃO

### ✅ FUNCIONALIDADES PRINCIPAIS EXTRAÍDAS:

#### 🏗️ **ARQUITETURA CORE**
- **model/** - Sistema de estado MobX
- **canvas/** - Canvas principal e workspace
- **toolbar/** - Ferramentas e controles
- **side-panel/** - Painéis laterais
- **utils/** - Utilitários essenciais

#### 🎨 **COMPONENTES UI**
- **react-canvas/** - Componentes React do canvas
- **react-toolbar/** - Componentes React da toolbar
- **pages-timeline/** - Timeline de páginas
- **workspace/** - Componentes do workspace

#### 🔧 **FUNCIONALIDADES ESPECÍFICAS**
- **Pan/Zoom** - Navegação do canvas
- **Seleção** - Seleção de elementos
- **Transformação** - Resize, rotate, move
- **Snap/Guias** - Alinhamento automático
- **Hotkeys** - Atalhos de teclado
- **Clipboard** - Copy/paste
- **Undo/Redo** - Histórico de ações
- **Layers** - Gerenciamento de camadas
- **Export** - Sistema de exportação
- **Import** - Sistema de importação

#### 📂 **SISTEMAS DE ARQUIVO**
- **Upload** - Sistema de upload
- **Templates** - Sistema de templates
- **Saved Locally** - Salvamento local
- **Image Processing** - Processamento de imagens

#### 🎯 **ELEMENTOS GRÁFICOS**
- **Text** - Elementos de texto
- **Shapes** - Formas geométricas
- **Images** - Elementos de imagem
- **Videos** - Elementos de vídeo
- **Icons** - Ícones e símbolos
- **Lines** - Linhas e conectores

#### 🎪 **EFEITOS E ANIMAÇÕES**
- **Filters** - Filtros de imagem
- **Animations** - Sistema de animações
- **Gradients** - Gradientes
- **Shadows** - Sombras e efeitos

#### 🌐 **LOCALIZAÇÃO E TEMAS**
- **Localization** - Sistema de tradução
- **Themes** - Sistema de temas
- **Fonts** - Gerenciamento de fontes

## 🔍 ARQUIVOS IMPORTANTES ENCONTRADOS

### Arquivos de Configuração:
- \`index.js\` - Entry point principal
- \`package.json\` - Dependências e scripts
- \`config/\` - Configurações globais

### Sistemas Core:
- \`model/store.js\` - Store principal MobX
- \`canvas/workspace-canvas.js\` - Canvas principal
- \`toolbar/toolbar.js\` - Toolbar principal
- \`side-panel/side-panel.js\` - Painel lateral

### Funcionalidades Críticas:
- \`canvas/hotkeys.js\` - Sistema de hotkeys
- \`utils/clipboard.js\` - Sistema de clipboard
- \`model/history.js\` - Sistema de undo/redo
- \`canvas/use-transformer-snap.js\` - Sistema de snap

## 📋 COMO USAR OS CÓDIGOS EXTRAÍDOS

### 1. **Estudar a Arquitetura**
- Comece pelo \`model/store.js\`
- Entenda o \`canvas/workspace-canvas.js\`
- Analise o \`toolbar/toolbar.js\`

### 2. **Implementar Funcionalidades**
- Use os arquivos de \`utils/\` como referência
- Copie a lógica dos \`canvas/\` components
- Adapte os \`side-panel/\` components

### 3. **Customizar Interface**
- Modifique os componentes React
- Altere estilos CSS
- Adicione novas funcionalidades

## ⚠️ IMPORTANTE

Este é um projeto de **ESTUDO APENAS**.
- Não usar para fins comerciais
- Respeitar a licença do Polotno
- Dar créditos quando apropriado

## 🎯 PRÓXIMOS PASSOS

1. Analise o \`model/store.js\` para entender o state
2. Estude o \`canvas/workspace-canvas.js\` para o canvas
3. Implemente suas próprias customizações
4. Teste cada funcionalidade separadamente

---

**Total de arquivos extraídos:** ${countFiles(outputPath)}
**Data da extração:** ${new Date().toLocaleDateString('pt-BR')}
`;

  fs.writeFileSync(path.join(outputPath, 'EXTRACTION_MAP.md'), mapContent);
}

function countFiles(dir) {
  let count = 0;
  
  function countInDirectory(directory) {
    if (!fs.existsSync(directory)) return;
    
    try {
      fs.readdirSync(directory).forEach(item => {
        const itemPath = path.join(directory, item);
        const stats = fs.statSync(itemPath);
        
        if (stats.isDirectory()) {
          countInDirectory(itemPath);
        } else {
          count++;
        }
      });
    } catch (error) {
      // Ignorar erros
    }
  }
  
  countInDirectory(dir);
  return count;
}

// Executar extração completa
extractCompletePolotno();
