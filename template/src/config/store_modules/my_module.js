import Vue from 'vue';

export default {
  state: {
    myModule: {},
  },
  mutations: {
    APP_MY_MODULE_TODO(state, { foo }) {
      state.myData = foo;
    },
  },
  actions: {
    appMyModuleTodo({ commit }, { foo }) {
      commit('APP_MY_MODULE_TODO', { foo });
    },
  },
};
