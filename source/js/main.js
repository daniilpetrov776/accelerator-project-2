// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';
import './const';
// import { updateHeroState } from './hero';
import { handleNavMenu } from './header';
import { blockDisabledElements } from './disable';
import { heroSwiper, toursSwiper, trainingSwiper, reviewsSwiper, handleAdvSwiper, handleGallerySwiper } from './swiper';
import './timeline';
import { updateHeadingsShadow } from './shadow';
import { handleFormValidation } from './form';

window.addEventListener('DOMContentLoaded', () => {
  handleNavMenu();
  blockDisabledElements();
  updateHeadingsShadow();
  heroSwiper.init();
  toursSwiper.init();
  trainingSwiper.init();
  reviewsSwiper.init();
  handleAdvSwiper();
  handleGallerySwiper();
  handleFormValidation();
}
);
// handleNavMenu();
// blockDisabledElements();
// updateHeadingsShadow();
// heroSwiper.init();
// toursSwiper.init();
// trainingSwiper.init();
// reviewsSwiper.init();
// handleAdvSwiper();
// handleGallerySwiper();
// handleFormValidation();
