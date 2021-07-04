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

    <MenuDropdown
      v-if="authStore.currentUser"
      class="mr-6 sm:(mr-0 ml-6)"
      :title="authStore.currentUser.name || '...'"
    >
      <NavItem
        text="Sair"
        class="block px-4 py-2 text-sm capitalize hover:bg-gray-100"
        @click.stop="logout"
      />
    </MenuDropdown>
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
