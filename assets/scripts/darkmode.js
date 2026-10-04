// Theme toggle
const toggleButton = document.getElementById("toggle-dark");
const sunIcon = document.getElementById("sun");
const moonIcon = document.getElementById("moon");

if (toggleButton && sunIcon && moonIcon) {
    // function setTheme to toggle from light to dark mode
    const setTheme = (isDark) => {
        // toggle class dark on html document
        document.documentElement.classList.toggle("dark", isDark);

        // switch icon from sun to moon
        sunIcon.classList.toggle("hidden", isDark);
        moonIcon.classList.toggle("hidden", !isDark);

        // change attributes to the toggle button
        toggleButton.setAttribute(
            "aria-label",
            isDark ? "Switch to light theme" : "Switch to dark theme"
        );

        toggleButton.setAttribute("aria-pressed", String(isDark));

        // Save theme preference in the local storage
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


