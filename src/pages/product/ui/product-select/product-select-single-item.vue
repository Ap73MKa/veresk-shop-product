<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { useForwardProps, type ToggleGroupItemProps } from "reka-ui"
import { cn } from "~/shared/lib/utils"
import { ToggleGroupItem } from "reka-ui"

const props = defineProps<
  ToggleGroupItemProps & {
    class?: HTMLAttributes["class"]
  }
>()

const delegatedProps = reactiveOmit(props, "class")

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <ToggleGroupItem
    v-bind="forwardedProps"
    :class="
      cn(
        'flex w-full flex-col gap-1.5 rounded-sm border border-transparent p-2 text-left transition-colors hover:border-border data-[state=on]:border-primary/50 data-[state=on]:bg-secondary/25',
        props.class
      )
    "
  >
    <slot />
  </ToggleGroupItem>
</template>
