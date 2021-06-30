<template>
  <SectionTitle title="Receitas mais recentes" class="mt-5" />

  <RecipeListGrid v-if="recipeStore.recipes.length">
    <RecipeCard
      v-for="recipe in recipeStore.recipes"
      :key="recipe.id"
      :recipe="recipe"
      :to="`/recipes/${recipe.id}`"
    />
  </RecipeListGrid>

  <NoReceipesMessage v-else text="Nenhuma receita aprovada até o momento..." />
</template>

<script lang="ts" setup>
import { useRecipeStore } from '@/store'

const recipeStore = useRecipeStore()
</script>
