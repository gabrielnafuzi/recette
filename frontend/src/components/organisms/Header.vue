<template>
  <header class="flex flex-col sm:(items-center flex-row) justify-between">
    <Logo class="cursor-pointer" @click="router.push('/')" />
    <NavBar class="<sm:mt-3" />
  </header>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>
