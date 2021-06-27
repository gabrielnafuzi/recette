<template>
  <nav class="flex flex-wrap">
    <NavItem text="Receitas" to="/" class="mr-6 sm:(mr-0 ml-6)" />
    <NavItem
      v-if="authStore.currentUser"
      text="Minhas receitas"
      to="/my-recipes"
      class="mr-6 sm:(mr-0 ml-6)"
    />
    <NavItem
      v-if="authStore.currentUser?.role === 'admin'"
      text="Admin"
      to="/admin"
      class="mr-6 sm:(mr-0 ml-6)"
    />

    <NavItem
      v-if="!authStore.currentUser"
      text="Entrar"
      to="/login"
      class="mr-6 sm:(mr-0 ml-6)"
    />

    <NavItem
      v-if="!authStore.currentUser"
      text="Criar conta"
      to="/signup"
      class="mr-6 sm:(mr-0 ml-6)"
    />

    <NavItem
      v-if="authStore.currentUser"
      text="Sair"
      class="mr-6 sm:(mr-0 ml-6)"
      @click.stop="logout"
    />
  </nav>
</template>

<script lang="ts" setup>
import { useAuthStore, useRecipeStore } from '@/store'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const recipeStore = useRecipeStore()
const router = useRouter()

const logout = () => {
  authStore.$reset()
  recipeStore.$reset()

  window.localStorage.removeItem('token')

  router.push('/')
}
</script>
