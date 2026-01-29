<script setup lang="ts">
import { reactiveOmit } from "@vueuse/core"
import {
  ToggleGroupRoot,
  type ToggleGroupRootEmits,
  type ToggleGroupRootProps,
  useForwardPropsEmits
} from "reka-ui"
import type { HTMLAttributes } from "vue"
import { cn } from "~/shared/lib/utils"

const props = defineProps<
  ToggleGroupRootProps & {
    class?: HTMLAttributes["class"]
  }
>()
const emits = defineEmits<ToggleGroupRootEmits>()
const delegatedProps = reactiveOmit(props, "class")
const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <ToggleGroupRoot
    v-bind="forwarded"
    :class="cn('flex flex-col gap-1.5', props.class)"
    type="single"
  >
    <slot />
  </ToggleGroupRoot>
</template>
