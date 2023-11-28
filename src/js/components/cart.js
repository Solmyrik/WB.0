import { state } from '../models/model';

// функция, которая инкрементирует счетчик, если проходит проверки
// запускает функции по обновлению цен

export function onIncrement(increment) {
  const id = increment.parentNode.id;
  const current = state.products[id].quantity;
  const counter = document.querySelector(`#${state.products[id].counter}`);
  const price = document.querySelector(`#${state.products[id].price}`);
  const oldPrice = document.querySelector(`#${state.products[id].priceOld}`);

  if (current + 1 <= state.products[id].max) {
    state.products[id].quantity += 1;
    counter.value = state.products[id].quantity;

    const newPrice = subtractPercentage(state.products[id].oldPrice, state.products[id].discount);
    priceUpdate(price, state.products[id].quantity, newPrice);
    oldPriceUpdate(oldPrice, state.products[id].quantity, state.products[id].oldPrice);
    console.log(price);
  }

  const isDarkening = state.products[id].quantity === state.products[id].max;

  const decrement = increment.parentNode.querySelector('.counter__decrement');

  darkening(increment, isDarkening, decrement);

  allQuantityUpdate();
  allPriceUpdate();
  allOldPriceUpdate();
  discountUpdate();
}

// функция, которая декрементирует счетчик, если проходит проверки
// запускает функции по обновлению цен

export function onDecrement(decrement) {
  const id = decrement.parentNode.id;
  const current = state.products[id].quantity;
  const counter = document.querySelector(`#${state.products[id].counter}`);
  const price = document.querySelector(`#${state.products[id].price}`);
  const oldPrice = document.querySelector(`#${state.products[id].priceOld}`);

  console.log(counter);

  if (current > 1) {
    state.products[id].quantity -= 1;
    counter.value = state.products[id].quantity;

    const newPrice = subtractPercentage(state.products[id].oldPrice, state.products[id].discount);
    priceUpdate(price, state.products[id].quantity, newPrice);
    oldPriceUpdate(oldPrice, state.products[id].quantity, state.products[id].oldPrice);
    console.log(price);
  }

  const isDarkening = state.products[id].quantity === 1;

  const increment = decrement.parentNode.querySelector('.counter__increment');

  darkening(decrement, isDarkening, increment);

  allPriceUpdate();
  allQuantityUpdate();
  allOldPriceUpdate();
  discountUpdate();
}

// функция для обновления цены

function priceUpdate(priceContainer, quantity, newPrice) {
  let sum = Math.floor(quantity * newPrice);

  if (sum > 100000) {
    sum = addSpaces(sum);
  }

  priceContainer.textContent = sum;
}

// функция для обновления старой цены

function oldPriceUpdate(priceContainer, quantity, price) {
  let sum = Math.floor(quantity * price);

  if (sum > 100000) {
    sum = addSpaces(sum);
  }

  priceContainer.textContent = `${sum} сом`;
}

// функция для обновления общей цены

function allPriceUpdate() {
  const totalPrice = document.querySelector('#total-price');

  let oneProduct = subtractPercentage(
    state.products.product1.oldPrice,
    state.products.product1.discount,
  );
  let twoProduct = subtractPercentage(
    state.products.product2.oldPrice,
    state.products.product2.discount,
  );
  let threeProduct = subtractPercentage(
    state.products.product3.oldPrice,
    state.products.product3.discount,
  );

  let oneSum = state.products.product1.checked ? oneProduct * state.products.product1.quantity : 0;
  let twoSum = state.products.product2.checked ? twoProduct * state.products.product2.quantity : 0;
  let threeSum = state.products.product3.checked
    ? threeProduct * state.products.product3.quantity
    : 0;

  let allSum = Math.floor(oneSum) + Math.floor(twoSum) + Math.floor(threeSum);

  state.allprice = allSum;

  if (allSum > 100000) {
    allSum = addSpaces(allSum);
  }

  totalPrice.textContent = `${allSum} сом`;

  return allSum;
}

// функция для обновления общей старой цены

function allOldPriceUpdate() {
  const contentBox = document.querySelector('#allOldPrice');

  let oneSum = state.products.product1.checked
    ? state.products.product1.oldPrice * state.products.product1.quantity
    : 0;

  let twoSum = state.products.product2.checked
    ? state.products.product2.oldPrice * state.products.product2.quantity
    : 0;

  let threeSum = state.products.product3.checked
    ? state.products.product3.oldPrice * state.products.product3.quantity
    : 0;

  let result = Math.floor(oneSum) + Math.floor(twoSum) + Math.floor(threeSum);

  state.allOldPrice = result;

  if (result > 100000) {
    result = addSpaces(result);
  }

  contentBox.textContent = `${result} сом`;

  return result;
}

// функция для обновления количества наименований продуктов

function allQuantityUpdate() {
  const contentBox = document.querySelector('#allquantity');

  let quantity1 = state.products.product1.checked ? state.products.product1.quantity : 0;
  let quantity2 = state.products.product2.checked ? state.products.product2.quantity : 0;
  let quantity3 = state.products.product3.checked ? state.products.product3.quantity : 0;

  const result = quantity1 + quantity2 + quantity3;

  contentBox.textContent = `${result} товаров`;

  state.total = result;
}

// функция для обновления скидки

function discountUpdate() {
  const contentBox = document.querySelector('#discount');
  let result = state.allOldPrice - state.allprice;

  if (result > 100000) {
    result = addSpaces(result);
  }

  contentBox.textContent = `−${result} сом`;
}

// функция для подсчета процента

function subtractPercentage(number, percentage) {
  return number - number * (percentage / 100);
}

//функция для добавления пробелов в случае использования больших чисел

export function addSpaces(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '\u202F');
}

// функция, которая показывает пользователю, что больше нельзя инкрементировать/декрементировать

function darkening(item, bool, antagonistItem) {
  if (bool === true) {
    item.classList.add('blur');
    antagonistItem.classList.remove('blur');
  } else {
    item.classList.remove('blur');
  }
}

//Функция, которая срабатывает при нажатии на главный чекбокс

export function changeMainCheckbox(checbox) {
  const checkbox1 = document.querySelector('#checkbox1');
  const checkbox2 = document.querySelector('#checkbox2');
  const checkbox3 = document.querySelector('#checkbox3');
  if (!checbox.checked) {
    checkbox1.checked = false;
    checkbox2.checked = false;
    checkbox3.checked = false;

    state.products.product1.checked = false;
    state.products.product2.checked = false;
    state.products.product3.checked = false;

    state.allProducts = 0;
    allQuantityUpdate();
    allPriceUpdate();
    allOldPriceUpdate();
    discountUpdate();
    updateAllProducts();
  } else {
    checkbox1.checked = true;
    checkbox2.checked = true;
    checkbox3.checked = true;

    state.products.product1.checked = true;
    state.products.product2.checked = true;
    state.products.product3.checked = true;
    state.allProducts = 3;

    allQuantityUpdate();
    allPriceUpdate();
    allOldPriceUpdate();
    discountUpdate();
    updateAllProducts();
  }
}

//Функция, которая обновляет количество позиций

function updateAllProducts() {
  const quantity = document.querySelector('.header__quantity');
  const quantityMob = document.querySelector('.menu-mob__quantity');

  console.log(quantity);

  quantity.textContent = state.allProducts;
  quantityMob.textContent = state.allProducts;
}

//Функция, которая срабатывает при нажатии на чекбоксы продуктов
// вызывает функции для обновления цен

export function changeCheckbox(checkbox, product) {
  if (!checkbox.checked || checkbox === false) {
    state.products[product].checked = false;

    state.allProducts = countingProducts();
    allQuantityUpdate();
    allPriceUpdate();
    allOldPriceUpdate();
    discountUpdate();
    updateAllProducts();
  } else {
    state.products[product].checked = true;
    state.products.product2.checked = true;
    state.products.product3.checked = true;
    state.allProducts = countingProducts();

    allQuantityUpdate();
    allPriceUpdate();
    allOldPriceUpdate();
    discountUpdate();
    updateAllProducts();
  }
}

//функция для удаления продукта из списка
// вызывает функции для обновления цен

export function removeCart(itemRemove) {
  let item = itemRemove;

  while (item) {
    if (item.classList.contains('body-cart__item')) {
      break;
    }
    item = item.parentElement;
  }

  const product = item.querySelector('.body-cart__counter');

  state.products[product.id].checked = false;

  state.allProducts = countingProducts();
  allQuantityUpdate();
  allPriceUpdate();
  allOldPriceUpdate();
  discountUpdate();
  updateAllProducts();

  item.remove();
}

// функция для подсчета количества активных наименований продукта

function countingProducts() {
  let result = 0;
  if (state.products.product1.checked === true) result++;
  if (state.products.product2.checked === true) result++;
  if (state.products.product3.checked === true) result++;

  console.log(result, 're');

  state.allProducts = result;

  return result;
}
