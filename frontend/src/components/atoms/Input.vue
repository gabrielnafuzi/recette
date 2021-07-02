<template>
  <div class="input-wrapper" :class="parentClass">
    <label v-if="label" class="label" :class="{ error }">{{ label }}</label>
    <div class="input-block" :class="{ error }">
      <input
        v-bind="$attrs"
        ref="modelInput"
        :value="modelValue"
        class="flex-1 bg-transparent placeholder-gray--lighten text-typo--darken focus:outline-none"
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
    <span
      v-if="error"
      class="text-red-500 text-sm ml-2 mt-[2px] animate-fade-in animated animate-duration-150"
    >
      {{ errorMessage }}
    </span>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmit, ref } from 'vue'
import type { PropType } from 'vue'

type Rule = (v: string) => boolean | string

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  parentClass: {
    default: '',
  },
  label: {
    default: '',
  },
  appendIcon: {
    default: '',
  },
  clearable: {
    default: false,
  },
  rules: {
    type: Array as PropType<Rule[]>,
    default: () => [],
  },
})

const emit = defineEmit(['update:modelValue', 'click:append'])

const modelInput = ref<HTMLInputElement>()
const error = ref(false)
const errorMessage = ref('')

const runRules = (val: string) => {
  for (const rule of props.rules) {
    const result = rule(val)

    if (typeof result === 'string') {
      error.value = true
      errorMessage.value = result

      break
    }

    error.value = false
    errorMessage.value = ''
  }
}

const updateModel = (event: Event) => {
  const val = (event.target as HTMLInputElement).value

  emit('update:modelValue', val)

  if (props.rules.length) runRules(val)
}

const focus = () => modelInput.value?.focus()

const clearField = () => {
  focus()

  emit('update:modelValue', null)
}

const handleAppendClick = () => {
  focus()

  emit('click:append')
}
</script>

<style scoped>
.input-wrapper {
  @apply flex flex-col w-full max-w-full items-start justify-center;
}

.label {
  @apply ml-1 font-semibold text-lg text-typo--base;
}

.label.error {
  @apply text-red-500;
}

.input-block {
  @apply w-full max-w-full rounded-md shadow-lighten p-3 py-[10px]
    font-normal text-lg
    flex items-center justify-between
    border-1 border-gray--lighten
    bg-white text-gray--lighten transition-colors
    focus-within:(outline-none border-typo--lighten ring-2
                ring-orange--lighten ring-opacity-20 text-typo--darken);
}

.input-block.error {
  @apply border-red-500
  focus-within:(outline-none border-typo--lighten ring-2
                ring-red-200 ring-opacity-20);
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
