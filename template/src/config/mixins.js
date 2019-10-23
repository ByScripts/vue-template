import Vue from 'vue';

Vue.mixin({
  methods: {
    /**
     * @param   {string}  title     The message to be displayed
     * @param   {number}  duration  The notification duration in milliseconds.
     */
    $addError(title, duration = 14000) {
      this.$notify({ type: 'error', title: message, duration });
    },
    /**
     * @param   {string}  title     The message to be displayed
     * @param   {number}  duration  The notification duration in milliseconds.
     */
    $addSuccess(title, duration = 7000) {
      this.$notify({ type: 'success', title: message, duration });
    },
  },
});
