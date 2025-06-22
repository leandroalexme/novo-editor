
import React from 'react';
import { observer } from 'mobx-react-lite';
import { Spinner } from '@blueprintjs/core';

import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from 'polotno';
import { Toolbar } from 'polotno/toolbar/toolbar';
import { ZoomButtons } from 'polotno/toolbar/zoom-buttons';
import { SidePanel, DEFAULT_SECTIONS } from 'polotno/side-panel';
import { Workspace } from 'polotno/canvas/workspace';
import { PagesTimeline } from 'polotno/pages-timeline';
import { setTranslations } from 'polotno/config';

import { loadFile } from '../utils/file';

import { IconsSection } from '../sections/icons-section';
import { ShapesSection } from '../sections/shapes-section';
import { StableDiffusionSection } from '../sections/stable-diffusion-section';
import { MyDesignsSection } from '../sections/my-designs-section';

import { useProject } from '../model/project';
import '../styles/custom-styles.css';

import fr from '../translations/fr';
import en from '../translations/en';
import id from '../translations/id';
import ru from '../translations/ru';
import ptBr from '../translations/pt-br';
import zhCh from '../translations/zh-ch';

import Topbar from '../topbar/topbar';

// load default translations
setTranslations(en);

// replace elements section with just shapes
DEFAULT_SECTIONS.splice(3, 1, ShapesSection);
// add icons
DEFAULT_SECTIONS.splice(3, 0, IconsSection);
DEFAULT_SECTIONS.unshift(MyDesignsSection);
DEFAULT_SECTIONS.push(StableDiffusionSection);

const App = observer(({ store }) => {
  const project = useProject();

  const [fatalError, setFatalError] = React.useState('');
  const [isLoading, setLoading] = React.useState(true);

  const handleFatalError = React.useCallback((error) => {
    console.error('Fatal error', error);
    setFatalError(error.message);
  }, []);

  // load the project on first mount
  React.useEffect(() => {
    project.loadFromLocalStorage();
    setLoading(false);
  }, [project]);

  React.useEffect(() => {
    if (window.store === store) {
      return;
    }
    window.store = store;

    const handleDropFiles = (ev) => {
      if (!ev.dataTransfer.files.length) {
        return;
      }
      ev.preventDefault();
      const files = ev.dataTransfer.files;
      for (const file of files) {
        loadFile(file, store);
      }
    };

    document.addEventListener('drop', handleDropFiles);
    return () => {
      document.removeEventListener('drop', handleDropFiles);
    };
  }, [store]);

  if (fatalError) {
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          fontSize: '20px',
        }}
      >
        Oops, something went wrong...
        <br />
        <br />
        {fatalError}
        <br />
        <br />
        <button
          onClick={() => {
            window.location.reload();
          }}
        >
          Reload
        </button>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Spinner />
      </div>
    );
  }

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Topbar store={store} />
      <div style={{ height: 'calc(100vh - 50px)' }}>
        <PolotnoContainer className="polotno-app-container">
          <SidePanelWrap>
            <SidePanel store={store} sections={DEFAULT_SECTIONS} />
          </SidePanelWrap>
          <WorkspaceWrap>
            <Toolbar store={store} downloadButtonEnabled />
            <Workspace store={store} />
            <ZoomButtons store={store} />
          </WorkspaceWrap>
          <PagesTimeline store={store} />
        </PolotnoContainer>
      </div>
    </div>
  );
});

export default App;
