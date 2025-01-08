import { handleNavMenu } from './header';
import { blockDisabledElements } from './disable';
import { initSwipers } from './swiper';
import { updateHeadingsShadow } from './shadow';
import { handleFormValidation } from './form';

window.addEventListener('DOMContentLoaded', () => {
  handleNavMenu();
  blockDisabledElements();
  updateHeadingsShadow();
  initSwipers();
  handleFormValidation();
}
);
