<script setup lang="ts">
import { Button, type ButtonProps } from "~/shared/ui/button"

const props = defineProps<
  ButtonProps & {
    productId: string
  }
>()

const handleAddToCard = async () => {
  console.log(props.productId)
}
</script>

<template>
  <Button v-bind="props" @click="handleAddToCard">
    <slot />
  </Button>
</template>
