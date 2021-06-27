<template>
  <div>
    <h1 class="font-bold text-typo--darken text-3xl">Ingredientes</h1>

    <ul class="mt-3 ml-4 md:ml-7">
      <li
        v-for="ingredient in recipeStore.recipe.ingredients"
        :key="ingredient.index"
        class="flex items-center mb-1"
      >
        <Bullet class="w-3 h-3" />
        <span class="text-lg ml-2 text-typo--darken">{{ ingredient.text }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { useRecipeStore } from '@/store'

const recipeStore = useRecipeStore()
</script>
