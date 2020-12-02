const body = document.querySelector('body');
const hamburgerBtn = document.querySelector('.header__hamburger');
const headerNav = document.querySelector('.header__nav');
const navItem = document.querySelectorAll('.nav__item');

hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('open');
    headerNav.classList.toggle('active');
    
    headerNav.classList.contains('active') ? body.style.cssText = 'overflow: hidden' : body.style.cssText = 'overflow: visible';
});

navItem.forEach((item) => {
    item.addEventListener('click', (event) => {
        console.log(item);
        if (event.target instanceof HTMLAnchorElement) {
            hamburgerBtn.classList.remove('open');
            headerNav.classList.remove('active');
            body.style.cssText = 'overflow: visible'
        }
    });
});