// Theme toggle
const toggleButton = document.getElementById("toggle-dark");
const sunIcon = document.getElementById("sun");
const moonIcon = document.getElementById("moon");

if (toggleButton && sunIcon && moonIcon) {
    const setTheme = (isDark) => {
        document.documentElement.classList.toggle("dark", isDark);
        sunIcon.classList.toggle("hidden", isDark);
        moonIcon.classList.toggle("hidden", !isDark);
        toggleButton.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
        toggleButton.setAttribute("aria-pressed", String(isDark));
    };

    toggleButton.addEventListener("click", () => {
        const isDark = !document.documentElement.classList.contains("dark");
        setTheme(isDark);
    });

    setTheme(false);
}
