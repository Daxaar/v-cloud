import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    processes: [],
    user: null,
    token: localStorage.getItem("token")
  },
  getters: {
    userIsLoggedIn(state) {
      return state.token !== null;
    },
  },
  mutations: {
    createUser(state, user) {
      state.user = user;
    },
    logout(state) {
      localStorage.removeItem("token");
      state.user = null;
      state.token = null;
    },
    login(state, user) {
      state.user = user;
      state.token = "fake_token";
      localStorage.setItem("token", "fake_token");
    }
  },
  actions: {
  }
})
