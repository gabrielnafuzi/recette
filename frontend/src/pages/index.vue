<template>
  <div class="flex flex-col items-start max-w-3/4 mx-auto bg-gray-200 h-full p-4">
    {{ auth.currentUser }}
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from '@/store'

const auth = useAuthStore()

const getData = async () => {
  await auth.login('gabriel@email.com', 'Abc1234')
  // await auth.getCurrentUser()
}

getData()
</script>

<route lang="yaml">
meta:
  layout: home
</route>
