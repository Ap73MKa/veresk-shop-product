<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "~/shared/lib/utils"
import { Carousel, CarouselContent } from "~/shared/ui/carousel"
import { useSliderContext } from "./use-image-slider"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()

const context = useSliderContext()
</script>

<template>
  <Carousel
    :opts="{
      axis: 'x',
      breakpoints: { '(min-width: 1536px)': { axis: 'y' } }
    }"
    :class="cn('w-full 2xl:h-150 2xl:w-40 [&>div]:h-full', props.class)"
    @init-api="context.registerThumbApi"
  >
    <CarouselContent class="-ml-2 flex lg:ml-0 lg:gap-2 2xl:flex-col 2xl:gap-1">
      <slot />
    </CarouselContent>
  </Carousel>
</template>
