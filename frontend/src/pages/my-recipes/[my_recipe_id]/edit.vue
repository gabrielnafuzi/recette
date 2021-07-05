<template>
  <div>
    <EditRecipeTemplate />
  </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'
import { useRecipeStore } from '@/store'
import { watch } from '@vue/runtime-core'
import type { Recipe } from '@/models'

const route = useRoute()
const router = useRouter()
const recipeStore = useRecipeStore()

const handleRecipeChange = (val: Recipe) => {
  if (val.status === 'approved') router.push('/my-recipes')
}

watch(() => recipeStore.recipe, handleRecipeChange, { immediate: true, deep: true })

const getRecipe = async () => await recipeStore.show(route.params.my_recipe_id as string)

if (!Object.keys(recipeStore.recipe).length) {
  getRecipe()
}

window.scrollTo({ top: 0 })
</script>
