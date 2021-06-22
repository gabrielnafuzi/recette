<template>
  <nav>
    <NavItem text="Receitas" to="/" class="ml-6" />
    <NavItem
      v-if="auth.currentUser"
      text="Minhas receitas"
      to="/my-recipes"
      class="ml-6"
    />
    <NavItem
      v-if="auth.currentUser?.role === 'admin'"
      text="Admin"
      to="/admin"
      class="ml-6"
    />
    <NavItem v-if="auth.currentUser" text="Sair" to="/logout" class="ml-6" />
  </nav>
</template>

<script lang="ts" setup>
import { useAuthStore } from '@/store'

const auth = useAuthStore()
</script>
