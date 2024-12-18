// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';
import './const';
// import { updateHeroState } from './hero';
import { handleNavMenu } from './header';
import { blockDisabledElements } from './disable';
import { heroSwiper, toursSwiper, trainingSwiper } from './swiper';
import './timeline';
import { updateHeadingsShadow } from './shadow';

// updateHeroState();
handleNavMenu();
blockDisabledElements();
updateHeadingsShadow();
heroSwiper.init();
toursSwiper.init();
trainingSwiper.init();

