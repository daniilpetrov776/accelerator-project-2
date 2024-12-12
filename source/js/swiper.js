import Swiper from 'swiper/bundle';
import { Screen } from './const';
import { analyzeImageColor } from './adaptive-color';

const heroContainer = document.querySelector('.hero');

const changeStandartActivePaginationClass = (customActiveClass) => {
  const bullets = document.querySelectorAll('.hero__swiper-pagination-bullet');
  const StandartActive = document.querySelector('.swiper-pagination-bullet-active');
  bullets.forEach((bullet) => {
    bullet.classList.remove(customActiveClass);
  });
  StandartActive?.classList.add(customActiveClass);
};

const updateBackgroundColor = (swiper) => {
  const activeSlide = swiper.slides[swiper.activeIndex];
  const image = activeSlide.querySelector('.hero__picture');
  if (image) {
    const averageColor = analyzeImageColor(image);
    heroContainer.style.backgroundColor = averageColor;
  }
};

export const heroSwiper = new Swiper('.swiper', {
  direction: 'horizontal',
  init: false,
  loop: true,
  simulateTouch: false,
  keyboard: {
    enabled: false,
  },
  pagination: {
    clickable: true,
    el: '.swiper-pagination',
    renderBullet: function (index, className) {
      return `<span class="${className} hero__swiper-pagination-bullet hero__swiper-pagination-bullet--${index}"></span>`;
    },
  },
  on: {
    init: () => {
      changeStandartActivePaginationClass('hero__swiper-pagination-bullet--active');
      togglePaginationClickable();
    },
    slideChange: function() {
      changeStandartActivePaginationClass('hero__swiper-pagination-bullet--active');

      // Здесь явно передаём `this` вместо потерянного контекста.
      updateBackgroundColor(this);
    },
  },
  slidesPerView: 1,
});

function togglePaginationClickable () {
  if (window.innerWidth < Screen.desktop) {
    heroSwiper.params.pagination.clickable = false;
    const bullets = document.querySelectorAll('.hero__swiper-pagination-bullet');
    bullets.forEach((bullet) => {
      bullet.style.pointerEvents = 'none';
    });
  } else {
    heroSwiper.params.pagination.clickable = true;
    const bullets = document.querySelectorAll('.hero__swiper-pagination-bullet');
    bullets.forEach((bullet) => {
      bullet.style.pointerEvents = '';
    });
  }
}
