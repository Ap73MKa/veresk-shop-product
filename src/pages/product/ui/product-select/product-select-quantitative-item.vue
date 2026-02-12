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
    as: "li"
  }
)

const delegatedProps = reactiveOmit(props, "class")
</script>

<template>
  <Primitive
    v-bind="delegatedProps"
    :class="
      cn(
        'flex size-full flex-col gap-1.5 rounded-sm p-2 text-left transition-colors',
        props.class
      )
    "
  >
    <slot />
  </Primitive>
</template>
