// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuBtn.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuBtn.textContent = '☰';
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 82;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header background on scroll
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.background = 'rgba(255,255,255,0.98)';
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
    } else {
        header.style.background = 'rgba(255,255,255,0.94)';
        header.style.boxShadow = 'none';
    }
});

// Booking form submission
const bookingForm = document.getElementById('bookingForm');

bookingForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = bookingForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Submitting...';
    submitBtn.disabled = true;

    const formData = new FormData(bookingForm);
    const data = Object.fromEntries(formData.entries());

    try {
        // Simulate API call - replace with actual endpoint
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Success feedback
        submitBtn.textContent = 'Request Sent!';
        submitBtn.style.background = '#25D366';

        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.background = '';
            submitBtn.disabled = false;
            bookingForm.reset();
        }, 2000);

        // Optional: Send to WhatsApp
        const whatsappMessage = `New booking request from ${data.name} (${data.phone}): ${data.service} on ${data.date} for ${data.passengers} passengers. Details: ${data.message || 'None'}`;
        const whatsappUrl = `https://wa.me/917010100197?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank');

    } catch (error) {
        submitBtn.textContent = 'Error - Try Again';
        submitBtn.style.background = '#e74c3c';
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.background = '';
            submitBtn.disabled = false;
        }, 2000);
    }
});

// Intersection Observer for scroll animations
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

// Observe elements for animation
document.querySelectorAll('.service-card, .destination-card, .package-card, .why-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// WhatsApp float animation
const whatsapp = document.querySelector('.whatsapp');
let whatsappVisible = true;

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = scrollY / docHeight;

    if (scrollPercent > 0.3 && !whatsappVisible) {
        whatsapp.style.opacity = '1';
        whatsapp.style.transform = 'scale(1)';
        whatsappVisible = true;
    } else if (scrollPercent < 0.1 && whatsappVisible) {
        whatsapp.style.opacity = '0.7';
        whatsapp.style.transform = 'scale(0.9)';
    }
});

// Initialize WhatsApp button
whatsapp.style.transition = 'opacity 0.3s, transform 0.3s';