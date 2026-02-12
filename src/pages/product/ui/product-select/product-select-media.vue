<script lang="ts" setup>
import { reactiveOmit } from "@vueuse/core"
import { Primitive, type PrimitiveProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { cn } from "~/shared/lib/utils"

const props = defineProps<
  PrimitiveProps & {
    class?: HTMLAttributes["class"]
  }
>()

const delegatedProps = reactiveOmit(props, "class")
</script>

<template>
  <Primitive
    :class="
      cn(
        'aspect-4/3 overflow-hidden rounded-[0.185rem] *:size-full *:object-cover',
        props.class
      )
    "
  >
    <slot />
  </Primitive>
</template>
