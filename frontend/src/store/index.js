import { createStore } from 'vuex'

export default createStore({
  state: {
    isAuthenticated: false,
    token: '',
    phone: '',
    serverUrl: 'https://backend-beta-ruddy.vercel.app',
  },
  getters: {
  },
  mutations: {
    initializeStore(state) {
      if (localStorage.getItem('token')) {
        state.token = localStorage.getItem('token')
        state.phone = localStorage.getItem('phone')
        state.isAuthenticated = true
      } else {
        state.token = ''
        state.phone = ''
        state.isAuthenticated = false
      }
    },
    setToken(state, token, phone) {
      state.token = token
      state.phone = phone
      state.isAuthenticated = true
    },
    removeToken(state) {
      state.token = ''
      state.phone = ''
      state.isAuthenticated = false
    },
  },
  actions: {
  },
  modules: {
  }
})
