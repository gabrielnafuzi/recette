<template>
  <SignupTemplate />
</template>

<script lang="ts" setup>
import { useAuthStore } from '@/store'
import router from '@/router'

const authStore = useAuthStore()

if (authStore.currentUser) router.push('/')
</script>
