// Theme toggle with enhanced transitions
const toggleButton = document.getElementById("toggle-dark");
const sunIcon = '.fa-sun';
const moonIcon = '.fa-moon';

let isDark = false; // Default light theme

toggleButton.addEventListener('click', () => {
    isDark = !isDark;

    if (isDark) {
        // Switch to dark theme
        transformToTheme(
            '#2f4858'
        );

        // Switch icons
        toggleButton.children.classList.add(sunIcon);
        sunIcon.classList.remove(moonIcon);
    } else {
        // Switch to light theme
        transformToTheme(
            '#ffffff'
        );

        // Switch icons
        toggleButton.children.classList.add(moonIcon);
        toggleButton.children.classList.remove(sunIcon);
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