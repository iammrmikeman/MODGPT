chrome.storage.local.get("lastZipHash", (data) => {
  document.getElementById("status").textContent = 
    `Last ZIP Hash: ${data.lastZipHash || "Not yet fetched"}`;
});