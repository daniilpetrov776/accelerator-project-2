import { initAdvSwiper } from './adv-swiper';
import { heroSwiper } from './hero-swiper';
import { initToursSwiper } from './tours-swiper';
import { initTrainingSwiper } from './training-swiper';
import { initReviewsSwiper } from './reviews-swiper';
import { initGallerySwiper } from './gallery-swiper';
import { throttle } from './utils';

const handleResizeUpdates = () => {
  window.addEventListener('resize', throttle(() => {
    initToursSwiper();
    initTrainingSwiper();
    initReviewsSwiper();
    initAdvSwiper();
    initGallerySwiper();
  }, 200));
};

export const initSwipers = () => {
  heroSwiper.init();
  initToursSwiper();
  initTrainingSwiper();
  initReviewsSwiper();
  initAdvSwiper();
  initGallerySwiper();
  handleResizeUpdates();
};
