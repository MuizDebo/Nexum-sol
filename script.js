document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const hamburgerMenu = document.getElementById('hamburger-menu'); // Get hamburger
    const navLinks = document.getElementById('navLinks'); // Get nav links container

    // Check for saved theme in localStorage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.classList.add(currentTheme);
        if (currentTheme === 'dark-mode') {
            themeToggleBtn.textContent = '🌙';
        } else {
            themeToggleBtn.textContent = '☀️';
        }
    } else {
        body.classList.remove('dark-mode');
        themeToggleBtn.textContent = '☀️';
    }

    // Theme Toggle Functionality
    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark-mode');
            themeToggleBtn.textContent = '🌙';
        } else {
            localStorage.setItem('theme', 'light-mode');
            themeToggleBtn.textContent = '☀️';
        }
    });

    // Hamburger Menu Toggle Functionality
    hamburgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburgerMenu.classList.toggle('active'); // Add active class to hamburger for animation
    });

    // Close mobile menu when a nav link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburgerMenu.classList.remove('active');
        });
    });
});