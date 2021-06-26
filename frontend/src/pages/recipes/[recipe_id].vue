<template>
  <div>
    {{ recipeStore.recipe }}
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { useRecipeStore } from '@/store'

const route = useRoute()

const recipeStore = useRecipeStore()
</script>
