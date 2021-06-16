<template>
  <form class="flex justify-start gap-2" @submit.prevent.stop="submit">
    <input
      v-model="inputs.name"
      type="text"
      placeholder="name"
      class="px-2 py-1 rounded-md"
    />
    <input
      v-model="inputs.url"
      type="text"
      placeholder="url"
      class="px-2 py-1 rounded-md"
    />

    <button
      type="submit"
      class="bg-dark-400 text-light-100 rounded-md
      w-32
    "
    >
      Add
    </button>
  </form>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { useCartStore } from '@/store/cart'

export default defineComponent({
  setup() {
    const cart = useCartStore()

    const inputs = reactive({ name: '', url: '' })
    const submit = () => {
      cart.addItem({ ...inputs })

      inputs.name = ''
      inputs.url = ''
    }

    return {
      inputs,
      submit,
    }
  },
})
</script>
