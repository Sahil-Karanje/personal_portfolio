let lastScroll = 0;
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    navbar.style.top = '0';
    return;
  }
  if (currentScroll > lastScroll) {
    navbar.style.top = '-100px';
  } else {
    navbar.style.top = '0';
  }
  lastScroll = currentScroll;
});
