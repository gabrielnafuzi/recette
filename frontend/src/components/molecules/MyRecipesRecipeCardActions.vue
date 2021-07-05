<template>
  <div>
    <button
      class="btn-icon mr-1"
      :class="editBtnClasses.btn"
      @click.stop="recipe.status !== 'approved' && goToEdit()"
    >
      <Icon name="ion-pencil-outline" size="24" :class="editBtnClasses.icon" />
    </button>

    <button class="btn-icon" @click.stop="$emit('delete-recipe', recipe.id)">
      <Icon name="ion-trash-outline" size="24" class="text-red--base" />
    </button>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps } from 'vue'
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

const editBtnClasses = computed(() => ({
  btn: props.recipe.status !== 'approved' ? 'hover:bg-gray-200 focus:bg-gray-200' : 'hover:bg-none',
  icon: props.recipe.status === 'approved' ? 'text-gray-300' : '',
}))

const goToEdit = () => {
  recipeStore.recipe = props.recipe

  router.push(`/my-recipes/${props.recipe.id}/edit`)
}
</script>

<style scoped>
.btn-icon {
  @apply rounded-full p-[6px] focus:(outline-none) transition-colors;
}
</style>
