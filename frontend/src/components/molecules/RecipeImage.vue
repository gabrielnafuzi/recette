<template>
  <div class="h-md w-full mt-5">
    <img
      class="max-w-full max-h-full w-full h-full object-cover rounded-lg shadow-lighten"
      :src="recipeStore.recipe.image.url"
      :alt="recipeStore.recipe.title"
    />
  </div>
</template>

<script lang="ts" setup>
import { useRecipeStore } from '@/store'

const recipeStore = useRecipeStore()
</script>
