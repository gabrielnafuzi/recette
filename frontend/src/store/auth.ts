import { defineStore } from 'pinia'
import { CurrentUser } from '@/models'
import { api } from '@/services'
import { ApiResponse, Token } from '@/types'

type LoginAndSignupResponse = {
  token: Token
  user: CurrentUser
}

type SignupInputs = {
  name: string
  email: string
  password: string
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
      try {
        const response: ApiResponse<LoginAndSignupResponse> = await api.post(
          '/auth/login',
          {
            email,
            password,
          },
        )

        this.handleLoginAndSignupResponse(response)
      } catch (error) {
        throw new Error(error)
      }
    },
    async signup(payload: SignupInputs) {
      try {
        const response: ApiResponse<LoginAndSignupResponse> = await api.post(
          '/users',
          payload,
        )

        this.handleLoginAndSignupResponse(response)
      } catch (error) {
        throw new Error(error)
      }
    },
    handleLoginAndSignupResponse(response: ApiResponse<LoginAndSignupResponse>) {
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
