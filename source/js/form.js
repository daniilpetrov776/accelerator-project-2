import { calculateCursor, validateEmail, validatePhone, validateInput } from './utils';

const formInputs = document.querySelectorAll('.form__input');
const form = document.querySelector('.form__form-field');
const emailInput = document.querySelector('.form__input--email');
const phoneInput = document.querySelector('.form__input--phone');

export const handleFormLabelVisibility = () => {
  formInputs.forEach((input) => {
    input.addEventListener('change', () => {
      const label = input.nextElementSibling;
      if (label?.tagName === 'LABEL') {
        label.style.opacity = input.value.length > 0 ? '0' : '';
      }
    });
  });
};

const clearFormFields = () => {
  window.addEventListener('beforeunload', () => {
    if (form) {
      form.reset();
    }
  });
};

const formSumbitHandler = (evt) => {
  let isFormValid = true;
  let firstInvalidInput = null;

  formInputs.forEach((input) => {
    input.classList.remove('form__input--invalid');
    input.setCustomValidity('');

    if (!input.validity.valid) {
      input.classList.add('form__input--invalid');
      isFormValid = false;
    }
  });

  if (!validateInput(phoneInput, validatePhone, 'Пожалуйста, введите номер телефона в указанном формате: +7 (000)-000-00-00.')) {
    isFormValid = false;
    if (!firstInvalidInput) {
      firstInvalidInput = phoneInput;
    }
  }

  if (!validateInput(emailInput, validateEmail, 'Пожалуйста, заполните адрес почты в корректном формате.')) {
    isFormValid = false;
    if (!firstInvalidInput) {
      firstInvalidInput = emailInput;
    }
  }

  if (firstInvalidInput) {
    firstInvalidInput.reportValidity();
  }

  formInputs.forEach((input) => {
    if (!input.value) {
      input.classList.add('form__input--invalid');
      isFormValid = false;
    }
  });

  if (!isFormValid) {
    evt.preventDefault();
  }
};

const handleInputEvent = (evt) => {
  const input = evt.target;

  if (input.value.length === 0) {
    input.classList.remove('form__input--invalid');
    input.setCustomValidity('');
    return;
  }

  if (input === emailInput && validateEmail(input.value)) {
    input.classList.remove('form__input--invalid');
    input.setCustomValidity('');
  } else if (input === phoneInput && validatePhone(input.value)) {
    input.classList.remove('form__input--invalid');
    input.setCustomValidity('');
  }
};

const addInputListeners = (input, events, handler) => {
  events.forEach((event) => input.addEventListener(event, handler));
};

const handleInputsChange = () => {
  formInputs.forEach((input) => {
    addInputListeners(input, ['input', 'focus', 'change'], handleInputEvent);
  });
};

const moveCursorBetweenGroups = (input, direction) => {
  const cursorPosition = input.selectionStart;

  const groups = [...input.value.matchAll(/\d+/g)].map((match) => ({
    start: match.index,
    end: match.index + match[0].length,
  }));

  if (direction === 'right') {
    for (const group of groups) {
      if (group.start > cursorPosition) {
        input.setSelectionRange(group.start, group.start);
        break;
      }
    }
  } else if (direction === 'left') {
    for (let i = groups.length - 1; i >= 0; i--) {
      if (groups[i].end < cursorPosition) {
        input.setSelectionRange(groups[i].start, groups[i].start);
        break;
      }
    }
  }
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
  phoneInput.addEventListener('keydown', (evt) => {
    if (evt.ctrlKey && (evt.key === 'ArrowRight' || evt.key === 'ArrowLeft')) {
      evt.preventDefault();
      const direction = evt.key === 'ArrowRight' ? 'right' : 'left';
      moveCursorBetweenGroups(evt.target, direction);
    }
  });
};

const setupSubmitHandler = () => {
  form.addEventListener('submit', formSumbitHandler);
};

const setupPhoneFormatting = () => {
  formatPhoneNumber();
};

const attachFormListeners = () => {
  handleFormLabelVisibility();
  handleInputsChange();
  clearFormFields();
};

export const handleFormValidation = () => {
  setupSubmitHandler();
  attachFormListeners();
  setupPhoneFormatting();
};
