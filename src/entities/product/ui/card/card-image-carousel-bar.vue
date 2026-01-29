<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "~/shared/lib/utils"

const props = defineProps<{
  currentIndex: number
  totalItems: number
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <div
    role="progressbar"
    :class="
      cn(
        'relative h-0.5 w-full overflow-hidden rounded-full bg-muted',
        props.class
      )
    "
  >
    <div
      data-progress-fill
      class="absolute top-0 left-0 h-full bg-primary transition-['width']"
      :style="{
        width: `${((props.currentIndex + 1) / props.totalItems) * 100}%`
      }"
    />
  </div>
</template>
