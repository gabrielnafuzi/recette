<template>
  <div>
    <button
      class="btn-icon"
      :class="banBtnClasses.btn"
      @click.stop="
        recipe.status !== 'disapproved' &&
          $emit('change-recipe-status', recipe.id, 'disapproved')
      "
    >
      <Icon name="ion-ban-outline" size="28" :class="banBtnClasses.icon" />
    </button>

    <button
      class="btn-icon mr-1"
      :class="acceptBtnClasses.btn"
      @click.stop="
        recipe.status !== 'approved' &&
          $emit('change-recipe-status', recipe.id, 'approved')
      "
    >
      <Icon name="ion-checkmark" size="28" :class="acceptBtnClasses.icon" />
    </button>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps } from 'vue'
import type { PropType } from 'vue'
import type { Recipe } from '@/models'

const props = defineProps({
  recipe: {
    type: Object as PropType<Recipe>,
    required: true,
  },
})

const banBtnClasses = computed(() => ({
  btn: props.recipe.status !== 'disapproved' ? 'hover:bg-gray-200' : 'hover:bg-none',
  icon: props.recipe.status === 'disapproved' ? 'text-gray-300' : 'text-red--base',
}))

const acceptBtnClasses = computed(() => ({
  btn: props.recipe.status !== 'approved' ? 'hover:bg-gray-200' : 'hover:bg-none',
  icon: props.recipe.status === 'approved' ? 'text-gray-300' : 'text-green--base',
}))
</script>

<style scoped>
.btn-icon {
  @apply rounded-full p-[6px] focus:(outline-none bg-gray-200) transition-colors;
}
</style>
