"use strict";

var exchangeCalculator = require('exchange-currency-calculator').exchangeCalculator;

var shopExchangeCalculator = exchangeCalculator({
  app_id: 'c6e024f8803841208d82cb1f23d5838c',
  base: 'USD'
});
var shopCartExchangeCalculator = shopExchangeCalculator([{
  currencyCode: 'RUB',
  currencyField: 'rubles'
}, {
  currencyCode: 'EUR',
  currencyField: 'euros'
}, {
  currencyCode: 'USD',
  currencyField: 'US dollars'
}, {
  currencyCode: 'GBP',
  currencyField: 'pounds'
}, {
  currencyCode: 'JPY',
  currencyField: 'yens'
}]);
var selectedCart = [{
  price: 20
}, {
  price: 45
}, {
  price: 67
}, {
  price: 1305
}];
var totalCartPricePromise = shopCartExchangeCalculator(selectedCart).then(console.debug)["catch"](console.error);