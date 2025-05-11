
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('testimonialForm');
  const list = document.getElementById('testimonialList');
  const testimonials = [];

  for (let i = 1; i <= 25; i++) {
    testimonials.push({ name: `User${i}`, message: `LongSmart changed my crypto journey! ${i}` });
  }

  function render() {
    list.innerHTML = "";
    testimonials.slice(-50).reverse().forEach(t => {
      const p = document.createElement('p');
      p.innerHTML = `<strong>${t.name}</strong>: ${t.message}`;
      list.appendChild(p);
    });
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('user').value;
    const msg = document.getElementById('message').value;
    if (name && msg) {
      testimonials.push({ name, message: msg });
      render();
      form.reset();
    }
  });

  render();
});
