export default function emails_sentView(props = {}) {
  const wrapper = document.createElement("div");
  wrapper.className = "emails-sent-view";
  wrapper.style.padding = "20px";
  wrapper.style.color = "#ffffff";

  const title = document.createElement("h2");
  title.textContent = "Sent Messages";
  title.style.marginBottom = "20px";
  wrapper.appendChild(title);

  const messages = [
    { to: "CEO", subject: "Weekly Summary", date: "2025-06-17" },
    { to: "Team Leaders", subject: "Status Report", date: "2025-06-16" },
    { to: "BossGPT", subject: "New Mod Request", date: "2025-06-15" }
  ];

  messages.forEach(msg => {
    const card = document.createElement("div");
    card.className = "email-card";
    card.style.border = "1px solid #333";
    card.style.background = "#1c1c2e";
    card.style.borderRadius = "8px";
    card.style.padding = "12px";
    card.style.marginBottom = "12px";

    const to = document.createElement("div");
    to.innerHTML = `<strong>To:</strong> ${msg.to}`;
    const subject = document.createElement("div");
    subject.innerHTML = `<strong>Subject:</strong> ${msg.subject}`;
    const date = document.createElement("div");
    date.innerHTML = `<strong>Date:</strong> ${msg.date}`;

    card.appendChild(to);
    card.appendChild(subject);
    card.appendChild(date);
    wrapper.appendChild(card);
  });

  return wrapper;
}