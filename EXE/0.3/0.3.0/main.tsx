import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css';

const root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("❌ Could not find #root to mount App");
}
