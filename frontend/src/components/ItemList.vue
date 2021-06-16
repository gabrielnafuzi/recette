<template>
  <ul class="mt-4">
    <li v-for="(item, idx) in cart.items" :key="idx">
      <span><strong>Name:</strong> {{ item.name }}</span>
      -
      <span><strong>Url:</strong> {{ item.url }}</span>
      -
      <button @click="cart.removeItem(item)">
        X
      </button>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { useCartStore } from '@/store/cart'

const cart = useCartStore()
</script>
