<template>
  <div class="relative">
    <button
      class="flex items-center focus:outline-none"
      @click="dropdownOpen = !dropdownOpen"
    >
      <span class="font-semibold text-lg text-typo--darken mr-[2px]">
        {{ title }}
      </span>

      <Icon v-if="dropdownOpen" name="ion-chevron-up" class="icon animate-rotate-in" />

      <Icon v-else name="ion-chevron-down" class="icon animate-rotate-in-down-left" />
    </button>

    <div
      v-show="dropdownOpen"
      class="fixed inset-0 h-full w-full z-10"
      @click="dropdownOpen = false"
    />

    <ul
      v-show="dropdownOpen"
      class="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20"
    >
      <slot />
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, ref } from 'vue'

defineProps({
  title: {
    type: String,
    required: true,
  },
})

const dropdownOpen = ref(false)
</script>

<style scoped>
.icon {
  @apply animated animate-duration-300;
}
</style>
