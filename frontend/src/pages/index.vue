<template>
  <div class="mx-auto h-full p-4">
    <div class="flex">
      <p>kkk</p>
      <Divider />
      <p>kkkkk</p>
    </div>

    {{ description }}
    <p class="text-green">
      {{ auth.currentUser?.name }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from '@/store'
import { ref } from 'vue'

const description = ref('')

const auth = useAuthStore()
</script>
