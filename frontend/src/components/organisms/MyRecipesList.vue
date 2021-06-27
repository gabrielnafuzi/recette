<template>
  <RecipeListGrid>
    <RecipeCard
      v-for="recipe in recipeStore.currentUserRecipes"
      :key="recipe.id"
      :recipe="recipe"
      :to="`/recipes/${recipe.id}`"
      :show-owner-name="false"
      show-status
    >
      <template #actions>
        <MyRecipesRecipeCardActions
          :recipe-id="recipe.id"
          @delete-recipe="openConfirmDialog"
        />
      </template>
    </RecipeCard>

    <ConfirmDialog
      v-if="dialogValue"
      title="Excluir receita"
      description="Você tem certeza que deseja remover esta receita? Todos os dados da receita
            serão permanentemente removidos. Essa ação não poderá ser desfeita."
      :loading="isLoading"
      @cancel="handleCancelDialog"
      @confirm="deleteRecipe"
    />
  </RecipeListGrid>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRecipeStore } from '@/store'

const recipeStore = useRecipeStore()

const dialogValue = ref(false)
const isLoading = ref(false)
const selectedRecipeId = ref<null | number>(null)

const openConfirmDialog = (recipeId: number) => {
  dialogValue.value = true

  selectedRecipeId.value = recipeId
}

const deleteRecipe = async () => {
  isLoading.value = true

  if (selectedRecipeId.value) {
    try {
      await recipeStore.destroy(selectedRecipeId.value)

      await recipeStore.listOfCurrentUser()
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
