document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.querySelector('.nav');
    const contactBtn = document.querySelector('.contact-button');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        contactBtn.classList.toggle('active');
    });
});
