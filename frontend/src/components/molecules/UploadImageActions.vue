<template>
  <div class="wrapper">
    <label
      type="button"
      class="flex items-center border-r pr-2 text-base cursor-pointer font-normal"
      :for="forElement"
    >
      <Icon name="ion-camera-outline" class="mr-1" size="22" />

      Alterar
    </label>

    <button
      type="button"
      class="text-base font-normal tracking-wider ml-2"
      @click.prevent.once="$emit('delete')"
    >
      <Icon name="ion-trash-outline" size="22" />
    </button>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

defineProps({
  forElement: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
.wrapper {
  @apply flex items-center py-1 px-4 rounded-full max-w-36 shadow-darken
    bg-black bg-opacity-60 text-light-100;
}
</style>
