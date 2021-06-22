<template>
  <nav>
    <NavItem text="Receitas" to="/" class="mr-6 sm:(mr-0 ml-6)" />
    <NavItem
      v-if="auth.currentUser"
      text="Minhas receitas"
      to="/my-recipes"
      class="mr-6 sm:(mr-0 ml-6)"
    />
    <NavItem
      v-if="auth.currentUser?.role === 'admin'"
      text="Admin"
      to="/admin"
      class="mr-6 sm:(mr-0 ml-6)"
    />

    <NavItem v-if="!auth.currentUser" text="Entrar" to="/login" class="mr-6 sm:(mr-0 ml-6)" />
    <NavItem v-if="auth.currentUser" text="Sair" to="/logout" class="mr-6 sm:(mr-0 ml-6)" />
  </nav>
</template>

<script lang="ts" setup>
import { useAuthStore } from '@/store'

const auth = useAuthStore()
</script>
