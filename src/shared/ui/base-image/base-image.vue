<script setup lang="ts">
import { ref, useAttrs, watch } from "vue"
import { cn } from "~/shared/lib/utils"
import { Skeleton } from "~/shared/ui/skeleton"

const props = defineProps<{
  src: string
  alt: string
  class?: string
  forceLoading?: boolean
}>()

const attrs = useAttrs()

const broken = ref(false)

const handleError = () => {
  broken.value = true
}

watch(
  () => props.src,
  () => {
    broken.value = false
  }
)
</script>

<template>
  <Skeleton
    v-if="!props.src || props.forceLoading || broken"
    :class="cn('size-full rounded-none', props.class)"
  />
  <NuxtImg
    v-else
    v-bind="attrs"
    :src="props.src"
    :alt="props.alt"
    :class="cn('size-full object-cover', props.class)"
    @error="handleError"
  />
</template>
