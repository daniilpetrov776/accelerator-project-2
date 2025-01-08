import Swiper from 'swiper/bundle';
import { getBreakpoint } from './utils';

let reviewsSwiper = null;
let currentBreakpoint = null;

export const initReviewsSwiper = () => {
  if (reviewsSwiper) {
    const newBreakpoint = getBreakpoint();

    if (newBreakpoint !== currentBreakpoint) {
      reviewsSwiper.destroy(true, true);
      reviewsSwiper = null;
      currentBreakpoint = newBreakpoint;
    } else {
      reviewsSwiper.update();
      return;
    }
  }

  reviewsSwiper = new Swiper('.swiper4', {
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
        navigation: false,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-button--reviews-next',
          prevEl: '.swiper-button--reviews-prev',
        },
      },
      1440: {
        slidesPerView: 'auto',
        spaceBetween: 120,
        navigation: {
          nextEl: '.swiper-button--reviews-next',
          prevEl: '.swiper-button--reviews-prev',
        },
      },
    },
  });
  currentBreakpoint = getBreakpoint();
  reviewsSwiper.init();
};
