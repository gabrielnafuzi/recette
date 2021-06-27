<template>
  <RecipeListGrid>
    <RecipeCard
      v-for="recipe in recipeStore.currentUserRecipes"
      :key="recipe.id"
      :recipe="recipe"
      :to="`/recipes/${recipe.id}`"
      :show-owner-name="false"
      show-status
    >
      <template #actions>
        <MyRecipesRecipeCardActions :recipe-id="recipe.id" />
      </template>
    </RecipeCard>
  </RecipeListGrid>
</template>

<script lang="ts" setup>
import { useRecipeStore } from '@/store'

const recipeStore = useRecipeStore()
</script>
