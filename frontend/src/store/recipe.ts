import { defineStore } from 'pinia'
import { api } from '@/services'
import { Recipe } from '@/models'
import { ApiResponse } from '@/types'

const useRecipeStore = defineStore({
  id: 'recipe',
  state: () => ({
    recipes: [] as Recipe[],
    recipe: {} as Recipe,
  }),
  getters: {},
  actions: {
    async list() {
      try {
        const response: ApiResponse<Recipe[]> = await api.get('/recipes')

        if (response.content) {
          this.recipes = response.content
        }
      } catch (e) {
        throw new Error(e)
      }
    },
  },
})

export default useRecipeStore
