<template>
  <div>
    <button class="btn-icon mr-1" @click.stop="goToEdit">
      <Icon name="ion-pencil-outline" size="24" />
    </button>

    <button class="btn-icon" @click.stop="$emit('delete-recipe', recipe.id)">
      <Icon name="ion-trash-outline" size="24" class="text-red--base" />
    </button>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'
import { useRecipeStore } from '@/store'
import type { PropType } from 'vue'
import type { Recipe } from '@/models'

const props = defineProps({
  recipe: {
    type: Object as PropType<Recipe>,
    required: true,
  },
})

const recipeStore = useRecipeStore()
const router = useRouter()

const goToEdit = () => {
  recipeStore.recipe = props.recipe

  router.push(`/my-recipes/${props.recipe.id}/edit`)
}
</script>

<style scoped>
.btn-icon {
  @apply rounded-full p-[6px] focus:(outline-none bg-gray-200) transition-colors hover:bg-gray-200;
}
</style>
