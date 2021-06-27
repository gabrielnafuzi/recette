<template>
  <div class="mt-5">
    <MyRecipesSectionTitle />

    <MyRecipesList v-if="hasRecipes" />
    <p v-else class="text-center mt-10 font-semibold text-2xl">
      Você não possui nenhuma receita...
    </p>
  </div>
</template>

<script lang="ts" setup>
import { useRecipeStore } from '@/store'
import { computed } from '@vue/runtime-core'

const recipeStore = useRecipeStore()

const hasRecipes = computed(() => !!Object.keys(recipeStore.currentUserRecipes).length)
</script>
