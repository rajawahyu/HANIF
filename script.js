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

/* --- FUNGSI KIRIM FORM KE WHATSAPP --- */
function sendToWhatsapp() {
    // 1. Ambil isi yang diketik di form
    const name = document.getElementById('waName').value;
    const email = document.getElementById('waEmail').value;
    const msg = document.getElementById('waMsg').value;
    
    // 2. Validasi (Cek kalau kosong)
    if (name === "" || msg === "") {
        alert("Please fill in your name and message!");
        return;
    }

    // 3. GANTI NOMOR INI dengan nomor WA kamu (Format: 628...)
    const phoneNumber = "6281393179748"; 

    // 4. Susun pesan jadi rapi
    // %0a artinya Enter (Garis baru)
    const text = `*New Message from Portfolio Website*%0a%0a*Name:* ${name}%0a*Email:* ${email}%0a*Message:*%0a${msg}`;

    // 5. Buka link WhatsApp
    const url = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(url, '_blank');
}