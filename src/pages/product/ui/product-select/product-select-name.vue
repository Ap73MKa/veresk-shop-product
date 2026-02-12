<script lang="ts" setup>
import type { PrimitiveProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { Primitive } from "reka-ui"
import { cn } from "~/shared/lib/utils"

const props = withDefaults(
  defineProps<PrimitiveProps & { class?: HTMLAttributes["class"] }>(),
  {
    as: "span"
  }
)
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="cn('text-sm break-all', props.class)"
  >
    <slot />
  </Primitive>
</template>
