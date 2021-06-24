import axios, { AxiosInstance } from 'axios'
import { useAuthStore } from '@/store'
import { Notyf } from 'notyf'

const notyf = new Notyf()

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
  (response) => {
    notyf.success(response.data.message)

    return response.data
  },
  async (error) => {
    const errorMessage = error.response.data.error
    const { status } = error.response

    notyf.error({
      message: errorMessage,
      position: { x: 'center', y: 'top' },
      dismissible: true,
    })

    if (status === 401) {
      // Log out user
    }
  },
)

export default api
