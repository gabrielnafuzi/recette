<template>
  <div class="mt-10">
    <div class="mt-2 w-2/5 h-7 mb-2 skeleton" />

    <Divider />
  </div>

  <div class="mt-2 w-full h-4 skeleton" />
  <div class="mt-2 w-full h-4 skeleton" />
  <div class="mt-2 w-2/5 h-4 skeleton" />

  <div class="h-md w-full mt-5">
    <div
      class="max-w-full max-h-full w-full h-full object-cover rounded-lg shadow-lighten skeleton"
    />
  </div>

  <div class="mt-5 flex">
    <div class="mr-5">
      <h3 class="title">Tempo de preparo</h3>
      <div class="mt-2 h-4 w-3/5 skeleton" />
    </div>

    <Divider :vertical="true" />

    <div class="ml-5">
      <h3 class="title">Porções para</h3>
      <div class="mt-2 h-4 w-4/5 skeleton" />
    </div>
  </div>

  <div class="mt-8 grid md:grid-cols-2">
    <div class="<md:mb-6">
      <h1 class="font-bold text-typo--darken text-3xl">Ingredientes</h1>

      <ul class="mt-3 ml-4 md:ml-7">
        <li v-for="ingredient in 3" :key="ingredient" class="flex items-center mb-1">
          <Bullet class="w-3 h-3" />
          <div class="ml-2 w-2/5 h-4 skeleton" />
        </li>
      </ul>
    </div>

    <div>
      <h1 class="font-bold text-typo--darken text-3xl">Instruções</h1>

      <ul class="mt-3 ml-4 md:ml-7">
        <li v-for="step in 2" :key="step" class="flex flex-wrap mb-4">
          <Bullet class="w-6 h-6 mt-1" :index="step" />
          <div class="h-18 ml-2 w-full max-w-[90%]">
            <div class="step-item max-w-full skeleton" />
            <div class="step-item max-w-full skeleton" />
            <div class="step-item max-w-[40%] skeleton" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.skeleton {
  @apply bg-gray-200 rounded-sm animate-pulse;
}
.title {
  @apply text-lg text-typo-lighten font-semibold;
}

.step-item {
  @apply h-6 ml-2 w-full mt-1;
}

.subtitle {
  @apply text-base font-bold text-typo--base;
}
</style>
