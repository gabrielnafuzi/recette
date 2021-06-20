<template>
  <div
    class="flex justify-center items-center py-1 px-2 rounded-full max-w-28 shadow-lighten-2"
    :class="`${colors.background}`"
  >
    <slot />

    <span class="text-sm font-semibold tracking-wider" :class="`${colors.text}`">
      {{ text }}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

type Mode = 'default' | 'success' | 'warning' | 'error'
type ModeColor = { background: string; text: string }
type ModeColorsOptions = { [key in Mode]: ModeColor }

export default defineComponent({
  props: {
    text: {
      type: String,
      required: true,
    },
    mode: {
      type: String as PropType<Mode>,
      required: false,
      default: 'default',
    },
  },
  setup(props) {
    const modeColors: ModeColorsOptions = {
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

    return {
      colors: modeColors[props.mode],
    }
  },
})
</script>
