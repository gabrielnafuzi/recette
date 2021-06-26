<template>
  <p class="mt-2 text-xl">{{ recipeStore.recipe.description }}</p>
</template>

<script lang="ts" setup>
import { useRecipeStore } from '@/store'

const recipeStore = useRecipeStore()
</script>
