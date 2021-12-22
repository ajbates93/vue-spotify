import api from '@/api'

const state = {
  accessToken: '',
  refreshToken: '',
  expiry: ''
}

const getters = {
  getAccessToken: (state) => state.accessToken,
  getRefreshToken: (state) => state.refreshToken,
  getExpiry: (state) => state.expiry,
}

const mutations = {
  SET_ACCESS_TOKEN(state, token) {
    state.accessToken = token;
  },

  SET_REFRESH_TOKEN(state, token) {
    state.refreshToken = token;
  },

  SET_EXPIRY(state, time) {
    state.expiry = time;
  }
}

const actions = {
  setAccessToken({commit}, token) {
    commit('SET_ACCESS_TOKEN', token)
  },
  setRefreshToken({commit}, token) {
    commit('SET_REFRESH_TOKEN', token)
  },
  setExpiry({commit}, time) {
    commit('SET_EXPIRY', time)
  },
  async login() {
    try {
      const response = await api.auth.getUserAuthURL()
      if (response.data)
        window.location.href = response.data
    } catch (e) {
      Error(`API Error in 'login'! ${e}`)
    }
  },

  async refreshToken({state, dispatch}) {
    try {
      if (state.refreshToken) {
        const response = await api.auth.refreshToken(state.refreshToken)
        const accessToken = response.data.access_token
        dispatch('setAccessToken', accessToken)
        return response
      }
    } catch (e) {
      Error(`API Error in 'refreshToken'! ${e}`)
    }
  },

  logout() {
    let script = document.createElement('script')

    script.src = "https://www.spotify.com/logout/"
    document.getElementById('app').appendChild(script)

    window.localStorage.clear()
    window.sessionStorage.clear()

    setTimeout(() => {
      location.reload()
    }, 1000)
  }
}

const module = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

export default module