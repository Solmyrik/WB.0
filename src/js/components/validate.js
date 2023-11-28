import { state } from '../models/model';

const errorOption = {
  name: { emptiness: 'Укажите имя' },
  surname: {
    emptiness: 'Введите фамилию',
  },
  email: {
    error: 'Проверьте адрес электронной почты',
    emptiness: 'Укажите электронную почту',
  },
  tel: {
    error: 'Формат: +9 999 999 99 99',
    emptiness: 'Укажите номер телефона',
  },
  inn: {
    error: 'Проверьте ИНН',
    emptiness: 'Укажите ИНН',
  },
};

// функция для валидации форм

export function validate(input) {
  if (input.value.length === 0 && state.errors[input.id]) {
    checkEmptiness(input);
  }

  if (input.value.length === 0) return;

  let parrent = input.parentElement.parentElement;
  let errorText = parrent.querySelector('.form__subtitle');

  if (input.id === 'email') {
    let emailError = isValidEmail(input.value);

    if (state.errors.email === true && emailError === true) {
      errorText.classList.add('none');
      input.classList.remove('error');
    }

    if (emailError !== true) {
      errorText.classList.remove('none');
      input.classList.add('error');
      errorText.textContent = errorOption.email['error'];
      state.errors.email = true;
    }
  }

  if (input.id === 'tel') {
    let telError = input.value.length === 16 ? true : false;

    if (state.errors.tel === true && telError === true) {
      errorText.classList.add('none');
      input.classList.remove('error');
    }

    if (telError !== true) {
      errorText.classList.remove('none');
      input.classList.add('error');
      errorText.textContent = errorOption.tel['error'];
      state.errors.tel = true;
    }
  }

  if (input.id === 'inn') {
    let innError = input.value.length === 14 ? true : false;

    if (state.errors.inn === true && innError === true) {
      errorText.classList.add('none');
      input.classList.remove('error');
    }

    if (innError !== true) {
      errorText.classList.remove('none');
      errorText.classList.add('error');
      input.classList.add('error');
      errorText.textContent = errorOption.inn['error'];
      state.errors.inn = true;
    }
  }

  if (input.id === 'name' && state.errors.name) {
    if (input.value.length > 0) {
      errorText.classList.add('none');
      input.classList.remove('error');
    }
  }

  if (input.id === 'surname' && state.errors.surname) {
    if (input.value.length > 0) {
      errorText.classList.add('none');
      input.classList.remove('error');
    }
  }
}

// функция для валидации простых форм по типу имени и фамилии
// проверяет пустоту поля

export function validateSimpleInput(input) {
  if (input.value.length === 0) {
    let parrent = input.parentElement.parentElement;
    let errorText = parrent.querySelector('.form__subtitle');
    errorText.classList.remove('none');
    input.classList.add('error');
  }
}

// функция, которая валидирует почту

function isValidEmail(email) {
  if (email.length === 0) return true;

  const reg = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;

  return !reg.test(email) ? 'error' : true;
}

// функция на проверку пустых полей

export function checkEmptiness(input) {
  const id = input.id;
  let parrent = input.parentElement.parentElement;
  let errorText = parrent.querySelector('.form__subtitle');
  errorText.classList.remove('none');
  errorText.classList.add('error');
  input.classList.add('error');

  state.errors[id] = true;

  errorText.textContent = errorOption[id]['emptiness'];
}
