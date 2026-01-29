<script lang="ts" setup>
import { reactiveOmit } from "@vueuse/core"
import { type AccordionItemProps, useForwardProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { cn } from "~/shared/lib/utils"
import { AccordionItem } from "~/shared/ui/accordion"

const props = defineProps<
  AccordionItemProps & {
    class?: HTMLAttributes["class"]
  }
>()
const delegatedProps = reactiveOmit(props, "class")
const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <AccordionItem
    v-bind="forwarded"
    :class="
      cn(
        'rounded-md border border-transparent bg-secondary px-4 transition-colors data-[state=open]:border-border data-[state=open]:bg-transparent',
        props.class
      )
    "
  >
    <slot />
  </AccordionItem>
</template>
