
export default function emails_inboxView() {
  const contacts = [
    { name: "BossGPT", color: "#ff5e5e" },
    { name: "Recents", color: "#4fc3f7" },
    { name: "Team Leaders ", color: "#ba68c8" },
    { name: "SpecOps", color: "#26c6da" },
    { name: "Directors", color: "#fbc02d" }
  ];

  const emails = [
    {
      to: "BossGPT",
      section: "Welcome",
      sectionColor: "#64b5f6",
      subject: "Welcome to MODGPT.EXE INBOX COMPOSE",
      preview: "Let’s get you set up…",
      body: "Welcome, Commander. Your AI system is ready to deploy. Please compose your message..."
    },
    {
      to: "Swarm Control",
      section: "Swarm",
      sectionColor: "#ba68c8",
      subject: "New AI Worker Registered",
      preview: "Worker #1112 online.",
      body: "Swarm worker #1112 is now operational and integrated into the system."
    },
    {
      to: "Security",
      section: "Security",
      sectionColor: "#ef5350",
      subject: "Memory Update Validated",
      preview: "Platinum Core update trusted.",
      body: "The system memory has been validated. No anomalies detected. Trust score: 100%."
    }
  ];

  let selectedIdx = 0;
  const outer = document.createElement("div");
  outer.className = "modinbox-grid";

  const contactsCol = document.createElement("div");
  contactsCol.className = "modinbox-contacts";
  const title = document.createElement("div");
  title.className = "modinbox-contacts-title";
  title.textContent = "Contacts";
  contactsCol.appendChild(title);
  contacts.forEach(c => {
    const div = document.createElement("div");
    div.className = "modinbox-contact";
    div.innerHTML = `<div class="avatar" style="background: radial-gradient(circle at 40% 40%, ${c.color}, #111 70%); border: 2px solid ${c.color};"></div>
                     <span style="color:${c.color};font-weight:600;">${c.name}</span>`;
    contactsCol.appendChild(div);
  });

  const inboxCol = document.createElement("div");
  inboxCol.className = "modinbox-inbox-col";
  const header = document.createElement("div");
  header.className = "modinbox-inbox-header";
  header.innerHTML = `<h3>Inbox</h3><div class="modinbox-unread">You have ${emails.length} unread emails</div>`;
  inboxCol.appendChild(header);

  const scrollZone = document.createElement("div");
  scrollZone.className = "modinbox-scroll";
  const pills = [];
  emails.forEach((email, i) => {
    const pill = document.createElement("div");
    pill.className = "modinbox-email" + (i === selectedIdx ? " active" : "");
    pill.innerHTML = `
      <div class="modinbox-section-label" style="color:${email.sectionColor};">${email.section}</div>
      <div class="modinbox-email-subject">${email.subject}</div>
      <div class="modinbox-email-preview">${email.preview}</div>
    `;
    pill.onclick = () => {
      pills[selectedIdx].classList.remove("active");
      selectedIdx = i;
      pill.classList.add("active");
      renderDetail();
    };
    scrollZone.appendChild(pill);
    pills.push(pill);
  });
  inboxCol.appendChild(scrollZone);

  const detailCol = document.createElement("div");
  detailCol.className = "modinbox-detail";
  const renderDetail = () => {
    const email = emails[selectedIdx];
    detailCol.innerHTML = `
      <div class="from-label">From: <b style="color:${email.sectionColor}">${email.from}</b></div>
      <div class="subject">${email.subject}</div>
      <div class="body">${email.body}</div>
    `;
  };
  renderDetail();

  outer.appendChild(contactsCol);
  outer.appendChild(inboxCol);
  outer.appendChild(detailCol);
  return outer;
}
