// script.js - Enhancing Mohsin Ali Portfolio

// Scroll animation: Fade-in sections on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.project, .cert').forEach(el => observer.observe(el));


// Light/Dark Mode Toggle
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Toggle Theme';
toggleButton.style.position = 'fixed';
toggleButton.style.top = '1rem';
toggleButton.style.right = '1rem';
toggleButton.style.padding = '0.5rem 1rem';
toggleButton.style.background = '#38bdf8';
toggleButton.style.border = 'none';
toggleButton.style.borderRadius = '5px';
toggleButton.style.color = '#0f172a';
toggleButton.style.cursor = 'pointer';
toggleButton.style.zIndex = '1000';

document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});
