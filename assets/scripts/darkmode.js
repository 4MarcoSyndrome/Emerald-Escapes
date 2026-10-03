// Theme toggle
const toggleButton = document.getElementById("toggle-dark");
const sunIcon = document.getElementById("sun");
const moonIcon = document.getElementById("moon");

if (toggleButton && sunIcon && moonIcon) {
    const setTheme = (isDark) => {
        document.documentElement.classList.toggle("dark", isDark);

        sunIcon.classList.toggle("hidden", isDark);
        moonIcon.classList.toggle("hidden", !isDark);

        toggleButton.setAttribute(
            "aria-label",
            isDark ? "Switch to light theme" : "Switch to dark theme"
        );

        toggleButton.setAttribute("aria-pressed", String(isDark));

        // Save theme preference
        if (isDark) {
            localStorage.setItem("dark", "on");
        } else {
            localStorage.removeItem("dark");
        }
    };

    // Load saved theme
    const isDark = localStorage.getItem("dark") === "on";
    setTheme(isDark);

    // Toggle theme
    toggleButton.addEventListener("click", () => {
        const isDark = !document.documentElement.classList.contains("dark");
        setTheme(isDark);
    });
}


