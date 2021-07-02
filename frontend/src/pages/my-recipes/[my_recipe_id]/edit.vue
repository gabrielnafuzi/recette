<template>
  <div>
    <EditRecipeTemplate />
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { useRecipeStore } from '@/store'

const route = useRoute()

const recipeStore = useRecipeStore()

const getRecipe = async () => await recipeStore.show(route.params.my_recipe_id as string)

if (!Object.keys(recipeStore.recipe).length) {
  getRecipe()
}

window.scrollTo({ top: 0 })
</script>
