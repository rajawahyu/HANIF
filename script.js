const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    if(burger) {
        burger.addEventListener('click', () => {
            // Toggle Nav (Buka/Tutup Menu)
            nav.classList.toggle('nav-active');

            // Animate Links (Muncul berurutan)
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });

            // Burger Animation (Berubah jadi X)
            burger.classList.toggle('toggle');
        });
    }
}

// Fungsi Smooth Scrolling & Tutup Menu saat Link diklik
const smoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Biar link WA tidak kena preventDefault
            if(this.getAttribute('href').startsWith('http')) return;

            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if(target){
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Tutup menu mobile jika sedang terbuka
                const nav = document.querySelector('.nav-links');
                const burger = document.querySelector('.burger');
                if(nav.classList.contains('nav-active')){
                    nav.classList.remove('nav-active');
                    burger.classList.remove('toggle');
                    
                    // Reset animasi link
                    const navLinks = document.querySelectorAll('.nav-links li');
                    navLinks.forEach((link) => {
                        link.style.animation = '';
                    });
                }
            }
        });
    });
}

// Jalankan fungsi saat halaman dimuat
navSlide();
smoothScroll();