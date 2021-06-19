<template>
  <div class="mx-auto h-full p-4">
    <Input v-model="email" label="Email" placeholder="johndoe@email.com" />
    {{ email }}
    <p class="text-green">
      {{ auth.currentUser?.name }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from '@/store'
import { ref } from 'vue'

const email = ref('')

const auth = useAuthStore()
</script>
