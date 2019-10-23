export default {
  buildState(rules) {
    const state = {};
    Object.keys(rules).forEach(ruleName => {
      state[ruleName] = false;
    });
    return state;
  },
  registerStoreModule(store, rules) {
    store.registerModule('vueMediaQuery', {
      state: this.buildState(rules),
      mutations: {
        VUE_MEDIA_QUERY_UPDATE(state, { ruleName, match }) {
          state[ruleName] = match;
        },
      },
    });
  },
  registerMediaQueries(store, rules) {
    Object.entries(rules).forEach(([ruleName, rule]) => {
      const mql = window.matchMedia(rule);
      const onChange = (e) => {
        store.commit('VUE_MEDIA_QUERY_UPDATE', { ruleName, match: e.matches });
      };
      mql.addEventListener('change', onChange);
      onChange(mql);
    });
  },
  install(Vue, options = {}) {
    const { store, rules } = options;

    this.registerStoreModule(store, rules);
    this.registerMediaQueries(store, rules);

    Vue.prototype.$media = store.state.vueMediaQuery;
  },
};
