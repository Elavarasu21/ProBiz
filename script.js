

// Scroll Reveal Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Testimonial Slider
const slides = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        currentSlide = i;
        showSlide(currentSlide);
    });
});

// Form Validation
const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;
    
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('error');
            isValid = false;
        } else {
            input.classList.remove('error');
        }
    });

    if (isValid) {
        alert('Thank you! Your message has been sent.');
        form.reset();
    }
});
const testimonials = [
    {
        name: "Edward Alexander",
        quote: "Overall pleasurable experience. Pay a little first and Pay a little during the development of the app as milestones are achieved, which made me feel very confident and comfortable.",
        rating: "4.9 on 29 Aug, 2017"
    },
    {
        name: "Diana Johnston",
        quote: "The design team surpassed our expectations. The communication was fluid, and the results spoke for themselves. I highly recommend ProBiz for any scaling business.",
        rating: "5.0 on 15 Sep, 2023"
    },
    {
        name: "Lauren Contreras",
        quote: "Technical expertise is top-notch. They handled our migration seamlessly without a single minute of downtime. A truly professional partner.",
        rating: "4.8 on 10 Jan, 2026"
    }
];

let currentIndex = 0;
const clientItems = document.querySelectorAll('.client-item');
const quoteText = document.getElementById('quote-text');

function updateTestimonial(index) {
    // Update active class on profiles
    clientItems.forEach(item => item.classList.remove('active'));
    clientItems[index].classList.add('active');

    // Update quote with animation
    quoteText.classList.remove('fade-in');
    void quoteText.offsetWidth; // Trigger reflow
    quoteText.innerText = testimonials[index].quote;
    quoteText.classList.add('fade-in');
    
    currentIndex = index;
}

// Auto Switch Every 5 Seconds
setInterval(() => {
    let next = (currentIndex + 1) % testimonials.length;
    updateTestimonial(next);
}, 5000);

// Manual Click Support
clientItems.forEach((item, index) => {
    item.addEventListener('click', () => updateTestimonial(index));

});
