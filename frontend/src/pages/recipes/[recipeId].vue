<template>
  <div class="flex flex-col items-start max-w-3/4 mx-auto bg-gray-200 h-full p-4">
    {{ route.params.recipeId }}
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<route lang="yaml">
meta:
  layout: home
</route>
