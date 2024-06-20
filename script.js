
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 0);
});

// Smooth Scroll for links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const header = document.querySelector('header');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', function () {
        header.classList.toggle('nav-active');
        navMenu.classList.toggle('nav-active');
    });

    // Close the menu when clicking outside
    document.addEventListener('click', function (event) {
        if (!menuToggle.contains(event.target) && !navMenu.contains(event.target)) {
            header.classList.remove('nav-active');
            navMenu.classList.remove('nav-active');
        }
    });
});
