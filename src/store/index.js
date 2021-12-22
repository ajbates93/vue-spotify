import Vue from 'vue'
import Vuex from 'vuex'
import vuexPersistedState from 'vuex-persistedstate'

import auth from './modules/auth'
import app from './modules/app'
import user from './modules/user'

Vue.use(Vuex)

const persistedState = vuexPersistedState({
  key: 'spotify_app_state',
  reducer: state => ({
    auth: state.auth
  })
})

export default new Vuex.Store({
  modules: {
    auth,
    app,
    user
  },
  plugins: [
    persistedState
  ]
})
