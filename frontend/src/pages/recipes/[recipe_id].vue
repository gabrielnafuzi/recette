<template>
  <div>
    <RecipeDetailsTemplate />
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useRecipeStore } from '@/store'

const route = useRoute()

const recipeStore = useRecipeStore()

const getRecipe = async () => await recipeStore.show(route.params.recipe_id as string)

if (!Object.keys(recipeStore.recipe).length) {
  getRecipe()
}

onMounted(() => window.scrollTo({ top: 0 }))
</script>
