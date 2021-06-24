import { defineStore } from 'pinia'
import { CurrentUser } from '@/models'
import { api } from '@/services'
import { ApiResponse, Token } from '@/types'

type LoginResponse = {
  token: Token
  user: CurrentUser
}

const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    currentUser: null as CurrentUser | null,
    token: null as Token,
  }),
  getters: {},
  actions: {
    async login(email: string, password: string) {
      const response: ApiResponse<LoginResponse> = await api.post('/auth/login', {
        email,
        password,
      })

      if (response?.content) {
        this.currentUser = response.content.user
      }

      if (response?.content?.token) {
        this.token = response.content.token
        localStorage.setItem('token', response.content.token)
      }
    },
    async getCurrentUser() {
      const response: ApiResponse<{ user: CurrentUser }> = await api.get('/auth/me')

      if (response?.content?.user) {
        this.currentUser = response.content?.user
      }
    },
  },
})

export default useAuthStore
