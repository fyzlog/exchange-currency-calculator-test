const exchangeCalculator = require('exchange-currency-calculator').exchangeCalculator;

const shopExchangeCalculator = exchangeCalculator({ app_id: 'c6e024f8803841208d82cb1f23d5838c', base: 'USD' });
const shopCartExchangeCalculator = shopExchangeCalculator([
    { currencyCode: 'RUB', currencyField: 'rubles' },
    { currencyCode: 'EUR', currencyField: 'euros' },
    { currencyCode: 'USD', currencyField: 'US dollars' },
    { currencyCode: 'GBP', currencyField: 'pounds' },
    { currencyCode: 'JPY', currencyField: 'yens' }
]);

const selectedCart = [
    { price: 20 },
    { price: 45 },
    { price: 67 },
    { price: 1305 }
];

const totalCartPricePromise = shopCartExchangeCalculator(selectedCart)
    .then(console.debug)
    .catch(console.error);