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
    :class="
      cn(
        'aspect-4/3 basis-1/3 cursor-pointer overflow-hidden pl-2 md:basis-1/4 lg:pl-0',
        props.class
      )
    "
    :data-active="props.index === context.selectedIndex.value"
    @click="context.scrollToMain(props.index)"
  >
    <slot />
  </CarouselItem>
</template>
