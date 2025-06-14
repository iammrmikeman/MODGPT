import React from 'react';

const MODGPTIcon = () => {
  return (
    <div
      id="MODGPTICON"
      onClick={(e) => {
        e.nativeEvent.stopImmediatePropagation(); // let preload.js capture the click
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
  );
};

export default MODGPTIcon;
