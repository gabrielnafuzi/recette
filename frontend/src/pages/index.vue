<template>
  <div
    class="grid md:grid-cols-2 py-8 gap-12 gap-y-14 lg:grid-cols-3 sm:grid-cols-1 xl:grid-cols-3"
  >
    {{ recipeStore.recipes }}
  </div>
</template>

<script lang="ts" setup>
import { useRecipeStore } from '@/store'

const recipeStore = useRecipeStore()

const getRecipes = async () => await recipeStore.list()

getRecipes()
</script>

<route lang="yaml">
meta:
  layout: recette
</route>
