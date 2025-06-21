
function loadSettingsCard() {
    if (document.querySelector(".modgpt-settings-modal")) return;

    const modal = document.createElement("div");
    modal.className = "modgpt-settings-modal";
    modal.innerHTML = `
        <h2>MODGPT Settings</h2>
        <ul>
            <li><strong>AI Engine:</strong> <span id="current-engine">Loading...</span> <button id="toggle-engine">Switch</button></li>
            <li><strong>Theme:</strong> PS3 Classic</li>
            <li><strong>Particles:</strong> ON</li>
            <li><strong>Debug Mode:</strong> OFF</li>
        </ul>
    `;

    document.body.appendChild(modal);

    window.modgpt.getAIEngine().then(engine => {
        document.getElementById("current-engine").innerText = engine;
    });

    document.getElementById("toggle-engine").addEventListener("click", () => {
        window.modgpt.toggleAIEngine().then(() => {
            window.modgpt.getAIEngine().then(engine => {
                document.getElementById("current-engine").innerText = engine;
                alert("Switched to " + engine);
            });
        });
    });

    // ESC to close
    window.addEventListener("keydown", function escClose(e) {
        if (e.key === "Escape") {
            modal.remove();
            window.removeEventListener("keydown", escClose);
        }
    });
}
