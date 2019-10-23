import Vue from 'vue';
import VueMediaQuery from '../plugins/VueMediaQuery';
import store from './store';

const rules = {
  desktop: '(min-width: 769px)',
};

Vue.use(VueMediaQuery, { store, rules });
