
# POLOTNO EDITOR - CÓDIGOS ESSENCIAIS ORGANIZADOS

## ESTRUTURA COMPLETA DO EDITOR

### 1. FUNCIONALIDADES BÁSICAS

#### **Canvas/Workspace (node_modules/polotno/canvas/)**
- `workspace.js` - Componente principal do canvas
- `canvas-container.js` - Container que gerencia eventos de mouse/touch
- `element.js` - Renderização de elementos individuais
- `highlighter.js` - Sistema de seleção e highlight
- `context-menu/context-menu.js` - Menu de contexto

#### **Store/Model (node_modules/polotno/model/)**
- `store.js` - Estado global (zoom, pan, elementos, páginas)
- `page.js` - Modelo de página
- `element.js` - Modelo de elemento

#### **Utils (node_modules/polotno/utils/)**
- `canvas.js` - Utilitários de canvas e transformações
- `transform.js` - Cálculos matemáticos para pan/zoom
- `html2canvas.js` - Exportação de imagens

### 2. INTERFACE DE USUÁRIO

#### **Toolbar (node_modules/polotno/toolbar/)**
- `toolbar.js` - Barra de ferramentas principal
- `zoom-buttons.js` - Botões de zoom
- `align-buttons.js` - Botões de alinhamento
- `text-toolbar.js` - Ferramentas de texto
- `shape-toolbar.js` - Ferramentas de formas

#### **Side Panel (node_modules/polotno/side-panel/)**
- `side-panel.js` - Container do painel lateral
- `templates-panel.js` - Painel de templates
- `elements-panel.js` - Painel de elementos
- `text-panel.js` - Painel de texto
- `images-panel.js` - Painel de imagens
- `upload-panel.js` - Painel de upload

#### **Pages Timeline (node_modules/polotno/pages-timeline/)**
- `pages-timeline.js` - Linha do tempo das páginas

### 3. ELEMENTOS GRÁFICOS

#### **Elementos Base**
- `text-element.js` - Elementos de texto
- `image-element.js` - Elementos de imagem
- `shape-element.js` - Formas geométricas
- `svg-element.js` - Elementos SVG
- `figure-element.js` - Figuras complexas

### 4. EXPORTAÇÃO E SALVAMENTO

#### **Export Utils**
- `export.js` - Funções de exportação
- `pdf-export.js` - Exportação para PDF
- `image-export.js` - Exportação para imagens

### 5. CONFIGURAÇÃO

#### **Config**
- `config.js` - Configurações globais
- `translations.js` - Sistema de traduções

## CÓDIGOS COPIADOS NESTE PROJETO

### ARQUIVOS PRINCIPAIS (src/)
```
src/
├── App.jsx - Componente principal
├── index.jsx - Ponto de entrada
├── project.js - Gerenciamento de projeto
├── file.js - Manipulação de arquivos
├── api.js - API externa
├── storage.js - Armazenamento local
├── custom-styles.css - Estilos customizados
└── index.css - Estilos globais
```

### SEÇÕES CUSTOMIZADAS (src/sections/)
```
sections/
├── icons-section.jsx - Painel de ícones
├── shapes-section.jsx - Painel de formas
├── my-designs-section.jsx - Meus designs
├── stable-diffusion-section.jsx - IA para imagens
├── upload-section.jsx - Upload de arquivos
├── video-section.jsx - Elementos de vídeo
└── qr-section.jsx - Códigos QR
```

### BARRA SUPERIOR (src/topbar/)
```
topbar/
├── topbar.jsx - Barra superior principal
├── file-menu.jsx - Menu de arquivo
├── download-button.jsx - Botão de download
├── user-menu.jsx - Menu do usuário
├── post-process-button.jsx - Pós-processamento
└── postprocess.jsx - Processamento de efeitos
```

### TRADUÇÕES (src/translations/)
```
translations/
├── en.json - Inglês
├── fr.json - Francês
├── pt-br.json - Português BR
├── ru.json - Russo
├── id.json - Indonésio
└── zh-ch.json - Chinês
```

## DEPENDÊNCIAS MÍNIMAS NECESSÁRIAS

### Core Dependencies
```json
{
  "polotno": "^2.24.0", // SDK principal
  "react": "^18.3.1", // Framework
  "react-dom": "^18.3.1", // DOM manipulation
  "mobx": "^6.x", // State management (incluído no polotno)
  "mobx-react-lite": "^4.x" // React bindings (incluído no polotno)
}
```

### UI Dependencies (incluídas no Polotno)
```json
{
  "@blueprintjs/core": "^5.x", // Componentes UI
  "@blueprintjs/icons": "^5.x", // Ícones
  "konva": "^9.x", // Renderização canvas
  "react-konva": "^18.x" // React wrapper para Konva
}
```

### Utilities
```json
{
  "localforage": "^1.10.0", // Armazenamento local
  "jszip": "^3.10.1", // Compressão de arquivos
  "qrcode": "^1.5.4" // Geração de QR codes
}
```

## FLUXO DE FUNCIONAMENTO

### 1. Inicialização
```
index.jsx → createStore() → App.jsx → PolotnoContainer
```

### 2. Renderização
```
App.jsx → Workspace → Canvas → Elements
```

### 3. Interação
```
User Event → Canvas Handler → Store Update → Re-render
```

### 4. Estado
```
Store (MobX) → Pages → Elements → Properties
```

## CÓDIGOS ESSENCIAIS PARA CLONAR

### MÍNIMO VIÁVEL (MVE - Minimum Viable Editor)
1. **Store** - Estado global
2. **Workspace** - Canvas principal
3. **Toolbar** - Ferramentas básicas
4. **SidePanel** - Painel lateral
5. **Element Models** - Modelos de elementos

### FUNCIONALIDADES AVANÇADAS
1. **Export System** - Sistema de exportação
2. **Upload System** - Sistema de upload
3. **Templates** - Sistema de templates
4. **Animations** - Sistema de animações
5. **Filters** - Sistema de filtros

## ARQUITETURA DE COMPONENTES

```
PolotnoContainer
├── SidePanelWrap
│   └── SidePanel
│       ├── TemplatesSection
│       ├── ElementsSection
│       ├── TextSection
│       ├── ImagesSection
│       └── CustomSections
├── WorkspaceWrap
│   ├── Toolbar
│   ├── Workspace (Canvas)
│   └── ZoomButtons
└── PagesTimeline
```

## EVENTOS E INTERAÇÕES

### Mouse/Touch Events
- Pan (arrastar canvas)
- Zoom (scroll wheel)
- Select (clicar elemento)
- Resize (arrastar handles)
- Rotate (arrastar rotation handle)

### Keyboard Events
- Copy/Paste (Ctrl+C/V)
- Delete (Del)
- Undo/Redo (Ctrl+Z/Y)
- Select All (Ctrl+A)

### Store Events
- element:added
- element:removed
- element:changed
- page:added
- page:removed
- store:changed

## CUSTOMIZAÇÕES POSSÍVEIS

### Interface
- Cores do tema
- Layout dos painéis
- Botões da toolbar
- Painéis customizados

### Funcionalidades
- Elementos customizados
- Filtros customizados
- Exportação customizada
- Templates customizados

### Integrações
- APIs externas
- Serviços de storage
- Serviços de IA
- CDNs de imagens

Este documento serve como guia completo para entender e clonar as funcionalidades essenciais do Polotno Editor.
