<template>
  <div class=" mx-auto bg-gray-200 h-full p-4">
    <p class="text-green">
      {{ auth.currentUser?.name }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from '@/store'

const auth = useAuthStore()

const getData = async () => {
  // await auth.login('gabriel@email.com', 'Abc12345')
  await auth.getCurrentUser()
}

getData()
</script>
