/*
* Code taken from https://codepen.io/themrsami/pen/YPzvmyY, removing what I don't need
*/

document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const navbar = document.querySelector('.navbar');
    const navToggle = document.querySelector('.nav-toggle');

    // Mobile menu toggle with animation
    navToggle.addEventListener('click', () => {
        navbar.classList.toggle('nav-active');

        // Prevent scrolling when menu is open
        if (navbar.classList.contains('nav-active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target) && navbar.classList.contains('nav-active')) {
            navbar.classList.remove('nav-active');
            document.body.style.overflow = '';
        }
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 968) {
            navbar.classList.remove('nav-active');
            document.body.style.overflow = '';
        }
    });

});
