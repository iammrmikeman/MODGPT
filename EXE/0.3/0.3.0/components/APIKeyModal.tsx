
import React, { useState, useEffect } from 'react';

const APIKeyModal = ({ onClose }: { onClose: () => void }) => {
  const [apiKey, setApiKey] = useState('');

  useEffect(() => {
    const savedKey = localStorage.getItem('modgpt_api_key');
    if (savedKey) setApiKey(savedKey);
  }, []);

  const saveKey = () => {
    localStorage.setItem('modgpt_api_key', apiKey);
    alert('✅ API Key saved!');
    onClose();
  };

  return (
    <div style={styles.backdrop}>
      <div style={styles.modal}>
        <h2>Enter your OpenAI API Key</h2>
        <input
          type="text"
          placeholder="sk-..."
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          style={styles.input}
        />
        <div style={styles.buttons}>
          <button onClick={saveKey}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
        <a href="https://platform.openai.com/account/api-keys" target="_blank" rel="noreferrer">
          Get your API key
        </a>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  backdrop: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    display: 'flex', justifyContent: 'center', alignItems: 'center',
    zIndex: 1000
  },
  modal: {
    backgroundColor: '#111',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 0 20px #00ffcc',
    textAlign: 'center',
    color: '#fff',
    minWidth: '300px'
  },
  input: {
    width: '100%',
    padding: '0.5rem',
    margin: '1rem 0',
    borderRadius: '8px',
    border: '1px solid #444',
    fontSize: '1rem'
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1rem'
  }
};

export default APIKeyModal;
