<script setup lang="ts">
import { CircleQuestionMarkIcon } from "lucide-vue-next"
import type { HTMLAttributes } from "vue"
import { cn } from "~/shared/lib/utils"

type SkeletonProps = {
  class?: HTMLAttributes["class"]
}

const props = defineProps<SkeletonProps>()
</script>

<template>
  <span
    :class="
      cn(
        'inline-flex items-center gap-1.5 pb-1 text-sm font-medium underline underline-offset-4',
        props.class
      )
    "
  >
    <slot />
    <CircleQuestionMarkIcon class="size-4" />
  </span>
</template>
