<template>
  <router-link
    :to="to"
    class="
      text-lg text-orange--base font-bold underline underline-offset-auto
      transition-colors hover:text-orange--darken
    "
  >
    {{ text }}
  </router-link>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

defineProps({
  text: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
})
</script>
