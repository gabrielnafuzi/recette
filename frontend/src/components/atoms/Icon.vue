<template>
  <div :style="`width: ${size}px; height: ${size}px`">
    <span class="iconify w-full h-full" :data-icon="name" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: [String, Number],
      required: false,
      default: '20',
    },
  },
})
</script>
