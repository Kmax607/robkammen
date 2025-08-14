const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
                                            navLinks.classList.toggle('active');
                                        });

// Intersection Observer for animations
   const observer = new IntersectionObserver((entries) => {
                                                            entries.forEach(entry => {
                                                            if (entry.isIntersecting) {
                                                            entry.target.classList.add('animate');
                                                        }
                                                        });
                                                        }, { threshold: 0.2 });

document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
    observer.observe(el);
});
