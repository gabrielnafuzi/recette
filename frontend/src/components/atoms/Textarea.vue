<template>
  <div class="textarea-wrapper">
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

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    modelValue: {
      type: [String, Number],
      default: '',
    },
    label: {
      type: String,
      required: false,
      default: '',
    },
    error: {
      type: Boolean,
      required: false,
      default: false,
    },
    errorMessage: {
      type: String,
      required: false,
      default: '',
    },
  },
  emits: ['update:modelValue'],
  setup(_, { emit }) {
    const updateModel = (event: Event) => {
      emit('update:modelValue', (event.target as HTMLTextAreaElement).value)
    }

    return {
      updateModel,
    }
  },
})
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
    focus:outline-none focus:border-typo--base;
}

.textarea.error {
  @apply border-red-500;
}
</style>
