document.getElementById("MODGPTICON").addEventListener("click", () => {
  const modal = document.getElementById("settingsModal");
  modal.style.display = modal.style.display === "block" ? "none" : "block";
  console.log("MODGPTICON clicked, modal toggled");
});

function saveKey() {
  const key = document.getElementById("apikeyInput").value;
  console.log("Saved API Key:", key);
}
