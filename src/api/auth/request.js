import axios from 'axios'

const baseURL = 'http://localhost:4040'

const request = axios.create({
  baseURL
})

export default request