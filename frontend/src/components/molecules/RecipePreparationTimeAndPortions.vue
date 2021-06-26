<template>
  <div class="mt-5 flex">
    <div class="mr-5">
      <h3 class="title">Tempo de preparo</h3>
      <h4 class="subtitle">{{ recipeStore.recipe.preparationTime }}</h4>
    </div>

    <Divider vertical />

    <div class="ml-5">
      <h3 class="title">Porções para</h3>
      <h4 class="subtitle">
        {{ recipeStore.recipe.portions }}
        {{ recipeStore.recipe.portions > 1 ? 'pessoas' : 'pessoa' }}
      </h4>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRecipeStore } from '@/store'

const recipeStore = useRecipeStore()
</script>

<style scoped>
.title {
  @apply text-lg text-typo-lighten font-semibold;
}

.subtitle {
  @apply text-base font-bold text-typo--base;
}
</style>
