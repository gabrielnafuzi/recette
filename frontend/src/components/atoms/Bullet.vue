<template>
  <div class="w-5 h-5 bg-orange--base flex items-center justify-center rounded-full">
    <span v-if="index" class="text-sm font-bold text-light-200">{{ index }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    index: {
      type: String,
      required: false,
      default: '',
    },
  },
})
</script>

<style scoped></style>
