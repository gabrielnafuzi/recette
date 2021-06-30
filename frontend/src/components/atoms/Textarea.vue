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
  @apply flex flex-col w-full max-w-[400px] items-start justify-center;
}

.label {
  @apply ml-1 mb-1
    font-semibold text-lg text-typo--base;
}

.label.error {
  @apply text-red-500;
}

.textarea {
  @apply w-full h-40 rounded-md shadow-lighten-2 p-3
    font-normal text-base
    border-2 border-gray--lighten
    placeholder-gray--lighten
    focus:(outline-none border-typo--base);
}

.textarea.error {
  @apply border-red-500;
}
</style>
