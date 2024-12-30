// Smooth scroll for docs links
document.querySelectorAll('.docs-link').forEach(link => {
    link.addEventListener('click', (event) => {
        const targetSection = document.querySelector(link.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
        event.preventDefault();
    });
});
