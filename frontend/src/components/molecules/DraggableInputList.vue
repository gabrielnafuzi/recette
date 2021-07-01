<template>
  <Draggable
    :list="modelValue"
    class="list-group"
    tag="transition-group"
    :component-data="{
      tag: 'ul',
      type: 'transition-group',
      name: !drag ? 'flip-list' : null,
    }"
    v-bind="dragOptions"
    handle=".handle"
    item-key="id"
    @start="drag = true"
    @end="drag = false"
  >
    <template #item="{ element, index }">
      <li
        class="list-group-item flex justify-between mb-4 cursor-default"
        :class="{ 'items-center': !textArea }"
      >
        <div v-if="withBullet" class="handle flex flex-col items-center">
          <Bullet :index="index + 1" />
          <Icon name="ion-reorder-four-outline" size="34" class="text-typo--base" />
        </div>

        <Icon
          v-else
          name="ion-reorder-four-outline"
          size="34"
          class="text-typo--base handle"
        />

        <Textarea
          v-if="textArea"
          v-model="element.name"
          parent-class="mx-1"
          :placeholder="placeholder"
          resize="none"
        />
        <Input
          v-else
          v-model="element.name"
          parent-class="mx-1"
          :placeholder="placeholder"
          resize="none"
        />

        <Icon
          name="ion-close"
          size="26"
          class="text-typo--base close cursor-pointer"
          :class="{ closeDisabled: !modelValue || 1 >= modelValue.length }"
          @click="removeAt(index)"
        />
      </li>
    </template>
  </Draggable>
</template>

<script lang="ts" setup>
import { defineEmit, defineProps, ref } from 'vue'
import type { PropType } from 'vue'
import Draggable from 'vuedraggable'

type Item = {
  name: string
  text?: string
  id: number
}

const props = defineProps({
  modelValue: {
    type: Array as PropType<Item[]>,
  },
  withBullet: {
    type: Boolean,
    default: false,
  },
  textArea: {
    default: false,
  },
  placeholder: {
    default: '',
  },
})

const emit = defineEmit(['update:modelValue'])

const drag = ref(false)

const dragOptions = ref({
  animation: 250,
  disabled: false,
  ghostClass: 'ghost',
})

const removeAt = (index: number) => {
  if (props.modelValue && props.modelValue?.length > 1) {
    emit('update:modelValue', props.modelValue?.filter((_, idx) => idx !== index))
  }
}
</script>

<style scoped>
.button {
  margin-top: 35px;
}
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  @apply bg-orange--base bg-opacity-10 rounded-md;
  opacity: 0.8;
}
.list-group {
  min-height: 20px;
}
.handle {
  cursor: move;
}

.closeDisabled {
  @apply text-opacity-20 cursor-not-allowed;
}
</style>
