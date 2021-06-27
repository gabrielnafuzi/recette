<template>
  <div class="mt-10">
    <SectionTitle title="Minhas receitas">
      <template #actions>
        <router-link
          class="text-2xl font-bold text-typo--base flex items-center"
          to="/my-recipes/create"
        >
          <span class="mr-1">Criar Receita</span>
          <Icon name="ion-plus" />
        </router-link>
      </template>
    </SectionTitle>
  </div>
</template>
