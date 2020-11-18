const body = document.querySelector('body');
const hamburgerBtn = document.querySelector('.header__hamburger');
const headerNav = document.querySelector('.header__nav');

hamburgerBtn.addEventListener('click', () => {
    headerNav.classList.toggle('active');
    
    headerNav.classList.contains('active') ? body.style.cssText = 'overflow: hidden' : body.style.cssText = 'overflow: visible';
});