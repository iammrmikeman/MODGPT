export default function emails_composeView(props = {}) {
  const wrapper = document.createElement("div");
  wrapper.className = "emails-compose-view";
  wrapper.style.display = "flex";
  wrapper.style.flexDirection = "column";
  wrapper.style.alignItems = "center";
  wrapper.style.justifyContent = "center";
  wrapper.style.width = "100%";
  wrapper.style.padding = "40px 20px";
  wrapper.style.boxSizing = "border-box";

  const frame = document.createElement("div");
  frame.style.width = "90%";
  frame.style.maxWidth = "720px";
  frame.style.background = "linear-gradient(to right, rgba(15, 20, 35, 0.85), rgba(20, 25, 45, 0.9))";
  frame.style.padding = "32px";
  frame.style.cssText += `
  background: rgba(20, 24, 34, 0.85);
  border-radius: 20px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
`;
  frame.style.borderRadius = "20px";
  frame.style.boxShadow = "0 0 30px rgba(78, 156, 255, 0.3)";
  frame.style.backdropFilter = "blur(12px)";
  frame.style.boxSizing = "border-box";

  const title = document.createElement("h2");
  title.textContent = "Compose New Message";
  title.style.marginBottom = "24px";
  title.style.fontSize = "24px";
  title.style.textAlign = "center";
  title.style.color = "#47a0ff";
  title.style.fontWeight = "600";
  frame.appendChild(title);

  const contacts = [
    "BossGPT", "Visual Team", "Dev Team", "Research Team", "Directors", "Employee Tracker",
    "Swarm Control", "Spec Ops", "Finance Division", "History Logs", "Milestones Board", "Mod Compiler"
  ];

  const label = document.createElement("label");
  label.textContent = "To";
  label.style.display = "block";
  label.style.marginBottom = "8px";
  label.style.fontWeight = "bold";
  frame.appendChild(label);

  const dropdownWrapper = document.createElement("div");
  dropdownWrapper.style.position = "relative";
  dropdownWrapper.style.marginBottom = "20px";

  const dropdownDisplay = document.createElement("div");
  dropdownDisplay.textContent = "BossGPT";
  dropdownDisplay.style.background = "#1e1e2f";
  dropdownDisplay.style.color = "#ffffff";
  dropdownDisplay.style.padding = "14px 40px 14px 16px";
  dropdownDisplay.style.borderRadius = "999px";
  dropdownDisplay.style.cursor = "pointer";
  dropdownDisplay.style.userSelect = "none";
  dropdownDisplay.style.boxShadow = "inset 0 0 0 1px #333";
  dropdownDisplay.style.fontSize = "14px";
  dropdownDisplay.style.position = "relative";

  const chevron = document.createElement("div");
  chevron.innerHTML = "⏷";
  chevron.style.position = "absolute";
  chevron.style.right = "16px";
  chevron.style.top = "50%";
  chevron.style.transform = "translateY(-50%)";
  chevron.style.pointerEvents = "none";
  chevron.style.fontSize = "12px";
  chevron.style.color = "#999";
  dropdownDisplay.appendChild(chevron);

  const dropdownList = document.createElement("ul");
  dropdownList.style.position = "absolute";
  dropdownList.style.top = "110%";
  dropdownList.style.left = "0";
  dropdownList.style.right = "0";
  dropdownList.style.background = "#1c1c2f";
  dropdownList.style.borderRadius = "12px";
  dropdownList.style.boxShadow = "0 0 12px rgba(78,156,255,0.2)";
  dropdownList.style.padding = "6px 0";
  dropdownList.style.margin = "8px 0 0 0";
  dropdownList.style.listStyle = "none";
  dropdownList.style.display = "none";
  dropdownList.style.zIndex = "999";
  dropdownList.style.opacity = "0";
  dropdownList.style.transition = "opacity 0.15s ease, transform 0.15s ease";
  dropdownList.style.transform = "translateY(-5px)";

  contacts.forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;
    li.style.padding = "10px 20px";
    li.style.cursor = "pointer";
    li.style.transition = "background 0.2s ease";
    li.style.fontSize = "14px";
    li.onmouseenter = () => li.style.background = "#292943";
    li.onmouseleave = () => li.style.background = "transparent";
    li.onclick = () => {
      dropdownDisplay.childNodes[0].textContent = name;
      dropdownList.style.display = "none";
      dropdownList.style.opacity = "0";
      dropdownList.style.transform = "translateY(-5px)";
    };
    dropdownList.appendChild(li);
  });

  dropdownDisplay.onclick = () => {
    const isOpen = dropdownList.style.display === "block";
    if (isOpen) {
      dropdownList.style.opacity = "0";
      dropdownList.style.transform = "translateY(-5px)";
      setTimeout(() => dropdownList.style.display = "none", 150);
    } else {
      dropdownList.style.display = "block";
      setTimeout(() => {
        dropdownList.style.opacity = "1";
        dropdownList.style.transform = "translateY(0px)";
      }, 0);
    }
  };

  dropdownWrapper.appendChild(dropdownDisplay);
  dropdownWrapper.appendChild(dropdownList);
  frame.appendChild(dropdownWrapper);

  const subjectLabel = document.createElement("label");
  subjectLabel.textContent = "Subject";
  subjectLabel.style = "display: block; margin-bottom: 8px; font-weight: bold;";
  const subjectInput = document.createElement("input");
  subjectInput.style.width = "100%";
  subjectInput.style.padding = "14px";
  subjectInput.style.border = "none";
  subjectInput.style.borderRadius = "999px";
  subjectInput.style.background = "#1e1e2f";
  subjectInput.style.color = "#ffffff";
  subjectInput.style.fontSize = "14px";
  subjectInput.style.boxSizing = "border-box";

  const messageLabel = document.createElement("label");
  messageLabel.textContent = "Message";
  messageLabel.style = "display: block; margin-bottom: 8px; font-weight: bold;";
  const messageBox = document.createElement("textarea");
  messageBox.style.width = "100%";
  messageBox.style.minHeight = "120px";
  messageBox.style.maxHeight = "360px";
  messageBox.style.resize = "vertical";
  messageBox.style.padding = "14px";
  messageBox.style.borderRadius = "20px";
  messageBox.style.border = "none";
  messageBox.style.background = "#1e1e2f";
  messageBox.style.color = "#fff";
  messageBox.style.fontSize = "14px";
  messageBox.style.boxSizing = "border-box";

  const sendButton = document.createElement("button");
  sendButton.textContent = "Send Message";
  sendButton.style.marginTop = "24px";
  sendButton.style.padding = "14px 32px";
  sendButton.style.border = "none";
  sendButton.style.borderRadius = "999px";
  sendButton.style.background = "#0e84ff";
  sendButton.style.color = "#ffffff";
  sendButton.style.fontSize = "15px";
  sendButton.style.cursor = "pointer";
  sendButton.style.boxShadow = "0 0 8px rgba(78, 156, 255, 0.3)";

  frame.appendChild(subjectLabel);
  frame.appendChild(subjectInput);
  frame.appendChild(messageLabel);
  frame.appendChild(messageBox);
  frame.appendChild(sendButton);

  wrapper.appendChild(frame);
  return wrapper;
}