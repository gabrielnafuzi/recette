<template>
  <div>
    <button
      class="btn-icon"
      @click.stop="$emit('change-recipe-status', props.recipe.id, 'disapproved')"
    >
      <Icon name="ion-ban-outline" size="28" class="text-red--base" />
    </button>

    <button
      class="btn-icon mr-1"
      @click.stop="$emit('change-recipe-status', props.recipe.id, 'approved')"
    >
      <Icon name="ion-checkmark" size="28" class="text-green--base" />
    </button>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import type { PropType } from 'vue'
import type { Recipe } from '@/models'

const props = defineProps({
  recipe: {
    type: Object as PropType<Recipe>,
    required: true,
  },
})
</script>

<style scoped>
.btn-icon {
  @apply rounded-full p-[6px] focus:(outline-none bg-gray-200) transition-colors hover:bg-gray-200;
}
</style>
