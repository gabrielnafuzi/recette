<template>
  <h1 class="text-typo--darken font-semibold text-[42px] tracking-wide mb-8">
    {{ title }}
  </h1>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>
