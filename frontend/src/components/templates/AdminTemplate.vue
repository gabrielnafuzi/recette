<template>
  <SectionTitle title="Admin: Todas receitas" class="mt-5" />

  <AdminRecipesList v-if="hasRecipes" />
  <NoReceipesMessage v-else text="Nenhuma receita cadastrada..." />
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRecipeStore } from '@/store'

const recipeStore = useRecipeStore()

const hasRecipes = computed(() => !!Object.keys(recipeStore.adminRecipes).length)
</script>
