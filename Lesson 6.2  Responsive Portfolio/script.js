const toggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.navbar__links');
const navItems = document.querySelectorAll('.navbar__links a');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY + 80;
  navItems.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if(section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
