import React, { useState } from 'react';
import SettingsModal from './components/SettingsModal';
import './style.css';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className='app'>
      <div className='sidebar'>
        <div className='logo' onClick={() => setModalOpen(true)}>
          <img src='/icon_128_MODGPT_PERFECT.png' alt='MODGPT Logo' />
        </div>
        <ul>
          <li>Emails</li>
          <li>Projects</li>
          <li>Memory</li>
          <li>Media</li>
        </ul>
      </div>
      <div className='main-content'>
        <h1>MODGPT EXE UI</h1>
      </div>
      {modalOpen && <SettingsModal onClose={() => setModalOpen(false)} />}
    </div>
  );
}