<template>
  <div
    class="flex justify-center items-center py-1 px-2 rounded-full max-w-28 shadow-darken"
    :class="colors.background"
  >
    <slot />

    <span class="text-base font-normal tracking-wider" :class="colors.text">
      {{ text }}
    </span>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps } from 'vue'
import type { PropType } from 'vue'

type Mode = 'default' | 'success' | 'warning' | 'error'

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  mode: {
    type: String as PropType<Mode>,
    default: 'default',
  },
})

const modeColors = {
  default: {
    background: 'bg-orange--base',
    text: 'text-light-500',
  },
  success: {
    background: 'bg-green--lighten',
    text: 'text-green--base',
  },
  warning: {
    background: 'bg-orange--lighten',
    text: 'text-orange--base',
  },
  error: {
    background: 'bg-red--lighten',
    text: 'text-red--base',
  },
}

const colors = computed(() => modeColors[props.mode])
</script>
