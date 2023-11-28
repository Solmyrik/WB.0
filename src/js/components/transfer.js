// функция для перемещения элемента по DOM при изменении разрешения

import { state } from '../models/model';
import { addSpaces } from './cart';

export function transfer(element, pcParent, mobParent, width) {
  const currentWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

  if (currentWidth <= width && !mobParent[0].className.includes('mob')) {
    mobParent.forEach((parent, i) => {
      parent.appendChild(element[i]);
      mobParent[0].classList.add('mob');
      mobParent[0].classList.remove('pc');
    });
  }

  if (currentWidth > width && !mobParent[0].className.includes('pc')) {
    pcParent.forEach((parent, i) => {
      parent.appendChild(element[i]);
    });
    mobParent[0].classList.add('pc');
    mobParent[0].classList.remove('mob');
  }
}

// функция, которая скрывает или показывает контент при нажатии на кнопку
// также принимает индекс для замены текста в первом случае

export function hideContent(button, content, index) {
  button.classList.toggle('active');
  content.classList.toggle('active');
  if (index === 0) {
    const oneBox = document.querySelector('.top-cart__left-1');
    const twoBox = document.querySelector('.top-cart__left-2');
    const title = document.querySelector('#title-cart');

    let price = state.allprice > 100000 ? addSpaces(state.allprice) : state.allprice;

    title.textContent = `${state.total} товара · ${price} сом`;
    oneBox.classList.toggle('active');
    twoBox.classList.toggle('active');
  }
}

// функция, которая при изменении input-a выводит в кнопку оплаты полную стоимость
// и скрывает текст

export function inputChange(checkBox, text, button) {
  if (checkBox.checked) {
    text.classList.add('hidden');
    button.textContent = `Оплатить ${state.allprice} сом`;
  } else {
    text.classList.remove('hidden');
    button.textContent = `Заказать`;
  }
}
