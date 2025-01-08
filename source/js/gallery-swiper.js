import Swiper from 'swiper/bundle';
import { Screen } from './const';

let gallerySwiper = null;

export const initGallerySwiper = () => {
  const screenWidth = window.innerWidth;

  if (screenWidth < Screen.desktop) {
    if (!gallerySwiper) {
      gallerySwiper = new Swiper('.swiper6', {
        direction: 'horizontal',
        loop: true,
        simulateTouch: false,
        keyboard: {
          enabled: false,
        },
        breakpoints: {
          768: {
            slidesPerView: 3,
            spaceBetween: 5,
            centeredSlides: false,
            slideToClickedSlide: false,
            navigation: {
              nextEl: '.swiper-button--gallery-next',
              prevEl: '.swiper-button--gallery-prev',
            },
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 5,
            centeredSlides: false,
            slideToClickedSlide: false,
            navigation: {
              nextEl: '.swiper-button--gallery-next',
              prevEl: '.swiper-button--gallery-prev',
            },
          },
        },
      });
    }
  } else {
    if (gallerySwiper) {
      gallerySwiper.destroy(true, true);
      gallerySwiper = null;
    }
  }
};
