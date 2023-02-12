import './style.css';

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
