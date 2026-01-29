<script lang="ts" setup>
import { reactiveOmit } from "@vueuse/core"
import { type AccordionTriggerProps, useForwardProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { cn } from "~/shared/lib/utils"
import { AccordionTrigger } from "~/shared/ui/accordion"

const props = defineProps<
  AccordionTriggerProps & {
    class?: HTMLAttributes["class"]
  }
>()
const delegatedProps = reactiveOmit(props, "class")
const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <AccordionTrigger
    v-bind="forwarded"
    :class="cn('hover:no-underline', props.class)"
  >
    <slot />
  </AccordionTrigger>
</template>
