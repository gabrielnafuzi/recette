<template>
  <div
    class="fixed z-10 inset-0 overflow-y-auto"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div class="modal-wrapper">
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      />

      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
        &#8203;
      </span>

      <div class="content-box animated animate-fade-in-up animate-duration-300">
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 class="text-2xl leading-6 font-medium text-typo--base capitalize">
                {{ title }}
              </h3>
              <div class="mt-2">
                <p class="text-base text-gray-500">
                  {{ description }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            type="button"
            :class="`confirm-btn ${confirmBtnClass}`"
            :disabled="loading"
            @click="$emit('confirm')"
          >
            <span v-if="!loading">Confirmar</span>
            <Spinner v-else class="w-5 h-5 min-w-1 min-h-1" />
          </button>

          <button
            type="button"
            class="cancel-btn"
            :disabled="loading"
            @click="$emit('cancel')"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  loading: {
    default: false,
  },
  confirmBtnClass: {
    default: 'bg-red-600 hover:bg-red-700 focus:ring-red-500',
  },
})
</script>

<style scoped>
.modal-wrapper {
  @apply flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center
          sm:(block p-0);
}

.content-box {
  @apply inline-block align-bottom bg-white rounded-lg text-left overflow-hidden
        shadow-xl transform transition-all
        sm:(my-8 align-middle max-w-lg w-full);
}

.confirm-btn {
  @apply w-full flex items-center justify-center min-w-24 rounded-md border border-transparent
        px-4 py-2 text-base font-medium text-white shadow-sm transition-colors
        focus:(outline-none ring-2 ring-offset-2)
        sm:(ml-3 w-auto text-sm)
        disabled:(bg-gray-300 opacity-80);
}

.cancel-btn {
  @apply mt-3 w-full inline-flex justify-center rounded-md border border-gray-300
        shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 transition-colors
      hover:bg-gray-100
        focus:(outline-none ring-2 ring-offset-2 ring-gray-400)
        sm:(mt-0 ml-3 w-auto text-sm)
        disabled:(bg-gray-300 opacity-80);
}
</style>
