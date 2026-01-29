<script setup lang="ts">
import { useThrottleFn, watchOnce } from "@vueuse/core"
import { ref, type HTMLAttributes } from "vue"
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem
} from "~/shared/ui/carousel"
import { cn } from "~/shared/lib/utils"

const props = defineProps<{
  images: { src: string; alt?: string }[]
  class?: HTMLAttributes["class"]
}>()

const emit = defineEmits<{
  (e: "change", index: number): void
}>()

const carouselApi = ref<CarouselApi>()
const currentIndex = ref(0)
const containerRect = ref<DOMRect | null>(null)
const slidesInView = ref<number[]>([])

const setContainerRect = (e: Event) => {
  containerRect.value = (e.currentTarget as HTMLElement).getBoundingClientRect()
}

const setApi = (val: CarouselApi) => {
  carouselApi.value = val
}

const resetCarousel = () => {
  const carousel = carouselApi.value
  if (!carousel || window.innerWidth < 1024) return

  currentIndex.value = 0
  carousel.scrollTo(0, true)
}

const handleMouseMove = (e: MouseEvent) => {
  const rect = containerRect.value
  const carousel = carouselApi.value

  if (!carousel || !rect || window.innerWidth < 1024) return

  const x = e.clientX - rect.left
  const width = rect.width
  const index = Math.floor((x / width) * props.images.length)

  if (index === currentIndex.value) return

  currentIndex.value = index
  carousel.scrollTo(index, true)
}

const handleMouseMoveThrottled = useThrottleFn(handleMouseMove, 100)

const updateSlidesInView = (api: CarouselApi) => {
  if (!api) return
  const inView = api.slidesInView?.() || [currentIndex.value]
  slidesInView.value = Array.from(new Set([...slidesInView.value, ...inView]))
}

watchOnce(carouselApi, (api) => {
  if (!api) return

  currentIndex.value = api.selectedScrollSnap()

  api.on("select", () => {
    currentIndex.value = api.selectedScrollSnap()
  })

  api.on("slidesInView", () => {
    updateSlidesInView(api)
  })
})

watch(currentIndex, (value) => {
  emit("change", value)
})
</script>

<template>
  <Carousel
    :class="
      cn(
        'relative size-full cursor-grab lg:cursor-pointer [&>div]:h-full',
        props.class
      )
    "
    :opts="{ breakpoints: { '(min-width: 64rem)': { watchDrag: false } } }"
    @mousemove="handleMouseMoveThrottled"
    @mouseleave="resetCarousel"
    @mouseenter="setContainerRect"
    @init-api="setApi"
  >
    <CarouselContent class="ml-0 size-full">
      <CarouselItem
        v-for="(img, i) in props.images"
        :key="img.src"
        class="size-full pl-0"
      >
        <slot name="image" :image="img" :inView="slidesInView.includes(i)" />
      </CarouselItem>
    </CarouselContent>
  </Carousel>
</template>
