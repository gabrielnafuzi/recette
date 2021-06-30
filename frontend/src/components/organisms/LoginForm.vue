<template>
  <form class="w-full" @submit.prevent.stop="handleLogin">
    <Input
      v-model="email"
      placeholder="johndoe@email.com"
      label="Email"
      type="email"
      required
      parent-class="mb-4"
      :disabled="isLoading"
      :rules="[rules.required, rules.isEmailValid]"
    />
    <PasswordField
      v-model="password"
      parent-class="mb-6"
      :disabled="isLoading"
      required
    />

    <Button type="submit" text="Entrar" :loading="isLoading" :disabled="isLoading" />
  </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useAuthStore } from '@/store'
import { useRouter, useRoute } from 'vue-router'
import { rules } from '@/utils'

const authStore = useAuthStore()

const router = useRouter()
const route = useRoute()

const isLoading = ref(false)
const email = ref('')
const password = ref('')

const handleLogin = async () => {
  isLoading.value = true

  try {
    await authStore.login(email.value, password.value)

    if (route.query.redirect) {
      return router.push(route.query.redirect as string)
    }

    router.push(authStore.currentUser?.role === 'admin' ? '/admin' : '/my-recipes')
  } finally {
    isLoading.value = false
  }
}
</script>
