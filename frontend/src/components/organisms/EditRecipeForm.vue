<template>
  <form
    class="w-md max-w-full grid grid-cols-1 gap-5 py-4"
    @submit.prevent="handleUpdateRecipe"
  >
    <Input v-model="title" label="Título" placeholder="Ex: canja especial" required />

    <Textarea
      v-model="description"
      label="Descrição"
      placeholder="Qual a origem desta receita? Qual foi sua inspiração?..."
      required
    />

    <UploadImage v-model="image" />

    <div class="grid grid-cols-1 gap-5 w-full max-w-full sm:grid-cols-2">
      <Input
        v-model="preparationTime"
        label="Tempo de preparo"
        placeholder="1h 30min"
        required
      />
      <Input v-model="portions" label="Porções" placeholder="2" type="number" required />
    </div>

    <div>
      <h2 class="ml-1 my-1 font-semibold text-lg text-typo--base">
        Ingredientes
      </h2>

      <DraggableInputList v-model="ingredients" placeholder="100ml de água" />

      <button type="button" class="add-btn" @click="handleNewIngredient">
        <Icon name="ion-add" size="30" class="mr-1" />
        <span>Ingrediente</span>
      </button>
    </div>

    <div class="mt-4">
      <h2 class="ml-1 my-1 font-semibold text-lg text-typo--base">
        Passo a passo
      </h2>

      <DraggableInputList
        v-model="steps"
        placeholder="Mistura a farinha e a água até se tornar uma massa homogênea"
        :with-bullet="true"
        :text-area="true"
      />

      <button type="button" class="add-btn" @click="handleNewStep">
        <Icon name="ion-add" size="30" class="mr-1" />
        <span>Passo</span>
      </button>
    </div>

    <Button
      text="Editar receita"
      class="mt-10 w-full max-w-full"
      :disabled="isLoading"
      :loading="isLoading"
    />
  </form>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useRecipeStore } from '@/store'
import { useRouter } from 'vue-router'
import type { ImageFile, DraggableItem } from '@/types'
import type { IngredientsOrStep } from '@/models'
import { URLtoFile } from '@/utils'

const recipeStore = useRecipeStore()
const router = useRouter()

const isLoading = ref(false)

const title = ref('')
const description = ref('')
const image = ref<ImageFile>({} as ImageFile)
const preparationTime = ref('')
const portions = ref<number>()
const ingredients = ref<DraggableItem[]>([])
const steps = ref<DraggableItem[]>([])
const currentIngredientId = ref(0)
const currentStepId = ref(0)

const toDraggableItem = (obj: IngredientsOrStep): DraggableItem => ({
  name: obj.text,
  id: obj.index,
})

const handleRecipeChange = async () => {
  if (!Object.keys(recipeStore.recipe).length) return

  const file = await URLtoFile(recipeStore.recipe.image.url)

  title.value = recipeStore.recipe.title
  description.value = recipeStore.recipe.description
  image.value = { preview: URL.createObjectURL(file), raw: file }
  preparationTime.value = recipeStore.recipe.preparationTime
  portions.value = recipeStore.recipe.portions
  ingredients.value = recipeStore.recipe.ingredients.map(toDraggableItem)
  steps.value = recipeStore.recipe.steps.map(toDraggableItem)
  currentIngredientId.value = recipeStore.recipe.ingredients.length
  currentStepId.value = recipeStore.recipe.steps.length
}

watch(() => recipeStore.recipe, handleRecipeChange, { immediate: true, deep: true })

const handleNewIngredient = () => {
  currentIngredientId.value++

  const newIngredient = { name: '', id: currentIngredientId.value }

  ingredients.value = [...ingredients.value, newIngredient]
}

const handleNewStep = () => {
  currentStepId.value++

  const newIngredient = { name: '', id: currentStepId.value }

  steps.value = [...steps.value, newIngredient]
}

const formatObjToIndexText = (obj: DraggableItem, index: number) => ({
  index,
  text: obj.name,
})

const formatArray = (arr: DraggableItem[]) => JSON.stringify(arr.map(formatObjToIndexText))

const handleUpdateRecipe = async () => {
  isLoading.value = true

  const recipeData = new FormData()

  recipeData.append('title', title.value)
  recipeData.append('description', description.value)
  recipeData.append('preparationTime', preparationTime.value)
  recipeData.append('portions', String(portions.value ?? 0))
  recipeData.append('ingredients', formatArray(ingredients.value))
  recipeData.append('steps', formatArray(steps.value))

  image.value.raw && recipeData.append('image', image.value.raw)

  await recipeStore.update(recipeData, recipeStore.recipe.id)
  await recipeStore.listOfCurrentUser()

  await router.push('/my-recipes')

  isLoading.value = false
}
</script>

<style scoped>
.add-btn {
  @apply flex items-center mx-auto mt-6 text-2xl text-typo--base focus:outline-none;
}
</style>
