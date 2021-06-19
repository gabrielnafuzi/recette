<template>
  <div class=" mx-auto bg-gray-200 h-full p-4">
    <Button text="Entrar" />
    <p class="text-green">
      {{ auth.currentUser?.name }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from '@/store'

const auth = useAuthStore()
</script>
