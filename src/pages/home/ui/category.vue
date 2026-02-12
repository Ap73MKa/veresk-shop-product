<script setup lang="ts">
import CategoryItem from "./category-item.vue"
import { useCategory } from "../api/use-category"
import { Carousel, CarouselContent, CarouselItem } from "~/shared/ui/carousel"
import { Skeleton } from "~/shared/ui/skeleton"

const props = defineProps<{ slug: string }>()

const { data: category, isLoading } = useCategory(props.slug)
</script>

<template>
  <div class="my-16 flex flex-col">
    <header class="mb-6 flex items-center gap-4 px-4 lg:px-10 2xl:px-20">
      <Skeleton v-if="isLoading || !category?.name" class="h-7 w-52" />
      <h2 v-else class="text-xl">{{ category?.name }}</h2>
    </header>

    <Carousel
      class="relative w-full px-4 lg:px-10 2xl:px-20"
      orientation="horizontal"
    >
      <CarouselContent class="-ml-10">
        <CarouselItem
          v-if="isLoading || !category?.products"
          v-for="_ in 5"
          class="h-52 basis-full pl-10 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5"
        >
          <Skeleton class="size-full" />
        </CarouselItem>
        <CarouselItem
          v-else
          v-for="product in category.products.edges"
          class="basis-full pl-10 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5"
        >
          <CategoryItem :key="product.node.id" :product="product.node" />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  </div>
</template>
