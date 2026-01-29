<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "~/shared/lib/utils"
import { useSliderContext } from "./use-image-slider"

const props = defineProps<{
  index: number
  class?: HTMLAttributes["class"]
}>()

const context = useSliderContext()
</script>

<template>
  <CarouselItem
    :class="cn('pl-0', props.class)"
    :data-active="props.index === context.selectedIndex.value"
  >
    <slot />
  </CarouselItem>
</template>
