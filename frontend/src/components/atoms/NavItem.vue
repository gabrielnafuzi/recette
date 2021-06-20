<template>
  <router-link :to="to" class="nav-item" exact-active-class="active">
    {{ text }}
  </router-link>
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
      required: true,
    },
  },
})
</script>

<style scoped>
.nav-item {
  @apply font-semibold text-lg text-typo--darken transition-colors hover:text-orange--base;
}

.nav-item.active {
  @apply text-orange--base;
}
</style>
