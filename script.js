document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Toggle
    const burger = document.querySelector('.burger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelectorAll('.mobile-menu a');

    if (burger) {
        burger.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });
    }

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });

    // 2. Navbar Background on Scroll (Efek Kaca)
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
        } else {
            nav.style.boxShadow = "none";
        }
    });

    // 3. Initialize Lucide Icons (Penting untuk menampilkan ikon!)
    lucide.createIcons();
});