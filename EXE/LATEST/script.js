function triggerSubItem(label) {
  const safe = label.toLowerCase().split(/[^a-z0-9]+/).filter(x=>x).join("_") + ".html";
  fetch("panels/" + safe)
    .then(res => res.text())
    .then(html => { document.getElementById("panel").innerHTML = html; })
    .catch(() => { document.getElementById("panel").innerHTML = "<p style='color:red;'>Fallback panel loaded.</p>"; });
}