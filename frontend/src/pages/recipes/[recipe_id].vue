<template>
  <RecipeDetailsTemplate />
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { useRecipeStore } from '@/store'
import RecipeDetailsTemplate from '@/components/templates/RecipeDetailsTemplate.vue'

const route = useRoute()

const recipeStore = useRecipeStore()

const getRecipe = async () => await recipeStore.show(route.params.recipe_id as string)

if (!Object.keys(recipeStore.recipe).length) {
  getRecipe()
}
</script>
