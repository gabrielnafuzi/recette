<template>
  <div>
    <div class="flex items-center justify-between">
      <h1 class="text-typo--darken text-2xl font-bold" v-bind="$attrs">{{ title }}</h1>

      <slot name="actions" />
    </div>
    <Divider />
  </div>
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
