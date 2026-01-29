<script lang="ts" setup>
import { reactiveOmit } from "@vueuse/core"
import { type AccordionContentProps, useForwardProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { cn } from "~/shared/lib/utils"
import { AccordionContent } from "~/shared/ui/accordion"

const props = defineProps<
  AccordionContentProps & {
    class?: HTMLAttributes["class"]
  }
>()
const delegatedProps = reactiveOmit(props, "class")
const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <AccordionContent v-bind="forwarded" :class="cn('', props.class)">
    <slot />
  </AccordionContent>
</template>
