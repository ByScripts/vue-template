import Vue from 'vue';
import moment from 'moment';

const MoneyFormatter = new Intl.NumberFormat(
  'fr-FR',
  { style: 'currency', currency: 'EUR' },
);

Vue.filter('money', function (value) {
  return MoneyFormatter.format(value / 100);
});

Vue.filter('date', function(value, format) {
  return moment(value).format(format);
});
