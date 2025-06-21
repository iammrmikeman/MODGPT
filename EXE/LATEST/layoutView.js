
const supportedViews = [
    "inboxView",
    "composeView",
    "sentView",
    "boss_gptView",
    "modgpt_settingsView"
];

window.loadView = function(viewName) {
    if (!supportedViews.includes(viewName)) {
        console.error("Unsupported view:", viewName);
        return;
    }
    const script = document.createElement("script");
    script.src = `views/${viewName}.js`;
    document.body.innerHTML = "";
    document.body.appendChild(script);
};
