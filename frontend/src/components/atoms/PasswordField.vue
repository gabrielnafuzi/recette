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

<script lang="ts">
import { computed, defineComponent, nextTick, ref } from 'vue'

export default defineComponent({
  name: 'PasswordField',
  props: {
    modelValue: {
      type: [String, Number],
      default: '',
    },
    label: {
      type: String,
      required: false,
      default: 'Senha',
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
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

    const updateModel = (event: Event) => {
      emit('update:modelValue', (event.target as HTMLInputElement).value)
    }

    return {
      updateModel,
      password,
      showPassword,
      toggleVisibility,
      type,
      icon,
    }
  },
})
</script>
