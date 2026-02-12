<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import {
  useForwardProps,
  useForwardPropsEmits,
  type ToggleGroupRootEmits,
  type ToggleGroupRootProps
} from "reka-ui"
import { cn } from "~/shared/lib/utils"
import { ToggleGroupRoot } from "reka-ui"

const props = withDefaults(
  defineProps<
    ToggleGroupRootProps & {
      class?: HTMLAttributes["class"]
    }
  >(),
  {
    type: "single"
  }
)

const delegatedProps = reactiveOmit(props, "class")
const emits = defineEmits<ToggleGroupRootEmits>()
const forwardedProps = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <ToggleGroupRoot
    v-bind="forwardedProps"
    :class="
      cn(
        'grid grid-cols-3 px-2 sm:grid-cols-4 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5',
        props.class
      )
    "
  >
    <slot />
  </ToggleGroupRoot>
</template>
