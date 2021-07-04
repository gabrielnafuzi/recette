<template>
  <div v-if="isAdmin">
    <AdminTemplate />
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore, useRecipeStore } from '@/store'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const recipeStore = useRecipeStore()
const router = useRouter()

const isAdmin = authStore.currentUser?.role === 'admin'

if (!isAdmin) {
  router.push('/')
}

const getAllRecipesToAdmin = async () => await recipeStore.listAllToAdmin()

getAllRecipesToAdmin()
</script>
