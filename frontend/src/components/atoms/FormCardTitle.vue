<template>
  <h1 class="text-typo--darken font-semibold text-[42px] tracking-wide mb-8">
    {{ title }}
  </h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
  },
})
</script>
