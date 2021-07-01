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
    :for="img.preview ? '' : 'img'"
    class="input-block"
    :class="{ 'input-block-without-img': !img.preview }"
  >
    <div v-if="!img.preview" class="flex items-center <sm:flex-col">
      <Icon name="ion-camera-outline" class="mr-3" size="26" />
      <span>Clique para enviar a foto da receita</span>
    </div>

    <div
      v-else
      :style="{ backgroundImage: `url(${img.preview})` }"
      class="preview"
      :class="{ zoom: zoomPreview }"
      @mousedown.self="zoomPreview = true"
      @mouseup="zoomPreview = false"
      @mouseleave="zoomPreview = false"
    >
      <UploadImageActions
        for-element="img"
        class="mb-2 mr-2"
        @delete="handleDeleteImage"
      />
    </div>
  </label>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const zoomPreview = ref(false)

const img = ref({
  preview: '',
  raw: null as File | null,
})

const handleImgChange = ({ target }: Event) => {
  const file = (target as HTMLInputElement).files?.[0]

  if (file) {
    img.value.preview = URL.createObjectURL(file)
    img.value.raw = file
  }
}

const handleDeleteImage = () => {
  img.value = { preview: '', raw: null }
}
</script>

<style scoped>
.input-block {
  @apply w-full max-w-full rounded-md shadow-darken border-1 border-gray--lighten
    h-36 relative font-normal text-lg text-center flex items-center justify-center
    bg-white text-typo--base font-semibold transition-colors
    focus-within:(outline-none border-typo--lighten ring-2
                ring-gray--lighten ring-opacity-20 text-typo--darken);
}

.input-block-without-img {
  @apply cursor-pointer hover:(border-dashed border-orange--base);
}

.preview {
  @apply w-full h-full rounded-md flex items-end justify-end cursor-pointer
    bg-center bg-no-repeat;

  background-size: 100%;
  transition: all 400ms cubic-bezier(0.91, 0.8, 0.54, 1.39);
}

.preview.zoom {
  position: absolute;
  z-index: 10;

  width: 100%;
  height: 0;
  padding-top: 58.24%;

  max-width: 90%;
  transform: scale(1.55);
}

.preview.zoom > * {
  display: none;
}
</style>
