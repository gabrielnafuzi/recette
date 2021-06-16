import axios, { AxiosInstance } from 'axios'
import { useAuthStore } from '@/store'

const token = window.localStorage.token

const api: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3333',
})

api.interceptors.request.use((config) => {
  if (token) {
    config.headers.Authorization = `Bearer ${token}`

    return config
  }

  const authStore = useAuthStore()
  config.headers.Authorization = `Bearer ${authStore.token}`

  return config
})

api.interceptors.response.use(
  (response) => response.data,
  async (error) => {
    const status = error.response

    if (status === 401) {
      // Log out user
    }
  },
)

export default api
