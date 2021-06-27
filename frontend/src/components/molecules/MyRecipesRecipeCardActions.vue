<template>
  <div>
    <button class="btn-icon mr-1" @click.stop="goToEdit">
      <Icon name="ion-pencil-outline" size="24" />
    </button>

    <button class="btn-icon" @click.stop="goToEdit">
      <Icon name="ion-trash-outline" size="24" class="text-red--base" />
    </button>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  recipeId: {
    type: [String, Number],
    required: true,
  },
})

const router = useRouter()

const goToEdit = () => router.push(`/my-recipes/${props.recipeId}/edit`)
</script>

<style scoped>
.btn-icon {
  @apply rounded-full p-[6px] focus:(outline-none bg-gray-200) transition-colors hover:bg-gray-200;
}
</style>
