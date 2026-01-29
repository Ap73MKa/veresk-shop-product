<script setup lang="ts">
import { type HTMLAttributes } from "vue"
import { Primitive, type PrimitiveProps } from "reka-ui"
import { cn } from "~/shared/lib/utils"

const props = defineProps<
  PrimitiveProps & { class?: HTMLAttributes["class"] }
>()
</script>

<template>
  <Primitive
    v-bind="props"
    :class="cn('group/card relative flex w-full flex-col gap-4', props.class)"
  >
    <slot />
  </Primitive>
</template>
