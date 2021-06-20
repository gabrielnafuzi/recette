<template>
  <div class="input-wrapper" :class="parentClass">
    <label v-if="label" class="label" :class="{ error }">{{ label }}</label>
    <input
      class="input"
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
    parentClass: {
      type: String,
      required: false,
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
      emit('update:modelValue', (event.target as HTMLInputElement).value)
    }

    return {
      updateModel,
    }
  },
})
</script>

<style scoped>
.input-wrapper {
  @apply flex flex-col w-full max-w-[400px] items-start justify-center;
}

.label {
  @apply ml-1 font-semibold text-lg text-typo--base;
}

.label.error {
  @apply text-red-500;
}

.input {
  @apply w-full rounded-md shadow-lighten-2 p-3
  font-normal text-base
    border-2 border-gray--lighten
    placeholder-gray--lighten
    focus:(outline-none border-typo--base);
}

.input.error {
  @apply border-red-500;
}
</style>
