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

document.querySelectorAll('.project, .cert, .contact, header img').forEach(el => observer.observe(el));

// Typing effect with blinking cursor
const typingTarget = document.querySelector('header p');
const phrases = [
  "Aspiring AI Developer",
  "Prompt Engineer",
  "Self-Taught Learner"
];
let currentPhrase = 0;
let currentChar = 0;
let isDeleting = false;
let cursor = document.createElement('span');
cursor.textContent = '|';
cursor.style.color = '#38bdf8';
cursor.style.marginLeft = '4px';
cursor.classList.add('blinking');
typingTarget.appendChild(cursor);

function typeEffect() {
  const phrase = phrases[currentPhrase];
  if (isDeleting) {
    currentChar--;
  } else {
    currentChar++;
  }
  typingTarget.firstChild.textContent = phrase.substring(0, currentChar);

  if (!isDeleting && currentChar === phrase.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1500);
  } else if (isDeleting && currentChar === 0) {
    isDeleting = false;
    currentPhrase = (currentPhrase + 1) % phrases.length;
    setTimeout(typeEffect, 400);
  } else {
    setTimeout(typeEffect, isDeleting ? 60 : 100);
  }
}
typeEffect();

// Light/Dark Mode Toggle with Icon
const toggleButton = document.createElement('button');
toggleButton.innerHTML = '🌙';
toggleButton.title = 'Toggle Theme';
toggleButton.style.position = 'fixed';
toggleButton.style.top = '1rem';
toggleButton.style.right = '1rem';
toggleButton.style.padding = '0.5rem';
toggleButton.style.background = '#38bdf8';
toggleButton.style.border = 'none';
toggleButton.style.borderRadius = '50%';
toggleButton.style.color = '#0f172a';
toggleButton.style.fontSize = '1.2rem';
toggleButton.style.fontWeight = 'bold';
toggleButton.style.boxShadow = '0 0 10px rgba(56,189,248,0.6)';
toggleButton.style.transition = 'all 0.3s ease';
toggleButton.style.cursor = 'pointer';
toggleButton.style.zIndex = '1000';

toggleButton.onmouseenter = () => toggleButton.style.transform = 'scale(1.1)';
toggleButton.onmouseleave = () => toggleButton.style.transform = 'scale(1)';

document.body.appendChild(toggleButton);

if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light-mode');
  toggleButton.innerHTML = '☀️';
}

toggleButton.addEventListener('click', () => {
  const isLight = document.body.classList.toggle('light-mode');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  toggleButton.innerHTML = isLight ? '☀️' : '🌙';
});

// Smooth scroll for anchor links
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Scroll to top button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.textContent = '⬆️';
scrollTopBtn.title = 'Back to top';
scrollTopBtn.style.position = 'fixed';
scrollTopBtn.style.bottom = '1rem';
scrollTopBtn.style.right = '1rem';
scrollTopBtn.style.padding = '0.5rem';
scrollTopBtn.style.border = 'none';
scrollTopBtn.style.borderRadius = '50%';
scrollTopBtn.style.background = '#38bdf8';
scrollTopBtn.style.color = '#0f172a';
scrollTopBtn.style.fontSize = '1.2rem';
scrollTopBtn.style.boxShadow = '0 0 8px rgba(56,189,248,0.5)';
scrollTopBtn.style.cursor = 'pointer';
scrollTopBtn.style.display = 'none';
scrollTopBtn.style.zIndex = '1000';

document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
  scrollTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Sticky nav bar functionality (if nav is present)
const nav = document.querySelector('nav');
if (nav) {
  nav.style.position = 'sticky';
  nav.style.top = '0';
  nav.style.zIndex = '999';
  nav.style.background = 'inherit';
  nav.style.backdropFilter = 'blur(6px)';
  nav.style.boxShadow = '0 1px 4px rgba(0,0,0,0.1)';
}
