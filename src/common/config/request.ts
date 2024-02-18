import axios from 'axios'
import { BASE_URL } from './api-url'

const SECRET_KEY = '5226c30604afed4787f40f2b40f994f2' // 高德地图key

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000
})

instance.interceptors.request.use(
  (config) => {
    if (config.method?.toLocaleLowerCase() == 'get') {
      config.params = { ...config.params, key: SECRET_KEY }
    }

    return config
  },
  (error) => Promise.reject(error)
)

instance.interceptors.response.use(
  (response) => {
    // response interceptor
    return response
  },
  (error) => Promise.reject(error)
)

export { instance as request }
