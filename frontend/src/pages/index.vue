<template>
  <HomeTemplate />
</template>

<script lang="ts" setup>
import { useRecipeStore } from '@/store'

const recipeStore = useRecipeStore()

const getRecipes = async () => await recipeStore.list()

getRecipes()
</script>
