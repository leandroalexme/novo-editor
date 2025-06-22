
import React from 'react';
import ReactDOM from 'react-dom/client';

import { createStore } from 'polotno/model/store';
import { unstable_setAnimationsEnabled } from 'polotno/config';
import { createProject, ProjectContext } from '../model/project';

import '../styles/index.css';
import App from './App';
import '../utils/logger';
import { ErrorBoundary } from 'react-error-boundary';

// Enable animations
unstable_setAnimationsEnabled(true);

// Create the main store
const store = createStore({ key: 'nFA5H9elEytDyPyvKL7T' });
window.store = store;
store.addPage();

// Create project manager
const project = createProject({ store });
window.project = project;

const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      padding: '20px',
    }}
  >
    <h2>Something went wrong:</h2>
    <pre style={{ color: 'red' }}>{error.message}</pre>
    <button onClick={resetErrorBoundary}>Try again</button>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <ProjectContext.Provider value={project}>
      <App store={store} />
    </ProjectContext.Provider>
  </ErrorBoundary>
);
