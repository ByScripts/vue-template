import Vue from 'vue';

export default {
  $root: null,
  component: null,
  isMounted: false,
  mount(message, yesHandler, noHandler, clickedElement) {
    if (this.isMounted) {
      return;
    }

    this.isMounted = true;

    const container = document.createElement('div');
    document.body.appendChild(container);
    const Constructor = Vue.extend(this.component);
    this.$root = new Constructor({ propsData: { message } }).$mount(container);

    this.$root.$on('confirm', () => {
      this.handle(yesHandler, clickedElement);
    });

    this.$root.$on('cancel', () => {
      this.handle(noHandler, clickedElement);
    });
  },
  unMount() {
    this.$root.$destroy();
    this.$root.$el.remove();
    this.isMounted = false;
  },
  async handle(handler, clickedElement) {
    this.$root.$props.busy = true;
    await handler(clickedElement);
    this.unMount();
  },
  declareDirective() {
    Vue.directive('confirm', (clickedElement, { value = {} }) => {
      const { message, yes, no = () => {}, on = 'click' } = value;

      if (!message) {
        throw new Error('v-confirm requires a "message" option.');
      }

      if (!yes) {
        throw new Error('v-confirm requires a "yes" option.');
      }

      clickedElement.addEventListener(on, (event) => {
        event.preventDefault();
        this.mount(message, yes, no, clickedElement);
      });
    });
  },
  install(Vue, options = {}) {
    if (!options.component) {
      throw new Error('VueConfirm requires a "component" option');
    }
    this.component = options.component;
    this.declareDirective();
  },
};
