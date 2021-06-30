<template>
  <hr
    class="flex-1"
    :class="[
      vertical
        ? 'w-0 max-w-0 border-r-1 min-h-full max-h-full h-[inherit]'
        : 'max-w-full border-t-1 h-0 max-h-0',
    ]"
  />
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

defineProps({
  vertical: {
    default: false,
  },
})
</script>
