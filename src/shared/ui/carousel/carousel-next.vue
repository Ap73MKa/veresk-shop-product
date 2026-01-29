<script setup lang="ts">
import type { WithClassAsProps } from "./interface"
import { ArrowRight } from "lucide-vue-next"
import { cn } from "~/shared/lib/utils"
import { Button } from "~/shared/ui/button"
import { useCarousel } from "./use-carousel"
import { useForwardProps } from "reka-ui"

const props = defineProps<WithClassAsProps>()

const { orientation, canScrollNext, scrollNext } = useCarousel()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <Button
    :disabled="!canScrollNext"
    :class="
      cn(
        'absolute h-8 w-8 touch-manipulation rounded-full p-0',
        orientation === 'horizontal'
          ? 'top-1/2 -right-12 -translate-y-1/2'
          : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
        props.class
      )
    "
    variant="outline"
    @click="scrollNext"
    v-bind="forwardedProps"
  >
    <slot>
      <ArrowRight class="h-4 w-4 text-current" />
      <span class="sr-only">Next Slide</span>
    </slot>
  </Button>
</template>
