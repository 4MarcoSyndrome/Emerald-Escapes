/*
 * Mobile navigation
 */

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const navToggle = document.querySelector('.nav-toggle');

    if (!navbar || !navToggle) return;

    // close the navbar menu
    const closeMenu = () => {
        navbar.classList.remove('nav-active');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Open navigation');
        document.body.style.overflow = '';
    };

    // open the menu bar when the use click on hamburger icon
    navToggle.addEventListener('click', (event) => {
        event.stopPropagation();

        const isOpen = navbar.classList.toggle('nav-active');
        navToggle.setAttribute('aria-expanded', String(isOpen));
        navToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // if user click the content the menu will be closed
    document.addEventListener('click', (event) => {
        if (!navbar.contains(event.target) && navbar.classList.contains('nav-active')) {
            closeMenu();
        }
    });

    // if user click on a link the menu is closed
    document.querySelectorAll('.nav-link').forEach((link) => {
        link.addEventListener('click', closeMenu);
    });

    // menu is closed on larger screens
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 969) {
            closeMenu();
        }
    });
});
