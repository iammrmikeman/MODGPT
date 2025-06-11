chrome.runtime.onInstalled.addListener(() => {
  console.log("ZIP Watcher Extension installed.");
});

chrome.alarms.create("watcherTimer", { periodInMinutes: 1 });

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "watcherTimer") {
    chrome.storage.local.get(["lastZipHash"], async (data) => {
      const newZipHash = await fetchZipHash();
      if (data.lastZipHash && data.lastZipHash !== newZipHash) {
        chrome.notifications.create({
          type: "basic",
          iconUrl: "icons/icon_128.png",
          title: "New ZIP Detected",
          message: "MODGPT memory update detected!",
          priority: 2
        });
      }
      chrome.storage.local.set({ lastZipHash: newZipHash });
    });
  }
});

async function fetchZipHash() {
  try {
    const response = await fetch("https://raw.githubusercontent.com/iammrmikeman/MODGPT/main/system/hash_registry.md");
    const text = await response.text();
    return text.trim().split("\n").slice(-1)[0];
  } catch (err) {
    console.error("Failed to fetch hash:", err);
    return null;
  }
}