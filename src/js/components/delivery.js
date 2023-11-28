const deliveryOption = {
  radiodelivery1: {
    text: 'г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1',
    rating: '',
  },
  radiodelivery2: {
    text: 'г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1',
    rating: '4.99',
  },
  radiodelivery3: {
    text: 'г. Бишкек, улица Табышалиева, д. 57',
    rating: '4.99',
  },
  radiodelivery4: {
    text: 'Бишкек, улица Табышалиева, 57',
    rating: '',
  },
  radiodelivery5: {
    text: 'Бишкек, улица Жукеева-Пудовкина, 77/1',
    rating: '',
  },
  radiodelivery6: {
    text: 'Бишкек, микрорайон Джал, улица Ахунбаева Исы, 67/1',
    rating: '',
  },
};

//функция, которая меняет пункт выдачи

export function chooseDelivery(radioDelivery) {
  const adres1 = document.querySelector('.point__adres');
  const adres2 = document.querySelector('.adres-delivery');
  const rating = document.querySelector('.delivery-rating');

  radioDelivery.forEach((radio) => {
    if (radio.checked) {
      adres1.textContent = deliveryOption[radio.id].text;
      adres2.textContent = deliveryOption[radio.id].text;
      rating.textContent = deliveryOption[radio.id].rating;
    }
  });
}
