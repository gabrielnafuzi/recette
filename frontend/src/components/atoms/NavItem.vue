<template>
  <router-link v-if="to" :to="to" class="nav-item" exact-active-class="active">
    {{ text }}
  </router-link>

  <span v-else class="nav-item">{{ text }}</span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    text: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: false,
      default: '',
    },
  },
})
</script>

<style scoped>
.nav-item {
  @apply font-semibold text-lg text-typo--darken transition-colors
  hover:(text-orange--base cursor-pointer);
}

.nav-item.active {
  @apply text-orange--base;
}
</style>
