<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import {
  useForwardProps,
  useForwardPropsEmits,
  type NumberFieldRootEmits,
  type NumberFieldRootProps
} from "reka-ui"

const props = defineProps<NumberFieldRootProps>()
const emits = defineEmits<NumberFieldRootEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <NumberField v-bind="forwarded">
    <NumberFieldContent>
      <NumberFieldDecrement />
      <NumberFieldInput class="h-7 shadow-none" />
      <NumberFieldIncrement />
    </NumberFieldContent>
  </NumberField>
</template>
