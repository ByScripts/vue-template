import Vue from 'vue';
import { Datetime } from 'vue-datetime';
import { Settings } from 'luxon';

import 'vue-datetime/dist/vue-datetime.css';

Settings.defaultLocale = 'fr';

Vue.component('DateTimePicker', Datetime);
