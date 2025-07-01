// Animación al hacer scroll (aparición suave de los productos)
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      entry.target.style.transition = 'all 0.6s ease-out';
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.animado').forEach(el => {
  observer.observe(el);
});
