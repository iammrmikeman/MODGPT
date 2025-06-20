
document.addEventListener("DOMContentLoaded", () => {
    const modgptLogo = document.getElementById("modgpt-logo");
    if (modgptLogo) {
        modgptLogo.addEventListener("click", () => {
            if (document.querySelector(".modgpt-settings-modal")) {
                document.querySelector(".modgpt-settings-modal").remove();
            } else {
                loadSettingsCard();
            }
        });
    }
});
