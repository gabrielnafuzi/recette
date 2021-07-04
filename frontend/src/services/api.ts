import axios, { AxiosInstance } from 'axios'
import { useAuthStore, useRecipeStore } from '@/store'
import { Notyf } from 'notyf'

const notyf = new Notyf({
  duration: 3000,
  dismissible: true,
})

const api: AxiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL || 'http://localhost:3333'}`,
})

api.interceptors.request.use((config) => {
  const token = window.localStorage.token

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
    notyf.success({
      message: response.data.message,
      position: { x: 'left', y: 'bottom' },
      duration: 2000,
    })

    return response.data
  },
  async (error) => {
    const errorMessage = error.response.data.error
    const { status } = error.response

    notyf.error({
      message: errorMessage,
      position: { x: 'center', y: 'top' },
    })

    if (status === 401) {
      const authStore = useAuthStore()
      const recipeStore = useRecipeStore()

      authStore.$reset()
      recipeStore.$reset()

      window.localStorage.removeItem('token')
    }

    return Promise.reject(error)
  },
)

export default api
