<script setup lang="ts">
import { reactiveOmit } from "@vueuse/core"
import {
  type AccordionRootEmits,
  type AccordionRootProps,
  useForwardPropsEmits
} from "reka-ui"
import type { HTMLAttributes } from "vue"
import { cn } from "~/shared/lib/utils"
import { Accordion } from "~/shared/ui/accordion"

const props = defineProps<
  AccordionRootProps & {
    class?: HTMLAttributes["class"]
  }
>()
const emits = defineEmits<AccordionRootEmits>()
const delegatedProps = reactiveOmit(props, "class")
const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <Accordion
    v-bind="forwarded"
    :class="cn('w-full space-y-1', props.class)"
    type="single"
  >
    <slot />
  </Accordion>
</template>
