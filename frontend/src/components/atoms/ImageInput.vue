<template>
  <input
    id="img"
    class="w-0 h-0"
    type="file"
    name="img"
    accept="image/*"
    @change="handleImgChange"
  />

  <label
    for="img"
    class="input-block"
    :class="{ 'input-block-without-img': !img.preview }"
  >
    <div v-if="!img.preview" class="flex items-center <sm:flex-col">
      <Icon name="ion-camera-outline" class="mr-3" size="26" />
      <span>Clique para enviar a foto da receita</span>
    </div>
    <div v-else :style="{ backgroundImage: `url(${img.preview})` }" class="preview" />
  </label>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const img = reactive({
  preview: '',
  raw: null as File | null,
})

const handleImgChange = ({ target }: Event) => {
  const file = (target as HTMLInputElement).files?.[0]

  if (file) {
    img.preview = URL.createObjectURL(file)
    img.raw = file
  }
}
</script>

<style scoped>
.input-block {
  @apply w-full max-w-full rounded-md shadow-lighten
    h-36
    cursor-pointer
    font-normal text-lg text-center
    flex items-center justify-center
    border-1 border-gray--lighten
    bg-white text-typo--base font-semibold transition-colors
    focus-within:(outline-none border-typo--lighten ring-2
                ring-gray--lighten ring-opacity-20 text-typo--darken);
}

.input-block-without-img {
  @apply hover: (border-dashed border-orange--base);
}

.preview {
  @apply w-full h-full rounded-md;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

.preview::after {
  content: '';
  display: block;
  height: 0;
  padding-bottom: 100%;
}
</style>
