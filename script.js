// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll indicator functionality
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
        const firstSection = document.querySelector('.intro-section');
        if (firstSection) {
            firstSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all animated elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.card, .axis-item, .method-card, .book-card, .question-item');
    
    // Only apply if user hasn't set reduced motion preference
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        animatedElements.forEach(el => {
            observer.observe(el);
        });
    }
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});

// Add active state to sections on scroll
const sections = document.querySelectorAll('.section');
const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.2
});

sections.forEach(section => {
    navObserver.observe(section);
});

// Console message
console.log('%c La guerra, la paz: el lenguaje hecho realidad ', 'background: #667eea; color: white; font-size: 16px; padding: 10px;');
console.log('%c Gustavo Adolfo Pérez Pérez - APUN 50 Años ', 'background: #764ba2; color: white; font-size: 12px; padding: 5px;');
