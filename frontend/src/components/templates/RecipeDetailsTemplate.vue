<template>
  <div v-if="Object.keys(recipeStore.recipe).length" class="mt-8">
    <SectionTitle :title="recipeStore.recipe.title" class="text-4xl mb-1" />

    <RecipeDetails />
  </div>

  <RecipeDetailsSkeletonLoading v-else />
</template>

<script lang="ts" setup>
import { useRecipeStore } from '@/store'

const recipeStore = useRecipeStore()
</script>
