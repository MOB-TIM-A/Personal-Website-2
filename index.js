const navbar = document.getElementById('navbar');
const logo = document.getElementById('logo');
const navLinks = document.querySelectorAll('.nav-link');
const currentPath = window.location.pathname.split('/').pop();

navLinks.forEach(link => {
  const linkPath = link.getAttribute('href');
  if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
    link.classList.add('text-primary');
  } else {
  }
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    logo.src = './assets/logo-white.svg'
    navbar.classList.add('bg-black/50', 'backdrop-blur-md', 'text-white');
    navbar.classList.remove('bg-white');
  } else {
    logo.src = './assets/logo.svg'
    navbar.classList.remove('bg-black/50', 'backdrop-blur-md', 'text-white');
    navbar.classList.add('bg-white');
  }
});

const menuToggle = document.getElementById('menu-toggle');
const mobileDialog = document.getElementById('mobile-dialog');
const closeDialog = document.getElementById('close-dialog');

menuToggle.addEventListener('click', () => {
  mobileDialog.classList.remove('hidden');
});

closeDialog.addEventListener('click', () => {
  mobileDialog.classList.add('hidden');
});

mobileDialog.addEventListener('click', (e) => {
  if (e.target === mobileDialog) {
    mobileDialog.classList.add('hidden');
  }
});
