const setHeaderOffset = () => {
  const header = document.querySelector('.header');
  const hero = document.querySelector('.hero');
  if (header && hero) {
    const headerHeight = header.offsetHeight;
    header.classList.add('header--fixed');
    hero.style.marginTop = `${headerHeight}px`;
  }
};


export const updateHeroState = () => {
  window.addEventListener('load', setHeaderOffset);
};
