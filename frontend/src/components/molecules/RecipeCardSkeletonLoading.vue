<template>
  <div class="rounded shadow-darken bg-white rounded w-full">
    <div class="h-48 bg-gray-200 animate-pulse" />

    <div class="p-5">
      <div class="flex justify-between items-center">
        <div class="w-full">
          <div class="w-4/5 h-4 rounded-sm bg-gray-200 animate-pulse" />
          <div
            v-if="subtitle"
            class="w-3/5 h-4 rounded-sm bg-gray-200 animate-pulse mt-3"
          />
        </div>

        <div v-if="actions" class="flex items-center justify-around">
          <div class="rounded-full bg-gray-200 h-8 w-8 mr-4" />
          <div class="rounded-full bg-gray-200 h-8 w-8" />
        </div>
      </div>
    </div>
  </div>
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
