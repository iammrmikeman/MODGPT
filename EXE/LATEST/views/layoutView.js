// layoutView.js — PS3-style font applied to folder labels

import { renderView } from '../renderEngine.js';

export default function layoutView(initialView = "emails_inbox", props = {}) {
  const wrapper = document.createElement("div");
  wrapper.className = "layout-wrapper";
  wrapper.style.display = "flex";
  wrapper.style.flexDirection = "column";
  wrapper.style.height = "100vh";

  const folders = [
    {
      icon: "emails_folder.png", label: "Emails", color: "#47a0ff", id: "emails",
      subitems: [
        { label: "Inbox", view: "emails_inbox" },
        { label: "Compose", view: "emails_compose" },
        { label: "Sent", view: "emails_sent" }
      ]
    },
    {
      icon: "projects_folder.png", label: "Company", color: "#58ff58", id: "company",
      subitems: [
        { label: "Boss GPT", view: "boss_gpt" },
        { label: "Visual Team", view: "team_visual" },
        { label: "Dev Team", view: "team_dev" },
        { label: "Directors", view: "company_directors" },
        { label: "Employee Tracking", view: "employee_tracking" },
        { label: "Finances", view: "company_finances" },
        { label: "History", view: "company_history" },
        { label: "Milestones", view: "company_milestones" },
        { label: "Mods", view: "company_mods" },
        { label: "Research Division", view: "team_research" }
      ]
    },
    {
      icon: "spec_ops_folder.png", label: "Spec Ops", color: "#ff7c47", id: "specops",
      subitems: [
        { label: "TF141", view: "task_force_141" },
        { label: "Rockstar GPT", view: "rockstar_gpt" },
        { label: "Pentagon", view: "pentagon" },
        { label: "Military", view: "military" },
        { label: "Governmental", view: "government_ops" },
        { label: "Support", view: "support" }
      ]
    },
    {
      icon: "media_folder.png", label: "Media", color: "#a3fffd", id: "media",
      subitems: [
        { label: "Boot Themes", view: "boot_media" },
        { label: "Audio Themes", view: "theme_audio_manager" },
        { label: "Video Backgrounds", view: "theme_video_player" }
      ]
    },
    {
      icon: "memory_folder.png", label: "Memory", color: "#33e1d3", id: "memory",
      subitems: [
        { label: "View Snapshots", view: "memory_snapshots" },
        { label: "Archive Zips", view: "memory_archive_zips" },
        { label: "Generate Update", view: "generate_memory_update" },
        { label: "Push Update", view: "push_memory_update" },
        { label: "Recover Update", view: "recover_memory_update" }
      ]
    },
    {
      icon: "swarm_folder.png", label: "Swarm", color: "#dd99ff", id: "swarm",
      subitems: [
        { label: "Monitor Workers", view: "swarm_dashboard" },
        { label: "Assign Tasks", view: "assign_swarm_roles" },
        { label: "Worker Logs", view: "swarm_logs" }
      ]
    },
    {
      icon: "mods_folder.png", label: "Projects", color: "#ffa94d", id: "projects",
      subitems: [
        { label: "New Project", view: "project_creator" },
        { label: "Active Mods", view: "active_mods" },
        { label: "Utilities", view: "mod_utilities" }
      ]
    },
    {
      icon: "dev_tools_folder.png", label: "Dev Tools", color: "#ffe04d", id: "devtools",
      subitems: [
        { label: "Script Console", view: "dev_console" },
        { label: "Log Viewer", view: "dev_logs" },
        { label: "AI Sandbox", view: "ai_sandbox" },
        { label: "Memory Inspector", view: "memory_debug" },
        { label: "Trusted? Check", view: "trusted_check" }
      ]
    },
    {
      icon: "errors_folder.png", label: "Errors", color: "#ff4f4f", id: "errors",
      subitems: [
        { label: "BlackBox Logs", view: "error_logs_black_box" },
        { label: "Bug Reports", view: "error_report_center" },
        { label: "Trusted Failures", view: "trusted_memory_handler" }
      ]
    }
  ];

  const xmbNav = document.createElement("div");
  xmbNav.className = "xmb-horizontal";
  xmbNav.style.display = "flex";
  xmbNav.style.flexDirection = "row";
  xmbNav.style.overflowX = "auto";
  xmbNav.style.gap = "36px";
  xmbNav.style.padding = "16px";

  const subView = document.createElement("div");
  subView.id = "mainView";
  subView.className = "xmb-main";
  subView.style.flexGrow = "1";
  subView.style.padding = "24px";
  subView.style.overflowY = "auto";

  folders.forEach(folder => {
    const col = document.createElement("div");
    col.className = "xmb-folder";
    col.style.textAlign = "center";

    const icon = document.createElement("img");
    icon.src = folder.icon;
    icon.onerror = () => { icon.src = "folder.png"; };
    icon.style.width = "64px";
    icon.style.marginBottom = "4px";
    icon.style.cursor = "pointer";

    const title = document.createElement("div");
    title.innerText = folder.label;
    title.className = "ps3-font";  // PS3-style font class
    title.style.color = folder.color;

    const submenu = document.createElement("div");
    submenu.style.marginTop = "8px";
    submenu.style.display = "none";

    folder.subitems.forEach(sub => {
      const btn = document.createElement("div");
      btn.innerText = sub.label;
      btn.style.marginTop = "6px";
      btn.style.padding = "4px 10px";
      btn.style.borderRadius = "4px";
      btn.style.cursor = "pointer";
      btn.style.background = "rgba(255,255,255,0.05)";
      btn.onclick = () => {
        subView.innerHTML = "";
        renderView(sub.view);
      };
      submenu.appendChild(btn);
    });

    icon.onclick = () => {
      document.querySelectorAll(".xmb-folder > div:nth-child(3)").forEach(el => {
        el.style.display = "none";
      });
      submenu.style.display = "block";
    };

    col.appendChild(icon);
    col.appendChild(title);
    col.appendChild(submenu);
    xmbNav.appendChild(col);
  });

  wrapper.appendChild(xmbNav);
  wrapper.appendChild(subView);
  setTimeout(() => renderView(initialView, props), 0);
  return wrapper;
}

// Add after all icon.onclick definitions and DOM mounting logic in layoutView.js

document.addEventListener("click", (e) => {
  const folders = document.querySelectorAll(".xmb-folder");
  const isClickInside = Array.from(folders).some(folder => folder.contains(e.target));
  if (!isClickInside) {
    document.querySelectorAll(".xmb-folder > div:nth-child(3)").forEach(sub => {
      sub.style.display = "none";
    });
  }
});
// End patch
