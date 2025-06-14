
import React, { useEffect, useRef, useState } from "react";
import "../src/index.css";

const folders = [
  "Emails", "Media", "Projects", "Memory",
  "Swarm", "Trusted Builds", "Mods", "Dev Tools",
  "Storage", "Docs", "XMB Themes", "Errors"
];

const folderColors = {
  Emails: "#a070ff",
  Media: "#6ce072",
  Projects: "#e0b650",
  Memory: "#ff6363",
  Swarm: "#63a6f2",
  "Trusted Builds": "#cfcfcf",
  Mods: "#f29663",
  "Dev Tools": "#333333",
  Storage: "#a68863",
  Docs: "#6ce072",
  "XMB Themes": "#9b63f2",
  Errors: "#f2638f"
};

export default function ModGPTUI() {
  const sidebarRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);

  useEffect(() => {
    const sidebar = sidebarRef.current;
    const handler = () => {
      const scrollTop = sidebar.scrollTop;
      const itemHeight = sidebar.scrollHeight / folders.length;
      const position = Math.floor(scrollTop / itemHeight);
      setActiveDot(Math.min(position, folders.length - 1));
    };
    sidebar.addEventListener("scroll", handler);
    return () => sidebar.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="modgpt-container">
      <div className="scroll-wrapper">
        <div className="sidebar" ref={sidebarRef}>
          <div className="logo-section">
            <img src="icon_128_MODGPT_PERFECT.png" alt="MODGPT Logo" className="modgpt-logo" />
            <div className="logo-label">CLICK FOR API KEY</div>
          </div>
          {folders.map((name, i) => (
            <div className="folder" key={i} style={{ "--glow": folderColors[name] }}>
              <img
                src={`${name.toLowerCase().replace(/ /g, "_")}_folder.png`}
                alt={`${name} Icon`}
                className="folder-icon"
              />
              <div className="folder-label">{name.toUpperCase()}</div>
            </div>
          ))}
          <div className="dot-track">
            {folders.map((_, i) => (
              <div key={i} className={`dot ${i === activeDot ? "active" : ""}`} />
            ))}
          </div>
        </div>
      </div>
      <div className="main-panel">
        <h1>🎮 MODGPT PS3 UI – V4 FINAL</h1>
      </div>
    </div>
  );
}
