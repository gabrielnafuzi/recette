<template>
  <router-view />
</template>

<script lang="ts" setup>
import { useAuthStore } from '@/store'

const auth = useAuthStore()

if (window.localStorage.token) {
  const getCurrentUser = async () => await auth.getCurrentUser()

  getCurrentUser()
}
</script>
