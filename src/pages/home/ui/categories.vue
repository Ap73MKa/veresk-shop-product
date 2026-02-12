<script setup lang="ts">
import { useCategories } from "../api/use-categories"
import { Skeleton } from "~/shared/ui/skeleton"

const { data: categories, isLoading } = useCategories()
</script>

<template>
  <div class="my-10 flex w-full flex-col gap-8 px-4 lg:px-10 2xl:px-20">
    <Carousel class="w-full" :opts="{ align: 'start' }">
      <header class="mb-6 flex items-center justify-between gap-2">
        <h2 class="text-xl">Откройте для себя нашу коллекцию</h2>
        <div class="flex gap-2">
          <CarouselPrevious class="static translate-none" />
          <CarouselNext class="static translate-none" />
        </div>
      </header>

      <CarouselContent>
        <CarouselItem
          v-if="isLoading || !categories"
          v-for="_ in 8"
          class="basis-3xs lg:basis-2xs"
        >
          <Skeleton class="aspect-3/4" />
        </CarouselItem>
        <CarouselItem
          v-else
          v-for="category in categories.edges"
          class="w-full basis-3xs space-y-2 lg:basis-2xs"
        >
          <NuxtLink
            :to="{
              name: 'category-slug',
              params: { slug: category.node.slug }
            }"
            class="block aspect-3/4 w-full"
          >
            <img
              v-if="category.node.media?.__typename === 'Image'"
              :src="category.node.media.src"
              :alt="category.node.media.alt ?? category.node.name"
              class="size-full bg-secondary object-cover"
            />
            <Skeleton v-else class="size-full" />
          </NuxtLink>

          <NuxtLink
            :to="{
              name: 'category-slug',
              params: { slug: category.node.slug }
            }"
            class="text-sm"
          >
            {{ category.node.name }}
          </NuxtLink>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  </div>
</template>
