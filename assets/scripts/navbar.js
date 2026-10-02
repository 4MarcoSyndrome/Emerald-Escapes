/*
 * Mobile navigation behaviour.
 */
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const navToggle = document.querySelector('.nav-toggle');

    if (!navbar || !navToggle) return;

    const closeMenu = () => {
        navbar.classList.remove('nav-active');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Open navigation');
        document.body.style.overflow = '';
    };

    navToggle.addEventListener('click', (event) => {
        event.stopPropagation();

        const isOpen = navbar.classList.toggle('nav-active');
        navToggle.setAttribute('aria-expanded', String(isOpen));
        navToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    document.addEventListener('click', (event) => {
        if (!navbar.contains(event.target) && navbar.classList.contains('nav-active')) {
            closeMenu();
        }
    });

    document.querySelectorAll('.nav-link').forEach((link) => {
        link.addEventListener('click', closeMenu);
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 969) {
            closeMenu();
        }
    });
});
