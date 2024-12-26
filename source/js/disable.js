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
  blockDisabledElementsBySelector('.header__phone', 'header__phone--disabled');
  blockDisabledElementsBySelector('.button', 'button--disabled');
  blockDisabledElementsBySelector('.full-width-link__link', 'full-width-link__link--disabled');
  blockDisabledElementsBySelector('.contacts__contacts-link', 'contacts__contacts-link--disabled');
  blockDisabledElementsBySelector('.training-slide__link', 'training-slide__link--disabled');
  blockDisabledElementsBySelector('.bottom__phone', 'bottom__phone--disabled');
  blockDisabledElementsBySelector('.socials__link', 'socials__link--disabled');
  blockDisabledElementsBySelector('.bottom-nav__link', 'bottom-nav__link--disabled');
  blockDisabledElementsBySelector('.policy', 'policy--disabled');
};

