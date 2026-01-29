<script setup lang="ts">
import type { WithClassAsProps } from "./interface"
import { ArrowLeft } from "lucide-vue-next"
import { cn } from "~/shared/lib/utils"
import { Button } from "~/shared/ui/button"
import { useCarousel } from "./use-carousel"
import { useForwardProps } from "reka-ui"

const props = defineProps<WithClassAsProps>()

const { orientation, canScrollPrev, scrollPrev } = useCarousel()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <Button
    :disabled="!canScrollPrev"
    :class="
      cn(
        'absolute h-8 w-8 touch-manipulation rounded-full p-0',
        orientation === 'horizontal'
          ? 'top-1/2 -left-12 -translate-y-1/2'
          : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
        props.class
      )
    "
    variant="outline"
    @click="scrollPrev"
    v-bind="forwardedProps"
  >
    <slot>
      <ArrowLeft class="h-4 w-4 text-current" />
      <span class="sr-only">Prev Slide</span>
    </slot>
  </Button>
</template>
