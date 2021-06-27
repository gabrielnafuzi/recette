<template>
  <div
    class="rounded shadow-darken
      transition-all ease-in-out duration-300 transform hover:scale-103 cursor-pointer
    "
    @click="go"
  >
    <Chip
      v-if="showStatus"
      :text="statusTitle"
      :mode="statusMode"
      class="absolute top-2 left-2"
    />

    <Chip v-else :text="recipe.preparationTime" class="absolute top-2 left-2">
      <Icon name="ion:time-outline" class="text-light-500 mr-1" />
    </Chip>

    <img class="rounded-t w-full h-48 object-cover" :src="recipe.image.url" />

    <div class="flex justify-between items-center">
      <div class="flex flex-col p-4">
        <h2 class="text-xl font-bold truncate mt-1 text-typo--base">
          {{ recipe.title }}
        </h2>
        <p v-if="showOwnerName" class="text-base text-typo-lighten mt-1">
          Receita de {{ recipe.user.name }}
        </p>
      </div>

      <div class="flex p-4">
        <slot name="actions" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { useRouter } from 'vue-router'
import { Recipe } from '@/models'
import { StatusTitles, StatusModes } from '@/types'
import { useRecipeStore } from '@/store'

export default defineComponent({
  props: {
    to: {
      type: String,
      required: true,
    },
    recipe: {
      type: Object as PropType<Recipe>,
      required: true,
    },
    showStatus: {
      type: Boolean,
      required: false,
      default: false,
    },
    showOwnerName: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  setup(props) {
    const statusTitle = computed(() => StatusTitles[props.recipe.status])
    const statusMode = computed(() => StatusModes[props.recipe.status])

    const router = useRouter()
    const recipeStore = useRecipeStore()

    const go = () => {
      if (props.to) {
        recipeStore.recipe = props.recipe

        router.push(props.to)
      }
    }

    return { statusTitle, statusMode, go }
  },
})
</script>
