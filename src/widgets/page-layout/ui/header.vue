<script setup lang="ts">
import {
  ChevronDownIcon,
  UserIcon,
  HeartIcon,
  TextSearchIcon,
  ShoppingCartIcon,
  MoveRightIcon,
  SearchIcon,
  KanbanIcon,
  MenuIcon,
  MessageCircleIcon
} from "lucide-vue-next"
import { Button } from "~/shared/ui/button"
import { cn } from "~/shared/lib/utils"

import { ref, onMounted, onUnmounted, type HTMLAttributes } from "vue"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 64
}

onMounted(() => window.addEventListener("scroll", handleScroll))

onUnmounted(() => window.removeEventListener("scroll", handleScroll))
</script>

<template>
  <header :class="cn('sticky top-0 z-20 w-full', props.class)">
    <div
      data-part="main"
      :data-scrolled="isScrolled"
      class="'sticky top-0 mx-auto h-13 w-full bg-background transition duration-300"
    >
      <div
        class="mx-auto grid size-full max-w-11xl grid-cols-3 gap-8 px-4 lg:px-10 2xl:px-20"
      >
        <div class="-ml-2 flex items-center">
          <Button variant="ghost" class="gap-2 text-base font-normal lg:gap-3">
            <MenuIcon class="size-5" />
            Меню
          </Button>
        </div>

        <NuxtLink
          :to="{ name: 'index' }"
          class="self-center justify-self-center text-2xl font-semibold tracking-tight select-none"
        >
          VERESK
        </NuxtLink>

        <div class="flex items-center justify-self-end lg:gap-2">
          <Button size="icon" variant="ghost" class="hidden md:inline-flex">
            <SearchIcon class="size-6" />
          </Button>
          <Button size="icon" variant="ghost">
            <UserIcon class="size-6" />
          </Button>
          <Button size="icon" variant="ghost" class="hidden md:inline-flex">
            <HeartIcon class="size-6" />
          </Button>
          <Button size="icon" variant="ghost">
            <ShoppingCartIcon class="size-6" />
          </Button>
        </div>
      </div>
    </div>
  </header>
</template>
