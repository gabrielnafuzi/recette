<template>
  <Input
    v-model="password"
    placeholder="************"
    :type="type"
    :append-icon="icon"
    :label="label"
    @click:append="toggleVisibility"
  />
</template>

<script lang="ts" setup>
import { computed, defineProps, defineEmit, nextTick, ref } from 'vue'

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  label: {
    default: 'Senha',
  },
})

const emit = defineEmit(['update:modelValue'])

const showPassword = ref(false)
const icon = ref<'ion:eye-sharp' | 'ion:eye-off-sharp' | ''>('ion:eye-off-sharp')
const type = ref<'password' | 'text'>('password')

const password = computed({
  get: () => props.modelValue,
  set: (val) => {
    emit('update:modelValue', val)
  },
})

const toggleVisibility = () => {
  showPassword.value = !showPassword.value

  icon.value = ''
  type.value = showPassword.value ? 'text' : 'password'

  nextTick(() => {
    icon.value = showPassword.value ? 'ion:eye-sharp' : 'ion:eye-off-sharp'
  })
}
</script>
