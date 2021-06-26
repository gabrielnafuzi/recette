<template>
  <SectionTitle title="Receitas mais recentes" class="mt-5" />

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
import SectionTitle from '../atoms/SectionTitle.vue'

const recipeStore = useRecipeStore()
</script>
