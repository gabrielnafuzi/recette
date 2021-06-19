<template>
  <div class="mx-auto h-full p-4">
    <Textarea
      v-model="description"
      label="Descrição"
      placeholder="Qual a origem desta receita? Qual foi sua inspiração, por que é especial, o que a torna única, para quem você a cozinhou?"
    />
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
