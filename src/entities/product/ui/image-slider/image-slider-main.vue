<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "~/shared/lib/utils"
import { Carousel, CarouselContent } from "~/shared/ui/carousel"
import { useSliderContext } from "./use-image-slider"
import Autoplay from "embla-carousel-autoplay"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()

const context = useSliderContext()
</script>

<template>
  <Carousel
    :class="cn('relative w-full overflow-hidden', props.class)"
    :opts="{ loop: true }"
    :plugins="[Autoplay({ delay: 5000 })]"
    @init-api="context.registerMainApi"
  >
    <CarouselContent class="ml-0 h-80 md:h-96 lg:h-125 2xl:h-150">
      <slot />
    </CarouselContent>
  </Carousel>
</template>
