export default function emails_inboxView() {
  const outer = document.createElement("div");
  outer.className = "modinbox-grid";
  
  // Background with console-like scanlines
  outer.style.background = `
    linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)),
    repeating-linear-gradient(0deg, rgba(0, 102, 255, 0.03) 0px, rgba(0, 102, 255, 0.03) 1px, transparent 1px, transparent 4px)
  `;
  outer.style.backgroundSize = "100% 100%";

  // Floating Contacts Card
  const contactsCard = document.createElement("div");
  contactsCard.className = "modinbox-contacts-wrapper-card";
  
  // Contacts header with icon
  const contactsHeader = document.createElement("div");
  contactsHeader.style.display = "flex";
  contactsHeader.style.alignItems = "center";
  contactsHeader.style.marginBottom = "16px";
  contactsHeader.style.gap = "10px";
  
  const contactsIcon = document.createElement("img");
  contactsIcon.src = "./assets/ui/employee_performance.webp"; // Your contact icon
  contactsIcon.style.width = "32px";
  contactsIcon.style.height = "32px";
  contactsIcon.style.objectFit = "contain";
  
  const contactsTitle = document.createElement("div");
  contactsTitle.className = "modinbox-contacts-title";
  contactsTitle.textContent = "Contacts";
  contactsTitle.style.fontSize = "20px";
  contactsTitle.style.fontWeight = "bold";
  contactsTitle.style.color = "#47a0ff";
  
  contactsHeader.appendChild(contactsIcon);
  contactsHeader.appendChild(contactsTitle);
  contactsCard.appendChild(contactsHeader);
  
  // Categories with icons
  const categories = [
    { name: "Primary", icon: "assets/ui/security.webp", count: 12 },
    { name: "Swarm", icon: "assets/ui/swarm_control.webp", count: 8 },
    { name: "Security.png", icon: "assets/ui/security.webp", count: 3 },
    { name: "System", icon: "assets/ui/memory.webp", count: 5 },
    { name: "Company", icon: "assets/ui/company_Financ.webp", count: 4 }
  ];
  
  categories.forEach(cat => {
    const catItem = document.createElement("div");
    catItem.className = "modinbox-contact-pill";
    catItem.style.display = "flex";
    catItem.style.alignItems = "center";
    catItem.style.gap = "12px";
    catItem.style.cursor = "pointer";
    
    const icon = document.createElement("img");
    icon.src = cat.icon;
    icon.style.width = "24px";
    icon.style.height = "24px";
    icon.style.objectFit = "contain";
    
    const text = document.createElement("div");
    text.style.display = "flex";
    text.style.justifyContent = "space-between";
    text.style.flexGrow = "1";
    
    const name = document.createElement("span");
    name.textContent = cat.name;
    
    const count = document.createElement("span");
    count.textContent = cat.count;
    count.style.background = "#0e84ff";
    count.style.borderRadius = "12px";
    count.style.padding = "2px 8px";
    count.style.fontSize = "12px";
    
    text.appendChild(name);
    text.appendChild(count);
    
    catItem.appendChild(icon);
    catItem.appendChild(text);
    contactsCard.appendChild(catItem);
  });
  
  // Contacts list
  const contactsList = document.createElement("div");
  contactsList.className = "modinbox-contacts";
  contactsList.style.marginTop = "20px";
  
  const contacts = [
    { name: "BossGPT", icon: "assets/ui/mpluxe2", unread: 3 },
    { name: "Team Leader A", icon: "assets/ui/mpsecurity", unread: 1 },
    { name: "Team Leader B", icon: "assets/ui/mpsecurity" },
    { name: "SpecOps", icon: "assets/ui/speccops.webp", unread: 2 },
    { name: "Director", icon: "assets/ui/mpluxe" }
  ];
  
  contacts.forEach(c => {
    const contact = document.createElement("div");
    contact.className = "modinbox-contact-pill";
    contact.style.display = "flex";
    contact.style.alignItems = "center";
    contact.style.gap = "12px";
    
    const icon = document.createElement("img");
    icon.src = c.icon;
    icon.style.width = "32px";
    icon.style.height = "32px";
    icon.style.borderRadius = "50%";
    icon.style.objectFit = "cover";
    icon.style.border = "2px solid #333";
    
    const name = document.createElement("span");
    name.textContent = c.name;
    name.style.flexGrow = "1";
    
    contact.appendChild(icon);
    contact.appendChild(name);
    
    if (c.unread) {
      const badge = document.createElement("span");
      badge.textContent = c.unread;
      badge.style.background = "#0e84ff";
      badge.style.color = "#fff";
      badge.style.borderRadius = "50%";
      badge.style.width = "20px";
      badge.style.height = "20px";
      badge.style.display = "flex";
      badge.style.alignItems = "center";
      badge.style.justifyContent = "center";
      badge.style.fontSize = "12px";
      contact.appendChild(badge);
    }
    
    contactsList.appendChild(contact);
  });
  
  contactsCard.appendChild(contactsList);
  outer.appendChild(contactsCard);

  // Floating Inbox Card
  const inboxCard = document.createElement("div");
  inboxCard.className = "modinbox-inbox-col";
  
  // Inbox header with icon
  const inboxHeader = document.createElement("div");
  inboxHeader.className = "modinbox-inbox-header";
  inboxHeader.style.display = "flex";
  inboxHeader.style.justifyContent = "space-between";
  inboxHeader.style.alignItems = "center";
  
  const leftHeader = document.createElement("div");
  leftHeader.style.display = "flex";
  leftHeader.style.alignItems = "center";
  leftHeader.style.gap = "12px";
  
  const inboxIcon = document.createElement("img");
  inboxIcon.src = "./assets/ui/memory.webp"; // Your inbox icon
  inboxIcon.style.width = "36px";
  inboxIcon.style.height = "36px";
  inboxIcon.style.objectFit = "contain";
  
  const inboxTitle = document.createElement("h2");
  inboxTitle.textContent = "Inbox";
  
  const unread = document.createElement("div");
  unread.className = "modinbox-unread";
  unread.textContent = "12 unread messages";
  
  leftHeader.appendChild(inboxIcon);
  leftHeader.appendChild(inboxTitle);
  leftHeader.appendChild(unread);
  
  const rightHeader = document.createElement("div");
  rightHeader.style.display = "flex";
  rightHeader.style.gap = "10px";
  
  const refreshBtn = document.createElement("button");
  refreshBtn.className = "modinbox-icon-btn";
  refreshBtn.innerHTML = `<img src="./assets/ui/mpimportexport" alt="Refresh" style="width:20px;height:20px;">`;
  
  const composeBtn = document.createElement("button");
  composeBtn.className = "modinbox-icon-btn";
  composeBtn.innerHTML = `<img src="./assets/ui/mpxalentines" alt="Compose" style="width:20px;height:20px;">`;
  composeBtn.addEventListener("click", () => {
    window.loadView("emails_compose");
  });
  
  rightHeader.appendChild(refreshBtn);
  rightHeader.appendChild(composeBtn);
  
  inboxHeader.appendChild(leftHeader);
  inboxHeader.appendChild(rightHeader);
  inboxCard.appendChild(inboxHeader);
  
  // Email list with icons
  const scrollZone = document.createElement("div");
  scrollZone.className = "modinbox-scroll";
  
  const emails = [
    {
      id: 1,
      from: "System",
      icon: "./assets/ui/mpsum2",
      subject: "Welcome to MODGPT.EXE",
      preview: "Let's get you set up…",
      time: "10:42 AM",
      unread: true,
      flagged: true
    },
    {
      id: 2,
      from: "Swarm Control",
      icon: "./assets/ui/swarm_control.webp",
      subject: "New AI Worker Registered",
      preview: "Worker #1112 online.",
      time: "9:15 AM",
      unread: true
    },
    {
      id: 3,
      from: "Security.png",
      icon: "./assets/ui/security.webp",
      subject: "Memory Update Validated",
      preview: "Platinum Core update trusted.png.",
      time: "Yesterday",
      attachments: 2
    },
    {
      id: 4,
      from: "BossGPT",
      icon: "./assets/ui/mpluxe2",
      subject: "Urgent: Review Project Phoenix",
      preview: "Approval required before deployment",
      time: "Yesterday",
      unread: true
    },
    {
      id: 5,
      from: "Dev Team",
      icon: "./assets/ui/devteam.png.webp",
      subject: "Weekly Standup Notes",
      preview: "Summary of team progress",
      time: "Jun 18"
    }
  ];

  emails.forEach(email => {
    const pill = document.createElement("div");
    pill.className = "modinbox-email";
    if (email.unread) pill.classList.add("unread");
    
    pill.innerHTML = `
      <div class="modinbox-email-header">
        <div class="modinbox-email-icon">
          <img src="${email.icon}" alt="${email.from}">
        </div>
        <div class="modinbox-email-info">
          <div class="modinbox-email-from">${email.from}</div>
          <div class="modinbox-email-subject">${email.subject}</div>
          <div class="modinbox-email-preview">${email.preview}</div>
        </div>
        <div class="modinbox-email-time">${email.time}</div>
      </div>
    `;
    
    // Add status indicators
    const indicators = document.createElement("div");
    indicators.className = "modinbox-email-indicators";
    
    if (email.unread) {
      const unreadIndicator = document.createElement("div");
      unreadIndicator.className = "indicator unread";
      unreadIndicator.title = "Unread";
      indicators.appendChild(unreadIndicator);
    }
    
    if (email.flagged) {
      const flagIndicator = document.createElement("div");
      flagIndicator.className = "indicator flag";
      flagIndicator.title = "Flagged";
      indicators.appendChild(flagIndicator);
    }
    
    if (email.attachments) {
      const attachIndicator = document.createElement("div");
      attachIndicator.className = "indicator attach";
      attachIndicator.title = `${email.attachments} attachments`;
      attachIndicator.textContent = email.attachments;
      indicators.appendChild(attachIndicator);
    }
    
    pill.querySelector('.modinbox-email-header').appendChild(indicators);
    scrollZone.appendChild(pill);
  });
  
  inboxCard.appendChild(scrollZone);
  outer.appendChild(inboxCard);

  // Floating Detail Card
  const detailCard = document.createElement("div");
  detailCard.className = "modinbox-detail";
  
  // Initial detail view
  detailCard.innerHTML = `
    <div class="modinbox-detail-header">
      <img src="./assets/ui/mpluxe" alt="System" class="detail-icon">
      <div>
        <div class="modinbox-detail-title">Welcome to MODGPT.EXE</div>
        <div class="modinbox-detail-from">From: System</div>
      </div>
      <div class="modinbox-detail-time">10:42 AM</div>
    </div>
    <div class="modinbox-detail-body">
      <p>Welcome, Commander. Your AI system is ready to deploy.</p>
      <p>Let's begin configuration of your MODGPT environment...</p>
    </div>
    <div class="modinbox-action-bar">
      <button class="action-btn">
        <img src="./assets/ui/mpjanuary2016" alt="Reply"> Reply
      </button>
      <button class="action-btn">
        <img src="./assets/ui/mpsecurity" alt="Forward"> Forward
      </button>
      <button class="action-btn delete">
        <img src="./assets/ui/mpsmuggler" alt="Delete"> Delete
      </button>
    </div>
  `;
  
  outer.appendChild(detailCard);

  return outer;
}