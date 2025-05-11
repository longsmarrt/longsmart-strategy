
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('testimonialForm');
    const container = document.getElementById('testimonialsContainer');

    // Generate dummy testimonials
    const testimonials = [];
    for (let i = 1; i <= 500; i++) {
        testimonials.push({
            name: `User${i}`,
            message: `This platform is amazing! I gained a lot from LongSmart Strategy. Highly recommend! #${i}`
        });
    }

    function renderTestimonials() {
        container.innerHTML = "";
        testimonials.slice(-100).reverse().forEach(t => {
            const div = document.createElement('div');
            div.classList.add('testimonial');
            div.innerHTML = `<h4>${t.name}</h4><p>${t.message}</p>`;
            container.appendChild(div);
        });
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('username').value.trim();
        const message = document.getElementById('message').value.trim();
        if (name && message) {
            testimonials.push({ name, message });
            renderTestimonials();
            form.reset();
        }
    });

    renderTestimonials();
});
