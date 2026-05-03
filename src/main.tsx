
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { FirebaseProvider } from './components/FirebaseProvider';
import { ErrorBoundary } from './components/ErrorBoundary';

const setupResizeObserverLoopFix = () => {
  // Prevent React error overlay for this specific error
  window.addEventListener('error', (e) => {
    if (e.message && (e.message.includes('ResizeObserver loop completed with undelivered notifications') || e.message.includes('ResizeObserver loop limit exceeded'))) {
      const resizeObserverErrDiv = document.getElementById('webpack-dev-server-client-overlay-div');
      const resizeObserverErr = document.getElementById('webpack-dev-server-client-overlay');
      if (resizeObserverErr) resizeObserverErr.setAttribute('style', 'display: none');
      if (resizeObserverErrDiv) resizeObserverErrDiv.setAttribute('style', 'display: none');
    }
  });
  
  const _ResizeObserver = window.ResizeObserver;
  window.ResizeObserver = class ResizeObserver extends _ResizeObserver {
    constructor(callback: ResizeObserverCallback) {
      super((entries, observer) => {
        window.requestAnimationFrame(() => {
          try {
            callback(entries, observer);
          } catch {
            // suppress
          }
        });
      });
    }
  };
};

setupResizeObserverLoopFix();

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <FirebaseProvider>
        <App />
      </FirebaseProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
