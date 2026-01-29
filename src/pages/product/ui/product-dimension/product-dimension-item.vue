<script lang="ts" setup>
import { reactiveOmit } from "@vueuse/core"
import {
  ToggleGroupItem,
  type ToggleGroupItemProps,
  useForwardProps
} from "reka-ui"
import type { HTMLAttributes } from "vue"
import { cn } from "~/shared/lib/utils"

const props = defineProps<
  ToggleGroupItemProps & {
    class?: HTMLAttributes["class"]
  }
>()
const delegatedProps = reactiveOmit(props, "class")
const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <ToggleGroupItem
    v-bind="forwarded"
    :class="
      cn(
        'inline-flex w-12 items-center justify-center rounded-xl border bg-background py-0.5 text-sm transition-colors hover:bg-secondary data-[state=on]:border-primary data-[state=on]:bg-primary data-[state=on]:text-primary-foreground',
        props.class
      )
    "
  >
    <slot />
  </ToggleGroupItem>
</template>
