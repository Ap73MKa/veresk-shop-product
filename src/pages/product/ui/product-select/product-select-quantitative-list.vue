<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { type PrimitiveProps } from "reka-ui"
import { cn } from "~/shared/lib/utils"
import { Primitive } from "reka-ui"

const props = withDefaults(
  defineProps<
    PrimitiveProps & {
      class?: HTMLAttributes["class"]
    }
  >(),
  {
    as: "ul"
  }
)

const delegatedProps = reactiveOmit(props, "class")
</script>

<template>
  <Primitive
    v-bind="delegatedProps"
    :class="
      cn(
        'grid grid-cols-3 px-2 sm:grid-cols-4 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5',
        props.class
      )
    "
  >
    <slot />
  </Primitive>
</template>
