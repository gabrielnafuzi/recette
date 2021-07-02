<template>
  <SectionTitle
    :title="`Editar receita: ${recipeStore.recipe.title ?? '...'}`"
    class="mt-5"
  />

  <FormCard class="mt-11 py-6 px-12 max-w-xl mx-auto">
    <EditRecipeForm />
  </FormCard>
</template>

<script lang="ts" setup>
import { useRecipeStore } from '@/store'

const recipeStore = useRecipeStore()
</script>
