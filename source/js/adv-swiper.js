import Swiper from 'swiper/bundle';
import { Screen } from './const';
import { setCustomSlideMove } from './utils';

let advSwiper = null;

export const initAdvSwiper = () => {
  const screenWidth = window.innerWidth;

  if (screenWidth >= Screen.desktop) {
    if (!advSwiper) {
      advSwiper = new Swiper('.swiper5', {
        direction: 'horizontal',
        loop: true,
        simulateTouch: false,
        slidesPerView: 'auto',
        keyboard: {
          enabled: false,
        },
        breakpoints: {
          1440: {
            slidesPerView: 'auto',
            spaceBetween: 0,
            centeredSlides: false,
            slideToClickedSlide: false,
            navigation: {
              nextEl: '.swiper-button--adv-next',
              prevEl: '.swiper-button--adv-prev',
            },
          },
        },
      });
      setCustomSlideMove(advSwiper, {
        nextEl: '.swiper-button--adv-next',
        prevEl: '.swiper-button--adv-prev',
      });
    }
  } else {
    if (advSwiper) {
      advSwiper.destroy(true, true);
      advSwiper = null;
    }
  }
};
