
import React, { useState, useEffect } from 'react';

const SettingsModal = ({ onClose }: { onClose: () => void }) => {
  const [apiKey, setApiKey] = useState('');
  const [repoPath, setRepoPath] = useState('');
  const [outputPath, setOutputPath] = useState('');
  const [model, setModel] = useState('gpt-4');

  useEffect(() => {
    setApiKey(localStorage.getItem('modgpt_api_key') || '');
    setRepoPath(localStorage.getItem('modgpt_repo_path') || '');
    setOutputPath(localStorage.getItem('modgpt_output_path') || '');
    setModel(localStorage.getItem('modgpt_model') || 'gpt-4');
  }, []);

  const save = () => {
    localStorage.setItem('modgpt_api_key', apiKey);
    localStorage.setItem('modgpt_repo_path', repoPath);
    localStorage.setItem('modgpt_output_path', outputPath);
    localStorage.setItem('modgpt_model', model);
    alert('✅ Settings saved!');
    onClose();
  };

  return (
    <div style={styles.backdrop}>
      <div style={styles.modal}>
        <h2>MODGPT Settings</h2>
        <label>OpenAI API Key</label>
        <input value={apiKey} onChange={e => setApiKey(e.target.value)} style={styles.input} placeholder="sk-..." />
        <a href="https://platform.openai.com/account/api-keys" target="_blank" rel="noreferrer" style={styles.link}>Get API Key</a>

        <label>MODGPT Repo Path</label>
        <input value={repoPath} onChange={e => setRepoPath(e.target.value)} style={styles.input} />

        <label>Output Folder</label>
        <input value={outputPath} onChange={e => setOutputPath(e.target.value)} style={styles.input} />

        <label>Model</label>
        <select value={model} onChange={e => setModel(e.target.value)} style={styles.input}>
          <option value="gpt-4">gpt-4</option>
          <option value="gpt-4o">gpt-4o</option>
          <option value="gpt-3.5-turbo">gpt-3.5-turbo</option>
        </select>

        <div style={styles.buttons}>
          <button onClick={save}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  backdrop: {
    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    display: 'flex', justifyContent: 'center', alignItems: 'center',
    zIndex: 1000
  },
  modal: {
    backgroundColor: '#111', padding: '20px',
    borderRadius: '10px', width: '400px',
    color: 'white', boxShadow: '0 0 10px #0ff'
  },
  input: {
    width: '100%', padding: '8px', margin: '8px 0',
    borderRadius: '6px', border: '1px solid #444', backgroundColor: '#222', color: '#fff'
  },
  buttons: {
    display: 'flex', justifyContent: 'space-between', marginTop: '20px'
  },
  link: {
    color: '#0ff', fontSize: '0.9rem', marginBottom: '10px', display: 'inline-block'
  }
};

export default SettingsModal;
