import { calculateCursor } from './utils';

const formInputs = document.querySelectorAll('.form__input');
const form = document.querySelector('.form__form-field');
const emailInput = document.querySelector('.form__input--email');
const phoneInput = document.querySelector('.form__input--phone');

export const handleFormTextVisibility = () => {
  formInputs.forEach((input) => {
    input.addEventListener('change', () => {
      const label = input.nextElementSibling;
      if (label?.tagName === 'LABEL') {
        label.style.opacity = input.value.length > 0 ? '0' : '';
      }
    });
  });
};

const validateEmail = (email) => {
  const latinEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(?:[a-zA-Z]{2,})$/;

  const cyrillicEmailRegex = /^[а-яА-ЯёЁ0-9._%+-]+@[а-яА-ЯёЁ0-9.-]+\.(?:рф)$/;

  return latinEmailRegex.test(email) || cyrillicEmailRegex.test(email);
};

const clearFormFields = () => {
  window.addEventListener('unload', () => {
    if (form) {
      form.reset();
    }
  });
};

const formSumbitHandler = (evt) => {
  evt.preventDefault();
  formInputs.forEach((input) => {
    input.classList.remove('form__input--invalid');
  });

  let isFormValid = true;
  let IsEmailValid = true;

  formInputs.forEach((input) => {
    if (!input.validity.valid) {
      input.classList.add('form__input--invalid');
      isFormValid = false;
    }
  });

  IsEmailValid = validateEmail(emailInput.value);

  if (!IsEmailValid) {
    emailInput.classList.add('form__input--invalid');
    isFormValid = false;
  }

  if (isFormValid) {
    form.submit();
  }
};

const inputChangeHandler = (evt) => {
  const input = evt.target;
  if (input.value.length === 0) {
    input.classList.remove('form__input--invalid');
  }
};

const handleInputsChange = () => {
  formInputs.forEach((input) => {
    input.addEventListener('input', inputChangeHandler);
    input.addEventListener('focus', inputChangeHandler);
  });
};

const formatPhoneNumber = () => {


  phoneInput.addEventListener('input', (evt) => {
    const input = evt.target;
    const cursorPosition = input.selectionStart;
    const rawValue = input.value;
    const lastInputChar = rawValue[cursorPosition - 1];

    const cleaned = rawValue.replace(/[^\d+]/g, '');

    if (cleaned.length === 1 && cleaned !== '7') {
      input.value = `+7 (${ lastInputChar}`;
      input.setSelectionRange(5, 5);
      return;
    }

    if (cleaned === '7') {
      input.value = `+7 (${ lastInputChar}`;
      input.setSelectionRange(5, 5);
      return;
    }

    if (cleaned.indexOf('+7') !== 0) {
      input.value = '+7 (';
      input.setSelectionRange(4, 4);
      return;
    }

    let formatted = '';
    if (cleaned.length > 2) {
      formatted += `+7 (${cleaned.substring(2, 5)}`;
    }
    if (cleaned.length >= 5) {
      formatted += `) ${cleaned.substring(5, 8)}`;
    }
    if (cleaned.length >= 8) {
      formatted += `-${cleaned.substring(8, 10)}`;
    }
    if (cleaned.length >= 10) {
      formatted += `-${cleaned.substring(10, 12)}`;
    }

    input.value = formatted;

    const newCursorPosition = calculateCursor(cursorPosition, rawValue, input.value);
    input.setSelectionRange(newCursorPosition, newCursorPosition);
  });
};

export const handleFormValidation = () => {
  form.addEventListener('submit', formSumbitHandler);
  handleFormTextVisibility();
  handleInputsChange();
  formatPhoneNumber();
  clearFormFields();
};
