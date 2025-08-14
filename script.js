const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
}

// Intersection Observer for reveal-on-scroll
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.2 }
);

// Observe animated elements
document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .reveal').forEach((el) => {
    observer.observe(el);
});
