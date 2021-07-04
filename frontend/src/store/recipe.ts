import { defineStore } from 'pinia'
import { api } from '@/services'
import { Recipe } from '@/models'
import { ApiResponse } from '@/types'
import { NOT_ALLOWED_TO_SEE_ERROR_MESSAGE } from '@/constants'

const useRecipeStore = defineStore({
  id: 'recipe',
  state: () => ({
    recipes: [] as Recipe[],
    recipe: {} as Recipe,
    currentUserRecipes: [] as Recipe[],
    adminRecipes: [] as Recipe[],
  }),
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
    async listOfCurrentUser() {
      try {
        const response: ApiResponse<{ recipes: Recipe[] }> = await api.get(
          '/recipes/my-recipes',
        )

        if (response.content?.recipes) {
          this.currentUserRecipes = response.content.recipes
        }
      } catch (e) {
        throw new Error(e)
      }
    },
    async listAllToAdmin() {
      try {
        const response: ApiResponse<Recipe[]> = await api.get('/recipes/admin')

        if (response.content) {
          this.adminRecipes = response.content
        }
      } catch (e) {
        throw new Error(e)
      }
    },
    async show(id: number | string) {
      try {
        const response: ApiResponse<Recipe> = await api.get(`/recipes/${id}`)

        if (response.content) {
          this.recipe = response.content
        }
      } catch (e) {
        if (e?.response?.status === 403) {
          throw new Error(NOT_ALLOWED_TO_SEE_ERROR_MESSAGE)
        }

        throw new Error(e)
      }
    },
    async destroy(id: number | string) {
      try {
        await api.delete(`/recipes/${id}`)
      } catch (e) {
        throw new Error(e)
      }
    },
    async create(recipe: FormData) {
      try {
        await api.post('/recipes', recipe)
      } catch (e) {
        throw new Error(e)
      }
    },
    async update(recipe: FormData, recipeId: number | string) {
      try {
        await api.patch(`/recipes/${recipeId}`, recipe)
      } catch (e) {
        throw new Error(e)
      }
    },
  },
})

export default useRecipeStore
