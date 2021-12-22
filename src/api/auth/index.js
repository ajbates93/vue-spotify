import request from './request'

export default {
  getUserAuthURL() {
    return request.get('login')
  },

  refreshToken(token) {
    return request.get(`refresh_token?refresh_token?${token}`)
  }
}