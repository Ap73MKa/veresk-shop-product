<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "~/shared/lib/utils"
import { Skeleton } from "~/shared/ui/skeleton"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <Skeleton :class="cn('h-6 w-12 rounded-xl', props.class)" />
</template>
