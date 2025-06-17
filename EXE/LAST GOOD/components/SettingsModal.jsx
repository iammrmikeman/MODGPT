
import React, { useState } from 'react';

export const SettingsModal = ({ onClose }) => {
  const [key, setKey] = useState("");

  const saveKey = () => {
    if (window.gpt?.saveKey) {
      window.gpt.saveKey(key);
      alert("Key saved!");
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: '20%',
      left: '35%',
      width: '30%',
      padding: '20px',
      backgroundColor: '#1e1e1e',
      color: 'white',
      border: '2px solid white',
      borderRadius: '8px',
      zIndex: 9999
    }}>
      <h3>GPT Settings</h3>
      <input
        style={{ width: '100%', padding: '8px' }}
        value={key}
        placeholder="Enter OpenAI Key"
        onChange={(e) => setKey(e.target.value)}
      />
      <button onClick={saveKey} style={{ marginTop: '10px' }}>Save Key</button>
      <button onClick={onClose} style={{ marginTop: '10px', marginLeft: '10px' }}>Close</button>
    </div>
  );
};
