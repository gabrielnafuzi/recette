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

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    text: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
  },
})
</script>
