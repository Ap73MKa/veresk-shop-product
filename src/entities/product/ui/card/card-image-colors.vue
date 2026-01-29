<script setup lang="ts">
import { cn } from "~/shared/lib/utils"
import { HoverCard, HoverCardTrigger } from "~/shared/ui/hover-card"
import { HoverCardContent } from "reka-ui"

const props = defineProps<{
  class?: string
  colors: { id: string; name: string; hex: string }[]
}>()
</script>

<template>
  <ul :class="cn('mt-1 mb-3.5 flex gap-2', props.class)">
    <li v-for="color in colors" :key="color.id">
      <HoverCard :open-delay="300">
        <HoverCardTrigger as-child>
          <div
            class="size-4 rounded-full"
            :style="{ backgroundColor: color.hex }"
          >
            <span class="sr-only">{{ color.name }}</span>
          </div>
        </HoverCardTrigger>
        <HoverCardContent
          side="top"
          class="z-50 mb-2 h-16 w-28 rounded-md p-4 shadow outline-none"
          :style="{ backgroundColor: color.hex }"
        >
          <span class="sr-only">{{ color.name }}</span>
        </HoverCardContent>
      </HoverCard>
    </li>
  </ul>
</template>
