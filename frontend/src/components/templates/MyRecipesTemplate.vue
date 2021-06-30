<template>
  <div class="mt-5">
    <MyRecipesSectionTitle />

    <MyRecipesList v-if="hasRecipes" />
    <NoReceipesMessage v-else text="Você não possui nenhuma receita..." />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRecipeStore } from '@/store'

const recipeStore = useRecipeStore()

const hasRecipes = computed(() => !!Object.keys(recipeStore.currentUserRecipes).length)
</script>
