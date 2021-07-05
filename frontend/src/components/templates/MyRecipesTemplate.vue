<template>
  <div class="mt-5">
    <MyRecipesSectionTitle />

    <RecipeListSkeletonLoading v-if="recipeStore.isLoading" :actions="true" />
    <MyRecipesList v-else-if="hasRecipes" />
    <NoReceipesMessage v-else text="Você não possui nenhuma receita..." />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRecipeStore } from '@/store'

const recipeStore = useRecipeStore()

const hasRecipes = computed(() => !!Object.keys(recipeStore.currentUserRecipes).length)
</script>
