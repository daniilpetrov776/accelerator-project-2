import Swiper from 'swiper/bundle';
import { getBreakpoint } from './utils';

let toursSwiper = null;
let currentBreakpoint = null;

export const initToursSwiper = () => {
  if (toursSwiper) {
    const newBreakpoint = getBreakpoint();

    if (newBreakpoint !== currentBreakpoint) {
      toursSwiper.destroy(true, true);
      toursSwiper = null;
      currentBreakpoint = newBreakpoint;
    } else {
      toursSwiper.update();
      return;
    }
  }
  toursSwiper = new Swiper('.swiper2', {
    direction: 'horizontal',
    init: false,
    loop: false,
    simulateTouch: false,
    keyboard: {
      enabled: false,
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: false,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
        navigation: {
          nextEl: '.swiper-button--tours-next',
          prevEl: '.swiper-button--tours-prev',
        },
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-button--tours-next',
          prevEl: '.swiper-button--tours-prev',
        },
      }
    },

  });
  currentBreakpoint = getBreakpoint();
  toursSwiper.init();
};
