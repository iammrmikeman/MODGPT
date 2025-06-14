import React from 'react';

const ModGPTUI = () => {
  return (
    <div className="modgpt-container">
      {/* 🟥 MODGPT Icon - Preload-Compatible */}
      <div
        id="MODGPTICON"
        onClick={(e) => {
          e.nativeEvent.stopImmediatePropagation();
        }}
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          zIndex: 9999,
          cursor: 'pointer'
        }}
      >
        <img
          src="icon_128_MODGPT_PERFECT.png"
          alt="MODGPT Logo"
          className="modgpt-logo"
          style={{
            width: '48px',
            height: '48px'
          }}
        />
      </div>

      {/* ⚙️ Modal */}
      <div
        id="settingsModal"
        style={{
          display: 'none',
          position: 'fixed',
          top: '80px',
          left: '80px',
          zIndex: 9999,
          backgroundColor: '#1a1a1a',
          color: 'white',
          padding: '20px',
          borderRadius: '12px',
          border: '1px solid #ff0000',
          boxShadow: '0 0 20px #ff0000',
          minWidth: '300px'
        }}
      >
        <h2>⚙️ Settings</h2>
        <p>Enter your API key or set project folders here.</p>
        <input
          type="text"
          placeholder="API Key"
          style={{
            width: '100%',
            padding: '8px',
            marginTop: '10px',
            borderRadius: '8px',
            border: '1px solid #333'
          }}
        />
        <button
          onClick={() => {
            const modal = document.getElementById('settingsModal');
            if (modal) modal.style.display = 'none';
          }}
          style={{
            marginTop: '10px',
            backgroundColor: '#ff0000',
            color: 'white',
            padding: '8px 12px',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          Close
        </button>
      </div>

      {/* Existing layout below */}
      <div className="scroll-wrapper">
        <div className="main-panel">
          <h1>🎮 MODGPT PS3 UI – V4 FINAL</h1>
        </div>
      </div>
    </div>
  );
};

export default ModGPTUI;
