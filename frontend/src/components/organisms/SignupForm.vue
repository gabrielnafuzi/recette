<template>
  <form class="w-full" @submit.prevent.stop="handleSignup">
    <Input
      v-model="name"
      placeholder="John Doe"
      label="Nome"
      parent-class="mb-4"
      :disabled="isLoading"
    />

    <Input
      v-model="email"
      placeholder="johndoe@email.com"
      label="Email"
      parent-class="mb-4"
      :disabled="isLoading"
      :rules="[rules.required, rules.isEmailValid]"
    />

    <PasswordField v-model="password" parent-class="mb-6" :disabled="isLoading" />
    <PasswordField
      v-model="confirmPassword"
      parent-class="mb-6"
      :disabled="isLoading"
      label="Confirme sua senha"
      :rules="confirmPasswordRule"
    />

    <Button type="submit" text="Cadastrar" :loading="isLoading" :disabled="isLoading" />
  </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useAuthStore } from '@/store'
import { useRouter } from 'vue-router'
import { rules } from '@/utils'

const authStore = useAuthStore()

const router = useRouter()

const isLoading = ref(false)

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const confirmPasswordRule = ref([
  (v: string) => rules.areValuesEqual(v, password.value, 'As senhas não correspondem'),
])

const handleSignup = async () => {
  isLoading.value = true

  try {
    await authStore.signup({
      name: name.value,
      email: email.value,
      password: password.value,
    })

    router.push('/my-receipes')
  } finally {
    isLoading.value = false
  }
}
</script>
