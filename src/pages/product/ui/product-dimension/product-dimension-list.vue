<script lang="ts" setup>
import type { HTMLAttributes } from "vue"
import { cn } from "~/shared/lib/utils"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <div :class="cn('flex flex-wrap gap-1.5', props.class)">
    <slot />
  </div>
</template>
