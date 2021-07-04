<template>
  <RecipeListGrid>
    <RecipeCard
      v-for="recipe in recipeStore.adminRecipes"
      :key="recipe.id"
      :recipe="recipe"
      :to="`/recipes/${recipe.id}`"
      :show-owner-name="false"
      :show-status="true"
    >
      <template #actions>
        <AdminRecipeCardActions
          :recipe="recipe"
          @change-recipe-status="openConfirmDialog"
        />
      </template>
    </RecipeCard>

    <ConfirmDialog
      v-if="dialogValue"
      :title="`${status.label} receita`"
      :description="`Você tem certeza que deseja ${status.label} esta receita?`"
      :loading="isLoading"
      :confirm-btn-class="status.style"
      @cancel="handleCancelDialog"
      @confirm="handleChangeRecipeStatus"
    />
  </RecipeListGrid>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRecipeStore } from '@/store'
import type { Status as StatusValues } from '@/types'
import type { Recipe } from '@/models'

type StatusLabel = 'aprovar' | 'reprovar'

enum StatusStyles {
  RED = 'bg-red-600 hover:bg-red-700 focus:ring-red-500',
  GREEN = 'bg-green-400 hover:bg-green-500 focus:ring-green-300'
}

type Status = {
  label: StatusLabel
  value: StatusValues
  style: StatusStyles
}

const statusValues: {[key: string]: Status} = {
  approved: { label: 'aprovar', value: 'approved', style: StatusStyles.GREEN },
  disapproved: { label: 'reprovar', value: 'disapproved', style: StatusStyles.RED },
}

const recipeStore = useRecipeStore()

const dialogValue = ref(false)
const isLoading = ref(false)
const status = ref<Status>({} as Status)
const selectedRecipe = ref<Recipe>()

const openConfirmDialog = (recipe: Recipe, newStatus: StatusValues) => {
  dialogValue.value = true

  status.value = { ...statusValues[newStatus] }

  selectedRecipe.value = recipe
}

const handleChangeRecipeStatus = async () => {
  isLoading.value = true

  if (selectedRecipe.value) {
    try {
      const recipeFormData = new FormData()

      recipeFormData.append('status', status.value.value)
      recipeFormData.append('userId', String(selectedRecipe.value.user_id))

      await recipeStore.update(recipeFormData, selectedRecipe.value.id)

      await recipeStore.listAllToAdmin()
    } finally {
      isLoading.value = false
      dialogValue.value = false
    }
  }
}

const handleCancelDialog = () => {
  dialogValue.value = false
}
</script>
