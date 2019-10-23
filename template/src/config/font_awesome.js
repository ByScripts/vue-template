import Vue from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faArrowAltCircleLeft,
} from '@fortawesome/free-regular-svg-icons';
import {
  faCheckCircle,
  faExclamation,
  faInfo,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';

Vue.component('FontAwesomeIcon', FontAwesomeIcon);

Vue.prototype.$icons = {
  cancel: faArrowAltCircleLeft,
  confirm: faCheckCircle,
  info: faInfo,
  spinner: faSpinner,
  warning: faExclamation,
};
