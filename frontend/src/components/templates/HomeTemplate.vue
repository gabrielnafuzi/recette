<template>
  <RecipeListGrid>
    <RecipeCard
      v-for="recipe in recipeStore.recipes"
      :key="recipe.id"
      :recipe="recipe"
      :to="`/recipes/${recipe.id}`"
    />
  </RecipeListGrid>
</template>

<script lang="ts" setup>
import { useRecipeStore } from '@/store'

const recipeStore = useRecipeStore()
</script>
