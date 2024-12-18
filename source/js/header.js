import { isWideScreen, isMediumScreen } from './const';
const burgerButton = document.querySelector('.burger-button');
const navMenu = document.querySelector('.header-nav');
const navLinks = navMenu.querySelectorAll('.header-nav__link');
const hero = document.querySelector('.hero');
const header = document.querySelector('.header');

const updateNavLinksTabIndex = () => {
  const isMenuOpen = burgerButton.classList.contains('burger-button--is-open');
  navLinks.forEach((link) => {
    const isDisabled = link.classList.contains('header-nav__link--disabled');
    switch (true) {
      case isWideScreen:
        link.tabIndex = '0';
        break;
      case isDisabled:
        link.tabIndex = '-1';
        break;
      case isMediumScreen:
        link.tabIndex = isMenuOpen ? '0' : '-1';
        break;
      default:
        link.tabIndex = '-1';
        break;
    }
  });
};

const updateHeaderOffset = (height) => {
  header.style.setProperty('--offset', `${height}px`);
};

const blockScroll = () => {
  document.body.style.overflow = 'hidden';
};
const unblockScroll = () => {
  document.body.style.overflow = 'auto';
};

const setOverlay = () => {
  hero.classList.add('hero--menu-open');
};

const removeOverlay = () => {
  hero.classList.remove('hero--menu-open');
};

let overflowTimeout;

const handleOverflowVisibility = () => {
  if (navMenu.classList.contains('header-nav--is-open')) {
    overflowTimeout = setTimeout(() => {
      navMenu.classList.add('header-nav--is-overflow-visible');
    }, 300);
  } else {
    clearTimeout(overflowTimeout);
    navMenu.classList.remove('header-nav--is-overflow-visible');
  }
};

const closeMenu = () => {
  navMenu.classList.remove('header-nav--is-open');
  navMenu.classList.add('header-nav--is-closed');
  navMenu.style.maxHeight = 0;
  navMenu.style.marginBottom = 0;
  navMenu.style.marginTop = 0;
  unblockScroll();
  removeOverlay();
  updateHeaderOffset(0);
  handleOverflowVisibility();
};

const openMenu = () => {
  navMenu.classList.add('header-nav--is-open');
  navMenu.classList.remove('header-nav--is-closed');
  navMenu.style.maxHeight = `${navMenu.scrollHeight}px`;
  updateHeaderOffset(navMenu.scrollHeight - 1);
  blockScroll();
  handleOverflowVisibility();
};

const burgerButtonClickHndler = () => {
  if (burgerButton.classList.contains('burger-button--is-open')) {
    burgerButton.classList.remove('burger-button--is-open');
    burgerButton.classList.add('burger-button--is-closed');
    removeOverlay();
    closeMenu();
  } else {
    burgerButton.classList.remove('burger-button--is-closed');
    burgerButton.classList.add('burger-button--is-open');
    openMenu();
    setOverlay();
  }
  updateNavLinksTabIndex();
};

const handleMenuLinkClick = () => {
  burgerButton.classList.remove('burger-button--is-open');
  burgerButton.classList.add('burger-button--is-closed');
  closeMenu();
};

export const handleNavMenu = () => {
  updateNavLinksTabIndex();
  burgerButton.addEventListener('click', burgerButtonClickHndler);
  window.addEventListener('resize', updateNavLinksTabIndex);

  navLinks.forEach((link) => {
    link.addEventListener('click', handleMenuLinkClick);
  });
};
