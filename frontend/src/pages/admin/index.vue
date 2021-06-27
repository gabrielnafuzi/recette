<template>
  <div v-if="isAdmin">
    <h1>Admin page</h1>
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from '@/store'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const isAdmin = authStore.currentUser?.role === 'admin'

if (!isAdmin) {
  router.push('/')
}
</script>
