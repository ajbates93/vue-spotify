import api from '@/api';

const state = {
  profile: '',
  playlists: ''
}

const getters = {
  getProfile: state => state.profile,
  getPlaylists: state => state.playlists,
}

const mutations = {
  SET_PROFILE(state, profile) {
    state.profile = profile
  },

  SET_PLAYLISTS(state, playlists) {
    if (state.playlists) {
      state.playlists.limit = playlists.limit
      state.playlists.offset = playlists.offset
      state.playlists.next = playlists.next
      state.playlists.total = playlists.total
      state.playlists.items.push(...playlists.items)
    } else {
      state.playlists = playlists
    }
  },

  CLEAR_PLAYLISTS(state) {
    state.playlists = ''
  },
}

const actions = {
  async getUserProfile({commit}) {
    try {
      const response = await api.spotify.users.getUserProfile()
      commit('SET_PROFILE', response.data)
    } catch (e) {
      Error(`API Error in getUserProfile: ${e}`)
    }
  }

  // TODO: 
  //
  // getCurrentUserPlaylists
  // clearUserPlaylists
}

const module = {
  namespaced: true,
  state,
  getters, 
  mutations,
  actions
}

export default module