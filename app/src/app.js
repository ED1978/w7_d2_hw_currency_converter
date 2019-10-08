import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {

  new Vue({
    el: "#app",

    data: {
      exchangeRates: [],
      amount: 0,
      rate: 0,
      fromEuroConversion: 0,
      toEuroConversion: 0,
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
        const conversion = this.amount * this.rate;
        this.fromEuroConversion = conversion;
      },
      convertCurrencyToEuros: function(){
        const conversion = this.amount / this.rate;
        this.toEuroConversion = conversion;
      }
    }

  });

});
