import { onBlur, onFocus } from './components/form';
import { formattingPhone } from './components/formattingPhone';
import { handleLike } from './components/like';
import { checkEmptiness, validate } from './components/validate';
import { deleteMissingCart } from './components/missing';
import { transfer, hideContent, inputChange } from './components/transfer';
import { state } from './models/model';
import { deleteRadio, onTrigger, popupClose, popupOpen } from './components/popup';
import { chooseСard } from './components/payment';
import {
  changeCheckbox,
  changeMainCheckbox,
  onDecrement,
  onIncrement,
  removeCart,
} from './components/cart';
import { chooseDelivery } from './components/delivery';

const cartPrices = document.querySelectorAll('.body-cart__prices');
const cartRight = document.querySelectorAll('.body-cart__right');
const cartContent = document.querySelectorAll('.body-cart__content');

// вызываем функцию при первом запуске
// функция для перемещения элементов по DOM при адаптации
transfer(cartPrices, cartRight, cartContent, 767);

// функция для перемещения элементов по DOM при адаптации
window.addEventListener('resize', () => {
  transfer(cartPrices, cartRight, cartContent, 767);
});

// функционал для скрытия/раскрытия контета при нажатии на стрелки
const arrowButtons = document.querySelectorAll('.arrow');
const content = document.querySelectorAll('.hide-content');

arrowButtons.forEach((arrow, i) => {
  arrow.addEventListener('click', () => {
    hideContent(arrow, content[i], i);
  });
});

// при нажатии на чекбокс меняем текст на кнопке, подгружая цену
const inputPay = document.querySelector('#input-pay');
const totalText = document.querySelector('.total__text');
const totalButton = document.querySelector('.total__button');

inputPay.addEventListener('change', () => inputChange(inputPay, totalText, totalButton));

// функционал для удаления отсутствующих товаров
const missingCounter = document.querySelector('.missing__title');
const missingRemoves = document.querySelectorAll('.missing__remove');

missingRemoves.forEach((removeItem) => {
  removeItem.addEventListener('click', () => deleteMissingCart(removeItem, missingCounter));
});

// функционал для добавления в избранные
const likes = document.querySelectorAll('.like');
likes.forEach((like) => like.addEventListener('click', (e) => handleLike(like)));

// поднятие текста placeholed при активномом фокусе и валидация

const formInputs = document.querySelectorAll('.form__input');
formInputs.forEach((input) => {
  input.addEventListener('focus', () => onFocus(input));
});

formInputs.forEach((input) => {
  input.addEventListener('blur', () => {
    onBlur(input);
    validate(input);
  });
});

// валидация форм

formInputs.forEach((input) => {
  input.addEventListener('input', () => {
    if (state.errors[input.id]) {
      validate(input);
    }
  });
});

// валидация номера телефона

const tel = document.querySelector('#tel');
tel.addEventListener('input', (event) => {
  event.target.value = formattingPhone(event.target.value);
  if (state.errors.tel) {
    validate(event.target);
  }
});

// валидация в случае нажатия кнопки

totalButton.addEventListener('click', () => {
  formInputs.forEach((input) => {
    validate(input);
    checkEmptiness(input);
  });
});

// открытие попапов

const popup1 = document.querySelector('#popup1');
const popup2 = document.querySelector('#popup2');
const popupButton1 = document.querySelectorAll('.popup-click1');
const popupButton2 = document.querySelectorAll('.popup-click2');

popupButton1.forEach((button) => {
  button.addEventListener('click', () => popupOpen(popup1));
});

popupButton2.forEach((button) => {
  button.addEventListener('click', () => popupOpen(popup2));
});

// изменение выбора оплаты

const buttonPayment = document.querySelector('.popup-payment__button');
const radioPayment = document.querySelectorAll('.payment-radio');

buttonPayment.addEventListener('click', (e) => {
  e.preventDefault();
  chooseСard(radioPayment);
  popupClose(popup1);
});

// изменение выбора пункта доставки

const buttonDelivery = document.querySelector('.popup-delivery__button');
const radioDelivery = document.querySelectorAll('.delivery-radio');

buttonDelivery.addEventListener('click', (e) => {
  e.preventDefault();
  chooseDelivery(radioDelivery);
  popupClose(popup2);
});

// изменение выбора пункта доставки

const buttonDelivery2 = document.querySelector('.popup-delivery__button2');
const radioDelivery2 = document.querySelectorAll('.delivery-radio2');

buttonDelivery2.addEventListener('click', (e) => {
  e.preventDefault();
  chooseDelivery(radioDelivery2);
  popupClose(popup2);
});

// counter
// добавление и уменьшение элементов

const increments = document.querySelectorAll('.counter__increment');
const decrements = document.querySelectorAll('.counter__decrement');

increments.forEach((increment) => {
  increment.addEventListener('click', () => {
    onIncrement(increment);
  });
});

decrements.forEach((decrement) => {
  decrement.addEventListener('click', () => onDecrement(decrement));
});

// функционал для главного чекбокса

const mainCheckbox = document.querySelector('#maincheckbox');

mainCheckbox.addEventListener('change', (e) => changeMainCheckbox(e.target));

// навешивание событий на чекбоксы продуктов
// также в функции передается id продуктов

const checkBox1 = document.querySelector('#checkbox1');
const checkBox2 = document.querySelector('#checkbox2');
const checkBox3 = document.querySelector('#checkbox3');

checkBox1.addEventListener('change', (e) => changeCheckbox(checkBox1, 'product1'));
checkBox2.addEventListener('change', (e) => changeCheckbox(checkBox2, 'product2'));
checkBox3.addEventListener('change', (e) => changeCheckbox(checkBox3, 'product3'));

// удаление карточек продуктов

const removeItemsCart = document.querySelectorAll('.body-cart__remove');

removeItemsCart.forEach((item, i) => {
  item.addEventListener('click', () => removeCart(item));
});

// переключение между вкладками в попапе выбора доставки

const triggers = document.querySelectorAll('.popup-delivery__trigger');

triggers.forEach((trigger, index) => {
  trigger.addEventListener('click', () => onTrigger(trigger, index, triggers));
});

// удаление пунктов выдачи

const radioClose = document.querySelectorAll('.radio__close');

radioClose.forEach((radio) => {
  radio.addEventListener('click', () => {
    deleteRadio(radio);
  });
});
