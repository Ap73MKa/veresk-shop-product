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
    :class="
      cn(
        'relative aspect-4/3 size-full max-h-64 overflow-hidden rounded-sm bg-secondary',
        props.class
      )
    "
  >
    <slot />
  </Primitive>
</template>
