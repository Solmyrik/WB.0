const paymentOption = {
  radio1: '/public/images/popup/mir.svg',
  radio2: '/public/images/popup/visa.svg',
  radio3: '/public/images/popup/mastercard.svg',
  radio4: '/public/images/popup/maestro.svg',
};

// функция для управления выбора способа оплаты

export function chooseСard(radioPayment) {
  const images = document.querySelectorAll('.img-cart');

  radioPayment.forEach((radio) => {
    if (radio.checked) {
      images.forEach((img) => (img.src = paymentOption[radio.id]));
    }
  });
}
