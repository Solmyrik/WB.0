// функция, которая открывает попап

export function popupOpen(popup) {
  popup.classList.add('active');

  document.addEventListener('click', (e) => {
    if (e.target.tagName === 'svg') return;
    if (e.target.id === popup.id || e.target.className.includes('closest')) {
      popupClose(popup);
    }
  });
}

// функция, которая закрывает попап

export function popupClose(popup) {
  popup.classList.remove('active');
}

export function onTrigger(trigger, index, triggers) {
  const boxes = document.querySelectorAll('.popup-delivery__box');

  triggers.forEach((t) => t.classList.remove('active'));
  boxes.forEach((b) => b.classList.remove('active'));
  trigger.classList.add('active');
  boxes[index].classList.add('active');
}

export function deleteRadio(radio) {
  let item = radio;

  while (item) {
    if (item.classList.contains('popup-delivery__item')) {
      break;
    }
    item = item.parentElement;
  }

  const input = item.querySelector('.radiobox__input');

  if (!input.checked) {
    item.remove();
  }
}
