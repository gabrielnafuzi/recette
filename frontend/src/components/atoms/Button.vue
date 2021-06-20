<template>
  <button class="btn" :class="[loading ? 'cursor-wait' : 'cursor-pointer']">
    <span v-if="!loading" class="font-bold text-[22px] ">{{ text }}</span>
    <Spinner v-else />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    text: {
      type: String,
      required: true,
    },
    loading: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
})
</script>

<style scoped>
.btn {
  @apply px-4 py-1 rounded-md flex items-center justify-center outline-none
    w-full max-w-[400px] h-[50px]
    transition-all
    bg-orange--base text-white shadow-darken tracking-wider
    hover:bg-orange--darken
    focus:(ring-2 ring-dark-100)
    disabled:(bg-gray-300 opacity-80);
}
</style>
