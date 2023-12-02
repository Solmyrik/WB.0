export const state = {
  missing: 3,
  errors: {
    name: false,
    surname: false,
    email: false,
    tel: false,
    inn: false,
  },
  products: {
    product1: {
      quantity: 1,
      max: 2,
      oldPrice: 1051,
      discount: 50.33301617507136,
      counter: 'counter1',
      price: 'price1',
      priceOld: 'priceOld1',
      checked: true,
    },
    product2: {
      quantity: 200,
      max: 300,
      oldPrice: 11500.235,
      discount: 8.695474483782288,
      counter: 'counter2',
      price: 'price2',
      priceOld: 'priceOld2',
      checked: true,
    },
    product3: {
      quantity: 2,
      max: 2,
      oldPrice: 475,
      discount: 48,
      counter: 'counter3',
      price: 'price3',
      priceOld: 'priceOld3',
      checked: true,
    },
  },
  total: 203,
  allprice: 2101063,
  allOldPrice: 2302048,
  allProducts: 3,
};