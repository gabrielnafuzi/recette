<template>
  <div>
    <h1 class="text-typo--darken text-2xl font-bold" v-bind="$attrs">{{ title }}</h1>
    <Divider />
  </div>
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
