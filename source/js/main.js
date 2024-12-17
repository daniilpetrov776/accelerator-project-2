// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';
import './const';
import { updateHeroState } from './hero';
import { handleNavMenu } from './header';
import { blockDisabledElements } from './disable';
import { heroSwiper, toursSwiper } from './swiper';
import './timeline';

updateHeroState();
handleNavMenu();
blockDisabledElements();
heroSwiper.init();
toursSwiper.init();

