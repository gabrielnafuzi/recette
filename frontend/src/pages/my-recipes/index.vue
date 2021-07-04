<template>
  <MyRecipesTemplate />
</template>

<script lang="ts" setup>
import { useRecipeStore } from '@/store'

const recipeStore = useRecipeStore()

const getRecipesOfCurrentUser = async () => await recipeStore.listOfCurrentUser()

getRecipesOfCurrentUser()
</script>
