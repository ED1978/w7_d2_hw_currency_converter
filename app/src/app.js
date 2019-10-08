import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {

  new Vue({
    el: "#app",

    data: {
      exchangeRates: [],
      amount: 0,
      firstCurrency: 0,
      secondCurrency: 0,
      fromEuroConversion: 0,
      toEuroConversion: 0
    },

    mounted(){
      this.fetchExchangeRates();
    },

    methods: {
      fetchExchangeRates: function(){
        const request = fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(data => this.exchangeRates = data);
      },
      convertCurrencyFromEuros: function(){
        const conversion = this.toEuroConversion * this.secondCurrency;
        this.fromEuroConversion = conversion;
      },
      convertCurrencyToEuros: function(){
        const conversion = this.amount / this.firstCurrency;
        this.toEuroConversion = conversion;
      },
      convertNonBaseCurrencies: function(){
        this.convertCurrencyToEuros();
        this.convertCurrencyFromEuros();
      }
    }

  });

});
