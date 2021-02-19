import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  // 保存状态
  state: {
    count: 10,
  },
  // 更改状态
  mutations: {
    add(state) {
      state.count++;
    },
    reduce(state) {
      state.count--;
    },
  },
  // actions主要起承上启下作用,提交的是mutations,一切异步操作
  actions: {
    add(context) {
      setTimeout(() => {
        context.commit("add");
      }, 2000);
    },
    reduce(context) {
      context.commit("reduce");
    },
  },
  modules: {},
});
