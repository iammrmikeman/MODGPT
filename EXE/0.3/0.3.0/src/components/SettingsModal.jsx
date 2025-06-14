import React from 'react';

export default function SettingsModal({ onClose }) {
  return (
    <div className='modal-backdrop' onClick={onClose}>
      <div className='modal' onClick={(e) => e.stopPropagation()}>
        <h2>MODGPT Settings</h2>
        <input placeholder='Enter OpenAI Key' />
        <br />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}