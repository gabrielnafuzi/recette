<template>
  <div class="w-5 h-5 bg-orange--base flex items-center justify-center rounded-full">
    <span v-if="index" class="text-sm font-bold text-light-200">{{ index }}</span>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

defineProps({
  index: {
    type: [Number, String],
    default: '',
  },
})
</script>
