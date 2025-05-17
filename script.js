// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenuBtn = document.getElementById('closeMenuBtn');

mobileMenuBtn.addEventListener('click', () => mobileMenu.classList.add('active'));
closeMenuBtn.addEventListener('click', () => mobileMenu.classList.remove('active'));

// Download Button Loading State
const downloadBtn = document.querySelector('.btn[download]');
if (downloadBtn) {
    downloadBtn.addEventListener('click', function() {
        this.innerHTML = '<i class="bx bx-loader-alt bx-spin"></i> Downloading...';
        setTimeout(() => this.innerHTML = 'Download CV', 3000);
    });
}

// Contact Form Submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        const btn = this.querySelector('button[type="submit"]');
        btn.innerHTML = '<i class="bx bx-loader-alt bx-spin"></i> Sending...';
        btn.disabled = true;
    });
}

// Scroll Hide Navbar
let lastScroll = 0;
const navbar = document.querySelector('.navbar');
const mobileBtn = document.getElementById('mobileMenuBtn');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.classList.remove('scroll-hide', 'scroll-show');
        return;
    }
    
    if (currentScroll > lastScroll && !navbar.classList.contains('scroll-hide')) {
        navbar.classList.remove('scroll-show');
        navbar.classList.add('scroll-hide');
        mobileBtn.classList.add('scroll-hide');
    } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-hide')) {
        navbar.classList.remove('scroll-hide');
        navbar.classList.add('scroll-show');
        mobileBtn.classList.remove('scroll-hide');
    }
    
    lastScroll = currentScroll;
});

// Back to Top Button
const backToTopButton = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
    backToTopButton.classList.toggle('active', window.pageYOffset > 300);
});

backToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Initialize Loading Screen
function createPetals() {
    const loader = document.getElementById('roseLoader');
    if (loader) {
        for (let i = 0; i < 12; i++) {
            const petal = document.createElement('div');
            petal.className = 'petal';
            petal.style.left = Math.random() * 60 + 'px';
            petal.style.animationDelay = (i * 0.3) + 's';
            loader.appendChild(petal);
        }
    }
}

window.addEventListener('load', () => {
    setTimeout(() => {
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen) {
            loadingScreen.style.opacity = '0';
            setTimeout(() => loadingScreen.style.display = 'none', 1000);
        }
    }, 3000);
});

document.addEventListener('DOMContentLoaded', createPetals);