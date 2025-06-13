
import React, { useState, useEffect } from 'react';
import SettingsModal from '../components/SettingsModal';

export default function ModGPTUI() {
  const [showApiModal, setShowApiModal] = useState(false);

  useEffect(() => {
    console.log('%c🚨 MODGPT UI RENDERED', 'color: lime; font-size: 24px');
  }, []);

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: 'black' }}>
      <div style={{ width: '240px', backgroundColor: '#111', padding: '20px' }}>
        <div onClick={() => setShowApiModal(true)} style={{ cursor: 'pointer', textAlign: 'center' }}>
          <img src="icon_128_MODGPT_PERFECT.png" style={{ width: '80px' }} />
          <p style={{ color: 'white', fontSize: '0.8rem' }}>CLICK FOR API KEY</p>
        </div>
        <ul style={{ color: 'white', marginTop: '20px', listStyle: 'none' }}>
          <li>🟣 EMAILS</li>
          <li>🟢 MEDIA</li>
          <li>🟡 PROJECTS</li>
          <li>🔴 MEMORY</li>
        </ul>
      </div>

      <div style={{ flex: 1, padding: '20px', color: 'white' }}>
        <h1>🚨 MODGPT UI ONLINE</h1>
        {showApiModal && <SettingsModal onClose={() => setShowApiModal(false)} />}
      </div>
    </div>
  );
}
