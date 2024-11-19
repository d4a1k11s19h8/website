// Scroll to section smoothly when clicking navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Highlight navigation links when sections are in view
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    let currentSectionId = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100; // Offset for sticky header
        if (window.scrollY >= sectionTop) {
            currentSectionId = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href').slice(1) === currentSectionId);
    });
});
