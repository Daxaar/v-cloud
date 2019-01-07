import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    processes: [],
    user: null,
    failedLoginAttempts: 0
  },
  mutations: {
    CREATE_USER(state, user) {
      state.user = user;
    }
  },
  actions: {
  }
})
