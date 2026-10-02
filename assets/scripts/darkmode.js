// Theme toggle with enhanced transitions
const toggleButton = document.getElementById("toggle-dark");
const sunIcon = document.getElementById("sun");
const moonIcon = document.getElementById("moon");

let isDark = false; // Default light theme

toggleButton.addEventListener('click', () => {
    isDark = !isDark;

    if (isDark) {
        // Switch to dark theme
        transformToTheme(
            '#2f4858'
        );

        // Switch icons
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
    } else {
        // Switch to light theme
        transformToTheme(
            '#ffffff'
        );

        // Switch icons
        moonIcon.classList.add('hidden');
        sunIcon.classList.remove('hidden');
    }
});

// Helper function for smooth theme transition
const transformToTheme = (bgColor) => {
    document.documentElement.style.setProperty('--primary-bg-color', bgColor);

    // Add transition class to body for smooth color changes
    document.body.classList.add('theme-transition');
    setTimeout(() => {
        document.body.classList.remove('theme-transition');
    }, 1000);
}