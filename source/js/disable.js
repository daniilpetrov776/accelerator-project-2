const blockDisabledElementsBySelector = (selector, disabledClass) => {
  const elements = document.querySelectorAll(selector);

  elements.forEach((element) => {
    if (element.classList.contains(disabledClass)) {
      element.setAttribute('tabindex', '-1');
      element.addEventListener('click', (evt) => {
        evt.preventDefault();
      });
    }
  });
};

export const blockDisabledElements = () => {
  blockDisabledElementsBySelector('.header-nav__link', 'header-nav__link--disabled');
};

