export const setCustomSlideMove = (swiperInstance, { nextEl, prevEl }) => {
  if (!swiperInstance || !nextEl || !prevEl) {
    return;
  }

  const nextButton = document.querySelector(nextEl);
  const prevButton = document.querySelector(prevEl);

  if (!nextButton || !prevButton) {
    return;
  }

  nextButton.addEventListener('click', () => {
    swiperInstance.slideNext(300, true);
    setTimeout(() => {
      swiperInstance.slideNext(300, true);
    }, 400);
  });

  prevButton.addEventListener('click', () => {
    swiperInstance.slidePrev(300, true);
    setTimeout(() => {
      swiperInstance.slidePrev(300, true);
    }, 400);
  });
};

export const throttle = (func, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// export const setCustomSlideMove = (swiperInstance, { nextEl, prevEl }) => {
//   if (!swiperInstance || !nextEl || !prevEl) {
//     return;
//   }

//   const nextButton = document.querySelector(nextEl);
//   const prevButton = document.querySelector(prevEl);

//   if (!nextButton || !prevButton) {
//     return;
//   }

//   nextButton.addEventListener('click', () => {
//     swiperInstance.slideTo(swiperInstance.activeIndex + 2, 600);
//   });

//   prevButton.addEventListener('click', () => {
//     swiperInstance.slideTo(swiperInstance.activeIndex - 2, 600);
//   });
// };
