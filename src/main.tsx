import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Temporary debug overlay to show runtime errors on page
function _createErrorOverlay() {
  let el = document.getElementById('error-overlay');
  if (!el) {
    el = document.createElement('div');
    el.id = 'error-overlay';
    Object.assign(el.style, {
      position: 'fixed',
      left: '16px',
      right: '16px',
      top: '16px',
      padding: '12px',
      zIndex: '2147483647',
      background: 'linear-gradient(90deg, rgba(220,38,38,0.95), rgba(185,28,28,0.95))',
      color: '#fff',
      fontFamily: 'Menlo, Monaco, monospace',
      fontSize: '13px',
      borderRadius: '8px',
      maxHeight: '40vh',
      overflow: 'auto',
      boxShadow: '0 6px 30px rgba(0,0,0,0.4)'
    });
    document.body.appendChild(el);
  }
  return el;
}

function _showErrorOverlay(msg) {
  const el = _createErrorOverlay();
  el.textContent = msg;
  el.style.display = 'block';
}

window.addEventListener('error', (e) => {
  try {
    const m = `${e.message || 'Error'} — ${e.filename || ''}:${e.lineno || ''}`;
    console.error('Captured window error', e);
    _showErrorOverlay(m);
  } catch (err) {
    console.error(err);
  }
});

window.addEventListener('unhandledrejection', (e) => {
  try {
    const reason = (e && e.reason && (e.reason.stack || e.reason.message)) || String(e.reason || e);
    console.error('Unhandled rejection', e);
    _showErrorOverlay('UnhandledRejection: ' + reason);
  } catch (err) {
    console.error(err);
  }
});

try {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
} catch (err) {
  console.error(err);
  try { _showErrorOverlay(String(err)); } catch (e) { /* ignore */ }
}
