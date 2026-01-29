<script setup lang="ts">
import { Button, type ButtonProps } from "~/shared/ui/button"
import type { HTMLAttributes } from "vue"
import { HeartIcon } from "lucide-vue-next"
import { cn } from "~/shared/lib/utils"

const props = withDefaults(
  defineProps<
    ButtonProps & { productId: string; class?: HTMLAttributes["class"] }
  >(),
  {
    size: "icon"
  }
)
const isFavorite = ref(false)

const handleToggleFavorite = async (event: Event) => {
  event.preventDefault()
  isFavorite.value = !isFavorite.value
  console.log(props.productId)
}
</script>

<template>
  <Button
    :data-active="isFavorite"
    v-bind="props"
    :class="cn('group/favorite hover:bg-transparent', props.class)"
    @click="handleToggleFavorite"
  >
    <slot>
      <HeartIcon
        class="size-6.5 fill-none stroke-1 text-muted-foreground transition-all group-hover/favorite:scale-110 group-hover/favorite:fill-foreground/50 group-hover/favorite:text-foreground/50 group-data-[active=true]/favorite:fill-foreground group-data-[active=true]/favorite:text-foreground"
      />
      <span class="sr-only">
        {{ isFavorite ? "Удалить из избранного" : "Добавить в избранное" }}
      </span>
    </slot>
  </Button>
</template>
