const burgerButton = document.querySelector('.burger-button');
const navMenu = document.querySelector('.header-nav');

const getMarginBottom = () => window.matchMedia('(min-width: 768px)').matches ? '50px' : '35px';
const getMarginTop = () => window.matchMedia('(min-width: 768px)').matches ? '50px' : '16px';

const burgerButtonClickHndler = () => {
  if (burgerButton.classList.contains('burger-button--is-open')) {
    burgerButton.classList.remove('burger-button--is-open');
    burgerButton.classList.add('burger-button--is-closed');
    navMenu.classList.remove('header-nav--is-open');
    navMenu.style.maxHeight = 0;
    navMenu.style.marginBottom = 0;
  } else {
    burgerButton.classList.remove('burger-button--is-closed');
    burgerButton.classList.add('burger-button--is-open');
    navMenu.classList.add('header-nav--is-open');
    navMenu.style.maxHeight = `${navMenu.scrollHeight}px`;
    navMenu.style.marginBottom = getMarginBottom();
    navMenu.style.marginTop = getMarginTop();
  }
};

export const handleNavMenu = () => {
  burgerButton.addEventListener('click', burgerButtonClickHndler);
};
