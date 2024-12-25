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
    swiperInstance.slideNext(280, true);
    setTimeout(() => {
      swiperInstance.slideNext(280, true);
    }, 330);
  });

  prevButton.addEventListener('click', () => {
    swiperInstance.slidePrev(280, true);
    setTimeout(() => {
      swiperInstance.slidePrev(280, true);
    }, 330);
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

export const calculateCursor = (position, oldValue, newValue) => {
  const nonDigitBefore = /[^0-9]/g;

  let count = 0;
  for (let i = 0; i < position; i++) {
    if (!oldValue[i].match(nonDigitBefore)) {
      count++;
    }
  }

  let index = 0;
  while (count > 0 && index < newValue.length) {
    if (!newValue[index].match(nonDigitBefore)) {
      count--;
    }
    index++;
  }

  return index;
};
