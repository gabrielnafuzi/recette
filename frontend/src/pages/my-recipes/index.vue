<template>
  <MyRecipesTemplate />
</template>

<script lang="ts" setup>
import { useRecipeStore } from '@/store'

const recipeStore = useRecipeStore()

const getRecipesOfCurrentUser = async () => await recipeStore.listOfCurrentUser()

if (!Object.keys(recipeStore.currentUserRecipes).length) getRecipesOfCurrentUser()
</script>
