import Vue from 'vue';
import App from './App.vue';
import router from './config/router';
import store from './config/store';
import './config/confirm';
import './config/datetime_picker';
import './config/filters';
import './config/font_awesome';
import './config/form_validation';
import './config/input_mask';
import './config/media_query';
import './config/mixins';
import './config/moment';
import './config/notification';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
