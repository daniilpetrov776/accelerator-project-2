import Swiper from 'swiper/bundle';
import { getBreakpoint } from './utils';

let trainingSwiper = null;
let currentBreakpoint = null;

export const initTrainingSwiper = () => {
  if (trainingSwiper) {
    const newBreakpoint = getBreakpoint();

    if (newBreakpoint !== currentBreakpoint) {
      trainingSwiper.destroy(true, true);
      trainingSwiper = null;
      currentBreakpoint = newBreakpoint;
    } else {
      trainingSwiper.update();
      return;
    }
  }
  trainingSwiper = new Swiper('.swiper3', {
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
        spaceBetween: 40,
        initialSlide: 2,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
          nextEl: '.swiper-button--training-next',
          prevEl: '.swiper-button--training-prev',
        },
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
          nextEl: '.swiper-button--training-next',
          prevEl: '.swiper-button--training-prev',
        },
      }
    },
  });
  currentBreakpoint = getBreakpoint();
  trainingSwiper.init();
};
