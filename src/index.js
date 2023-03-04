import './style.css';
import './style-about.css';
import './style-biblical-hebrew.css';
import './about.html';
import './biblical-hebrew.html';

const hamburgerBtn = document.querySelector('.icon-menu-mobile img');
const crossBtn = document.querySelector('.cross img');
const mobileMenu = document.querySelector('.nav-mobile');
const mobileMenuElements = document.querySelectorAll('.nav-mobile .container li');
hamburgerBtn.addEventListener('click', () => {
  mobileMenu.style.display = 'flex';
  hamburgerBtn.style.display = 'none';
});
crossBtn.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
  hamburgerBtn.style.display = 'block';
});

mobileMenuElements.forEach((menuElement) => {
  menuElement.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
    hamburgerBtn.style.display = 'block';
  });
});

// carousel
const carousel = document.querySelector('.carousel');
const images = carousel.querySelectorAll('img');
let current = 0;

images[current].classList.add('active');

carousel.querySelector('.prev').addEventListener('click', () => {
  images[current].classList.remove('active');
  current = current > 0 ? current - 1 : images.length - 1;
  images[current].classList.add('active');
});

carousel.querySelector('.next').addEventListener('click', () => {
  images[current].classList.remove('active');
  current = current < images.length - 1 ? current + 1 : 0;
  images[current].classList.add('active');
});

/* Form Validation */
const form = document.getElementById('form');
const error = document.getElementById('error');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const { email } = form.elements;
  if (email.validity.typeMismatch
    || email.value.toLowerCase() !== email.value
    || !email.validity.valid) {
    error.textContent = 'Invalid email. Please ensure you have the correct email address. Thank you!';
  } else {
    form.submit();
  }
});

window.addEventListener('beforeunload', () => {
  const savedData = { name: form.name.value, email: form.email.value, message: form.message.value };
  window.localStorage.setItem('formData', JSON.stringify(savedData));
});

window.addEventListener('load', () => {
  const savedData = JSON.parse(window.localStorage.getItem('formData'));
  form.name.value = savedData.name;
  form.email.value = savedData.email;
  form.message.value = savedData.message;
});
