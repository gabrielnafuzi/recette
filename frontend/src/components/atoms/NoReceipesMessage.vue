<template>
  <p class="text-center mt-10 font-semibold text-2xl">
    {{ text }}
  </p>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

defineProps({
  text: {
    type: String,
    required: true,
  },
})
</script>
