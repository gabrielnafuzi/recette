<template>
  <div :style="`width: ${size}px; height: ${size}px`">
    <span class="iconify w-full h-full" :data-icon="name" />
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

defineProps({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: [String, Number],
    default: '20',
  },
})
</script>
