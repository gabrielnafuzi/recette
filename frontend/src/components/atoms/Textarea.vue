<template>
  <div class="textarea-wrapper" :class="parentClass">
    <label v-if="label" class="label" :class="{ error }">{{ label }}</label>
    <textarea
      class="textarea"
      :class="{ error }"
      v-bind="$attrs"
      :value="modelValue"
      @input="updateModel"
    />
    <span v-if="error" class="text-red-500 text-sm ml-2 mt-[2px]">
      {{ errorMessage }}
    </span>
  </div>
</template>

<script lang="ts" setup>
import { defineEmit, defineProps } from 'vue'

defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  label: {
    default: '',
  },
  parentClass: {
    default: '',
  },
  error: {
    default: false,
  },
  errorMessage: {
    default: '',
  },
})

const emit = defineEmit(['update:modelValue'])

const updateModel = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLTextAreaElement).value)
}
</script>

<style scoped>
.textarea-wrapper {
  @apply flex flex-col w-full max-w-full items-start justify-center;
}

.label {
  @apply ml-1 mb-1
    font-semibold text-lg text-typo--base;
}

.label.error {
  @apply text-red-500;
}

.textarea {
  @apply w-full max-w-full h-36 rounded-md shadow-lighten p-3
    font-normal text-lg
    border-1 border-gray--lighten
    placeholder-gray--lighten text-typo--darken
  bg-white transition-colors
    focus-within:(outline-none border-typo--lighten ring-2
    ring-orange--lighten ring-opacity-20 );
}

.textarea.error {
  @apply border-red-500;
}
</style>
