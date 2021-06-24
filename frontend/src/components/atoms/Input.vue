<template>
  <div class="input-wrapper" :class="parentClass">
    <label v-if="label" class="label" :class="{ error }">{{ label }}</label>
    <div class="input-block" :class="{ error }">
      <input
        v-bind="$attrs"
        ref="modelInput"
        :value="modelValue"
        class="flex-1 bg-transparent placeholder-gray--lighten focus:outline-none"
        @input="updateModel"
      />

      <Icon
        v-if="clearable"
        class="ml-1 text-current hover:cursor-pointer"
        name="ion:close"
        size="26"
        @click="clearField"
      />

      <Icon
        v-if="appendIcon"
        class="ml-1 text-current hover:cursor-pointer"
        :name="appendIcon"
        size="26"
        @click="handleAppendClick"
      />
    </div>
    <span v-if="error" class="text-red-500 text-sm ml-2 mt-[2px]">
      {{ errorMessage }}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

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
    appendIcon: {
      type: String,
      required: false,
      default: '',
    },
    clearable: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: ['update:modelValue', 'click:append'],
  setup(_, { emit }) {
    const modelInput = ref<HTMLInputElement>()

    const updateModel = (event: Event) => {
      emit('update:modelValue', (event.target as HTMLInputElement).value)
    }

    const focus = () => {
      modelInput.value?.focus()
    }

    const clearField = () => {
      focus()

      emit('update:modelValue', null)
    }

    const handleAppendClick = () => {
      focus()

      emit('click:append')
    }

    return {
      updateModel,
      clearField,
      modelInput,
      handleAppendClick,
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

.input-block {
  @apply w-full rounded-md shadow-lighten p-3 py-[10px]
    font-normal text-lg
    flex items-center justify-between
    border-1 border-gray--lighten
    text-gray--lighten transition-colors
    focus-within:(outline-none border-typo--lighten ring-2
                ring-gray--lighten ring-opacity-20 text-typo--darken);
}

.input.error {
  @apply border-red-500;
}
</style>
