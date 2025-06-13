const chatContent = document.getElementById("chat-content");
const inputBox = document.getElementById("userInput");

function toggleChat() {
  const chat = document.getElementById("chatlog");
  if (chat.style.width === "360px") {
    chat.style.width = "40px";
    chatContent.style.display = "none";
  } else {
    chat.style.width = "360px";
    chatContent.style.display = "block";
  }
}

function sendMessage() {
  const msg = inputBox.value;
  if (!msg) return;
  appendMessage("USER", msg);
  inputBox.value = "";
  setTimeout(() => {
    appendMessage("GPT", "This is a simulated response for: " + msg);
  }, 600);
}

function appendMessage(sender, text) {
  const line = document.createElement("div");
  line.innerHTML = `<b>${sender}:</b> ${text}`;
  chatContent.appendChild(line);
  chatContent.scrollTop = chatContent.scrollHeight;
}

function loadInbox() {
  const inbox = ["Welcome to MODGPT Swarm", "AI Helper Initialized", "Memory backup created"];
  const list = document.getElementById("email-list");
  inbox.forEach(msg => {
    const div = document.createElement("div");
    div.className = "email";
    div.textContent = `[System] ${msg}`;
    list.appendChild(div);
  });
}

function loadSwarmStatus() {
  const gpts = ["GPT#1 - Builder 🟢", "GPT#2 - Memory Sync 🟢", "GPT#3 - Export Monitor 🟢"];
  const list = document.getElementById("swarm-list");
  gpts.forEach(msg => {
    const div = document.createElement("div");
    div.className = "gpt";
    div.textContent = msg;
    list.appendChild(div);
  });
}

window.onload = () => {
  loadInbox();
  loadSwarmStatus();
  appendMessage("GPT", "Welcome Commander.");
};