import Swiper from 'swiper/bundle';
import { Screen } from './const';
import { analyzeImageColor } from './adaptive-color';
import { setCustomSlideMove, throttle } from './utils';

const heroContainer = document.querySelector('.hero');

let advSwiper = null;
let gallerySwiper = null;

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
      return `<span class="${className} hero__swiper-pagination-bullet hero__swiper-pagination-bullet--${index}"
        aria-label="Перейти к слайду ${index + 1}."
        role="button">
        </span>`;
    },
  },
  breakpoints: {
    320: {
      pagination: {
        clickable: false,
      }
    },
    768: {
      pagination: {
        clickable: false,
      }
    },
    1440: {
      pagination: {
        clickable: true,
      }
    },
  },
  on: {
    init: function() {
      changeStandartActivePaginationClass('hero__swiper-pagination-bullet--active');
      togglePaginationClickable();
    },
    slideChange: function() {
      changeStandartActivePaginationClass('hero__swiper-pagination-bullet--active');

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

export const toursSwiper = new Swiper('.swiper2', {
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

export const trainingSwiper = new Swiper('.swiper3', {
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

export const reviewsSwiper = new Swiper('.swiper4', {
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
    }
  },
});

const initAdvSwiper = () => {
  const screenWidth = window.innerWidth;

  if (screenWidth >= Screen.desktop) {
    if (!advSwiper) {
      advSwiper = new Swiper('.swiper5', {
        direction: 'horizontal',
        loop: true,
        simulateTouch: false,
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

const initGallerySwiper = () => {
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

export const handleAdvSwiper = () => {
  initAdvSwiper();
  window.addEventListener(
    'resize',
    throttle(() => initAdvSwiper(), 200)
  );
  // advSwiper.on('slideChange', () => {
  //   console.log('Slide changed', advSwiper.activeIndex);
  // });

  // advSwiper.on('loopFix', () => {
  //   console.log('Loop fixed');
  // });
};


export const handleGallerySwiper = () => {
  initGallerySwiper();
  window.addEventListener(
    'resize',
    throttle(() => initGallerySwiper(), 200)
  );
};
