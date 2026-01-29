<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "~/shared/lib/utils"
import { useProvideSliderContext } from "./use-image-slider"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()

useProvideSliderContext()
</script>

<template>
  <div :class="cn('flex flex-col gap-2 2xl:flex-row-reverse', props.class)">
    <slot />
  </div>
</template>
