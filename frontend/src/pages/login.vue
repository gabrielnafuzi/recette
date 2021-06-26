<template>
  <LoginTemplate />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useAuthStore } from '@/store'
import router from '@/router'

const authStore = useAuthStore()

export default defineComponent({
  created() {
    if (authStore.currentUser) router.push('/')
  },
})
</script>
