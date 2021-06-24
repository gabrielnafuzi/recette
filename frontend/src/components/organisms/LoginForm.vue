<template>
  <form class="w-full" @submit.prevent.stop="handleLogin">
    <Input
      v-model="email"
      placeholder="johndoe@email.com"
      label="Email"
      parent-class="mb-4"
      :disabled="isLoading"
    />
    <Input
      v-model="password"
      placeholder="************"
      label="Senha"
      type="password"
      parent-class="mb-6"
      :disabled="isLoading"
    />
    <Button type="submit" text="Entrar" :loading="isLoading" :disabled="isLoading" />
  </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useAuthStore } from '@/store'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()

const router = useRouter()

const isLoading = ref(false)
const email = ref('')
const password = ref('')

const handleLogin = async () => {
  isLoading.value = true

  try {
    await authStore.login(email.value, password.value)

    router.push(authStore.currentUser?.role === 'admin' ? '/admin' : '/my-receipes')
  } finally {
    isLoading.value = false
  }
}
</script>
