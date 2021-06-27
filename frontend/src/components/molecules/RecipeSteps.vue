<template>
  <div>
    <h1 class="font-bold text-typo--darken text-3xl">Instruções</h1>

    <ul class="mt-3 ml-4 md:ml-7">
      <li
        v-for="step in recipeStore.recipe.steps"
        :key="step.index"
        class="flex flex-wrap mb-4"
      >
        <Bullet class="w-6 h-6 mt-1" :index="step.index + 1" />
        <span class="text-lg ml-2 text-typo--darken max-w-[90%]">
          {{ step.text }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { useRecipeStore } from '@/store'

const recipeStore = useRecipeStore()
</script>
