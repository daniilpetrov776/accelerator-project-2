import { Screen } from './const';

export const setCustomSlideMove = (swiperInstance, { nextEl, prevEl }) => {
  if (!swiperInstance || !nextEl || !prevEl) {
    return;
  }

  const nextButton = document.querySelector(nextEl);
  const prevButton = document.querySelector(prevEl);
  let isAnimating = false;

  if (!nextButton || !prevButton) {
    return;
  }

  const handleSlideChange = (direction) => {
    if (isAnimating) {
      return;
    }

    isAnimating = true;

    if (direction === 'next') {
      swiperInstance.slideNext(280, true);
    } else {
      swiperInstance.slidePrev(280, true);
    }

    swiperInstance.once('transitionEnd', () => {
      if (direction === 'next') {
        swiperInstance.slideNext(280, true);
      } else {
        swiperInstance.slidePrev(280, true);
      }

      swiperInstance.once('transitionEnd', () => {
        isAnimating = false;
      });
    });
  };

  nextButton.addEventListener('click', () => handleSlideChange('next'));
  prevButton.addEventListener('click', () => handleSlideChange('prev'));
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

export const validateEmail = (email) => {
  const latinEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(?:[a-zA-Z]{2,})$/;

  const cyrillicEmailRegex = /^[а-яА-ЯёЁ0-9._%+-]+@[а-яА-ЯёЁ0-9.-]+\.(?:рф)$/;

  return latinEmailRegex.test(email) || cyrillicEmailRegex.test(email);
};

export const validatePhone = (phone) => {
  const phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;

  return phoneRegex.test(phone);
};

export const getBreakpoint = () => {
  const width = window.innerWidth;
  if (width < Screen.tablet) {
    return 'mobile';
  }

  if (width > Screen.phone && width < Screen.desktop) {
    return 'tablet';
  } else if (width > Screen.desktop) {
    return 'desktop';
  }
};

export const validateInput = (input, validator, errorMessage) => {
  input.classList.remove('form__input--invalid');
  input.setCustomValidity('');

  if (!validator(input.value)) {
    input.classList.add('form__input--invalid');
    input.setCustomValidity(errorMessage);
    input.reportValidity();
    return false;
  }
  return true;
};
