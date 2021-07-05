<template>
  <RecipeListGrid>
    <RecipeCardSkeletonLoading
      v-for="n in 3"
      :key="n"
      :subtitle="subtitle"
      :actions="actions"
    />
  </RecipeListGrid>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

defineProps({
  subtitle: {
    default: false,
  },
  actions: {
    default: false,
  },
})
</script>
