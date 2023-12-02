import { state } from '../models/model';

const textOptions = {
  0: 'Отсутствуют · 0 товаров',
  1: 'Отсутствует · 1 товар',
};

// функция для удаления товаров из отсутсующего списка и обновление счетчика этих товаров

export function deleteMissingCart(itemRemove, counter) {
  let item = itemRemove;

  while (item) {
    if (item.classList.contains('missing__item')) {
      break;
    }
    item = item.parentElement;
  }

  item.remove();
  state.missing = state.missing - 1;

  counter.textContent =
    state.missing > 1 ? `Отсутствуют · ${state.missing} товара` : textOptions[state.missing];
}
