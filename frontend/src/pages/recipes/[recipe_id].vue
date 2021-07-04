<template>
  <div>
    <RecipeDetailsTemplate />
  </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'
import { useRecipeStore } from '@/store'
import { NOT_ALLOWED_TO_SEE_ERROR_MESSAGE } from '@/constants'

const route = useRoute()
const router = useRouter()
const recipeStore = useRecipeStore()

const getRecipe = async () => {
  try {
    await recipeStore.show(route.params.recipe_id as string)
  } catch (e) {
    if (e.message === NOT_ALLOWED_TO_SEE_ERROR_MESSAGE) {
      router.push('/')
    }
  }
}

if (!Object.keys(recipeStore.recipe).length) {
  getRecipe()
}

window.scrollTo({ top: 0 })
</script>
