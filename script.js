document.getElementById('year').textContent = new Date().getFullYear();

const toggle = document.getElementById('themeToggle');
const root = document.documentElement;
const saved = localStorage.getItem('theme');
if (saved) root.setAttribute('data-theme', saved);

toggle.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  toggle.textContent = next === 'light' ? '☀️' : '🌙';
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.15 });

document.querySelectorAll('section:not(.hero)').forEach(section => {
  section.classList.add('reveal');
  observer.observe(section);
});
